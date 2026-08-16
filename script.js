'use strict';

/* ============================================================
   QA WORKSPACE - Application Script
   View switching, sidebar, filters, bar animations
   ============================================================ */

let loadingComplete = false;

const sidebar        = document.getElementById('sidebar');
const sidebarToggle  = document.getElementById('sidebarToggle');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const workspace      = document.getElementById('workspace');

/* ============================================================
   VIEW NAVIGATION
   ============================================================ */
const navItems   = document.querySelectorAll('[data-view]');
const allViews   = document.querySelectorAll('.view');
let   activeView = 'dashboard';

function switchView(viewId) {
  if (viewId === activeView) return;

  // Deactivate all
  allViews.forEach(v => v.classList.remove('view-active'));
  document.querySelectorAll('.sn-item[data-view]').forEach(n => n.classList.remove('active'));

  // Activate target
  const targetView = document.getElementById('view-' + viewId);
  const targetNav  = document.querySelector(`.sn-item[data-view="${viewId}"]`);

  if (!targetView) return;
  targetView.classList.add('view-active');
  if (targetNav) targetNav.classList.add('active');

  // Scroll workspace to top
  workspace.scrollTop = 0;

  activeView = viewId;

  // Update URL hash (for bookmarking / back button)
  history.replaceState(null, '', '#' + viewId);

  // Close sidebar on mobile/tablet
  if (window.innerWidth < 1024) closeSidebar();

  // Trigger bar animations when view becomes visible (deferred until loading screen gone)
  if (loadingComplete) requestAnimationFrame(() => animateBarsInView(targetView));
}

// Wire up sidebar nav items
navItems.forEach(item => {
  const view = item.dataset.view;
  if (!view) return;
  item.addEventListener('click', e => {
    e.preventDefault();
    switchView(view);
  });
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); switchView(view); }
  });
});

// Quick access buttons (dashboard panel)
document.querySelectorAll('.ql-btn[data-view]').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

// Sidebar profile header → dashboard
const sbProject = document.querySelector('.sb-project');
if (sbProject) {
  sbProject.addEventListener('click', e => {
    if (!e.target.closest('.sb-close')) switchView('dashboard');
  });
}

// Handle hash on load
function initFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('view-' + hash)) {
    switchView(hash);
  }
  // Bar animations are triggered by the loading screen dismissal code below
}

/* ============================================================
   SIDEBAR TOGGLE
   ============================================================ */
function openSidebar() {
  sidebar.classList.add('sidebar-open');
  sidebarOverlay.classList.add('visible');
  sidebarToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('sidebar-open');
  sidebarOverlay.classList.remove('visible');
  sidebarToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

sidebarToggle.addEventListener('click', () => {
  if (window.innerWidth >= 1024) return;
  if (sidebar.classList.contains('sidebar-open')) closeSidebar();
  else openSidebar();
});

const sidebarClose = document.getElementById('sidebarClose');
if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);

sidebarOverlay.addEventListener('click', closeSidebar);

// On desktop (≥1024px) sidebar is always visible - ensure no leftover open state
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    sidebar.classList.remove('sidebar-open');
    sidebarOverlay.classList.remove('visible');
    sidebarToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && sidebar.classList.contains('sidebar-open')) closeSidebar();
});

/* ============================================================
   BAR ANIMATIONS (mini skills, language bars, skill table bars)
   ============================================================ */
function animateBarsInView(container) {
  container.querySelectorAll('[data-w]').forEach(el => {
    const w = el.dataset.w + '%';
    // Reset to 0 so the transition always fires, then apply target in
    // the next two animation frames (double-rAF ensures the browser has
    // committed width:0 to layout before we change it to the target).
    el.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.width = w;
      });
    });
  });
}

/* ============================================================
   WORK BOARD - STATUS FILTER
   ============================================================ */
const filterBtns = document.querySelectorAll('.btf-btn[data-filter]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('btf-active'));
    btn.classList.add('btf-active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.issue-card').forEach(card => {
      const status = card.dataset.status;
      if (filter === 'all') {
        card.style.display = '';
      } else if (filter === 'active' && status === 'active') {
        card.style.display = '';
      } else if (filter === 'closed' && status === 'closed') {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });

    updateColumnCounts();
    updateColumnVisibility(filter);
  });
});

function updateColumnCounts() {
  document.querySelectorAll('.kanban-col').forEach(col => {
    const visible = col.querySelectorAll('.issue-card:not([style*="none"])').length;
    const countEl = col.querySelector('.kc-count');
    if (countEl) countEl.textContent = visible;
  });
}

function updateColumnVisibility(filter) {
  const colActive = document.getElementById('col-active');
  const colDone   = document.getElementById('col-done');
  if (!colActive || !colDone) return;

  if (filter === 'all') {
    colActive.style.display = '';
    colDone.style.display   = '';
  } else if (filter === 'active') {
    colActive.style.display = '';
    colDone.style.display   = 'none';
  } else if (filter === 'closed') {
    colActive.style.display = 'none';
    colDone.style.display   = '';
  }
}

/* ============================================================
   CERTIFICATIONS - ISSUER FILTER
   ============================================================ */
const certFilterBtns = document.querySelectorAll('.cf-btn[data-cf]');

certFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    certFilterBtns.forEach(b => b.classList.remove('cf-active'));
    btn.classList.add('cf-active');

    const filter = btn.dataset.cf;
    document.querySelectorAll('.cert-row').forEach(row => {
      const issuer = row.dataset.issuer;
      if (filter === 'all' || filter === issuer) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
});

/* ============================================================
   PROJECTS - EXPAND / COLLAPSE CARDS
   ============================================================ */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    card.classList.toggle('pc-open');
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('pc-open');
    }
  });
});

/* ============================================================
   INIT
   ============================================================ */
initFromHash();

// Welcome screen: dismiss after delay, then animate bars in the active view
(function () {
  const ls = document.getElementById('loadingScreen');
  if (!ls) {
    loadingComplete = true;
    const active = document.querySelector('.view.view-active');
    if (active) requestAnimationFrame(() => animateBarsInView(active));
    return;
  }
  setTimeout(() => {
    ls.classList.add('ls-fade-out');
    ls.addEventListener('transitionend', () => {
      ls.style.display = 'none';
      loadingComplete = true;
      const active = document.querySelector('.view.view-active');
      if (active) animateBarsInView(active);
    }, { once: true });
  }, 1300);
}());
