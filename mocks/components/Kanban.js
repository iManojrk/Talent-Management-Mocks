import { moveCandidate } from '../state.js';

export function Kanban({ stages, items }) {
  const board = document.createElement('div');
  board.className = 'kanban';

  const byStage = (stage) => items.filter(i => i.stage === stage);

  stages.forEach(stage => {
    const col = document.createElement('div');
    col.className = 'col';
    col.dataset.stage = stage;
    col.ondragover = (e) => e.preventDefault();
    col.ondrop = (e) => {
      const id = e.dataTransfer.getData('text/plain');
      moveCandidate(id, stage);
    };

    const header = document.createElement('div');
    header.className = 'col-header';
    const count = byStage(stage).length;
    header.innerHTML = `<div>${stage}</div><div class="chip">${count}</div>`;

    const body = document.createElement('div');
    body.className = 'col-body';
    byStage(stage).forEach(item => body.appendChild(card(item)));

    col.append(header, body);
    board.appendChild(col);
  });

  function card(item) {
    const el = document.createElement('div');
    el.className = 'card';
    el.draggable = true;
    el.ondragstart = (e) => e.dataTransfer.setData('text/plain', item.id);
    el.innerHTML = `
      <div class="title">${item.name}</div>
      <div class="meta">${item.role} · ${item.location}</div>
    `;
    return el;
  }

  return board;
}

