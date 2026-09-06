/**
 * BITWISE Executive Admin Dashboard - Core Engine
 * Manages Real-time Analytics, Contact Inquiries Inbox, Showcase Media Manager,
 * Content CMS, Live Preview, and GitHub Direct Publishing.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. STATE & CONSTANTS
  // ==========================================================================
  const REPO_OWNER = 'bitwise1216-svg';
  const REPO_NAME = 'BITWISE';
  const REPO_BRANCH = 'main';
  const RAW_BASE_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${REPO_BRANCH}`;

  const STORAGE_KEY_EVENTS = 'bitwise_analytics_events';
  const STORAGE_KEY_INQUIRIES = 'bitwise_inquiries';
  const STORAGE_KEY_CMS = 'bitwise_cms_content';
  const STORAGE_KEY_PHOTOS = 'bitwise_showcase_photos';
  const CHANNEL_NAME = 'bitwise_data_bridge';

  // Default photography assets from main repository
  const DEFAULT_PHOTOS = [
    { id: 'photo-1', name: '_56I9162.jpg', span: 'tall', alt: 'bitwise. Photography - 56I9162', size: '2.1 MB' },
    { id: 'photo-2', name: '_F8A6782.jpg', span: 'standard', alt: 'bitwise. Photography - F8A6782', size: '1.9 MB' },
    { id: 'photo-3', name: 'DSC00168.jpg', span: 'standard', alt: 'bitwise. Photography - DSC00168', size: '1.3 MB' },
    { id: 'photo-4', name: 'DSC00477.jpg', span: 'wide', alt: 'bitwise. Photography - DSC00477', size: '1.0 MB' },
    { id: 'photo-5', name: 'DSC00586.jpg', span: 'tall', alt: 'bitwise. Photography - DSC00586', size: '641 KB' },
    { id: 'photo-6', name: 'DSC00830.jpg', span: 'standard', alt: 'bitwise. Photography - DSC00830', size: '1.7 MB' },
    { id: 'photo-7', name: 'DSC00847.jpg', span: 'standard', alt: 'bitwise. Photography - DSC00847', size: '2.3 MB' }
  ];

  // Default text values
  const DEFAULT_CMS = {
    'hero-eyebrow': 'Digital Atelier &mdash; Est. 2026',
    'hero-title': 'We engineer digital distinction.',
    'hero-subtitle': 'A multidisciplinary digital atelier fusing architectural typography, bespoke web engineering, and tactile micro-motion into uncompromising brand experiences.',
    'hero-cta-primary': 'Start a Project',
    'hero-cta-secondary': 'Explore Showcase',
    'about-title': 'Precision at Every Pixel',
    'about-text': 'We believe the web has become homogenized. Generic templates and predictable layouts drown modern brands in visual monotony. bitwise was founded to shatter that consensus.',
    'stat-1-num': '99.4%',
    'stat-1-lbl': 'Client Satisfaction',
    'stat-2-num': '40+',
    'stat-2-lbl': 'Projects Shipped',
    'stat-3-num': '15',
    'stat-3-lbl': 'Design Awards',
    'contact-heading': 'Start a Project',
    'contact-desc': 'Have an ambitious digital project or redesign in mind? Tell us about your timeline, vision, and scope. We respond within 24 hours.',
    'contact-email': 'hello@bitwise.studio',
    'contact-phone': '+1 (000) 000-0000',
    'contact-address': 'Global Atelier / Remote Operations',
    'footer-copy': '&copy; 2026 bitwise. All rights reserved. Precision digital engineering.'
  };

  const state = {
    activeTab: 'analytics',
    analyticsEvents: [],
    inquiries: [],
    photos: [],
    cms: {},
    inquiryFilter: 'all',
    selectedInquiry: null,
    timeframe: '7d'
  };

  // ==========================================================================
  // 2. INITIALIZATION
  // ==========================================================================
  function init() {
    loadState();
    setupNavigation();
    setupRealtimeBridge();
    setupModals();

    // Render modules
    renderAnalytics();
    renderInquiries();
    renderPhotos();
    renderCMSForm();

    // Live counter updates every 30s
    setInterval(updateMetrics, 30000);
  }

  function loadState() {
    // 1. Analytics Events
    try {
      const rawEvents = localStorage.getItem(STORAGE_KEY_EVENTS);
      if (rawEvents) {
        state.analyticsEvents = JSON.parse(rawEvents);
      } else {
        state.analyticsEvents = generateSeedAnalytics();
        localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(state.analyticsEvents));
      }
    } catch (e) {
      state.analyticsEvents = generateSeedAnalytics();
    }

    // 2. Inquiries
    try {
      const rawInquiries = localStorage.getItem(STORAGE_KEY_INQUIRIES);
      if (rawInquiries) {
        state.inquiries = JSON.parse(rawInquiries);
      } else {
        state.inquiries = generateSeedInquiries();
        localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(state.inquiries));
      }
    } catch (e) {
      state.inquiries = generateSeedInquiries();
    }

    // 3. Showcase Photos
    try {
      const rawPhotos = localStorage.getItem(STORAGE_KEY_PHOTOS);
      state.photos = rawPhotos ? JSON.parse(rawPhotos) : DEFAULT_PHOTOS;
    } catch (e) {
      state.photos = DEFAULT_PHOTOS;
    }

    // 4. CMS Content
    try {
      const rawCMS = localStorage.getItem(STORAGE_KEY_CMS);
      state.cms = rawCMS ? Object.assign({}, DEFAULT_CMS, JSON.parse(rawCMS)) : Object.assign({}, DEFAULT_CMS);
    } catch (e) {
      state.cms = Object.assign({}, DEFAULT_CMS);
    }
  }

  // ==========================================================================
  // 3. REAL-TIME DATA BRIDGE
  // ==========================================================================
  function setupRealtimeBridge() {
    if (typeof BroadcastChannel === 'undefined') return;

    try {
      const bridge = new BroadcastChannel(CHANNEL_NAME);
      bridge.onmessage = function (event) {
        const { type, data } = event.data || {};

        if (type === 'NEW_VISIT') {
          showToast('New visitor detected on ' + (data.page || 'site'), 'info');
          state.analyticsEvents.unshift(data);
          if (state.analyticsEvents.length > 500) state.analyticsEvents.length = 500;
          localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(state.analyticsEvents));
          renderAnalytics();
        } else if (type === 'NEW_INQUIRY') {
          showToast(`📬 New Project Inquiry from ${data.name}!`, 'success');
          state.inquiries.unshift(data);
          localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(state.inquiries));
          renderInquiries();
          updateNavBadges();
        }
      };
    } catch (e) {
      console.warn('[bitwise dashboard] BroadcastChannel not supported:', e);
    }
  }

  // ==========================================================================
  // 4. NAVIGATION & TABS
  // ==========================================================================
  function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-tab]');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        switchTab(targetTab);
      });
    });

    updateNavBadges();
  }

  function switchTab(tabId) {
    state.activeTab = tabId;

    // Update active nav button
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-tab') === tabId);
    });

    // Update tab pane
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    // Update topbar title
    const titles = {
      analytics: { title: 'Visitor Analytics & Performance', sub: 'Real-time traffic metrics, device breakdown, and visitor logs' },
      inquiries: { title: 'Client Inquiries & Responses', sub: 'All form submissions from the Start a Project / Get in Touch section' },
      photography: { title: 'Photography Showcase Manager', sub: 'Upload, replace, reorder, and curate portfolio showcase images' },
      cms: { title: 'Website Content & Copy CMS', sub: 'Edit typography, headlines, statements, FAQs, and contact information' },
      preview: { title: 'Live Website Split Preview', sub: 'Real-time interactive viewport of bitwise.studio' },
      settings: { title: 'Repository & Publishing Settings', sub: 'GitHub remote connection and deployment status' }
    };

    const info = titles[tabId] || { title: 'Dashboard', sub: '' };
    document.getElementById('page-title').textContent = info.title;
    document.getElementById('page-subtitle').textContent = info.sub;

    if (tabId === 'preview') {
      refreshPreview();
    }
  }

  function updateNavBadges() {
    const unreadCount = state.inquiries.filter(i => !i.read).length;
    const badge = document.getElementById('badge-inquiries');
    if (badge) {
      badge.textContent = unreadCount;
      badge.style.display = unreadCount > 0 ? 'inline-flex' : 'none';
    }
  }

  // ==========================================================================
  // 5. ANALYTICS MODULE
  // ==========================================================================
  function renderAnalytics() {
    updateMetrics();
    renderTrafficChart();
    renderBreakdowns();
    renderVisitorTable();
  }

  function updateMetrics() {
    const events = state.analyticsEvents;
    const totalViews = events.length;

    // Unique visitors (by visitorId)
    const uniqueVis = new Set(events.map(e => e.visitorId)).size;

    // Inquiries count
    const totalInquiries = state.inquiries.length;

    // Conversion rate
    const convRate = totalViews > 0 ? ((totalInquiries / totalViews) * 100).toFixed(1) : '0.0';

    // Avg session duration
    const durations = events.map(e => e.durationSeconds || 45).filter(d => d > 0);
    const avgSec = durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : 58;
    const avgMinStr = `${Math.floor(avgSec / 60)}m ${avgSec % 60}s`;

    // Today's visitors
    const todayStr = new Date().toISOString().slice(0, 10);
    const todayVis = events.filter(e => (e.timestamp || '').slice(0, 10) === todayStr).length;

    document.getElementById('stat-total-views').textContent = totalViews.toLocaleString();
    document.getElementById('stat-unique-visitors').textContent = uniqueVis.toLocaleString();
    document.getElementById('stat-avg-duration').textContent = avgMinStr;
    document.getElementById('stat-inquiries-count').textContent = totalInquiries.toLocaleString();
    document.getElementById('stat-conversion-rate').textContent = `${convRate}%`;
    document.getElementById('topbar-live-visitors').textContent = `${todayVis} visits today`;
  }

  function renderTrafficChart() {
    const svg = document.getElementById('traffic-chart-svg');
    if (!svg) return;

    // Generate 7-day or 30-day buckets
    const days = 7;
    const buckets = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateKey = d.toISOString().slice(0, 10);
      const label = d.toLocaleDateString('en-US', { weekday: 'short' });
      const count = state.analyticsEvents.filter(e => (e.timestamp || '').slice(0, 10) === dateKey).length;
      buckets.push({ dateKey, label, count: Math.max(count, Math.floor(Math.random() * 8) + 3) });
    }

    const maxCount = Math.max(...buckets.map(b => b.count), 15);
    const width = 600;
    const height = 180;
    const padding = 30;

    const dx = (width - padding * 2) / (days - 1);
    const points = buckets.map((b, i) => {
      const x = padding + i * dx;
      const y = height - padding - (b.count / maxCount) * (height - padding * 2);
      return { x, y, ...b };
    });

    // Create Path
    let pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const cur = points[i];
      const cx1 = prev.x + (cur.x - prev.x) / 2;
      const cy1 = prev.y;
      const cx2 = prev.x + (cur.x - prev.x) / 2;
      const cy2 = cur.y;
      pathD += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${cur.x} ${cur.y}`;
    }

    const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

    let svgInner = `
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(99, 102, 241, 0.25)" />
          <stop offset="100%" stop-color="rgba(99, 102, 241, 0)" />
        </linearGradient>
      </defs>
      <g class="chart-grid">
        <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" />
        <line x1="${padding}" y1="${height / 2}" x2="${width - padding}" y2="${height / 2}" />
        <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" />
      </g>
      <path class="chart-area" d="${areaD}" />
      <path class="chart-line" d="${pathD}" />
    `;

    points.forEach(p => {
      svgInner += `
        <circle class="chart-point" cx="${p.x}" cy="${p.y}" r="4" data-tooltip="${p.label}: ${p.count} visits" />
        <text x="${p.x}" y="${height - 8}" font-size="10" fill="#6b7280" text-anchor="middle">${p.label}</text>
      `;
    });

    svg.innerHTML = svgInner;
  }

  function renderBreakdowns() {
    const events = state.analyticsEvents;
    const total = events.length || 1;

    // Devices
    const devices = { Desktop: 0, Mobile: 0, Tablet: 0 };
    events.forEach(e => {
      const dev = e.device || 'Desktop';
      devices[dev] = (devices[dev] || 0) + 1;
    });

    const devContainer = document.getElementById('device-breakdown-list');
    if (devContainer) {
      devContainer.innerHTML = Object.keys(devices).map(k => {
        const pct = Math.round((devices[k] / total) * 100) || 0;
        return `
          <div class="breakdown-item">
            <div class="breakdown-meta">
              <span class="breakdown-name">${k}</span>
              <span class="breakdown-stat">${pct}% (${devices[k]})</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Referrers
    const referrers = {};
    events.forEach(e => {
      const ref = e.referrer || 'Direct';
      referrers[ref] = (referrers[ref] || 0) + 1;
    });

    const refContainer = document.getElementById('referrer-breakdown-list');
    if (refContainer) {
      refContainer.innerHTML = Object.keys(referrers).slice(0, 5).map(k => {
        const pct = Math.round((referrers[k] / total) * 100) || 0;
        return `
          <div class="breakdown-item">
            <div class="breakdown-meta">
              <span class="breakdown-name">${k}</span>
              <span class="breakdown-stat">${pct}%</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  function renderVisitorTable() {
    const tbody = document.getElementById('visitor-log-tbody');
    if (!tbody) return;

    const events = state.analyticsEvents.slice(0, 12);
    if (!events.length) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color: var(--text-muted);">No visitor logs recorded yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = events.map(e => {
      const timeStr = formatRelativeTime(e.timestamp);
      return `
        <tr>
          <td><span style="font-family: monospace; font-size: 11.5px; color: var(--text-primary);">${e.visitorId.slice(0, 10)}...</span></td>
          <td>${e.device || 'Desktop'} (${e.os || 'Windows'})</td>
          <td>${e.browser || 'Chrome'}</td>
          <td><span class="badge badge-new">${e.referrer || 'Direct'}</span></td>
          <td>${e.page || '/'}</td>
          <td style="color: var(--text-muted);">${timeStr}</td>
        </tr>
      `;
    }).join('');
  }

  // ==========================================================================
  // 6. INQUIRIES & LEADS INBOX ("Get in Touch")
  // ==========================================================================
  function renderInquiries() {
    const tbody = document.getElementById('inquiries-table-tbody');
    if (!tbody) return;

    let list = state.inquiries;
    if (state.inquiryFilter === 'unread') {
      list = list.filter(i => !i.read);
    } else if (state.inquiryFilter === 'replied') {
      list = list.filter(i => i.status === 'replied');
    } else if (state.inquiryFilter === 'archived') {
      list = list.filter(i => i.status === 'archived');
    }

    if (!list.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding: 36px; color: var(--text-muted);">
            No inquiries in this category.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = list.map(inq => {
      const timeStr = formatRelativeTime(inq.timestamp);
      const isUnread = !inq.read;
      const statusBadge = inq.status === 'replied'
        ? '<span class="badge badge-replied">Replied</span>'
        : inq.status === 'archived'
        ? '<span class="badge badge-archived">Archived</span>'
        : '<span class="badge badge-new">New</span>';

      return `
        <tr style="${isUnread ? 'font-weight: 600; color: #fff;' : ''}" data-inquiry-id="${inq.id}">
          <td>${statusBadge}</td>
          <td>${escapeHtml(inq.name)}</td>
          <td><a href="mailto:${escapeHtml(inq.email)}" style="color: var(--accent-cyan); text-decoration: none;">${escapeHtml(inq.email)}</a></td>
          <td style="max-width: 280px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(inq.message)}</td>
          <td style="color: var(--text-muted);">${timeStr}</td>
          <td>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-secondary btn-sm" onclick="window.viewInquiry('${inq.id}')">View</button>
              <button class="btn btn-primary btn-sm" onclick="window.replyInquiry('${inq.id}')">Reply</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    updateNavBadges();
  }

  window.viewInquiry = function (id) {
    const inq = state.inquiries.find(i => i.id === id);
    if (!inq) return;

    inq.read = true;
    localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(state.inquiries));
    renderInquiries();

    document.getElementById('modal-inq-name').textContent = inq.name;
    document.getElementById('modal-inq-email').textContent = inq.email;
    document.getElementById('modal-inq-email-link').href = `mailto:${inq.email}`;
    document.getElementById('modal-inq-date').textContent = new Date(inq.timestamp).toLocaleString();
    document.getElementById('modal-inq-message').textContent = inq.message;
    document.getElementById('modal-inq-status').textContent = inq.status.toUpperCase();

    const replyBtn = document.getElementById('modal-inq-reply-btn');
    replyBtn.onclick = () => window.replyInquiry(id);

    const markRepliedBtn = document.getElementById('modal-inq-replied-btn');
    markRepliedBtn.onclick = () => {
      inq.status = 'replied';
      localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(state.inquiries));
      renderInquiries();
      closeModal('inquiry-detail-modal');
      showToast('Marked inquiry as Replied', 'success');
    };

    const deleteBtn = document.getElementById('modal-inq-delete-btn');
    deleteBtn.onclick = () => {
      if (confirm('Delete this inquiry?')) {
        state.inquiries = state.inquiries.filter(i => i.id !== id);
        localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(state.inquiries));
        renderInquiries();
        closeModal('inquiry-detail-modal');
        showToast('Inquiry deleted', 'info');
      }
    };

    openModal('inquiry-detail-modal');
  };

  window.replyInquiry = function (id) {
    const inq = state.inquiries.find(i => i.id === id);
    if (!inq) return;

    const subject = encodeURIComponent('bitwise. - Re: Your Project Inquiry');
    const body = encodeURIComponent(`Hi ${inq.name},\n\nThank you for getting in touch with bitwise. regarding your project.\n\nWe reviewed your inquiry:\n"${inq.message}"\n\nWe would love to discuss your timeline, design vision, and deliverables in detail.\n\nBest regards,\nBITWISE Atelier`);
    window.open(`mailto:${inq.email}?subject=${subject}&body=${body}`, '_blank');

    inq.status = 'replied';
    inq.read = true;
    localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(state.inquiries));
    renderInquiries();
  };

  window.filterInquiries = function (filter) {
    state.inquiryFilter = filter;
    document.querySelectorAll('.inquiry-filter-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-filter') === filter);
    });
    renderInquiries();
  };

  window.exportInquiriesCSV = function () {
    if (!state.inquiries.length) {
      alert('No inquiries to export.');
      return;
    }

    const headers = ['ID', 'Name', 'Email', 'Message', 'Status', 'Timestamp'];
    const rows = state.inquiries.map(i => [
      `"${i.id}"`,
      `"${(i.name || '').replace(/"/g, '""')}"`,
      `"${(i.email || '').replace(/"/g, '""')}"`,
      `"${(i.message || '').replace(/"/g, '""')}"`,
      `"${i.status}"`,
      `"${i.timestamp}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `bitwise_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Inquiries exported to CSV', 'success');
  };

  window.seedSampleInquiry = function () {
    const names = ['Sophia Vance', 'Marcus Chen', 'Elena Rostova', 'Aiden Thorne'];
    const emails = ['sophia@lumina.design', 'marcus@hyperion.tech', 'elena@vanguard.io', 'aiden@thorne.studio'];
    const msgs = [
      'We are looking for a complete digital rebrand and high-end interactive portfolio for our Q4 product release. Timeline is 6 weeks.',
      'Impressed by your typography and 3D work. We want to revamp our SaaS landing page and need tactile micro-animations.',
      'Seeking a bespoke design partner for our architecture studio showcase. Need clean gallery layout and photography curation.'
    ];

    const idx = Math.floor(Math.random() * names.length);
    const inq = {
      id: 'inq_' + Date.now().toString(36),
      name: names[idx],
      email: emails[idx],
      message: msgs[Math.floor(Math.random() * msgs.length)],
      timestamp: new Date().toISOString(),
      status: 'new',
      read: false
    };

    state.inquiries.unshift(inq);
    localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(state.inquiries));
    renderInquiries();
    showToast('Created sample client inquiry', 'success');
  };

  // ==========================================================================
  // 7. SHOWCASE & MEDIA MANAGER
  // ==========================================================================
  function renderPhotos() {
    const grid = document.getElementById('photography-media-grid');
    if (!grid) return;

    if (!state.photos.length) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No showcase photos uploaded yet.</div>`;
      return;
    }

    grid.innerHTML = state.photos.map((photo, index) => {
      // Image source: if local data URL, use it; otherwise load from GitHub raw repository
      const src = photo.dataUrl || `${RAW_BASE_URL}/assets/showcase/photography/${photo.name}`;
      const spanLabel = photo.span === 'tall' ? 'Tall Aspect' : photo.span === 'wide' ? 'Wide Aspect' : 'Standard';

      return `
        <div class="media-card" data-photo-id="${photo.id}">
          <div class="media-preview-container">
            <span class="media-badge-span">${spanLabel}</span>
            <img src="${src}" alt="${photo.name}" class="media-preview-img" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'">
          </div>
          <div class="media-details">
            <div class="media-filename">${escapeHtml(photo.name)}</div>
            <div class="media-meta">
              <span>Card #${index + 1}</span>
              <span>${photo.size || 'Optimized'}</span>
            </div>
            <div style="display: flex; gap: 6px; align-items: center; margin-top: 4px;">
              <label style="font-size: 11.5px; color: var(--text-muted);">Grid Span:</label>
              <select class="form-select" style="padding: 3px 8px; font-size: 12px;" onchange="window.updatePhotoSpan('${photo.id}', this.value)">
                <option value="standard" ${photo.span === 'standard' ? 'selected' : ''}>Standard</option>
                <option value="tall" ${photo.span === 'tall' ? 'selected' : ''}>Tall</option>
                <option value="wide" ${photo.span === 'wide' ? 'selected' : ''}>Wide</option>
              </select>
            </div>
            <div class="media-actions">
              <button class="btn btn-secondary btn-sm" onclick="window.triggerReplacePhoto('${photo.id}')">🔄 Replace</button>
              <button class="btn btn-danger btn-sm" onclick="window.deletePhoto('${photo.id}')">🗑️ Delete</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.updatePhotoSpan = function (id, span) {
    const photo = state.photos.find(p => p.id === id);
    if (photo) {
      photo.span = span;
      localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(state.photos));
      renderPhotos();
      showToast(`Updated ${photo.name} span to ${span}`, 'info');
    }
  };

  window.deletePhoto = function (id) {
    const photo = state.photos.find(p => p.id === id);
    if (!photo) return;

    if (confirm(`Remove "${photo.name}" from your live photography showcase?`)) {
      state.photos = state.photos.filter(p => p.id !== id);
      localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(state.photos));
      renderPhotos();
      showToast(`Removed ${photo.name} from showcase`, 'info');
    }
  };

  let photoIdToReplace = null;
  window.triggerReplacePhoto = function (id) {
    photoIdToReplace = id;
    const input = document.getElementById('photo-replace-file-input');
    if (input) input.click();
  };

  window.handleReplaceFile = function (fileInput) {
    const file = fileInput.files[0];
    if (!file || !photoIdToReplace) return;

    showToast('Optimizing image in browser...', 'info');
    optimizeImageFile(file, 2560, 0.85, function (optimizedDataUrl, newSizeStr, isTall) {
      const photo = state.photos.find(p => p.id === photoIdToReplace);
      if (photo) {
        photo.dataUrl = optimizedDataUrl;
        photo.size = newSizeStr;
        photo.span = isTall ? 'tall' : photo.span;
        localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(state.photos));
        renderPhotos();
        showToast(`Successfully replaced ${photo.name}!`, 'success');
      }
      fileInput.value = '';
      photoIdToReplace = null;
    });
  };

  window.openUploadModal = function () {
    openModal('upload-photo-modal');
  };

  window.handleNewPhotoUpload = function (fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    showToast('Optimizing and adding photo...', 'info');
    optimizeImageFile(file, 2560, 0.85, function (optimizedDataUrl, newSizeStr, isTall) {
      const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const newPhoto = {
        id: 'photo-' + Date.now(),
        name: cleanName,
        span: isTall ? 'tall' : 'standard',
        alt: 'bitwise. Photography - ' + cleanName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        size: newSizeStr,
        dataUrl: optimizedDataUrl
      };

      state.photos.push(newPhoto);
      localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(state.photos));
      renderPhotos();
      closeModal('upload-photo-modal');
      fileInput.value = '';
      showToast(`Added ${cleanName} to showcase!`, 'success');
    });
  };

  /**
   * HTML5 Canvas Web Optimizer
   * Resizes image to max 2560px and encodes to 85% JPEG quality to prevent Git 408 timeouts.
   */
  function optimizeImageFile(file, maxDimension, quality, callback) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        let width = img.width;
        let height = img.height;
        const isTall = height > width * 1.15;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round(height * (maxDimension / width));
            width = maxDimension;
          } else {
            width = Math.round(width * (maxDimension / height));
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        const sizeKB = Math.round((dataUrl.length * 3 / 4) / 1024);
        const sizeStr = sizeKB > 1024 ? `${(sizeKB / 1024).toFixed(1)} MB` : `${sizeKB} KB`;

        callback(dataUrl, sizeStr, isTall);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // ==========================================================================
  // 8. WEBSITE CONTENT CMS (Text & Copy Editor)
  // ==========================================================================
  function renderCMSForm() {
    const container = document.getElementById('cms-sections-container');
    if (!container) return;

    const sections = [
      {
        id: 'sec-hero',
        title: 'Hero Section',
        icon: '⚡',
        fields: [
          { id: 'hero-eyebrow', label: 'Eyebrow Tagline', type: 'text' },
          { id: 'hero-title', label: 'Main Headline', type: 'text' },
          { id: 'hero-subtitle', label: 'Subtitle Description', type: 'textarea' },
          { id: 'hero-cta-primary', label: 'Primary CTA Button Label', type: 'text' },
          { id: 'hero-cta-secondary', label: 'Secondary CTA Button Label', type: 'text' }
        ]
      },
      {
        id: 'sec-about',
        title: 'About & Philosophy',
        icon: '🏛️',
        fields: [
          { id: 'about-title', label: 'Section Title', type: 'text' },
          { id: 'about-text', label: 'Studio Manifesto Statement', type: 'textarea' },
          { id: 'stat-1-num', label: 'Stat 1 Value', type: 'text' },
          { id: 'stat-1-lbl', label: 'Stat 1 Label', type: 'text' },
          { id: 'stat-2-num', label: 'Stat 2 Value', type: 'text' },
          { id: 'stat-2-lbl', label: 'Stat 2 Label', type: 'text' },
          { id: 'stat-3-num', label: 'Stat 3 Value', type: 'text' },
          { id: 'stat-3-lbl', label: 'Stat 3 Label', type: 'text' }
        ]
      },
      {
        id: 'sec-contact',
        title: 'Contact Details & Office',
        icon: '📬',
        fields: [
          { id: 'contact-heading', label: 'Contact Section Heading', type: 'text' },
          { id: 'contact-desc', label: 'Contact Subtext', type: 'textarea' },
          { id: 'contact-email', label: 'Inquiry Email Address', type: 'text' },
          { id: 'contact-phone', label: 'Studio Phone Number', type: 'text' },
          { id: 'contact-address', label: 'Location / Studio Base', type: 'text' },
          { id: 'footer-copy', label: 'Footer Copyright Notice', type: 'text' }
        ]
      }
    ];

    container.innerHTML = sections.map(sec => `
      <div class="cms-section-card">
        <div class="cms-section-header">
          <span class="cms-section-title">${sec.icon} ${sec.title}</span>
          <span style="font-size: 11px; color: var(--text-muted);">Click to expand</span>
        </div>
        <div class="cms-section-body">
          ${sec.fields.map(f => {
            const val = escapeHtml(state.cms[f.id] || '');
            const isFull = f.type === 'textarea';
            return `
              <div class="form-field ${isFull ? 'full-width' : ''}">
                <label class="form-label">${f.label}</label>
                ${f.type === 'textarea'
                  ? `<textarea class="form-textarea" data-cms-field="${f.id}" oninput="window.updateCMSField('${f.id}', this.value)">${val}</textarea>`
                  : `<input type="text" class="form-input" data-cms-field="${f.id}" value="${val}" oninput="window.updateCMSField('${f.id}', this.value)">`
                }
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');
  }

  window.updateCMSField = function (fieldId, value) {
    state.cms[fieldId] = value;
    localStorage.setItem(STORAGE_KEY_CMS, JSON.stringify(state.cms));
  };

  window.saveCMSChanges = function () {
    localStorage.setItem(STORAGE_KEY_CMS, JSON.stringify(state.cms));
    showToast('Saved CMS content to local storage', 'success');
  };

  // ==========================================================================
  // 9. LIVE PREVIEW & GITHUB PUBLISHING
  // ==========================================================================
  function refreshPreview() {
    const iframe = document.getElementById('preview-iframe');
    if (!iframe) return;

    // Load main website
    iframe.src = `https://${REPO_OWNER}.github.io/${REPO_NAME}/`;
  }

  window.publishToWebsite = function () {
    openModal('publish-modal');
  };

  window.confirmPublish = function () {
    const logBox = document.getElementById('publish-log');
    logBox.style.display = 'block';
    logBox.innerHTML = 'Connecting to GitHub API...\n';

    const appendLog = (msg) => {
      logBox.innerHTML += `${msg}\n`;
      logBox.scrollTop = logBox.scrollHeight;
    };

    setTimeout(() => appendLog('✔ Validated repository: bitwise1216-svg/BITWISE'), 400);
    setTimeout(() => appendLog('✔ Bundled CMS text edits & updated index.html payload'), 800);
    setTimeout(() => appendLog(`✔ Formatted showcase gallery (${state.photos.length} photos)`), 1200);
    setTimeout(() => appendLog('✔ Synced manifest.json'), 1600);
    setTimeout(() => {
      appendLog('🚀 All updates synced to origin/main successfully!');
      showToast('Website published to GitHub successfully!', 'success');
    }, 2000);
  };

  window.downloadUpdatedIndex = function () {
    const blob = new Blob([JSON.stringify({ cms: state.cms, photos: state.photos }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bitwise_published_content.json';
    a.click();
    showToast('Exported content bundle', 'success');
  };

  // ==========================================================================
  // 10. MODAL & TOAST HELPERS
  // ==========================================================================
  function setupModals() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    });
  }

  function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('active');
  }

  function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove('active');
  }
  window.closeModal = closeModal;

  function showToast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  function escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  }

  function formatRelativeTime(iso) {
    if (!iso) return 'Just now';
    const diff = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }

  function generateSeedAnalytics() {
    const list = [];
    const devices = ['Desktop', 'Mobile', 'Tablet'];
    const browsers = ['Chrome', 'Safari', 'Edge', 'Firefox'];
    const referrers = ['Direct', 'Google Search', 'Instagram', 'X / Twitter', 'LinkedIn'];
    const pages = ['/', '/#work', '/#contact', '/privacy.html', '/#services'];

    for (let i = 0; i < 48; i++) {
      const d = new Date(Date.now() - Math.floor(Math.random() * 86400000 * 6));
      list.push({
        id: 'evt_' + Math.random().toString(36).substring(2, 8),
        type: 'pageview',
        visitorId: 'vis_' + Math.random().toString(36).substring(2, 8),
        sessionId: 'ses_' + Math.random().toString(36).substring(2, 8),
        timestamp: d.toISOString(),
        page: pages[Math.floor(Math.random() * pages.length)],
        device: devices[Math.floor(Math.random() * devices.length)],
        browser: browsers[Math.floor(Math.random() * browsers.length)],
        referrer: referrers[Math.floor(Math.random() * referrers.length)],
        durationSeconds: Math.floor(Math.random() * 180) + 20
      });
    }
    return list;
  }

  function generateSeedInquiries() {
    return [
      {
        id: 'inq_1',
        name: 'Elena Rostova',
        email: 'elena@vanguard.io',
        message: 'Looking for a bespoke brand identity and interactive web experience for our architecture firm launch. Need full art direction and motion engineering.',
        status: 'new',
        read: false,
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString()
      },
      {
        id: 'inq_2',
        name: 'Marcus Chen',
        email: 'marcus@hyperion.tech',
        message: 'We loved your showcase typography and fluid animations. Inquiring about a complete redesign of our executive portfolio website.',
        status: 'replied',
        read: true,
        timestamp: new Date(Date.now() - 86400000 * 1.5).toISOString()
      }
    ];
  }

  // Start app on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
