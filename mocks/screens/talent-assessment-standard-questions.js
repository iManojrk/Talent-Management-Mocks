const SETUP_DESCRIPTION =
  'Set up the talent assessment questions. These questions are automatically added to every new talent assessment, and you can still edit or remove them while configuring individual talent assessments.';

export function TalentAssessmentStandardQuestions() {
  const page = document.createElement('div');
  page.className = 'talent-assessment-standard';

  const intro = document.createElement('div');
  intro.className = 'talent-assessment-standard__intro';
  intro.innerHTML = `
    <p class="talent-assessment-standard__eyebrow">Talent Assessment</p>
    <h1>Talent Assessment Standard Questions</h1>
  `;

  const setupSection = document.createElement('section');
  setupSection.className = 'talent-assessment-standard__setup';
  setupSection.innerHTML = `
    <h2>First-Time Setup</h2>
    <p>${SETUP_DESCRIPTION}</p>
    <button type="button" class="talent-assessment-standard__setup-btn">Setup Talent Assessment Questions</button>
  `;

  const questionsSection = document.createElement('div');
  questionsSection.className = 'talent-assessment-standard__questions';
  questionsSection.innerHTML = buildQuestionsMarkup();
  enableStandardToggleControls(questionsSection);
  initQuestionInteractivity(questionsSection);

  setupSection
    .querySelector('.talent-assessment-standard__setup-btn')
    .addEventListener('click', () => {
      setupSection.style.display = 'none';
      questionsSection.classList.add('is-visible');
    });

  page.append(intro, setupSection, questionsSection);
  return page;
}

