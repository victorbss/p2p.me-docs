import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  let lastActiveLink = null;

  const scrollActiveIntoView = () => {
    const tocContainer = document.querySelector('.theme-doc-toc-desktop');
    if (!tocContainer) return;

    const activeLink = tocContainer.querySelector('.table-of-contents__link--active');
    if (!activeLink || activeLink === lastActiveLink) return;

    lastActiveLink = activeLink;

    // Get the scrollable container (the ul inside theme-doc-toc-desktop)
    const scrollContainer = tocContainer.querySelector('.table-of-contents') || tocContainer;
    
    const containerRect = tocContainer.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    // Check if active link is outside visible area of the TOC
    const isAbove = linkRect.top < containerRect.top + 50;
    const isBelow = linkRect.bottom > containerRect.bottom - 50;

    if (isAbove || isBelow) {
      // Calculate scroll position to center the active link
      const linkOffsetTop = activeLink.offsetTop;
      const containerHeight = tocContainer.clientHeight;
      const scrollTo = linkOffsetTop - (containerHeight / 2) + (activeLink.clientHeight / 2);

      tocContainer.scrollTo({
        top: Math.max(0, scrollTo),
        behavior: 'smooth'
      });
    }
  };

  // Use scroll event on main content to detect changes
  const init = () => {
    // Check periodically and on scroll
    let scrollTimeout;
    const onScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(scrollActiveIntoView, 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Also use MutationObserver as backup
    const observer = new MutationObserver(() => {
      scrollActiveIntoView();
    });

    const startObserving = () => {
      const tocContainer = document.querySelector('.theme-doc-toc-desktop');
      if (tocContainer) {
        observer.observe(tocContainer, {
          attributes: true,
          subtree: true,
          attributeFilter: ['class'],
        });
        // Initial check
        scrollActiveIntoView();
      } else {
        setTimeout(startObserving, 500);
      }
    };

    startObserving();

    // Re-initialize on route change (SPA navigation)
    if (typeof window !== 'undefined') {
      const originalPushState = history.pushState;
      history.pushState = function() {
        originalPushState.apply(this, arguments);
        setTimeout(startObserving, 100);
      };
    }
  };

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }
}
