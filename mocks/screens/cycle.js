export function CreateTalentPlanningCycle() {
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Create Talent Planning Cycle';

  const placeholder = document.createElement('div');
  placeholder.className = 'card placeholder';
  placeholder.style.padding = '24px';
  placeholder.style.border = '1px dashed var(--border)';
  placeholder.style.borderRadius = '12px';
  placeholder.style.background = 'var(--panel)';
  placeholder.style.color = 'var(--muted)';
  placeholder.textContent = 'Specs pending. Provide layout/instructions to build this screen.';

  wrap.append(title, placeholder);
  return wrap;
}

