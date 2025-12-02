import { Modal } from '../components/Modal.js?v=20250205';

export function Touchpoints() {
  const page = document.createElement('section');
  page.className = 'touchpoints';
  const requestModal = Modal();
  const heading = document.createElement('h2');
  heading.textContent = 'Touchpoints';
  const subtitle = document.createElement('p');
  subtitle.className = 'touchpoints__subtitle';
  subtitle.textContent = 'A log of touchpoints completed by your manager, both in progress and completed.';
  const actions = document.createElement('div');
  actions.className = 'touchpoints__subrow';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn primary touchpoints__start';
  button.textContent = 'Start Touchpoint';
  button.addEventListener('click', () => {
    requestModal.open({
      title: '',
      body: buildTouchpointModal(requestModal)
    });
  });
  actions.append(subtitle, button);
  page.append(heading, actions);
  return page;
}

function buildTouchpointModal(modalInstance) {
  const container = document.createElement('div');
  container.className = 'touchpoint-modal';
  container.innerHTML = `
    <h2>Touchpoint Request</h2>
    <section class="touchpoint-modal__section">
      <h3>Details</h3>
      <div class="touchpoint-modal__details">
        <div>
          <p class="touchpoint-modal__label">Name</p>
          <p class="touchpoint-modal__value">On-Demand: 12/02/2025</p>
        </div>
        <div>
          <p class="touchpoint-modal__label">Touchpoint Duration</p>
          <p class="touchpoint-modal__value">5 days</p>
        </div>
      </div>
    </section>
    <section class="touchpoint-modal__section">
      <h3>Goals</h3>
      <div class="touchpoint-modal__goal-callout">
        <span class="touchpoint-modal__goal-icon">i</span>
        <p>Goals will be captured as of <strong>12/02/2025</strong> (start date of this Touchpoint)</p>
      </div>
    </section>
    <section class="touchpoint-modal__section">
      <div class="touchpoint-modal__section-header">
        <div>
          <h3>Custom Section</h3>
          <p class="touchpoint-modal__label">Question Set</p>
          <div class="touchpoint-modal__question-row">
            <p class="touchpoint-modal__value">A Custom Question set - Oct 20</p>
            <button class="touchpoint-modal__link" type="button">View Questions</button>
          </div>
        </div>
      </div>
    </section>
    <section class="touchpoint-modal__section">
      <h3>Touchpoint Request made to</h3>
      <div class="touchpoint-modal__person-card">
        <div class="touchpoint-modal__person-avatar">K</div>
        <div>
          <p class="touchpoint-modal__person-name">Kapil Nagrale</p>
          <p class="touchpoint-modal__person-role">JobTemplate1</p>
        </div>
      </div>
    </section>
    <section class="touchpoint-modal__section">
      <label class="touchpoint-modal__textarea-label">
        <span>Email Notification to Manager</span>
        <textarea class="touchpoint-modal__textarea" rows="4" placeholder="Share with your manager any specific goal or area you would like feedback on"></textarea>
      </label>
      <p class="touchpoint-modal__helper">Share with your manager any specific goal or area you would like feedback on</p>
    </section>
    <div class="touchpoint-modal__actions">
      <button type="button" class="btn outline touchpoint-modal__action" data-touchpoint-action="cancel">Cancel</button>
      <button type="button" class="btn primary touchpoint-modal__action" data-touchpoint-action="send">Send Request</button>
    </div>
  `;

  const close = () => modalInstance.close();
  container.querySelector('[data-touchpoint-action="cancel"]')?.addEventListener('click', close);
  container.querySelector('[data-touchpoint-action="send"]')?.addEventListener('click', close);

  return container;
}
