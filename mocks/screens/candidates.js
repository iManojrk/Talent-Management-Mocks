import { getState, addCandidate } from '../state.js';
import { Table } from '../components/Table.js';
import { Modal } from '../components/Modal.js';

export function Candidates() {
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Candidates';

  const actions = document.createElement('div');
  actions.className = 'table-toolbar';
  const addBtn = document.createElement('button');
  addBtn.className = 'button primary';
  addBtn.textContent = 'Add Candidate';
  addBtn.onclick = () => openAddModal();
  actions.appendChild(addBtn);

  const s = getState();
  const cols = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'stage', label: 'Stage', render: (v) => `<span class="chip">${v}</span>` },
    { key: 'location', label: 'Location' },
    { key: 'source', label: 'Source' },
    { key: 'score', label: 'Score' },
  ];
  const table = Table({ columns: cols, rows: s.candidates });

  wrap.append(title, actions, table);
  return wrap;
}

function openAddModal() {
  const modal = Modal();
  const form = document.createElement('div');
  form.innerHTML = `
    <div class="form-row"><label>Name</label><input class="input" name="name" /></div>
    <div class="form-row"><label>Role</label><input class="input" name="role" /></div>
    <div class="form-row"><label>Location</label><input class="input" name="location" /></div>
    <div class="form-row"><label>Source</label><input class="input" name="source" value="Referral" /></div>
    <div class="form-row"><label>Stage</label>
      <select name="stage">
        <option>Sourced</option>
        <option>Screening</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Hired</option>
      </select>
    </div>
    <div class="form-row"><label>Score</label><input class="input" name="score" type="number" value="75" /></div>
  `;
  modal.open({
    title: 'Add Candidate',
    body: form,
    actions: [{
      label: 'Save',
      onClick: (close) => {
        const data = Object.fromEntries(Array.from(form.querySelectorAll('[name]')).map(i => [i.name, i.value]));
        data.score = Number(data.score || 0);
        addCandidate(data);
        close();
      }
    }]
  });
}

