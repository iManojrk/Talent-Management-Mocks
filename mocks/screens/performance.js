export function PerformanceEvaluation() {
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Performance Evaluation';

  const placeholder = document.createElement('div');
  placeholder.className = 'card placeholder';
  placeholder.style.padding = '24px';
  placeholder.style.border = '1px dashed var(--border)';
  placeholder.style.borderRadius = '12px';
  placeholder.style.background = 'var(--panel)';
  placeholder.style.color = 'var(--muted)';
  placeholder.textContent = 'Content coming soon. Provide layout when ready.';

  wrap.append(title, placeholder);
  return wrap;
}
