/**
 * BITWISE. Executive Admin Dashboard - Core Engine
 * 100% Authentic Telemetry | Zero Emojis | High-Framerate Smooth Animations
 * Full Bi-Directional Website Synchronization Architecture
 * Includes Legal Policies Editor: Privacy Policy, Terms & Conditions, Refund Policy
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
  const STORAGE_KEY_DESIGNS = 'bitwise_showcase_designs';
  const STORAGE_KEY_FOUNDERS = 'bitwise_founder_media';
  const STORAGE_KEY_GA_ID = 'bitwise_google_analytics_id';
  const STORAGE_KEY_EMAIL_CONFIG = 'bitwise_email_config';
  const CHANNEL_NAME = 'bitwise_data_bridge';

  // Authentic Photos from BITWISE repository
  const ORIGINAL_PHOTOS = [
    { id: 'photo-1', name: '_56I9162.jpg', span: 'tall', alt: 'bitwise. Photography - 56I9162', size: '2.1 MB' },
    { id: 'photo-2', name: '_F8A6782.jpg', span: 'standard', alt: 'bitwise. Photography - F8A6782', size: '1.9 MB' },
    { id: 'photo-3', name: 'DSC00168.jpg', span: 'standard', alt: 'bitwise. Photography - DSC00168', size: '1.3 MB' },
    { id: 'photo-4', name: 'DSC00477.jpg', span: 'wide', alt: 'bitwise. Photography - DSC00477', size: '1.0 MB' },
    { id: 'photo-5', name: 'DSC00586.jpg', span: 'tall', alt: 'bitwise. Photography - DSC00586', size: '641 KB' },
    { id: 'photo-6', name: 'DSC00830.jpg', span: 'standard', alt: 'bitwise. Photography - DSC00830', size: '1.7 MB' },
    { id: 'photo-7', name: 'DSC00847.jpg', span: 'standard', alt: 'bitwise. Photography - DSC00847', size: '2.3 MB' }
  ];

  // Authentic Graphic Design showcase items
  const ORIGINAL_DESIGNS = [
    { id: 'design-1', title: 'Brand Architecture', category: 'Visual Identity', client: 'bitwise. Atelier', description: 'Core typographic design system, logo identities, and editorial print collateral.', image: '' },
    { id: 'design-2', title: 'Cinematic Motion Systems', category: 'Motion Design', client: 'Global Production', description: 'Digital screen interfaces, title choreography, and high-framerate dynamic layouts.', image: '' },
    { id: 'design-3', title: 'Architectural Exhibition', category: 'Spatial Design', client: 'Pavilion Series', description: 'Monochrome spatial systems, depth layouts, and digital installation assets.', image: '' }
  ];

  // Complete 100% Comprehensive Website Copy CMS covering every text on the site
  const ORIGINAL_CMS = {
    // Hero & Navigation
    'hero-tagline': 'YOU THINK. WE MAKE.',
    'hero-subtitle': 'Creative studio crafting high-impact photography, videography, and graphic design for forward-thinking brands.',
    'hero-cta-text': 'Start a Project',
    'hero-cta-secondary': 'View Our Work',
    'nav-cta-text': 'Start a Project',
    'mobile-cta-text': 'Start a Project',

    // Services
    'services-title': 'What We Offer',
    'services-subtitle': 'We craft visual stories through the lens, on the screen, and across every medium.',
    'service-1-name': 'Photography',
    'service-1-desc': 'Editorial, product, portrait, and event photography tailored to your brand.',
    'service-2-name': 'Videography',
    'service-2-desc': 'Brand films, event coverage, and motion content that captures attention.',
    'service-3-name': 'Graphic Design',
    'service-3-desc': 'Brand identity, marketing collateral, social media assets, and visual systems.',

    // The Founders Pavilion
    'team-title': 'The Founders',
    'team-subtitle': 'Three visionary creators crafting the next generation of visual experiences.',
    'founder-1-depth': 'AAQIB',
    'founder-1-name': 'Aaqib Nazran',
    'founder-1-role': 'Co-Founder Â· Creative Director',
    'founder-1-bio': "Shapes the studio's aesthetic compass, brand worldbuilding, and executive visual storytelling across global productions.",
    'founder-2-depth': 'RUHAIM',
    'founder-2-name': 'Ruhaim Riyaz',
    'founder-2-role': 'Co-Founder Â· Lead Cinematographer',
    'founder-2-bio': 'Master of motion, lighting, and camera choreography. Crafts cinematic brand films that balance technical precision with emotion.',
    'founder-3-depth': 'ANEEQ',
    'founder-3-name': 'Aneeq Ahmed',
    'founder-3-role': 'Co-Founder Â· Head of Production',
    'founder-3-bio': 'Spearheads high-precision production architecture, executive delivery, and cross-media design execution for studio projects.',

    // Showcases
    'photo-title': 'Photography',
    'photo-subtitle': 'Selected work from our editorial and brand photography projects.',
    'design-title': 'Graphic Design',
    'design-subtitle': 'Brand identities, visual systems, and creative direction.',
    'video-title': 'We also create films.',
    'video-desc': 'From brand films to event coverage, our videography captures the motion and emotion behind your story.',
    'video-cta-text': 'Discuss Your Project',

    // FAQ Items
    'faq-title': 'Frequently Asked Questions',
    'faq-q1': 'What services does bitwise. offer?',
    'faq-a1': 'We specialize in photography, videography, and graphic design. From brand shoots to full visual identities, we cover every creative need for your business or personal project.',
    'faq-q2': 'How long does a typical project take?',
    'faq-a2': 'Timelines vary by scope. A single photo session can be delivered within a week, while full brand identity projects typically run 3 to 6 weeks. We will discuss timelines upfront during our initial consultation.',
    'faq-q3': 'Do you travel for shoots?',
    'faq-a3': 'Yes. We are available for both local and destination shoots. Travel costs will be discussed and agreed upon before the project begins.',
    'faq-q4': 'What is your pricing structure?',
    'faq-a4': 'Pricing depends on the project scope and deliverables. We provide a detailed quote after understanding your requirements during our first conversation. No hidden fees.',
    'faq-q5': 'Can I request revisions?',
    'faq-a5': 'Absolutely. Our packages include a set number of revision rounds. Additional revisions can be arranged at an agreed rate. We want you to be fully satisfied with the final result.',
    'faq-q6': 'How do I get started?',
    'faq-a6': 'Simply fill out our contact form or send us an email. We will schedule a brief call to discuss your project, timeline, and budget. From there, we handle the rest.',

    // Contact & Inquiry Section
    'contact-title': 'Start a Project',
    'contact-subtitle': 'Tell us about your vision. We will get back to you promptly.',
    'contact-heading': 'Get in Touch',
    'contact-desc': 'Whether you need a single session or a full creative campaign, we are ready to listen.',
    'contact-email': 'bitwise1216@gmail.com',
    'contact-phone': '+1 (000) 000-0000',
    'contact-address': 'Global Atelier',
    'response-time': 'We typically respond within 24 hours',
    'contact-card-title': 'Launch an Inquiry',
    'contact-card-desc': 'Tell us about your brand vision, target timeline, and deliverables. Fill out our official project inquiry form and our team will get back to you within 24 hours.',
    'contact-btn-text': 'Start Project Inquiry',

    // Footer
    'footer-tagline': 'YOU THINK. WE MAKE.',
    'footer-desc': 'Creative studio crafting photography, videography, and graphic design for brands and individuals.',
    'footer-copy': 'Â© 2026 bitwise. All rights reserved.',

    // Legal Policies: Privacy Policy (privacy.html)
    'privacy-title': 'Privacy Policy',
    'privacy-updated': 'Last updated: September 2026',
    'privacy-content': `<h2>1. Information We Collect</h2>\n<p>When you contact us through our website, we collect only the information you voluntarily provide:</p>\n<ul>\n  <li>Full name</li>\n  <li>Email address</li>\n  <li>The contents of your message</li>\n</ul>\n<p>We do not collect any additional personal data. We do not use tracking cookies or third-party analytics by default.</p>\n\n<h2>2. How We Use Your Information</h2>\n<p>Your information is used solely to respond to your inquiry, discuss potential projects, and provide requested services.</p>\n<p>We will never sell, rent, or share your personal information with third parties for marketing purposes.</p>\n\n<h2>3. Cookies</h2>\n<p>This website uses only essential cookies required for basic functionality. We do not use advertising cookies or tracking pixels.</p>\n\n<h2>4. Data Storage and Security</h2>\n<p>Contact form submissions are processed and stored securely. We implement reasonable security measures to protect your data against unauthorized access, alteration, or destruction.</p>\n\n<h2>5. Contact</h2>\n<p>If you have any questions about this privacy policy, please contact us at <a href="mailto:bitwise1216@gmail.com">bitwise1216@gmail.com</a>.</p>`,

    // Legal Policies: Terms & Conditions (terms.html)
    'terms-title': 'Terms & Conditions',
    'terms-updated': 'Last updated: September 2026',
    'terms-content': `<h2>1. Agreement to Terms</h2>\n<p>By accessing or using the bitwise. website and engaging our services, you agree to be bound by these Terms and Conditions.</p>\n\n<h2>2. Services</h2>\n<p>bitwise. provides professional photography, videography, and graphic design services. The specific scope, deliverables, timeline, and pricing for each project will be discussed and agreed upon before work begins.</p>\n\n<h2>3. Booking and Payment</h2>\n<ul>\n  <li>A project begins once a written agreement (via email or contract) is confirmed by both parties.</li>\n  <li>Payment terms, including any deposit requirements, will be outlined in the project proposal.</li>\n  <li>Full payment is due according to the agreed schedule.</li>\n</ul>\n\n<h2>4. Intellectual Property</h2>\n<ul>\n  <li>Upon full payment, the client receives a license to use the final deliverables for the agreed purposes.</li>\n  <li>bitwise. retains the right to use completed work in portfolios, marketing, and case studies unless otherwise agreed in writing.</li>\n</ul>\n\n<h2>5. Contact</h2>\n<p>For any questions regarding these Terms and Conditions, please contact us at <a href="mailto:bitwise1216@gmail.com">bitwise1216@gmail.com</a>.</p>`,

    // Legal Policies: Refund Policy (refund.html)
    'refund-title': 'Refund Policy',
    'refund-updated': 'Last updated: September 2026',
    'refund-content': `<h2>1. Overview</h2>\n<p>We value your trust and aim to deliver work that exceeds expectations. This policy outlines the terms under which refunds and cancellations are handled for our photography, videography, and graphic design services.</p>\n\n<h2>2. Deposits</h2>\n<p>Most projects require a deposit to secure your booking. Deposits confirm your commitment and allow us to allocate resources for your project.</p>\n\n<h2>3. Cancellation by Client</h2>\n<ul>\n  <li><strong>Before work begins:</strong> If you cancel before any work has started, your deposit will be refunded in full, minus any administrative fees incurred.</li>\n  <li><strong>After work has begun:</strong> If you cancel after work has started, the deposit is non-refundable. Any additional payments will be refunded proportionally based on the work not yet completed.</li>\n  <li><strong>Completed deliverables:</strong> No refund is available for deliverables that have been completed and delivered to you.</li>\n</ul>\n\n<h2>4. Rescheduling</h2>\n<p>Rescheduling requests made at least 7 days before the scheduled session or deadline will be accommodated at no extra charge, subject to our availability.</p>\n\n<h2>5. Contact</h2>\n<p>To request a refund, cancellation, or discuss any billing inquiries, please contact us at <a href="mailto:bitwise1216@gmail.com">bitwise1216@gmail.com</a>.</p>`
  };

  const state = {
    activeTab: 'analytics',
    analyticsEvents: [],
    inquiries: [],
    photos: [],
    designs: [],
    founders: {},
    cms: {},
    inquiryFilter: 'all',
    activeFounderUpload: null,
    editingDesignId: null,
    currentDesignImage: null
  };

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================
  function init() {
    loadAndCleanState();
    setupNavigation();
    setupRealtimeBridge();
    setup3DCardTilt();
    setupInteractiveBackground();
    setupModals();

    // Render Views
    renderAnalytics();
    renderInquiries();
    renderPhotos();
    renderDesigns();
    renderCMSForm();
    loadSettingsInputs();

    // Live Clock
    updateTimeDisplay();
    setInterval(updateTimeDisplay, 1000);
  }

  function loadAndCleanState() {
    // 1. Inquiries - Authentic Client Leads
    try {
      const rawInquiries = localStorage.getItem(STORAGE_KEY_INQUIRIES);
      if (rawInquiries) {
        const list = JSON.parse(rawInquiries);
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

    // 2. Real Analytics Events
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

    // 3. Photography Showcase
    try {
      const rawPhotos = localStorage.getItem(STORAGE_KEY_PHOTOS);
      const parsed = rawPhotos ? JSON.parse(rawPhotos) : null;
      if (Array.isArray(parsed) && parsed.length > 0) {
        state.photos = parsed;
      } else if (window.BITWISE_SITE_DATA && Array.isArray(window.BITWISE_SITE_DATA.photos) && window.BITWISE_SITE_DATA.photos.length > 0) {
        state.photos = window.BITWISE_SITE_DATA.photos;
      } else {
        state.photos = ORIGINAL_PHOTOS;
      }
    } catch (e) {
      state.photos = (window.BITWISE_SITE_DATA && window.BITWISE_SITE_DATA.photos) || ORIGINAL_PHOTOS;
    }

    // 4. Graphic Design Showcase
    try {
      const rawDesigns = localStorage.getItem(STORAGE_KEY_DESIGNS);
      const parsed = rawDesigns ? JSON.parse(rawDesigns) : null;
      if (Array.isArray(parsed) && parsed.length > 0) {
        state.designs = parsed;
      } else if (window.BITWISE_SITE_DATA && Array.isArray(window.BITWISE_SITE_DATA.designs)) {
        state.designs = window.BITWISE_SITE_DATA.designs;
      } else {
        state.designs = ORIGINAL_DESIGNS;
      }
    } catch (e) {
      state.designs = (window.BITWISE_SITE_DATA && window.BITWISE_SITE_DATA.designs) || ORIGINAL_DESIGNS;
    }

    // 5. Founder Cutouts Media
    try {
      const rawFounders = localStorage.getItem(STORAGE_KEY_FOUNDERS);
      const parsed = rawFounders ? JSON.parse(rawFounders) : null;
      state.founders = Object.assign({}, (window.BITWISE_SITE_DATA && window.BITWISE_SITE_DATA.founders) || {}, parsed || {});
    } catch (e) {
      state.founders = Object.assign({}, (window.BITWISE_SITE_DATA && window.BITWISE_SITE_DATA.founders) || {});
    }

    // 6. Real CMS Content
    try {
      const rawCMS = localStorage.getItem(STORAGE_KEY_CMS);
      const parsed = rawCMS ? JSON.parse(rawCMS) : null;
      const baseCMS = (window.BITWISE_SITE_DATA && window.BITWISE_SITE_DATA.cms) ? window.BITWISE_SITE_DATA.cms : ORIGINAL_CMS;
      state.cms = Object.assign({}, ORIGINAL_CMS, baseCMS, parsed || {});
      state.cms['contact-email'] = 'bitwise1216@gmail.com';
    } catch (e) {
      state.cms = Object.assign({}, ORIGINAL_CMS, (window.BITWISE_SITE_DATA && window.BITWISE_SITE_DATA.cms) || {});
    }
  }

  // ==========================================================================
  // REAL-TIME DATA BRIDGE
  // ==========================================================================
  function setupRealtimeBridge() {
    function handleIncomingData(type, data) {
      if (!data) return;

      if (type === 'NEW_VISIT') {
        if (state.analyticsEvents.some(e => e.id === data.id)) return;
        showToast('Real-Time Visitor on ' + (data.page || 'Home') + ' via ' + (data.device || 'Web'), 'info');
        state.analyticsEvents.unshift(data);
        if (state.analyticsEvents.length > 500) state.analyticsEvents.length = 500;
        localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(state.analyticsEvents));
        renderAnalytics();
      } else if (type === 'NEW_INQUIRY') {
        if (state.inquiries.some(i => i.id === data.id)) return;
        playNotificationChime();
        showInquiryToast(data);
        state.inquiries.unshift(data);
        localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(state.inquiries));
        renderInquiries();
        renderAnalytics();
        updateNavBadges();
      }
    }

    // 1. BroadcastChannel across tabs
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bridge = new BroadcastChannel(CHANNEL_NAME);
        bridge.onmessage = function (event) {
          const { type, data } = event.data || {};
          handleIncomingData(type, data);
        };
      } catch (e) {}
    }

    // 2. Window postMessage for Live Viewport iframe
    window.addEventListener('message', function (event) {
      const { type, data } = event.data || {};
      if (type === 'NEW_INQUIRY' || type === 'NEW_VISIT') {
        handleIncomingData(type, data);
      }
    });

    // 3. Storage event listener
    window.addEventListener('storage', function (e) {
      if (e.key === STORAGE_KEY_INQUIRIES && e.newValue) {
        try {
          const updated = JSON.parse(e.newValue);
          if (Array.isArray(updated) && updated.length > state.inquiries.length) {
            const newest = updated[0];
            if (newest && !state.inquiries.some(i => i.id === newest.id)) {
              handleIncomingData('NEW_INQUIRY', newest);
            }
          }
        } catch (err) {}
      } else if (e.key === STORAGE_KEY_EVENTS && e.newValue) {
        try {
          const updated = JSON.parse(e.newValue);
          if (Array.isArray(updated) && updated.length > state.analyticsEvents.length) {
            const newest = updated[0];
            if (newest && !state.analyticsEvents.some(ev => ev.id === newest.id)) {
              handleIncomingData('NEW_VISIT', newest);
            }
          }
        } catch (err) {}
      }
    });
  }

  function broadcastToWebsite(type, data) {
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bridge = new BroadcastChannel(CHANNEL_NAME);
        bridge.postMessage({ type: type, data: data });
        bridge.close();
      } catch (e) {}
    }

    const iframe = document.getElementById('preview-iframe');
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage({ type: type, data: data }, '*');
      } catch (e) {}
    }
  }

  function playNotificationChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1318.51, now);
      gain1.gain.setValueAtTime(0.12, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.45);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1760.00, now + 0.08);
      gain2.gain.setValueAtTime(0.14, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.6);
    } catch (e) {}
  }

  function showInquiryToast(inq) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast toast-success';
    toast.style.cursor = 'pointer';
    toast.innerHTML = 
      '<div style="display:flex; flex-direction:column; gap:4px; text-align:left;">' +
        '<strong style="font-size:13.5px; font-weight:700;">New Inquiry from ' + escapeHtml(inq.name || 'Client') + '</strong>' +
        '<span style="font-size:12px; opacity:0.85;">' + escapeHtml(inq.email || '') + ' &bull; ' + escapeHtml((inq.message || '').substring(0, 45)) + '...</span>' +
        '<div style="margin-top:4px;">' +
          '<span style="font-size:11px; text-decoration:underline; font-weight:600;">Click to view inquiry &rarr;</span>' +
        '</div>' +
      '</div>';

    toast.onclick = function () {
      switchTab('inquiries');
      if (typeof window.viewInquiry === 'function') {
        window.viewInquiry(inq.id);
      }
      toast.remove();
    };

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => toast.remove(), 250);
    }, 6000);
  }

  // Bridge Test Simulator
  window.testSendInquiry = function (clientName, clientEmail, message) {
    const inquiry = {
      id: 'inq_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7),
      name: clientName || 'Studio Client (Bridge Test)',
      email: clientEmail || 'bitwise1216@gmail.com',
      service: 'Full Creative Suite',
      timeline: 'Within 1 month',
      message: message || 'We are planning a comprehensive brand overhaul and require photography, videography, and visual identity systems.',
      timestamp: new Date().toISOString(),
      status: 'new',
      read: false,
      page: '/contact.html',
      referrer: 'Direct Verification'
    };

    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const ch = new BroadcastChannel(CHANNEL_NAME);
        ch.postMessage({ type: 'NEW_INQUIRY', data: inquiry });
        ch.close();
      } catch (e) {}
    }
    window.postMessage({ type: 'NEW_INQUIRY', data: inquiry }, '*');
    showToast('Dispatched test inquiry across bridge', 'info');
  };

  // ==========================================================================
  // NAVIGATION & TAB SWITCHING
  // ==========================================================================
  function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-tab]');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    const toggleBtn = document.getElementById('sidebar-toggle');

    function closeMobileSidebar() {
      if (sidebar) sidebar.classList.remove('mobile-open');
      if (backdrop) backdrop.classList.remove('active');
    }

    function toggleMobileSidebar() {
      if (sidebar) sidebar.classList.toggle('mobile-open');
      if (backdrop) backdrop.classList.toggle('active');
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleMobileSidebar);
    }
    if (backdrop) {
      backdrop.addEventListener('click', closeMobileSidebar);
    }

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        switchTab(targetTab);
        if (window.innerWidth <= 1024) {
          closeMobileSidebar();
        }
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
      inquiries: { title: 'Client Inquiries & Responses', sub: 'Real messages received via your official website inquiry page' },
      photography: { title: 'Photography Showcase Manager', sub: 'Curate showcase title, description, and high-resolution media' },
      design: { title: 'Graphic Design Showcase Manager', sub: 'Curate brand identities, visual systems, and portfolio items' },
      cms: { title: 'Website Content & Copy CMS', sub: 'Direct editorial control over every headline, service, founder bio, FAQ, and legal policy on your site' },
      preview: { title: 'Live Viewport', sub: 'Interactive live rendering of your portfolio' },
      settings: { title: 'Publishing, Analytics & Integrations', sub: 'Production repository sync, Google Analytics 4, and automated email notifications' }
    };

    if (titles[tabId]) {
      document.getElementById('page-title').textContent = titles[tabId].title;
      document.getElementById('page-subtitle').textContent = titles[tabId].sub;
    }

    if (tabId === 'preview') {
      const iframe = document.getElementById('preview-iframe');
      if (iframe && !iframe.src) {
        iframe.src = '../BITWISE/index.html';
      }
      if (iframe && iframe.contentWindow) {
        broadcastToWebsite('SYNC_ALL', { cms: state.cms, photos: state.photos, designs: state.designs, founders: state.founders });
      }
    }
  }

  function updateNavBadges() {
    const unread = state.inquiries.filter(i => !i.read).length;
    const badge = document.getElementById('badge-inquiries');
    if (badge) {
      if (unread > 0) {
        badge.textContent = unread;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  // ==========================================================================
  // TAB 1: ANALYTICS RENDERING
  // ==========================================================================
  function renderAnalytics() {
    const events = state.analyticsEvents;
    const totalViews = events.length;

    const uniqueIps = new Set(events.map(e => e.visitorId || e.ip || e.id));
    const uniqueVis = uniqueIps.size;

    const totalInquiries = state.inquiries.length;
    const convRate = totalViews > 0 ? ((totalInquiries / totalViews) * 100).toFixed(1) : '0.0';

    const durations = events.map(e => e.durationSeconds || 0).filter(d => d > 0);
    const avgSec = durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : 0;
    const avgMinStr = avgSec > 0 ? `${Math.floor(avgSec / 60)}m ${avgSec % 60}s` : '0s';

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
          <stop offset="0%" stop-color="rgba(200, 184, 158, 0.28)" />
          <stop offset="100%" stop-color="rgba(200, 184, 158, 0)" />
        </linearGradient>
      </defs>
      <g class="chart-grid">
        <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" />
        <line x1="${padding}" y1="${height / 2}" x2="${width - padding}" y2="${height / 2}" />
        <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" />
      </g>
      <path class="chart-area" d="${areaD}" fill="url(#lightAreaGradient)" />
      <path class="chart-line" d="${pathD}" fill="none" stroke="#C8B89E" stroke-width="2" />
    `;

    points.forEach(p => {
      svgInner += `
        <circle class="chart-point" cx="${p.x}" cy="${p.y}" r="4.5" fill="#FFFFFF" stroke="#C8B89E" stroke-width="2" />
        <text x="${p.x}" y="${height - 10}" font-size="10.5" font-weight="700" fill="#888888" text-anchor="middle">${p.label}</text>
      `;
    });

    svg.innerHTML = svgInner;
  }

  function renderBreakdowns() {
    const events = state.analyticsEvents;
    const total = events.length || 1;

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
              <div style="font-size: 15px; font-weight: 800; color: var(--text-primary); margin-top: 12px;">Listening for Live Visitors</div>
              <div style="font-size: 12.5px; color: var(--text-muted); max-width: 380px; line-height: 1.5; margin-top: 6px;">
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
          <td><span style="font-family: monospace; font-size: 12px; color: var(--text-primary);">${(e.visitorId || e.id || '').substring(0, 14)}...</span></td>
          <td><span class="badge" style="background: var(--bg-muted);">${e.device || 'Desktop'}</span></td>
          <td>${e.browser || 'Browser'}</td>
          <td>${e.referrer || 'Direct'}</td>
          <td>${e.page || '/'}</td>
          <td style="color: var(--text-muted); font-size: 12px;">${timeStr}</td>
        </tr>
      `;
    }).join('');
  }

  // ==========================================================================
  // TAB 2: INQUIRIES RENDERING
  // ==========================================================================
  function renderInquiries() {
    const tbody = document.getElementById('inquiries-table-tbody');
    if (!tbody) return;

    let list = state.inquiries;
    if (state.inquiryFilter === 'unread') list = list.filter(i => !i.read);
    else if (state.inquiryFilter === 'replied') list = list.filter(i => i.status === 'replied');
    else if (state.inquiryFilter === 'archived') list = list.filter(i => i.status === 'archived');

    if (!list.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="padding: 40px 20px; text-align: center; color: var(--text-muted);">
            No inquiries matching the selected filter.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = list.map(inq => {
      const timeStr = formatRelativeTime(inq.timestamp);
      const isUnread = !inq.read;
      const statusBadge = inq.status === 'replied' 
        ? '<span class="badge badge-success">Replied</span>'
        : isUnread 
          ? '<span class="badge badge-new">New</span>'
          : '<span class="badge" style="background:var(--bg-muted)">Read</span>';

      return `
        <tr style="${isUnread ? 'font-weight: 600;' : ''}">
          <td>${statusBadge}</td>
          <td>${escapeHtml(inq.name || 'Anonymous')}</td>
          <td><a href="mailto:${escapeHtml(inq.email || '')}" style="color: var(--text-secondary);">${escapeHtml(inq.email || '&mdash;')}</a></td>
          <td>
            <div style="font-size: 11px; color: var(--accent-gold); font-weight: 700;">${escapeHtml(inq.service || 'General Inquiry')}</div>
            <div style="max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px;">${escapeHtml(inq.message || '')}</div>
          </td>
          <td style="font-size: 12px; color: var(--text-muted);">${timeStr}</td>
          <td>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-secondary btn-sm" onclick="window.viewInquiry('${inq.id}')">View</button>
              <button class="btn btn-primary btn-sm" onclick="window.replyInquiry('${inq.id}')">Reply</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  window.viewInquiry = function (id) {
    const inq = state.inquiries.find(i => i.id === id);
    if (!inq) return;

    inq.read = true;
    localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(state.inquiries));
    renderInquiries();
    updateNavBadges();

    document.getElementById('modal-inq-name').textContent = inq.name || 'Anonymous';
    document.getElementById('modal-inq-email').textContent = inq.email || '';
    document.getElementById('modal-inq-email-link').href = `mailto:${inq.email}`;
    document.getElementById('modal-inq-date').textContent = new Date(inq.timestamp).toLocaleString();
    document.getElementById('modal-inq-message').textContent = (inq.service ? `[Creative Focus: ${inq.service} | Timeline: ${inq.timeline || 'Flexible'}]\n\n` : '') + (inq.message || '');

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

    const subject = encodeURIComponent(`bitwise. Studio Inquiry - ${inq.name}`);
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

    const headers = ['ID', 'Name', 'Email', 'Service', 'Timeline', 'Message', 'Status', 'Timestamp'];
    const rows = state.inquiries.map(i => [
      `"${i.id}"`,
      `"${(i.name || '').replace(/"/g, '""')}"`,
      `"${(i.email || '').replace(/"/g, '""')}"`,
      `"${(i.service || '').replace(/"/g, '""')}"`,
      `"${(i.timeline || '').replace(/"/g, '""')}"`,
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
  // TAB 3: PHOTOGRAPHY SHOWCASE MANAGER (12 Photos Maximum)
  // ==========================================================================
  const MAX_PHOTO_SLOTS = 12;

  function renderPhotos() {
    const grid = document.getElementById('photography-media-grid');
    if (!grid) return;

    const titleInput = document.getElementById('photo-title-input');
    const subInput = document.getElementById('photo-subtitle-input');
    if (titleInput) titleInput.value = state.cms['photo-title'] || 'Photography';
    if (subInput) subInput.value = state.cms['photo-subtitle'] || 'Selected work from our editorial and brand photography projects.';

    const countBadge = document.getElementById('photo-count-badge');
    if (countBadge) {
      countBadge.textContent = `${state.photos.length} / ${MAX_PHOTO_SLOTS} Slots`;
      countBadge.style.color = state.photos.length >= MAX_PHOTO_SLOTS ? '#10B981' : 'var(--text-primary)';
    }

    const activePhotos = state.photos.slice(0, MAX_PHOTO_SLOTS);
    let cardsHtml = activePhotos.map((photo, index) => {
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
              <span>Photo Slot #${index + 1}</span>
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
              <button class="btn btn-secondary btn-sm" onclick="window.triggerReplacePhoto('${photo.id}')">Replace</button>
              <button class="btn btn-danger btn-sm" onclick="window.deletePhoto('${photo.id}')">Delete</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Fill remaining slots up to 12
    for (let i = activePhotos.length; i < MAX_PHOTO_SLOTS; i++) {
      const slotNum = i + 1;
      const formattedNum = slotNum < 10 ? '0' + slotNum : slotNum;
      cardsHtml += `
        <div class="media-card media-card-slot animate-reveal" onclick="window.openUploadModal()" style="border: 2px dashed var(--border-medium); background: rgba(255,255,255,0.02); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 280px; padding: 24px; text-align: center; border-radius: var(--radius-lg); transition: all 0.25s ease;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--bg-surface); border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
          <div style="font-weight: 800; font-size: 14px; color: var(--text-primary); margin-bottom: 4px;">Photo Slot ${formattedNum}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Available &bull; Click to upload photo</div>
        </div>
      `;
    }

    grid.innerHTML = cardsHtml;
  }

  window.updatePhotoHeadings = function () {
    const titleVal = document.getElementById('photo-title-input').value;
    const subVal = document.getElementById('photo-subtitle-input').value;
    state.cms['photo-title'] = titleVal;
    state.cms['photo-subtitle'] = subVal;
    localStorage.setItem(STORAGE_KEY_CMS, JSON.stringify(state.cms));
    broadcastToWebsite('CMS_UPDATE', state.cms);
  };

  window.updatePhotoSpan = function (id, span) {
    const photo = state.photos.find(p => p.id === id);
    if (photo) {
      photo.span = span;
      localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(state.photos));
      renderPhotos();
      broadcastToWebsite('PHOTOS_UPDATE', state.photos);
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
      broadcastToWebsite('PHOTOS_UPDATE', state.photos);
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
        broadcastToWebsite('PHOTOS_UPDATE', state.photos);
        showToast(`Replaced ${photo.name} successfully`, 'success');
      }
      fileInput.value = '';
      photoIdToReplace = null;
    });
  };

  window.openUploadModal = function () {
    if (state.photos.length >= MAX_PHOTO_SLOTS) {
      showToast(`Showcase photo limit reached (12/12). Replace or delete an existing photo.`, 'error');
      return;
    }
    openModal('upload-photo-modal');
  };

  window.handleNewPhotoUpload = function (fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    if (state.photos.length >= MAX_PHOTO_SLOTS) {
      showToast(`Showcase photo limit reached (12/12). Replace or delete an existing photo.`, 'error');
      fileInput.value = '';
      return;
    }

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
      broadcastToWebsite('PHOTOS_UPDATE', state.photos);
      closeModal('upload-photo-modal');
      fileInput.value = '';
      showToast(`Added ${cleanName} to showcase (${state.photos.length}/${MAX_PHOTO_SLOTS})`, 'success');
    });
  };

  // ==========================================================================
  // TAB 4: GRAPHIC DESIGN SHOWCASE MANAGER (6 Projects Maximum)
  // ==========================================================================
  const MAX_DESIGN_SLOTS = 6;

  function renderDesigns() {
    const grid = document.getElementById('design-media-grid');
    if (!grid) return;

    const titleInput = document.getElementById('design-title-input');
    const subInput = document.getElementById('design-subtitle-input');
    if (titleInput) titleInput.value = state.cms['design-title'] || 'Graphic Design';
    if (subInput) subInput.value = state.cms['design-subtitle'] || 'Brand identities, visual systems, and creative direction.';

    const countBadge = document.getElementById('design-count-badge');
    if (countBadge) {
      countBadge.textContent = `${state.designs.length} / ${MAX_DESIGN_SLOTS} Slots`;
      countBadge.style.color = state.designs.length >= MAX_DESIGN_SLOTS ? '#10B981' : 'var(--text-primary)';
    }

    const activeDesigns = state.designs.slice(0, MAX_DESIGN_SLOTS);
    let cardsHtml = activeDesigns.map((item, index) => {
      const imgHtml = item.image
        ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" class="design-preview-img">`
        : `<div style="color: var(--text-muted); font-size: 13px; font-weight: 700; text-align: center; padding: 20px;">No image uploaded</div>`;

      return `
        <div class="design-project-card animate-reveal stagger-${(index % 5) + 1}">
          <div class="design-preview-container">
            ${imgHtml}
          </div>
          <div class="design-details">
            <div>
              <span class="design-badge-category">${escapeHtml(item.category || 'Visual Identity')}</span>
              <h4 class="design-title" style="margin-top: 6px;">${escapeHtml(item.title || 'Untitled Project')}</h4>
              <div class="design-client">${escapeHtml(item.client || 'Client Atelier')}</div>
            </div>
            <p class="design-desc">${escapeHtml(item.description || 'No description provided.')}</p>
            <div style="display: flex; gap: 8px; margin-top: auto; padding-top: 10px; border-top: 1px solid var(--border-subtle);">
              <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="window.editDesignProject('${item.id}')">Edit</button>
              <button class="btn btn-secondary btn-sm" onclick="window.triggerReplaceDesignImage('${item.id}')">Image</button>
              <button class="btn btn-danger btn-sm" onclick="window.deleteDesignProject('${item.id}')">Delete</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Fill remaining slots up to 6
    for (let i = activeDesigns.length; i < MAX_DESIGN_SLOTS; i++) {
      const slotNum = i + 1;
      cardsHtml += `
        <div class="design-project-card animate-reveal" onclick="window.openAddDesignModal()" style="border: 2px dashed var(--border-medium); background: rgba(255,255,255,0.02); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 280px; padding: 24px; text-align: center; border-radius: var(--radius-lg); transition: all 0.25s ease;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--bg-surface); border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
          <div style="font-weight: 800; font-size: 14px; color: var(--text-primary); margin-bottom: 4px;">Design Slot 0${slotNum}</div>
          <div style="font-size: 12px; color: var(--text-muted);">Available &bull; Click to add project</div>
        </div>
      `;
    }

    grid.innerHTML = cardsHtml;
  }

  window.updateDesignHeadings = function () {
    const titleVal = document.getElementById('design-title-input').value;
    const subVal = document.getElementById('design-subtitle-input').value;
    state.cms['design-title'] = titleVal;
    state.cms['design-subtitle'] = subVal;
    localStorage.setItem(STORAGE_KEY_CMS, JSON.stringify(state.cms));
    broadcastToWebsite('CMS_UPDATE', state.cms);
  };

  window.openAddDesignModal = function () {
    if (!state.editingDesignId && state.designs.length >= MAX_DESIGN_SLOTS) {
      showToast(`Graphic design showcase limit reached (6/6 projects). Remove or edit an existing project.`, 'error');
      return;
    }
    state.editingDesignId = null;
    state.currentDesignImage = null;
    document.getElementById('design-modal-title').textContent = 'Add Graphic Design Project';
    document.getElementById('design-field-title').value = '';
    document.getElementById('design-field-category').value = '';
    document.getElementById('design-field-client').value = '';
    document.getElementById('design-field-desc').value = '';
    document.getElementById('design-modal-image-status').textContent = 'Select high-res artwork image';
    openModal('design-project-modal');
  };

  window.editDesignProject = function (id) {
    const item = state.designs.find(d => d.id === id);
    if (!item) return;

    state.editingDesignId = id;
    state.currentDesignImage = item.image || null;
    document.getElementById('design-modal-title').textContent = 'Edit Design Project';
    document.getElementById('design-field-title').value = item.title || '';
    document.getElementById('design-field-category').value = item.category || '';
    document.getElementById('design-field-client').value = item.client || '';
    document.getElementById('design-field-desc').value = item.description || '';
    document.getElementById('design-modal-image-status').textContent = item.image ? 'Existing image loaded (click to change)' : 'Select artwork image';
    openModal('design-project-modal');
  };

  window.handleDesignModalFile = function (fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    showToast('Optimizing design image...', 'info');
    optimizeImageFile(file, 2000, 0.88, function (dataUrl) {
      state.currentDesignImage = dataUrl;
      document.getElementById('design-modal-image-status').textContent = 'Image attached: ' + file.name;
      showToast('Artwork attached to project', 'success');
    });
  };

  window.saveDesignProject = function () {
    const title = document.getElementById('design-field-title').value.trim();
    const category = document.getElementById('design-field-category').value.trim();
    const client = document.getElementById('design-field-client').value.trim();
    const desc = document.getElementById('design-field-desc').value.trim();

    if (!title) {
      alert('Please enter a project title.');
      return;
    }

    if (state.editingDesignId) {
      const item = state.designs.find(d => d.id === state.editingDesignId);
      if (item) {
        item.title = title;
        item.category = category || 'Visual Identity';
        item.client = client || 'bitwise.';
        item.description = desc;
        if (state.currentDesignImage) item.image = state.currentDesignImage;
      }
      showToast('Updated design project', 'success');
    } else {
      if (state.designs.length >= MAX_DESIGN_SLOTS) {
        showToast(`Graphic design showcase limit reached (6/6 projects). Cannot add more.`, 'error');
        return;
      }
      const newItem = {
        id: 'design-' + Date.now(),
        title: title,
        category: category || 'Visual Identity',
        client: client || 'bitwise.',
        description: desc,
        image: state.currentDesignImage || ''
      };
      state.designs.push(newItem);
      showToast(`Added new design project (${state.designs.length}/${MAX_DESIGN_SLOTS})`, 'success');
    }

    localStorage.setItem(STORAGE_KEY_DESIGNS, JSON.stringify(state.designs));
    renderDesigns();
    broadcastToWebsite('DESIGNS_UPDATE', state.designs);
    closeModal('design-project-modal');
  };

  let designIdToReplace = null;
  window.triggerReplaceDesignImage = function (id) {
    designIdToReplace = id;
    const input = document.getElementById('design-replace-file-input');
    if (input) input.click();
  };

  window.handleReplaceDesignFile = function (fileInput) {
    const file = fileInput.files[0];
    if (!file || !designIdToReplace) return;

    showToast('Optimizing design image...', 'info');
    optimizeImageFile(file, 2000, 0.88, function (dataUrl) {
      const item = state.designs.find(d => d.id === designIdToReplace);
      if (item) {
        item.image = dataUrl;
        localStorage.setItem(STORAGE_KEY_DESIGNS, JSON.stringify(state.designs));
        renderDesigns();
        broadcastToWebsite('DESIGNS_UPDATE', state.designs);
        showToast(`Updated image for ${item.title}`, 'success');
      }
      fileInput.value = '';
      designIdToReplace = null;
    });
  };

  window.deleteDesignProject = function (id) {
    const item = state.designs.find(d => d.id === id);
    if (!item) return;

    if (confirm(`Remove "${item.title}" from graphic design showcase?`)) {
      state.designs = state.designs.filter(d => d.id !== id);
      localStorage.setItem(STORAGE_KEY_DESIGNS, JSON.stringify(state.designs));
      renderDesigns();
      broadcastToWebsite('DESIGNS_UPDATE', state.designs);
      showToast(`Removed design project`, 'info');
    }
  };

  // ==========================================================================
  // TAB 5: WEBSITE CONTENT CMS
  // ==========================================================================
  function renderCMSForm() {
    const container = document.getElementById('cms-sections-container');
    if (!container) return;

    const sections = [
      {
        id: 'sec-hero',
        title: 'Hero Branding, Tagline & Call-to-Actions',
        fields: [
          { id: 'hero-tagline', label: 'Main Tagline (Azonix / Akira Display)', type: 'text' },
          { id: 'hero-subtitle', label: 'Hero Subtitle / Studio Mission', type: 'textarea' },
          { id: 'hero-cta-text', label: 'Primary CTA Button Label', type: 'text' },
          { id: 'hero-cta-secondary', label: 'Secondary CTA Button Label', type: 'text' },
          { id: 'nav-cta-text', label: 'Navbar Top CTA Button Label', type: 'text' },
          { id: 'mobile-cta-text', label: 'Mobile Sticky CTA Button Label', type: 'text' }
        ]
      },
      {
        id: 'sec-services',
        title: 'Services - What We Offer',
        fields: [
          { id: 'services-title', label: 'Services Section Title', type: 'text' },
          { id: 'services-subtitle', label: 'Services Section Subtitle', type: 'textarea' },
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
        title: 'The Founders - Architectural Pavilion & Transparent PNG Cutouts',
        isFoundersSection: true,
        fields: [
          { id: 'team-title', label: 'Founders Section Title', type: 'text' },
          { id: 'team-subtitle', label: 'Founders Section Subtitle', type: 'textarea' },
          { id: 'founder-1-depth', label: 'Founder 1 Depth Layer Word', type: 'text' },
          { id: 'founder-1-name', label: 'Founder 1 Full Name', type: 'text' },
          { id: 'founder-1-role', label: 'Founder 1 Role', type: 'text' },
          { id: 'founder-1-bio', label: 'Founder 1 Dossier Bio', type: 'textarea' },
          { id: 'founder-2-depth', label: 'Founder 2 Depth Layer Word', type: 'text' },
          { id: 'founder-2-name', label: 'Founder 2 Full Name', type: 'text' },
          { id: 'founder-2-role', label: 'Founder 2 Role', type: 'text' },
          { id: 'founder-2-bio', label: 'Founder 2 Dossier Bio', type: 'textarea' },
          { id: 'founder-3-depth', label: 'Founder 3 Depth Layer Word', type: 'text' },
          { id: 'founder-3-name', label: 'Founder 3 Full Name', type: 'text' },
          { id: 'founder-3-role', label: 'Founder 3 Role', type: 'text' },
          { id: 'founder-3-bio', label: 'Founder 3 Dossier Bio', type: 'textarea' }
        ]
      },
      {
        id: 'sec-videography',
        title: 'Videography Showcase Section',
        fields: [
          { id: 'video-title', label: 'Videography Headline', type: 'text' },
          { id: 'video-desc', label: 'Videography Description', type: 'textarea' },
          { id: 'video-cta-text', label: 'Videography CTA Button Text', type: 'text' }
        ]
      },
      {
        id: 'sec-faq',
        title: 'Frequently Asked Questions (FAQ)',
        fields: [
          { id: 'faq-title', label: 'FAQ Section Title', type: 'text' },
          { id: 'faq-q1', label: 'Question 01', type: 'text' },
          { id: 'faq-a1', label: 'Answer 01', type: 'textarea' },
          { id: 'faq-q2', label: 'Question 02', type: 'text' },
          { id: 'faq-a2', label: 'Answer 02', type: 'textarea' },
          { id: 'faq-q3', label: 'Question 03', type: 'text' },
          { id: 'faq-a3', label: 'Answer 03', type: 'textarea' },
          { id: 'faq-q4', label: 'Question 04', type: 'text' },
          { id: 'faq-a4', label: 'Answer 04', type: 'textarea' },
          { id: 'faq-q5', label: 'Question 05', type: 'text' },
          { id: 'faq-a5', label: 'Answer 05', type: 'textarea' },
          { id: 'faq-q6', label: 'Question 06', type: 'text' },
          { id: 'faq-a6', label: 'Answer 06', type: 'textarea' }
        ]
      },
      {
        id: 'sec-contact',
        title: 'Contact Details & Studio Inquiry Action Card',
        fields: [
          { id: 'contact-title', label: 'Contact Section Title', type: 'text' },
          { id: 'contact-subtitle', label: 'Contact Section Subtitle', type: 'textarea' },
          { id: 'contact-heading', label: 'Contact Heading', type: 'text' },
          { id: 'contact-desc', label: 'Contact Description', type: 'textarea' },
          { id: 'contact-email', label: 'Studio Inquiry Email', type: 'text' },
          { id: 'contact-phone', label: 'Studio Phone', type: 'text' },
          { id: 'contact-address', label: 'Studio Location / Physical Base', type: 'text' },
          { id: 'response-time', label: 'Response Time Guarantee', type: 'text' },
          { id: 'contact-card-title', label: 'Inquiry Action Card Title', type: 'text' },
          { id: 'contact-card-desc', label: 'Inquiry Action Card Description', type: 'textarea' },
          { id: 'contact-btn-text', label: 'Inquiry Button Label (links to contact.html)', type: 'text' }
        ]
      },
      {
        id: 'sec-privacy',
        title: 'Legal Policy: Privacy Policy (privacy.html)',
        fields: [
          { id: 'privacy-title', label: 'Page Title', type: 'text' },
          { id: 'privacy-updated', label: 'Last Updated Date String', type: 'text' },
          { id: 'privacy-content', label: 'Privacy Policy Full Content (HTML formatting supported)', type: 'textarea' }
        ]
      },
      {
        id: 'sec-terms',
        title: 'Legal Policy: Terms & Conditions (terms.html)',
        fields: [
          { id: 'terms-title', label: 'Page Title', type: 'text' },
          { id: 'terms-updated', label: 'Last Updated Date String', type: 'text' },
          { id: 'terms-content', label: 'Terms & Conditions Full Content (HTML formatting supported)', type: 'textarea' }
        ]
      },
      {
        id: 'sec-refund',
        title: 'Legal Policy: Refund Policy (refund.html)',
        fields: [
          { id: 'refund-title', label: 'Page Title', type: 'text' },
          { id: 'refund-updated', label: 'Last Updated Date String', type: 'text' },
          { id: 'refund-content', label: 'Refund Policy Full Content (HTML formatting supported)', type: 'textarea' }
        ]
      },
      {
        id: 'sec-footer',
        title: 'Footer Branding & Legal Links',
        fields: [
          { id: 'footer-tagline', label: 'Footer Tagline', type: 'text' },
          { id: 'footer-desc', label: 'Footer Studio Description', type: 'textarea' },
          { id: 'footer-copy', label: 'Copyright Notice', type: 'text' }
        ]
      }
    ];

    container.innerHTML = sections.map(sec => {
      let extraFoundersHtml = '';

      if (sec.isFoundersSection) {
        extraFoundersHtml = `
          <div style="grid-column: 1 / -1; margin-top: 14px; padding-top: 18px; border-top: 1px solid var(--border-subtle);">
            <div style="font-size: 13px; font-weight: 800; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">
              Founder Portrait Cutouts (Transparent PNG Uploads)
            </div>
            <p style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">
              Upload your cutouts with transparent backgrounds. They will automatically replace the pavilion portrait cutout on your live website.
            </p>
            <div class="founder-media-grid">
              ${[1, 2, 3].map(num => {
                const nameKey = `founder-${num}-name`;
                const imgKey = `founder-${num}-img`;
                const founderName = state.cms[nameKey] || `Founder ${num}`;
                const defaultImgs = [
                  'assets/Founders/Aaqib Nazran-cutout.png',
                  'assets/Founders/Ruhaim Riyaz-cutout.png',
                  'assets/Founders/Aneeq Ahmed-cutout.png'
                ];
                const currentImg = state.founders[imgKey] || `${RAW_BASE_URL}/${defaultImgs[num - 1]}`;

                return `
                  <div class="founder-media-card">
                    <div style="font-weight: 800; font-size: 13.5px; color: var(--text-primary);">${num}. ${escapeHtml(founderName)}</div>
                    <div class="cutout-checkerboard">
                      <img src="${currentImg}" alt="${founderName}" class="cutout-img-preview" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'">
                    </div>
                    <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="window.openFounderPhotoModal(${num}, '${escapeHtml(founderName)}')">
                      Upload Transparent PNG
                    </button>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }

      return `
        <div class="cms-section-card animate-reveal">
          <div class="cms-section-header">
            <span class="cms-section-title">${sec.title}</span>
            <span style="font-size: 11px; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Expand / Collapse</span>
          </div>
          <div class="cms-section-body">
            ${sec.fields.map(f => {
              const val = escapeHtml(state.cms[f.id] !== undefined ? state.cms[f.id] : (ORIGINAL_CMS[f.id] || ''));
              const isFull = f.type === 'textarea';
              return `
                <div class="form-field ${isFull ? 'full-width' : ''}">
                  <label class="form-label">${f.label}</label>
                  ${f.type === 'textarea'
                    ? `<textarea class="form-textarea" style="${f.id.endsWith('-content') ? 'min-height: 200px; font-family: monospace; font-size: 12.5px;' : ''}" data-cms-field="${f.id}" oninput="window.updateCMSField('${f.id}', this.value)">${val}</textarea>`
                    : `<input type="text" class="form-input" data-cms-field="${f.id}" value="${val}" oninput="window.updateCMSField('${f.id}', this.value)">`
                  }
                </div>
              `;
            }).join('')}
            ${extraFoundersHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  window.updateCMSField = function (fieldId, value) {
    state.cms[fieldId] = value;
    localStorage.setItem(STORAGE_KEY_CMS, JSON.stringify(state.cms));
    broadcastToWebsite('CMS_UPDATE', state.cms);
  };

  window.saveCMSChanges = function () {
    localStorage.setItem(STORAGE_KEY_CMS, JSON.stringify(state.cms));
    broadcastToWebsite('CMS_UPDATE', state.cms);
    showToast('Saved CMS content edits and synced to website', 'success');
  };

  // ==========================================================================
  // FOUNDER PHOTO & TRANSPARENT PNG CUTOUT MANAGER
  // ==========================================================================
  let activeFounderUploadNum = null;
  let stagedFounderCutoutDataUrl = null;

  window.openFounderPhotoModal = function (founderNum, founderName) {
    activeFounderUploadNum = founderNum;
    stagedFounderCutoutDataUrl = null;

    document.getElementById('founder-modal-title').textContent = `Upload Transparent Cutout for ${founderName}`;
    const previewImg = document.getElementById('founder-modal-preview-img');
    const placeholderText = document.getElementById('founder-modal-placeholder-text');

    const existing = state.founders[`founder-${founderNum}-img`];
    if (existing) {
      previewImg.src = existing;
      previewImg.style.display = 'block';
      placeholderText.style.display = 'none';
    } else {
      previewImg.style.display = 'none';
      placeholderText.style.display = 'block';
    }

    openModal('founder-photo-modal');
  };

  window.handleFounderModalFile = function (fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    showToast('Processing transparent PNG cutout...', 'info');

    const reader = new FileReader();
    reader.onload = function (e) {
      stagedFounderCutoutDataUrl = e.target.result;

      const previewImg = document.getElementById('founder-modal-preview-img');
      const placeholderText = document.getElementById('founder-modal-placeholder-text');
      previewImg.src = stagedFounderCutoutDataUrl;
      previewImg.style.display = 'block';
      placeholderText.style.display = 'none';

      showToast('Cutout preview loaded', 'success');
    };
    reader.readAsDataURL(file);
  };

  window.confirmFounderPhotoSave = function () {
    if (!activeFounderUploadNum || !stagedFounderCutoutDataUrl) {
      alert('Please select an image file first.');
      return;
    }

    const key = `founder-${activeFounderUploadNum}-img`;
    state.founders[key] = stagedFounderCutoutDataUrl;
    localStorage.setItem(STORAGE_KEY_FOUNDERS, JSON.stringify(state.founders));

    renderCMSForm();
    broadcastToWebsite('FOUNDERS_UPDATE', state.founders);
    closeModal('founder-photo-modal');
    showToast(`Updated Founder ${activeFounderUploadNum} cutout successfully!`, 'success');
  };

  // ==========================================================================
  // TAB 7: SETTINGS (Google Analytics & Email Configuration)
  // ==========================================================================
  function loadSettingsInputs() {
    const ghInput = document.getElementById('gh-token-input');
    if (ghInput) {
      const savedToken = localStorage.getItem('bitwise_github_pat');
      if (savedToken) ghInput.value = savedToken;
    }
    const gaInput = document.getElementById('ga-id-input');
    if (gaInput) {
      const savedGa = localStorage.getItem(STORAGE_KEY_GA_ID);
      if (savedGa) gaInput.value = savedGa;
    }

    const emailMsgArea = document.getElementById('setting-autoresponse-msg');
    if (emailMsgArea) {
      const savedConfig = localStorage.getItem(STORAGE_KEY_EMAIL_CONFIG);
      if (savedConfig) {
        try {
          const cfg = JSON.parse(savedConfig);
          if (cfg.autoResponseMsg) emailMsgArea.value = cfg.autoResponseMsg;
        } catch (e) {}
      }
    }
  }

  window.saveGoogleAnalyticsID = function () {
    const input = document.getElementById('ga-id-input');
    if (!input) return;
    const val = input.value.trim();

    if (val && !/^G-[A-Z0-9]+$/i.test(val)) {
      alert('Please enter a valid Google Analytics 4 Measurement ID starting with "G-" (e.g. G-XXXXXXXXXX)');
      return;
    }

    localStorage.setItem(STORAGE_KEY_GA_ID, val);
    showToast('Saved Google Analytics 4 ID and deployed to live site tracker', 'success');
  };

  window.saveEmailSettings = function () {
    const msgArea = document.getElementById('setting-autoresponse-msg');
    if (!msgArea) return;

    const config = {
      recipient: 'bitwise1216@gmail.com',
      autoResponseMsg: msgArea.value.trim()
    };

    localStorage.setItem(STORAGE_KEY_EMAIL_CONFIG, JSON.stringify(config));
    showToast('Saved automated email auto-response template', 'success');
  };

  // ==========================================================================
  // IMAGE OPTIMIZER HELPER
  // ==========================================================================
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

        const isPng = file.type === 'image/png';
        if (isPng) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/png');
          const sizeKB = Math.round((dataUrl.length * 3 / 4) / 1024);
          const sizeStr = sizeKB > 1024 ? `${(sizeKB / 1024).toFixed(1)} MB` : `${sizeKB} KB`;
          callback(dataUrl, sizeStr, isTall);
        } else {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          const sizeKB = Math.round((dataUrl.length * 3 / 4) / 1024);
          const sizeStr = sizeKB > 1024 ? `${(sizeKB / 1024).toFixed(1)} MB` : `${sizeKB} KB`;
          callback(dataUrl, sizeStr, isTall);
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // ==========================================================================
  // 3D PERSPECTIVE CARD TILT ANIMATIONS
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
      const cards = document.querySelectorAll('.metric-card, .design-project-card');
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
  // INTERACTIVE AMBIENT BACKGROUND PARTICLES CANVAS
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

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 184, 158, ${p.alpha * 0.9})`;
        ctx.fill();

        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(200, 184, 158, ${0.085 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (distToMouse < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - distToMouse / 130)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // ==========================================================================
  // PUBLISHING, REPOSITORY SYNC & PERSISTENCE ENGINE
  // ==========================================================================
  let bitwiseDirHandle = null;

  window.switchPreviewSource = function (source) {
    const iframe = document.getElementById('preview-iframe');
    const btnLocal = document.getElementById('btn-preview-local');
    const btnGithub = document.getElementById('btn-preview-github');
    if (btnLocal) btnLocal.className = source === 'local' ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
    if (btnGithub) btnGithub.className = source === 'github' ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';

    if (!iframe) return;
    iframe.src = source === 'local' ? '../BITWISE/index.html' : 'https://bitwise1216-svg.github.io/BITWISE/';
  };

  window.reloadPreview = function () {
    const iframe = document.getElementById('preview-iframe');
    if (iframe) iframe.src = iframe.src;
  };

  window.openPreviewNewTab = function () {
    const iframe = document.getElementById('preview-iframe');
    window.open(iframe && iframe.src ? iframe.src : '../BITWISE/index.html', '_blank');
  };

  // Canonical Site Data Generator
  function generateSiteDataJs() {
    const cleanPhotos = state.photos.map(p => {
      const copy = Object.assign({}, p);
      delete copy.dataUrl;
      return copy;
    });

    const data = {
      version: '1.0.0',
      updatedAt: new Date().toISOString(),
      cms: state.cms,
      photos: cleanPhotos,
      designs: state.designs,
      founders: state.founders
    };

    return `/**\n * bitwise. - Canonical Site Data Store\n * Auto-generated by Executive Dashboard on ${new Date().toLocaleString()}\n */\n\nwindow.BITWISE_SITE_DATA = ${JSON.stringify(data, null, 2)};\n`;
  }

  window.downloadSiteDataJs = function () {
    const content = generateSiteDataJs();
    const blob = new Blob([content], { type: 'application/javascript;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'site-data.js';
    a.click();
    showToast('Downloaded site-data.js! Place it in your BITWISE/js/ folder.', 'success');
  };

  window.downloadUpdatedIndex = function () {
    window.downloadSiteDataJs();
  };

  window.saveGitHubToken = function () {
    const input = document.getElementById('gh-token-input');
    if (!input) return;
    const token = input.value.trim();
    if (token) {
      localStorage.setItem('bitwise_github_pat', token);
      showToast('Saved GitHub Personal Access Token', 'success');
    } else {
      localStorage.removeItem('bitwise_github_pat');
      showToast('Cleared GitHub Personal Access Token', 'info');
    }
  };

  // 1-Time Setup Modal: Save token and publish immediately
  window.saveTokenAndPublish = function () {
    const input = document.getElementById('modal-gh-token-input');
    const errBox = document.getElementById('modal-gh-error');
    if (!input || !input.value.trim()) {
      if (errBox) {
        errBox.style.display = 'block';
        errBox.textContent = 'Please paste your GitHub Personal Access Token.';
      }
      return;
    }
    const token = input.value.trim();
    localStorage.setItem('bitwise_github_pat', token);
    const settingsInput = document.getElementById('gh-token-input');
    if (settingsInput) settingsInput.value = token;
    closeModal('github-setup-modal');
    showToast('Connected to GitHub! Publishing...', 'info');
    window.publishToWebsite();
  };

  function setPublishButtonState(isPublishing, label) {
    const btns = document.querySelectorAll('#btn-top-publish, .btn-publish-action');
    btns.forEach(btn => {
      btn.disabled = isPublishing;
      const span = btn.querySelector('span');
      if (span) {
        if (!btn._origText) btn._origText = span.textContent;
        span.textContent = isPublishing ? (label || 'Publishing...') : btn._origText;
      }
    });
  }

  function notifyPublishSuccess() {
    const btns = document.querySelectorAll('#btn-top-publish, .btn-publish-action');
    btns.forEach(btn => {
      const span = btn.querySelector('span');
      if (span) {
        const orig = btn._origText || 'Publish Changes';
        span.textContent = '✓ Published!';
        setTimeout(() => { span.textContent = orig; }, 3500);
      }
    });
    showToast('✓ Published! Website content is live.', 'success');
  }

  // 1-CLICK AUTOMATIC PUBLISHING ENGINE
  window.publishToWebsite = async function () {
    try {
      setPublishButtonState(true, 'Packaging...');

      // 1. Capture any active form field values directly into state.cms
      document.querySelectorAll('[data-cms-field]').forEach(input => {
        const field = input.getAttribute('data-cms-field');
        if (field) state.cms[field] = input.value;
      });

      // 2. Persist state to localStorage with quota protection
      try {
        localStorage.setItem(STORAGE_KEY_CMS, JSON.stringify(state.cms));
        localStorage.setItem(STORAGE_KEY_DESIGNS, JSON.stringify(state.designs));
      } catch (e) {}

      try {
        localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(state.photos));
      } catch (e) {
        try {
          const lightPhotos = state.photos.map(p => ({ id: p.id, name: p.name, span: p.span, alt: p.alt, size: p.size }));
          localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(lightPhotos));
        } catch (e2) {}
      }

      // 3. Broadcast instant live sync to any open website tab & preview iframe
      broadcastToWebsite('SYNC_ALL', {
        cms: state.cms,
        photos: state.photos,
        designs: state.designs,
        founders: state.founders
      });

      const siteDataCode = generateSiteDataJs();
      const manifest = {
        photography: state.photos.map(p => p.name),
        design: state.designs.map(d => d.title),
        updatedAt: new Date().toISOString()
      };

      // 4. Check TARGET A: Local Studio Server (http://localhost:8080 or 127.0.0.1)
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (isLocalhost) {
        setPublishButtonState(true, 'Syncing Studio...');
        try {
          const res = await fetch('/api/publish', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              siteDataCode: siteDataCode,
              photos: state.photos,
              manifest: manifest
            })
          });
          if (res.ok) {
            const json = await res.json();
            if (json.success) {
              setPublishButtonState(false);
              notifyPublishSuccess();
              return;
            }
          }
        } catch (localErr) {
          console.warn('Local publish endpoint notice:', localErr);
        }
      }

      // 5. Check TARGET B: GitHub Direct API (when deployed online on GitHub Pages)
      let ghToken = localStorage.getItem('bitwise_github_pat');

      if (!ghToken) {
        // First-time setup: Prompt user once to enter token for automated 1-click cloud publishing
        setPublishButtonState(false);
        openModal('github-setup-modal');
        const tokenInput = document.getElementById('modal-gh-token-input');
        if (tokenInput) tokenInput.focus();
        return;
      }

      // Execute automated GitHub commit
      setPublishButtonState(true, 'Publishing to GitHub...');
      await publishToGitHubDirect(ghToken, siteDataCode, manifest);

      setPublishButtonState(false);
      notifyPublishSuccess();

    } catch (err) {
      console.error('Publish error:', err);
      setPublishButtonState(false);
      showToast('Publishing note: ' + err.message, 'error');
    }
  };

  async function publishToGitHubDirect(token, siteDataCode, manifest) {
    const repo = 'bitwise1216-svg/BITWISE';
    const branch = 'main';

    async function commitFile(path, content, message, isBase64 = false) {
      const url = `https://api.github.com/repos/${repo}/contents/${path}`;
      let sha = null;
      try {
        const getRes = await fetch(url + `?ref=${branch}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        if (getRes.ok) {
          const getJson = await getRes.json();
          sha = getJson.sha;
        }
      } catch (e) {}

      const base64Content = isBase64 ? content : btoa(unescape(encodeURIComponent(content)));
      const body = { message, content: base64Content, branch };
      if (sha) body.sha = sha;

      const putRes = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!putRes.ok) {
        const errJson = await putRes.json().catch(() => ({}));
        if (putRes.status === 401 || putRes.status === 403) {
          localStorage.removeItem('bitwise_github_pat');
          throw new Error('GitHub token unauthorized or expired. Please re-enter your token.');
        }
        throw new Error(errJson.message || `HTTP ${putRes.status}`);
      }
      return await putRes.json();
    }

    // 1. Commit js/site-data.js
    await commitFile('js/site-data.js', siteDataCode, 'chore(cms): auto-publish website updates from executive dashboard');

    // 2. Commit any new uploaded photos directly to assets/showcase/photography/
    for (const photo of state.photos) {
      if (photo.dataUrl && photo.dataUrl.startsWith('data:image/')) {
        const commaIdx = photo.dataUrl.indexOf(',');
        const rawBase64 = commaIdx >= 0 ? photo.dataUrl.substring(commaIdx + 1) : photo.dataUrl;
        const imgPath = `assets/showcase/photography/${photo.name}`;
        await commitFile(imgPath, rawBase64, `feat(showcase): add photography asset ${photo.name}`, true);
        delete photo.dataUrl;
      }
    }

    // 3. Commit manifest.json
    await commitFile('assets/showcase/manifest.json', JSON.stringify(manifest, null, 2), 'chore(showcase): update showcase manifest');
  }

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

