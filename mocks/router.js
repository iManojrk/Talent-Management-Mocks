export function createRouter({ routes, onChange }) {
  const findRoute = (hash) => {
    const path = hash.replace(/^#/, '') || '/org';
    return routes[path] ? path : '/org';
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
