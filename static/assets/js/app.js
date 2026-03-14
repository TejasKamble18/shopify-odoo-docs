// ═══════════════════════════════════════════════════════════════════════════
// MAIN APPLICATION JAVASCRIPT
// Documentation & Marketing Site Functionality
// ═══════════════════════════════════════════════════════════════════════════

/* ── Navigation ── */

function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
}

/* ── Sidebar Management ── */

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sb-overlay');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
  if (overlay) {
    overlay.classList.toggle('visible');
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sb-overlay');
  if (sidebar) {
    sidebar.classList.remove('open');
  }
  if (overlay) {
    overlay.classList.remove('visible');
  }
}

/* ── Sidebar Search ── */

function filterSidebar(val) {
  const input = val.toLowerCase();
  const items = document.querySelectorAll('.sb-link');
  const sections = document.querySelectorAll('.sb-section');
  const clearBtn = document.getElementById('sb-clear');

  if (clearBtn) {
    clearBtn.classList.toggle('visible', input.length > 0);
  }

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    const shouldShow = text.includes(input);
    item.style.display = shouldShow ? 'flex' : 'none';
  });

  sections.forEach(section => {
    const visibleItems = section.querySelectorAll('.sb-link:not([style*="display: none"])').length;
    section.style.display = visibleItems > 0 ? 'block' : 'none';
  });
}

function clearSidebarSearch() {
  const input = document.getElementById('sb-search-input');
  if (input) {
    input.value = '';
    filterSidebar('');
  }
}

/* ── Submenu Toggle ── */

function toggleSubMenu(subId, trigger) {
  const subMenu = document.getElementById(subId);
  if (subMenu) {
    subMenu.classList.toggle('open');
    trigger.classList.toggle('open');
  }
}

/* ── Page Navigation (Docs) ── */

function showPage(id) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active', 'visible');
  });

  // Show selected page
  const page = document.getElementById(`page-${id}`);
  if (page) {
    page.classList.add('active');
    setTimeout(() => {
      page.classList.add('visible');
    }, 10);

    // Update sidebar
    updateSidebarActive(id);

    // Build TOC
    buildTOC(id);

    // Scroll to top
    window.scrollTo(0, 0);
  }
}

function updateSidebarActive(pageId) {
  const links = document.querySelectorAll('.sb-link');
  links.forEach(link => link.classList.remove('active'));

  const activeLink = document.getElementById(`sl-${pageId}`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

/* ── Table of Contents ── */

function buildTOC(pageId) {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;

  tocList.innerHTML = '';

  const page = document.getElementById(`page-${pageId}`);
  if (!page) return;

  const headings = page.querySelectorAll('h2, h3');
  headings.forEach((heading, index) => {
    const level = heading.tagName === 'H2' ? 'h2' : 'h3';
    const id = `toc-${pageId}-${index}`;
    heading.id = id;

    const li = document.createElement('li');
    if (level === 'h3') li.classList.add('toc-sub');

    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = heading.textContent;
    link.onclick = (e) => {
      e.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth' });
      updateTOCActive(id);
    };

    li.appendChild(link);
    tocList.appendChild(li);
  });
}

function updateTOCActive(id) {
  document.querySelectorAll('.toc-list a').forEach(link => {
    link.classList.remove('toc-active');
  });
  document.querySelector(`a[href="#${id}"]`)?.classList.add('toc-active');
}

/* ── Code Copy ── */

function copyCode(btn) {
  const pre = btn.closest('pre');
  if (!pre) return;

  const code = pre.textContent;
  navigator.clipboard.writeText(code).then(() => {
    const originalText = btn.textContent;
    btn.textContent = '✓ Copied';
    btn.classList.add('copied');

    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('copied');
    }, 2000);
  });
}

/* ── Progress Bar ── */

function updateProgress() {
  const progressFill = document.getElementById('progress-fill');
  if (!progressFill) return;

  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;

  progressFill.style.width = progress + '%';
}

window.addEventListener('scroll', updateProgress);

/* ── Search ── */

function openSearch() {
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('global-search-input');
  if (overlay) {
    overlay.classList.add('open');
    input?.focus();
  }
}

function closeSearch(e) {
  const overlay = document.getElementById('search-overlay');
  const modal = document.querySelector('.search-modal');
  if (e && modal && e.target !== modal && !modal.contains(e.target)) {
    if (overlay) overlay.classList.remove('open');
  }
}

function runSearch(val) {
  const input = val.toLowerCase();
  const resultsList = document.getElementById('search-results-list');
  if (!resultsList) return;

  if (input.length === 0) {
    resultsList.innerHTML = '';
    return;
  }

  // Mock search - in production, search against actual documentation
  const results = [
    { title: 'Installation', section: 'Getting Started', url: '#install' },
    { title: 'API Keys', section: 'Setup', url: '#genkey' },
    { title: 'Configuration', section: 'Configuration', url: '#cfginst' },
    { title: 'Orders', section: 'Operations', url: '#iunship' },
    { title: 'Products', section: 'Products', url: '#iprod' }
  ].filter(r =>
    r.title.toLowerCase().includes(input) ||
    r.section.toLowerCase().includes(input)
  );

  resultsList.innerHTML = results.length ? results.map(r => `
    <div class="search-result-item" onclick="location.href='${r.url}'">
      <div class="sr-title">${r.title}</div>
      <div class="sr-section">${r.section}</div>
    </div>
  `).join('') : '<div class="search-empty">No results found</div>';
}

/* ── Version Selection ── */

function handleVersionChange(v) {
  alert(`Switching to ${v} documentation.\n\nThis demo is loaded with v18 content.\nFor full multi-version docs, visit:\nhttps://sdlccorp.com/services/odoo-integration-services/`);
}

/* ── Keyboard Shortcuts ── */

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
  if (e.key === 'Escape') {
    closeSearch(e);
  }
});

/* ── Smooth Scroll & Initial State ── */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize progress bar
  updateProgress();

  // Initialize first page
  const firstPage = document.querySelector('.page');
  if (firstPage) {
    firstPage.classList.add('active', 'visible');
    const pageId = firstPage.id.replace('page-', '');
    updateSidebarActive(pageId);
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// END OF APPLICATION JAVASCRIPT
// ═══════════════════════════════════════════════════════════════════════════

