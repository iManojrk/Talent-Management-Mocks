import { getState, setState } from '../state.js';
import { Table } from '../components/Table.js';

export function Reviews() {
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Performance Reviews';

  const s = getState();
  const cols = [
    { key: 'cycle', label: 'Cycle' },
    { key: 'dueDate', label: 'Due' },
    { key: 'status', label: 'Status', render: (v, row) => `
      <select data-id="${row.id}" class="input">
        ${['Not Started','In Progress','Complete'].map(x => `<option ${x===v?'selected':''}>${x}</option>`).join('')}
      </select>
    ` },
  ];
  const table = Table({ columns: cols, rows: s.reviews, sortable: false });

  table.addEventListener('change', (e) => {
    const sel = e.target.closest('select[data-id]');
    if (!sel) return;
    const id = sel.getAttribute('data-id');
    const next = sel.value;
    const reviews = s.reviews.map(r => r.id===id ? { ...r, status: next } : r);
    setState({ reviews });
  });

  wrap.append(title, table);
  return wrap;
}

