export function createRouter({ routes, onChange }) {
  const defaultPath = '/talent-management';
  const findRoute = (hash) => {
    const path = hash.replace(/^#/, '') || defaultPath;
    return routes[path] ? path : defaultPath;
  };

  let current = findRoute(location.hash);

  const handle = () => {
    const path = findRoute(location.hash);
    if (path !== current) {
      current = path;
    }
    onChange(path, routes[path]);
  };

  window.addEventListener('hashchange', handle);
  // initial
  handle();

  return {
    navigate: (path) => { location.hash = path; },
    current: () => current,
  };
}
