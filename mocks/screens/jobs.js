import { getState } from '../state.js';
import { Table } from '../components/Table.js';

export function Jobs() {
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Jobs';

  const s = getState();
  const cols = [
    { key: 'title', label: 'Title' },
    { key: 'department', label: 'Department' },
    { key: 'openings', label: 'Openings' },
    { key: 'status', label: 'Status', render: v => `<span class="chip ${v==='Open' ? 'success' : v==='Paused' ? 'warn' : 'danger'}">${v}</span>` },
  ];
  const table = Table({ columns: cols, rows: s.jobs });

  wrap.append(title, table);
  return wrap;
}