function buildQuestionsMarkup() {
  return `
    <section class="cycle-proposed__panel cycle-proposed__question-layout">
      <div>
        <p class="talent-assessment-standard__question-description">${SETUP_DESCRIPTION}</p>
        <div class="cycle-proposed__question-card">
          <div class="cycle-proposed__question-main">
            <label class="cycle-proposed__field cycle-proposed__field--question">
              <span>Question*</span>
              <input class="cycle-proposed__input" value="Potential" disabled />
              <small>Question should not exceed 30 characters (ex. Potential, Performance, Impact of Loss).</small>
            </label>
            <div class="cycle-proposed__field cycle-proposed__toggle-field is-hidden"></div>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3">The degree to which an associate has demonstrated initial mastery of skills required to do their current role and a high likelihood of being able to make an impact in a larger scope.</textarea>
            </label>

            <div class="cycle-proposed__options">
              ${['Low','Medium','High'].map(option => `
                <div class="cycle-proposed__option-row">
                  <label class="cycle-proposed__radio">
                    <input type="radio" name="proposedQuestionOne" />
                  </label>
                  <input class="cycle-proposed__input" value="${option}" disabled />
                  <span class="cycle-proposed__icon-placeholder"></span>
                </div>
              `).join('')}
            </div>
            <button class="cycle-proposed__link-btn">+ Add Option</button>
          </div>
        </div>

        <div class="cycle-proposed__question-card">
          <div class="cycle-proposed__question-main">
            <label class="cycle-proposed__field cycle-proposed__field--question">
              <span>Question*</span>
              <input class="cycle-proposed__input" value="Performance" disabled />
            </label>
            <div class="cycle-proposed__field cycle-proposed__toggle-field is-hidden"></div>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3">Measures the overall execution and business impact demonstrated in the associate's most recent review cycle.</textarea>
            </label>

            <div class="cycle-proposed__options">
              ${['Low','Medium','High'].map(option => `
                <div class="cycle-proposed__option-row">
                  <label class="cycle-proposed__radio">
                    <input type="radio" name="proposedQuestionTwo" />
                  </label>
                  <input class="cycle-proposed__input" value="${option}" disabled />
                  <span class="cycle-proposed__icon-placeholder"></span>
                </div>
              `).join('')}
            </div>
            <button class="cycle-proposed__link-btn">+ Add Option</button>
          </div>
        </div>

        <div class="cycle-proposed__question-card">
          <div class="cycle-proposed__question-main">
            <label class="cycle-proposed__field cycle-proposed__field--question">
              <span>Question*</span>
              <input class="cycle-proposed__input" value="Risk of Loss" disabled />
            </label>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3" disabled>Likelihood the associate will depart in the next 12 months based on intent, engagement, and market pull.</textarea>
            </label>

            <div class="cycle-proposed__options">
              ${['Low','Medium','High'].map(option => `
                <div class="cycle-proposed__option-row">
                  <label class="cycle-proposed__radio">
                    <input type="radio" name="proposedQuestionThree" />
                  </label>
                  <input class="cycle-proposed__input" value="${option}" disabled />
                  <span class="cycle-proposed__icon-placeholder"></span>
                </div>
              `).join('')}
            </div>
            <button class="cycle-proposed__link-btn" disabled>+ Add Option</button>
          </div>
        </div>

        <div class="cycle-proposed__question-card">
          <div class="cycle-proposed__question-main">
            <label class="cycle-proposed__field cycle-proposed__field--question">
              <span>Question*</span>
              <input class="cycle-proposed__input" value="Impact of Loss" disabled />
            </label>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3" disabled>The impact on the organization if an associate leaves or transitions roles, including difficulty to replace and knowledge at risk.</textarea>
            </label>

            <div class="cycle-proposed__options">
              ${['Low','Medium','High','N/A'].map(option => `
                <div class="cycle-proposed__option-row">
                  <label class="cycle-proposed__radio">
                    <input type="radio" name="proposedQuestionFour" />
                  </label>
                  <input class="cycle-proposed__input" value="${option}" disabled />
                  <span class="cycle-proposed__icon-placeholder"></span>
                </div>
              `).join('')}
            </div>
            <button class="cycle-proposed__link-btn" disabled>+ Add Option</button>
          </div>
        </div>

        <div class="cycle-proposed__question-card" data-question="readiness">
          <div class="cycle-proposed__question-main">
            <label class="cycle-proposed__field cycle-proposed__field--question">
              <span>Question*</span>
              <input class="cycle-proposed__input" value="Readiness" />
            </label>
            <button class="cycle-proposed__toggle-container is-on" type="button" data-toggle="required">
              <span>Required</span>
              <div class="cycle-proposed__toggle cycle-proposed__toggle--interactive is-on"><span></span></div>
            </button>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3">The extent to which the associate has the skills and experiences needed to be successful in their envisioned next role.</textarea>
            </label>

            <div class="cycle-proposed__options">
              ${['Ready now','6 - 12 months','12 - 24 months'].map(option => `
                <div class="cycle-proposed__option-row">
                  <label class="cycle-proposed__radio">
                    <input type="radio" name="proposedQuestionFive" />
                  </label>
                  <input class="cycle-proposed__input" value="${option}" />
                  <button class="cycle-proposed__icon-btn" title="Remove option">🗑</button>
                </div>
              `).join('')}
            </div>
            <button class="cycle-proposed__link-btn">+ Add Option</button>
          </div>
          <button class="cycle-proposed__icon-btn cycle-proposed__question-delete" type="button" title="Remove question">🗑</button>
        </div>

        <div class="cycle-proposed__question-card" data-question="next-move">
          <div class="cycle-proposed__question-main">
            <label class="cycle-proposed__field cycle-proposed__field--question">
              <span>Question*</span>
              <input class="cycle-proposed__input" value="Next Move" />
            </label>
            <button class="cycle-proposed__toggle-container is-on" type="button" data-toggle="required">
              <span>Required</span>
              <div class="cycle-proposed__toggle cycle-proposed__toggle--interactive is-on"><span></span></div>
            </button>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3">Based on capabilities, drive, and interests, identify the role you see this associate growing into next.</textarea>
            </label>

            <div class="cycle-proposed__options">
              ${['Individual Contributor','Manager','Director','N/A'].map(option => `
                <div class="cycle-proposed__option-row">
                  <label class="cycle-proposed__radio">
                    <input type="radio" name="proposedQuestionSix" />
                  </label>
                  <input class="cycle-proposed__input" value="${option}" />
                  <button class="cycle-proposed__icon-btn" title="Remove option">🗑</button>
                </div>
              `).join('')}
            </div>
            <button class="cycle-proposed__link-btn">+ Add Option</button>
          </div>
          <button class="cycle-proposed__icon-btn cycle-proposed__question-delete" type="button" title="Remove question">🗑</button>
        </div>
        <button class="cycle-proposed__link-btn cycle-proposed__link-btn--question">+ Add Question</button>
      </div>
    </section>
  `;
}

