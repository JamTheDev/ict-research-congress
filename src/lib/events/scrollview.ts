const isElementsInView = (
  _callback: (visibleElements: Element) => {},
): IntersectionObserver => {
  const options: IntersectionObserverInit = {
    root: null,
    threshold: 0.5,
  };

  const _observerCallback: IntersectionObserverCallback = (
    entries,
    observer,
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) _callback?.(entry.target);
    });
  };

  return new IntersectionObserver(_observerCallback, options);
};

export default isElementsInView;
