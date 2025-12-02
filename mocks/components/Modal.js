export function Modal() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  const modal = document.createElement('div');
  modal.className = 'modal';
  backdrop.appendChild(modal);

  function open({ title = '', body, actions = [], className = '', titleClassName = '' }) {
    modal.className = ['modal', className].filter(Boolean).join(' ');
    modal.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'modal-header';
    if (title) {
      const heading = document.createElement('h3');
      heading.className = ['modal-title', titleClassName].filter(Boolean).join(' ');
      heading.textContent = title;
      header.appendChild(heading);
    } else {
      header.classList.add('modal-header--minimal');
    }
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '';
    closeBtn.onclick = close;
    header.appendChild(closeBtn);

    const content = document.createElement('div');
    content.className = 'modal-body';
    if (typeof body === 'string') content.innerHTML = body; else content.appendChild(body);

    let footer;
    if (actions.length) {
      footer = document.createElement('div');
      footer.className = 'footer';
      actions.forEach(a => {
        const btn = document.createElement('button');
        btn.className = 'button primary';
        btn.textContent = a.label;
        btn.onclick = () => a.onClick?.(close);
        footer.appendChild(btn);
      });
    }

    modal.append(header, content);
    if (footer) modal.appendChild(footer);
    document.body.appendChild(backdrop);
    setTimeout(() => backdrop.addEventListener('click', e => { if (e.target === backdrop) close(); }), 0);
  }

  function close() {
    backdrop.remove();
  }

  return { open, close };
}