function initQuestionInteractivity(container) {
  const cardsWrapper = container.querySelector('.cycle-proposed__question-layout > div');
  if (!cardsWrapper) return;
  const addQuestionBtn = cardsWrapper.querySelector('.cycle-proposed__link-btn--question');
  const hiddenQueue = [];
  ['readiness', 'next-move'].forEach(key => {
    const card = cardsWrapper.querySelector(`[data-question="${key}"]`);
    if (card) {
      hiddenQueue.push(card);
      card.remove();
    }
  });

  if (!addQuestionBtn) return;
  let pendingCard = null;
  addQuestionBtn.disabled = hiddenQueue.length === 0;

  function createPendingCard() {
    const card = document.createElement('div');
    card.className = 'cycle-proposed__question-card cycle-proposed__question-card--pending';
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="cycle-proposed__question-main">
        <label class="cycle-proposed__field cycle-proposed__field--question">
          <span>Question*</span>
          <input class="cycle-proposed__input" placeholder="Question title" readonly />
        </label>
        <label class="cycle-proposed__field cycle-proposed__field--description">
          <span>Question Description</span>
          <textarea class="cycle-proposed__input" rows="3" placeholder="Add guidance" readonly></textarea>
        </label>
        <div class="cycle-proposed__options">
          <div class="cycle-proposed__option-row">
            <label class="cycle-proposed__radio">
              <input type="radio" disabled />
            </label>
            <input class="cycle-proposed__input" placeholder="Option" readonly />
            <span class="cycle-proposed__icon-placeholder"></span>
          </div>
        </div>
      </div>
      <p class="talent-assessment-standard__pending-hint">Click to load the next standard question</p>
    `;

    const activate = () => {
      card.removeEventListener('click', activate);
      card.removeEventListener('keypress', handleKeyPress);
      const template = hiddenQueue.shift();
      if (template) {
        card.replaceWith(template);
      } else {
        card.remove();
      }
      pendingCard = null;
      addQuestionBtn.disabled = hiddenQueue.length === 0;
    };

    const handleKeyPress = evt => {
      if (evt.key === 'Enter' || evt.key === ' ') {
        evt.preventDefault();
        activate();
      }
    };

    card.addEventListener('click', activate);
    card.addEventListener('keypress', handleKeyPress);
    return card;
  }

  addQuestionBtn.addEventListener('click', () => {
    if (!hiddenQueue.length || pendingCard) return;
    pendingCard = createPendingCard();
    cardsWrapper.insertBefore(pendingCard, addQuestionBtn);
    addQuestionBtn.disabled = true;
  });
}

function enableStandardToggleControls(scope) {
  scope
    .querySelectorAll('[data-toggle="required"]')
    .forEach(btn => {
      if (btn.dataset.toggleBound) return;
      btn.dataset.toggleBound = 'true';
      btn.addEventListener('click', () => {
        btn.classList.toggle('is-on');
        const slider = btn.querySelector('.cycle-proposed__toggle');
        slider?.classList.toggle('is-on');
      });
    });
}
