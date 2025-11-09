import { getState, onState } from '../state.js';
import { Kanban } from '../components/Kanban.js';

export function Pipeline() {
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Pipeline';

  const container = document.createElement('div');

  function render() {
    const s = getState();
    container.innerHTML = '';
    container.appendChild(Kanban({ stages: s.pipelineStages, items: s.candidates }));
  }

  render();
  const off = onState(render);
  wrap.addEventListener('removed', off, { once: true });

  wrap.append(title, container);
  return wrap;
}

