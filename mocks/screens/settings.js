import { getState, toggleTheme, setState } from '../state.js';

export function Settings() {
  const s = getState();
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Settings';

  const themeRow = document.createElement('div');
  themeRow.className = 'form-row';
  const themeBtn = document.createElement('button');
  themeBtn.className = 'button';
  themeBtn.textContent = `Theme: ${s.theme} (toggle)`;
  themeBtn.onclick = () => { toggleTheme(); themeBtn.textContent = `Theme: ${getState().theme} (toggle)`; applyTheme(); };
  themeRow.appendChild(themeBtn);

  const stagesRow = document.createElement('div');
  stagesRow.className = 'form-row';
  const input = document.createElement('input');
  input.className = 'input';
  input.value = s.pipelineStages.join(', ');
  const save = document.createElement('button');
  save.className = 'button primary';
  save.textContent = 'Save Stages';
  save.onclick = () => {
    const stages = input.value.split(',').map(x => x.trim()).filter(Boolean);
    setState({ pipelineStages: stages });
  };
  stagesRow.append('Pipeline stages (comma separated):', input, save);

  wrap.append(title, themeRow, stagesRow);
  return wrap;
}

function applyTheme() {
  const theme = getState().theme;
  document.documentElement.setAttribute('data-theme', theme);
}

