export function Table({ columns, rows, sortable = true, filterable = true }) {
  const wrapper = document.createElement('div');
  wrapper.className = 'table-card';

  const toolbar = document.createElement('div');
  toolbar.className = 'table-toolbar';

  const filter = document.createElement('input');
  filter.type = 'search';
  filter.placeholder = 'Filter…';
  filter.className = 'input';
  if (filterable) toolbar.appendChild(filter);
  wrapper.appendChild(toolbar);

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const state = { sortKey: null, sortDir: 'asc', q: '' };

  const apply = () => {
    let data = rows.slice();
    if (state.q) {
      const q = state.q.toLowerCase();
      data = data.filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(q)));
    }
    if (state.sortKey) {
      const { sortKey, sortDir } = state;
      data.sort((a,b) => {
        const av = a[sortKey]; const bv = b[sortKey];
        if (av === bv) return 0; return (av > bv ? 1 : -1) * (sortDir === 'asc' ? 1 : -1);
      });
    }
    renderBody(data);
  };

  columns.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col.label;
    if (sortable && col.key) {
      th.style.cursor = 'pointer';
      th.title = 'Sort';
      th.onclick = () => {
        if (state.sortKey === col.key) state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
        state.sortKey = col.key;
        apply();
      };
    }
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  function renderBody(data) {
    tbody.innerHTML = '';
    data.forEach(row => {
      const tr = document.createElement('tr');
      columns.forEach(col => {
        const td = document.createElement('td');
        td.innerHTML = col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '');
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }

  filter.oninput = (e) => { state.q = e.target.value; apply(); };

  wrapper.appendChild(table);
  apply();
  return wrapper;
}

