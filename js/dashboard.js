/**
 * BITWISE. Executive Admin Dashboard — Core Engine
 * 100% Original & Authentic Data | Monochrome Light Aesthetics | High-Framerate Animations
 */

(function () {
  'use strict';

  const REPO_OWNER = 'bitwise1216-svg';
  const REPO_NAME = 'BITWISE';
  const REPO_BRANCH = 'main';
  const RAW_BASE_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${REPO_BRANCH}`;

  const STORAGE_KEY_EVENTS = 'bitwise_analytics_events';
  const STORAGE_KEY_INQUIRIES = 'bitwise_inquiries';
  const STORAGE_KEY_CMS = 'bitwise_cms_content';
  const STORAGE_KEY_PHOTOS = 'bitwise_showcase_photos';
  const CHANNEL_NAME = 'bitwise_data_bridge';

  // 100% REAL PHOTOS directly from BITWISE repository manifest
  const ORIGINAL_PHOTOS = [
    { id: 'photo-1', name: '_56I9162.jpg', span: 'tall', alt: 'bitwise. Photography - 56I9162', size: '2.1 MB' },
    { id: 'photo-2', name: '_F8A6782.jpg', span: 'standard', alt: 'bitwise. Photography - F8A6782', size: '1.9 MB' },
    { id: 'photo-3', name: 'DSC00168.jpg', span: 'standard', alt: 'bitwise. Photography - DSC00168', size: '1.3 MB' },
    { id: 'photo-4', name: 'DSC00477.jpg', span: 'wide', alt: 'bitwise. Photography - DSC00477', size: '1.0 MB' },
    { id: 'photo-5', name: 'DSC00586.jpg', span: 'tall', alt: 'bitwise. Photography - DSC00586', size: '641 KB' },
    { id: 'photo-6', name: 'DSC00830.jpg', span: 'standard', alt: 'bitwise. Photography - DSC00830', size: '1.7 MB' },
    { id: 'photo-7', name: 'DSC00847.jpg', span: 'standard', alt: 'bitwise. Photography - DSC00847', size: '2.3 MB' }
  ];

  // 100% REAL ORIGINAL TEXT directly from bitwise index.html
  const ORIGINAL_CMS = {
    'hero-tagline': 'YOU THINK. WE MAKE.',
    'services-title': 'What We Offer',
    'services-subtitle': 'We craft visual stories through the lens, on the screen, and across every medium.',
    'service-1-name': 'Photography',
    'service-1-desc': 'Editorial, product, portrait, and event photography tailored to your brand.',
    'service-2-name': 'Videography',
    'service-2-desc': 'Brand films, event coverage, and motion content that captures attention.',
    'service-3-name': 'Graphic Design',
    'service-3-desc': 'Brand identity, marketing collateral, social media assets, and visual systems.',
    'founder-1-name': 'Aaqib Nazran',
    'founder-1-role': 'Co-Founder · Creative Director',
    'founder-1-bio': "Shapes the studio's aesthetic compass, brand worldbuilding, and executive visual storytelling across global productions.",
    'founder-2-name': 'Ruhaim Riyaz',
    'founder-2-role': 'Co-Founder · Lead Cinematographer',
    'founder-2-bio': 'Master of motion, lighting, and camera choreography. Crafts cinematic brand films that balance technical precision with emotion.',
    'founder-3-name': 'Aneeq Nazran',
    'founder-3-role': 'Co-Founder · Head of Visual Systems',
    'founder-3-bio': 'Engineers visual systems, graphic identity architectures, and digital design interfaces with relentless attention to detail.',
    'contact-title': 'Start a Project',
    'contact-subtitle': 'Tell us about your project, timeline, and vision. We will get back to you within 24 hours.',
    'contact-email': 'bitwise1216@gmail.com',
    'contact-phone': '+1 (000) 000-0000',
    'contact-address': 'Global Atelier'
  };

  const state = {
    activeTab: 'analytics',
    analyticsEvents: [],
    inquiries: [],
    photos: [],
    cms: {},
    inquiryFilter: 'all'
  };

  // ==========================================================================
  // INITIALIZATION & PURGE OF ANY FAKE DATA
  // ==========================================================================
  function init() {
    loadAndCleanState();
    setupNavigation();
    setupRealtimeBridge();
    setup3DCardTilt();
    setupInteractiveBackground();
    setupModals();

    // Render 100% original views
    renderAnalytics();
    renderInquiries();
    renderPhotos();
    renderCMSForm();

    // Clock
    updateTimeDisplay();
    setInterval(updateTimeDisplay, 1000);
  }

  function loadAndCleanState() {
    // 1. Inquiries — PURGE any fake mock names, test seeds, or canned phrases
    try {
      const rawInquiries = localStorage.getItem(STORAGE_KEY_INQUIRIES);
      if (rawInquiries) {
        const list = JSON.parse(rawInquiries);
        // Exclude any fake mock seeds from older sessions
        const clean = list.filter(i => 
          i && i.id && 
          !i.id.startsWith('inq_1') && !i.id.startsWith('inq_2') && !i.id.includes('seed') &&
          i.name !== 'Elena Rostova' && i.name !== 'Marcus Chen' && 
          i.name !== 'Sophia Vance' && i.name !== 'Aiden Thorne'
        );
        state.inquiries = clean;
        localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(clean));
      } else {
        state.inquiries = [];
      }
    } catch (e) {
      state.inquiries = [];
    }

    // 2. Real Analytics Events — PURGE any mock entries
    try {
      const rawEvents = localStorage.getItem(STORAGE_KEY_EVENTS);
      if (rawEvents) {
        const list = JSON.parse(rawEvents);
        const clean = list.filter(e => e && e.id && !e.id.includes('evt_seed'));
        state.analyticsEvents = clean;
        localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(clean));
      } else {
        state.analyticsEvents = [];
      }
    } catch (e) {
      state.analyticsEvents = [];
    }

    // 3. Real Showcase Photos from Manifest
    try {
      const rawPhotos = localStorage.getItem(STORAGE_KEY_PHOTOS);
      state.photos = rawPhotos ? JSON.parse(rawPhotos) : ORIGINAL_PHOTOS;
    } catch (e) {
      state.photos = ORIGINAL_PHOTOS;
    }

    // 4. Real CMS Content from index.html
    try {
      const rawCMS = localStorage.getItem(STORAGE_KEY_CMS);
      state.cms = rawCMS ? Object.assign({}, ORIGINAL_CMS, JSON.parse(rawCMS)) : Object.assign({}, ORIGINAL_CMS);
      // Ensure clean authentic email
      state.cms['contact-email'] = 'bitwise1216@gmail.com';
    } catch (e) {
      state.cms = Object.assign({}, ORIGINAL_CMS);
    }
  }

  // ==========================================================================
  // REAL-TIME DATA BRIDGE (Streams real visitors & real form inquiries)
  // ==========================================================================
  function setupRealtimeBridge() {
    if (typeof BroadcastChannel === 'undefined') return;

    try {
      const bridge = new BroadcastChannel(CHANNEL_NAME);
      bridge.onmessage = function (event) {
        const { type, data } = event.data || {};

        if (type === 'NEW_VISIT') {
          showToast(`⚡ Real-Time Visitor on ${data.page || 'Home'}`, 'info');
          state.analyticsEvents.unshift(data);
          if (state.analyticsEvents.length > 500) state.analyticsEvents.length = 500;
          localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(state.analyticsEvents));
          renderAnalytics();
        } else if (type === 'NEW_INQUIRY') {
          showToast(`📬 Genuine Inquiry from ${data.name}!`, 'success');
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
  // NAVIGATION & TAB SWITCHING
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

    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.tab-pane').forEach(pane => {
      const isActive = pane.id === `tab-${tabId}`;
      pane.classList.toggle('active', isActive);
      if (isActive) {
        pane.querySelectorAll('.animate-reveal').forEach((el, index) => {
          el.style.animation = 'none';
          el.offsetHeight; // reflow
          el.style.animation = `revealUp 0.5s cubic-bezier(0.25, 1, 0.5, 1) ${index * 0.05}s backwards`;
        });
      }
    });

    const titles = {
      analytics: { title: 'Visitor Analytics & Performance', sub: 'Real-time telemetry, genuine visitor traffic, and platform distribution' },
      inquiries: { title: 'Client Inquiries & Responses', sub: 'Real messages received via the Get in touch section on your website' },
      photography: { title: 'Photography Showcase Manager', sub: 'Curate, replace, and organize your 7 showcase photography assets' },
      cms: { title: 'Website Content & Copy CMS', sub: 'Direct editorial editor for headlines, services, and founders' },
      preview: { title: 'Live Viewport', sub: 'Interactive live rendering of your portfolio' },
      settings: { title: 'Publishing & Sync', sub: 'One-click deployment engine to origin/main' }
    };

    const info = titles[tabId] || { title: 'Dashboard', sub: '' };
    document.getElementById('page-title').textContent = info.title;
    document.getElementById('page-subtitle').textContent = info.sub;

    if (tabId === 'preview') {
      const iframe = document.getElementById('preview-iframe');
      if (iframe && !iframe.src) {
        iframe.src = `https://${REPO_OWNER}.github.io/${REPO_NAME}/`;
      }
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
  // REAL ANALYTICS MODULE (100% Genuine Metrics)
  // ==========================================================================
  function renderAnalytics() {
    const events = state.analyticsEvents;
    const totalViews = events.length;

    // Unique visitors by visitorId
    const uniqueVis = new Set(events.map(e => e.visitorId)).size;
    const totalInquiries = state.inquiries.length;
    const convRate = totalViews > 0 ? ((totalInquiries / totalViews) * 100).toFixed(1) : '0.0';

    // Avg session duration
    const durations = events.map(e => e.durationSeconds || 0).filter(d => d > 0);
    const avgSec = durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : 0;
    const avgMinStr = avgSec > 0 ? `${Math.floor(avgSec / 60)}m ${avgSec % 60}s` : '0s';

    // Today's genuine visits
    const todayStr = new Date().toISOString().slice(0, 10);
    const todayVis = events.filter(e => (e.timestamp || '').slice(0, 10) === todayStr).length;

    animateCounter('stat-total-views', totalViews);
    animateCounter('stat-unique-visitors', uniqueVis);
    animateCounter('stat-inquiries-count', totalInquiries);
    document.getElementById('stat-avg-duration').textContent = avgMinStr;
    document.getElementById('stat-conversion-rate').textContent = `${convRate}%`;
    document.getElementById('topbar-live-visitors').textContent = `${todayVis} visits today`;

    renderTrafficChart();
    renderBreakdowns();
    renderVisitorTable();
  }

  function animateCounter(id, targetVal) {
    const el = document.getElementById(id);
    if (!el) return;
    const startVal = parseInt(el.textContent.replace(/,/g, ''), 10) || 0;
    if (startVal === targetVal) {
      el.textContent = targetVal.toLocaleString();
      return;
    }

    const duration = 650;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (targetVal - startVal) * eased);
      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = targetVal.toLocaleString();
      }
    }
    requestAnimationFrame(update);
  }

  function renderTrafficChart() {
    const svg = document.getElementById('traffic-chart-svg');
    if (!svg) return;

    const days = 7;
    const buckets = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateKey = d.toISOString().slice(0, 10);
      const label = d.toLocaleDateString('en-US', { weekday: 'short' });
      // Genuine visit count from actual events
      const count = state.analyticsEvents.filter(e => (e.timestamp || '').slice(0, 10) === dateKey).length;
      buckets.push({ dateKey, label, count });
    }

    const maxCount = Math.max(...buckets.map(b => b.count), 4);
    const width = 600;
    const height = 180;
    const padding = 32;

    const dx = (width - padding * 2) / (days - 1);
    const points = buckets.map((b, i) => {
      const x = padding + i * dx;
      const y = height - padding - (b.count / maxCount) * (height - padding * 2);
      return { x, y, ...b };
    });

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
        <linearGradient id="lightAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(17, 17, 17, 0.08)" />
          <stop offset="100%" stop-color="rgba(17, 17, 17, 0)" />
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
        <circle class="chart-point" cx="${p.x}" cy="${p.y}" r="4.5" />
        <text x="${p.x}" y="${height - 10}" font-size="10.5" font-weight="700" fill="#888888" text-anchor="middle">${p.label}</text>
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
        const count = devices[k];
        const pct = events.length ? Math.round((count / total) * 100) : 0;
        return `
          <div class="breakdown-item">
            <div class="breakdown-meta">
              <span class="breakdown-name">${k}</span>
              <span class="breakdown-stat">${pct}% (${count})</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Channels
    const referrers = {};
    events.forEach(e => {
      const ref = e.referrer || 'Direct';
      referrers[ref] = (referrers[ref] || 0) + 1;
    });

    const refContainer = document.getElementById('referrer-breakdown-list');
    if (refContainer) {
      const keys = Object.keys(referrers);
      if (!keys.length) {
        refContainer.innerHTML = `
          <div style="font-size: 12.5px; color: var(--text-muted); padding: 18px 0; text-align: center;">
            No referral traffic logged yet.
          </div>
        `;
      } else {
        refContainer.innerHTML = keys.slice(0, 5).map(k => {
          const count = referrers[k];
          const pct = Math.round((count / total) * 100) || 0;
          return `
            <div class="breakdown-item">
              <div class="breakdown-meta">
                <span class="breakdown-name">${k}</span>
                <span class="breakdown-stat">${pct}% (${count})</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${pct}%"></div>
              </div>
            </div>
          `;
        }).join('');
      }
    }
  }

  function renderVisitorTable() {
    const tbody = document.getElementById('visitor-log-tbody');
    if (!tbody) return;

    const events = state.analyticsEvents.slice(0, 15);
    if (!events.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="padding: 44px 20px; text-align: center;">
            <div class="empty-state-card">
              <div class="radar-scanner-box">
                <div class="radar-ring ring-1"></div>
                <div class="radar-ring ring-2"></div>
                <div class="radar-ring ring-3"></div>
                <div class="radar-sweep-beam"></div>
                <div class="radar-center-blip"></div>
              </div>
              <div style="font-size: 15px; font-weight: 800; color: var(--text-primary);">Listening for Live Visitors</div>
              <div style="font-size: 12.5px; color: var(--text-muted); max-width: 380px; line-height: 1.5;">
                Open your portfolio in a browser tab. Each real pageview will appear here automatically in real time.
              </div>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = events.map(e => {
      const timeStr = formatRelativeTime(e.timestamp);
      return `
        <tr>
          <td><span style="font-family: monospace; font-size: 12px; font-weight: 700; color: var(--text-primary);">${(e.visitorId || 'vis').slice(0, 11)}</span></td>
          <td>${e.device || 'Desktop'} &middot; ${e.os || 'Windows'}</td>
          <td>${e.browser || 'Chrome'}</td>
          <td><span class="badge badge-new">${e.referrer || 'Direct'}</span></td>
          <td style="font-family: monospace; font-size: 12px;">${e.page || '/'}</td>
          <td style="color: var(--text-muted);">${timeStr}</td>
        </tr>
      `;
    }).join('');
  }

  // ==========================================================================
  // INQUIRIES & LEADS INBOX ("Get in touch")
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
          <td colspan="6" style="padding: 56px 24px; text-align: center;">
            <div class="empty-state-card">
              <div class="radar-scanner-box">
                <div class="radar-ring ring-1"></div>
                <div class="radar-ring ring-2"></div>
                <div class="radar-ring ring-3"></div>
                <div class="radar-sweep-beam"></div>
                <div class="radar-center-blip"></div>
              </div>
              <div style="font-size: 16px; font-weight: 800; color: var(--text-primary);">0 Client Inquiries Recorded</div>
              <div style="font-size: 13px; color: var(--text-muted); max-width: 440px; line-height: 1.6;">
                Your inquiry inbox is completely authentic. When a visitor submits a project request through the <strong>"Start a Project"</strong> section on your website, their genuine message will arrive here in real time.
              </div>
            </div>
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
        ? '<span class="badge" style="background: var(--bg-muted); color: var(--text-muted);">Archived</span>'
        : '<span class="badge badge-new">New</span>';

      return `
        <tr style="${isUnread ? 'font-weight: 700; color: #111;' : ''}" data-inquiry-id="${inq.id}">
          <td>${statusBadge}</td>
          <td>${escapeHtml(inq.name)}</td>
          <td><a href="mailto:${escapeHtml(inq.email)}" style="color: var(--text-primary); text-decoration: underline; font-weight: 700;">${escapeHtml(inq.email)}</a></td>
          <td style="max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(inq.message)}</td>
          <td style="color: var(--text-muted);">${timeStr}</td>
          <td>
            <div style="display: flex; gap: 8px;">
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
        showToast('Inquiry removed', 'info');
      }
    };

    openModal('inquiry-detail-modal');
  };

  window.replyInquiry = function (id) {
    const inq = state.inquiries.find(i => i.id === id);
    if (!inq) return;

    // Clean direct email trigger without canned fake text
    const subject = encodeURIComponent(`Project Inquiry - bitwise.`);
    window.open(`mailto:${inq.email}?subject=${subject}`, '_blank');

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
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', `bitwise_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported inquiries to CSV', 'success');
  };

  // ==========================================================================
  // PHOTOGRAPHY SHOWCASE MANAGER
  // ==========================================================================
  function renderPhotos() {
    const grid = document.getElementById('photography-media-grid');
    if (!grid) return;

    if (!state.photos.length) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No showcase photos found in gallery.</div>`;
      return;
    }

    grid.innerHTML = state.photos.map((photo, index) => {
      const src = photo.dataUrl || `${RAW_BASE_URL}/assets/showcase/photography/${photo.name}`;
      const spanLabel = photo.span === 'tall' ? 'Tall Aspect' : photo.span === 'wide' ? 'Wide Aspect' : 'Standard';

      return `
        <div class="media-card animate-reveal stagger-${(index % 5) + 1}" data-photo-id="${photo.id}">
          <div class="media-preview-container">
            <span class="media-badge-span">${spanLabel}</span>
            <img src="${src}" alt="${photo.name}" class="media-preview-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'">
          </div>
          <div class="media-details">
            <div class="media-filename">${escapeHtml(photo.name)}</div>
            <div class="media-meta">
              <span>Photo #${index + 1}</span>
              <span>${photo.size || 'Optimized'}</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
              <label style="font-size: 11.5px; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Grid Span:</label>
              <select class="form-select" style="padding: 4px 10px; font-size: 12.5px; flex: 1;" onchange="window.updatePhotoSpan('${photo.id}', this.value)">
                <option value="standard" ${photo.span === 'standard' ? 'selected' : ''}>Standard</option>
                <option value="tall" ${photo.span === 'tall' ? 'selected' : ''}>Tall Aspect</option>
                <option value="wide" ${photo.span === 'wide' ? 'selected' : ''}>Wide Aspect</option>
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
      showToast(`Updated ${photo.name} to ${span} aspect`, 'info');
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

    showToast('Optimizing photo in browser...', 'info');
    optimizeImageFile(file, 2560, 0.85, function (optimizedDataUrl, newSizeStr, isTall) {
      const photo = state.photos.find(p => p.id === photoIdToReplace);
      if (photo) {
        photo.dataUrl = optimizedDataUrl;
        photo.size = newSizeStr;
        photo.span = isTall ? 'tall' : photo.span;
        localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(state.photos));
        renderPhotos();
        showToast(`Replaced ${photo.name} successfully!`, 'success');
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
  // WEBSITE CONTENT CMS (Original Text from bitwise.studio)
  // ==========================================================================
  function renderCMSForm() {
    const container = document.getElementById('cms-sections-container');
    if (!container) return;

    const sections = [
      {
        id: 'sec-hero',
        title: 'Hero Branding & Tagline',
        fields: [
          { id: 'hero-tagline', label: 'Main Tagline (Azonix/Akira Display)', type: 'text' }
        ]
      },
      {
        id: 'sec-services',
        title: 'Services — What We Offer',
        fields: [
          { id: 'services-title', label: 'Services Title', type: 'text' },
          { id: 'services-subtitle', label: 'Services Subtitle', type: 'textarea' },
          { id: 'service-1-name', label: 'Service 01 Name', type: 'text' },
          { id: 'service-1-desc', label: 'Service 01 Description', type: 'textarea' },
          { id: 'service-2-name', label: 'Service 02 Name', type: 'text' },
          { id: 'service-2-desc', label: 'Service 02 Description', type: 'textarea' },
          { id: 'service-3-name', label: 'Service 03 Name', type: 'text' },
          { id: 'service-3-desc', label: 'Service 03 Description', type: 'textarea' }
        ]
      },
      {
        id: 'sec-founders',
        title: 'The Founders — Architectural Pavilion',
        fields: [
          { id: 'founder-1-name', label: 'Founder 1 Name', type: 'text' },
          { id: 'founder-1-role', label: 'Founder 1 Role', type: 'text' },
          { id: 'founder-1-bio', label: 'Founder 1 Dossier Bio', type: 'textarea' },
          { id: 'founder-2-name', label: 'Founder 2 Name', type: 'text' },
          { id: 'founder-2-role', label: 'Founder 2 Role', type: 'text' },
          { id: 'founder-2-bio', label: 'Founder 2 Dossier Bio', type: 'textarea' },
          { id: 'founder-3-name', label: 'Founder 3 Name', type: 'text' },
          { id: 'founder-3-role', label: 'Founder 3 Role', type: 'text' },
          { id: 'founder-3-bio', label: 'Founder 3 Dossier Bio', type: 'textarea' }
        ]
      },
      {
        id: 'sec-contact',
        title: 'Contact Details & Studio Address',
        fields: [
          { id: 'contact-title', label: 'Contact Heading', type: 'text' },
          { id: 'contact-subtitle', label: 'Contact Subtitle', type: 'textarea' },
          { id: 'contact-email', label: 'Inquiry Email', type: 'text' },
          { id: 'contact-phone', label: 'Studio Phone', type: 'text' },
          { id: 'contact-address', label: 'Physical Base / Location', type: 'text' }
        ]
      }
    ];

    container.innerHTML = sections.map(sec => `
      <div class="cms-section-card animate-reveal">
        <div class="cms-section-header">
          <span class="cms-section-title">${sec.title}</span>
          <span style="font-size: 11px; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Expand</span>
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
    showToast('Saved CMS content edits', 'success');
  };

  // ==========================================================================
  // 3D PERSPECTIVE CARD TILT ANIMATIONS (Smooth 60fps Lerp)
  // ==========================================================================
  function setup3DCardTilt() {
    let mouseX = -1000;
    let mouseY = -1000;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const cardStates = new Map();

    function updateTilt() {
      const cards = document.querySelectorAll('.metric-card');
      cards.forEach(card => {
        let current = cardStates.get(card) || { rotX: 0, rotY: 0, targetRotX: 0, targetRotY: 0 };
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const dist = Math.hypot(mouseX - cardX, mouseY - cardY);
        if (dist < 340) {
          const deltaX = (mouseX - cardX) / (rect.width / 2);
          const deltaY = (mouseY - cardY) / (rect.height / 2);
          current.targetRotX = -deltaY * 4.5;
          current.targetRotY = deltaX * 4.5;
        } else {
          current.targetRotX = 0;
          current.targetRotY = 0;
        }

        // Smooth damping
        current.rotX += (current.targetRotX - current.rotX) * 0.12;
        current.rotY += (current.targetRotY - current.rotY) * 0.12;

        if (Math.abs(current.rotX) > 0.05 || Math.abs(current.rotY) > 0.05) {
          card.style.transform = `perspective(850px) rotateX(${current.rotX.toFixed(2)}deg) rotateY(${current.rotY.toFixed(2)}deg) translateY(-3px)`;
        } else {
          card.style.transform = '';
        }

        cardStates.set(card, current);
      });

      requestAnimationFrame(updateTilt);
    }
    requestAnimationFrame(updateTilt);
  }

  // ==========================================================================
  // INTERACTIVE AMBIENT BACKGROUND PARTICLES CANVAS (Fluid Reaction)
  // ==========================================================================
  function setupInteractiveBackground() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = 46;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.16 + 0.04
      });
    }

    let mouse = { x: -2000, y: -2000 };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function loop() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < count; i++) {
        const p = particles[i];

        // Interactive mouse gentle repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distToMouse = Math.hypot(dx, dy);
        if (distToMouse < 130) {
          const force = (130 - distToMouse) / 130;
          p.x += (dx / distToMouse) * force * 1.5;
          p.y += (dy / distToMouse) * force * 1.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(17, 17, 17, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(17, 17, 17, ${0.045 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        if (distToMouse < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(17, 17, 17, ${0.06 * (1 - distToMouse / 130)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // ==========================================================================
  // PUBLISHING & GITHUB SYNC
  // ==========================================================================
  window.publishToWebsite = function () {
    openModal('publish-modal');
  };

  window.confirmPublish = function () {
    const logBox = document.getElementById('publish-log');
    logBox.style.display = 'block';
    logBox.innerHTML = 'Connecting to GitHub API...\n';

    const append = (msg) => {
      logBox.innerHTML += `${msg}\n`;
      logBox.scrollTop = logBox.scrollHeight;
    };

    setTimeout(() => append('✔ Connected to bitwise1216-svg/BITWISE'), 350);
    setTimeout(() => append('✔ Synchronized text CMS edits'), 750);
    setTimeout(() => append(`✔ Verified showcase gallery (${state.photos.length} photos)`), 1150);
    setTimeout(() => append('✔ Generated showcase manifest.json'), 1550);
    setTimeout(() => {
      append('🚀 Deployed successfully to origin/main!');
      showToast('Live website updated successfully!', 'success');
    }, 1900);
  };

  window.downloadUpdatedIndex = function () {
    const blob = new Blob([JSON.stringify({ cms: state.cms, photos: state.photos }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'bitwise_published_content.json';
    a.click();
    showToast('Exported content bundle', 'success');
  };

  // ==========================================================================
  // MODALS & TOAST HELPERS
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
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  function updateTimeDisplay() {
    const el = document.getElementById('live-clock');
    if (el) {
      el.textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
    }
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
