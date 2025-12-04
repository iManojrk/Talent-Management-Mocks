const SETUP_DESCRIPTION =
  'Set up the talent assessment questions. These questions are automatically added to every new talent assessment, and you can still edit or remove them while configuring individual talent assessments.';
const TRASH_ICON = '<svg class="icon icon-trash" aria-hidden="true"><use href="#icon-trash"></use></svg>';

export function TalentAssessmentStandardQuestions() {
  const page = document.createElement('div');
  page.className = 'talent-assessment-standard';

  const intro = document.createElement('div');
  intro.className = 'talent-assessment-standard__intro';
  intro.innerHTML = `
    <h2>Talent Assessment Standard Questions</h2>
  `;

  const setupSection = document.createElement('section');
  setupSection.className = 'talent-assessment-standard__setup';
  setupSection.innerHTML = `
    <div class="talent-assessment-standard__setup-body">
      <h3>First-Time Setup</h3>
      <p>${SETUP_DESCRIPTION}</p>
      <button type="button" class="btn primary talent-assessment-standard__setup-btn">Setup Talent Assessment Questions</button>
    </div>
  `;

  const questionsSection = document.createElement('div');
  questionsSection.className = 'talent-assessment-standard__questions';
  questionsSection.innerHTML = buildQuestionsMarkup();
  enableStandardToggleControls(questionsSection);
  enableOptionControls(questionsSection);
  enableQuestionDeleteControls(questionsSection);
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
            <div class="cycle-proposed__field cycle-proposed__field--question cycle-proposed__field--static">
              <span>Question*</span>
              <p class="cycle-proposed__static-value">Potential</p>
            </div>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3">The degree to which an associate has demonstrated initial mastery of skills required to do their current role and a high likelihood of being able to make an impact in a larger scope.</textarea>
            </label>

            <div class="cycle-proposed__options cycle-proposed__options--static">
              <span class="cycle-proposed__options-label">Options</span>
              ${['Low','Medium','High'].map(option => `<span class="cycle-proposed__option-pill">${option}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="cycle-proposed__question-card">
          <div class="cycle-proposed__question-main">
            <div class="cycle-proposed__field cycle-proposed__field--question cycle-proposed__field--static">
              <span>Question*</span>
              <p class="cycle-proposed__static-value">Performance</p>
            </div>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3">Measures the overall execution and business impact demonstrated in the associate's most recent review cycle.</textarea>
            </label>

            <div class="cycle-proposed__options cycle-proposed__options--static">
              <span class="cycle-proposed__options-label">Options</span>
              ${['Low','Medium','High'].map(option => `<span class="cycle-proposed__option-pill">${option}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="cycle-proposed__question-card">
          <div class="cycle-proposed__question-main">
            <div class="cycle-proposed__field cycle-proposed__field--question cycle-proposed__field--static">
              <span>Question*</span>
              <p class="cycle-proposed__static-value">Risk of Loss</p>
            </div>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3">Likelihood the associate will depart in the next 12 months based on intent, engagement, and market pull.</textarea>
            </label>

            <div class="cycle-proposed__options cycle-proposed__options--static">
              <span class="cycle-proposed__options-label">Options</span>
              ${['Low','Medium','High'].map(option => `<span class="cycle-proposed__option-pill">${option}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="cycle-proposed__question-card">
          <div class="cycle-proposed__question-main">
            <div class="cycle-proposed__field cycle-proposed__field--question cycle-proposed__field--static">
              <span>Question*</span>
              <p class="cycle-proposed__static-value">Impact of Loss</p>
            </div>
            <label class="cycle-proposed__field cycle-proposed__field--description">
              <span>Question Description</span>
              <textarea class="cycle-proposed__input" rows="3">The impact on the organization if an associate leaves or transitions roles, including difficulty to replace and knowledge at risk.</textarea>
            </label>

            <div class="cycle-proposed__options cycle-proposed__options--static">
              <span class="cycle-proposed__options-label">Options</span>
              ${['Low','Medium','High','N/A'].map(option => `<span class="cycle-proposed__option-pill">${option}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="cycle-proposed__question-card" data-question="readiness">
          <div class="cycle-proposed__question-main">
            <div class="cycle-proposed__question-top">
              <label class="cycle-proposed__field cycle-proposed__field--question">
                <span>Question*</span>
                <input class="cycle-proposed__input" value="Readiness" />
              </label>
            </div>
            <div class="cycle-proposed__field cycle-proposed__toggle-field">
              <span>Required</span>
              <button class="cycle-proposed__toggle cycle-proposed__toggle--interactive is-on" type="button" data-toggle="required"><span></span></button>
            </div>
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
                  <button class="cycle-proposed__icon-btn" title="Remove option">${TRASH_ICON}</button>
                </div>
              `).join('')}
            </div>
            <button class="cycle-proposed__link-btn">+ Add Option</button>
          </div>
          <button class="cycle-proposed__icon-btn cycle-proposed__question-delete" type="button" title="Remove question">${TRASH_ICON}</button>
        </div>

        <div class="cycle-proposed__question-card" data-question="next-move">
          <div class="cycle-proposed__question-main">
            <div class="cycle-proposed__question-top">
              <label class="cycle-proposed__field cycle-proposed__field--question">
                <span>Question*</span>
                <input class="cycle-proposed__input" value="Next Move" />
              </label>
            </div>
            <div class="cycle-proposed__field cycle-proposed__toggle-field">
              <span>Required</span>
              <button class="cycle-proposed__toggle cycle-proposed__toggle--interactive is-on" type="button" data-toggle="required"><span></span></button>
            </div>
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
                  <button class="cycle-proposed__icon-btn" title="Remove option">${TRASH_ICON}</button>
                </div>
              `).join('')}
            </div>
            <button class="cycle-proposed__link-btn">+ Add Option</button>
          </div>
          <button class="cycle-proposed__icon-btn cycle-proposed__question-delete" type="button" title="Remove question">${TRASH_ICON}</button>
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
  addQuestionBtn.disabled = hiddenQueue.length === 0;

  const createEmptyQuestionCard = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'cycle-proposed__question-card';
    const optionGroup = `customQuestion${Date.now()}`;
    wrapper.innerHTML = `
      <div class="cycle-proposed__question-main">
        <div class="cycle-proposed__question-top">
          <label class="cycle-proposed__field cycle-proposed__field--question">
            <span>Question*</span>
            <input class="cycle-proposed__input" placeholder="Enter question title" />
          </label>
        </div>
        <div class="cycle-proposed__field cycle-proposed__toggle-field">
          <span>Required</span>
          <button class="cycle-proposed__toggle cycle-proposed__toggle--interactive is-on" type="button" data-toggle="required"><span></span></button>
        </div>
        <label class="cycle-proposed__field cycle-proposed__field--description">
          <span>Question Description</span>
          <textarea class="cycle-proposed__input" rows="3" placeholder="Add guidance for reviewers"></textarea>
        </label>
        <div class="cycle-proposed__options">
          <div class="cycle-proposed__option-row">
            <label class="cycle-proposed__radio">
              <input type="radio" name="${optionGroup}" />
            </label>
            <input class="cycle-proposed__input" placeholder="Option" />
            <button class="cycle-proposed__icon-btn" type="button" title="Remove option">${TRASH_ICON}</button>
          </div>
        </div>
        <button class="cycle-proposed__link-btn" type="button">+ Add Option</button>
      </div>
      <button class="cycle-proposed__icon-btn cycle-proposed__question-delete" type="button" title="Remove question">${TRASH_ICON}</button>
    `;

    const optionsContainer = wrapper.querySelector('.cycle-proposed__options');
    const addOptionBtn = wrapper.querySelector('.cycle-proposed__link-btn');

    const createOptionRow = () => {
      const row = document.createElement('div');
      row.className = 'cycle-proposed__option-row';
      row.innerHTML = `
        <label class="cycle-proposed__radio">
          <input type="radio" name="${optionGroup}" />
        </label>
        <input class="cycle-proposed__input" placeholder="Option" />
        <button class="cycle-proposed__icon-btn" type="button" title="Remove option">${TRASH_ICON}</button>
      `;
      return row;
    };

    addOptionBtn?.addEventListener('click', () => {
      optionsContainer.appendChild(createOptionRow());
    });

      optionsContainer.addEventListener('click', event => {
        const removeBtn = event.target.closest('.cycle-proposed__icon-btn');
        if (!removeBtn || removeBtn.classList.contains('cycle-proposed__question-delete')) return;
        const row = removeBtn.closest('.cycle-proposed__option-row');
        if (row && optionsContainer.children.length > 1) {
          row.remove();
        }
      });

    return wrapper;
  };

  addQuestionBtn.addEventListener('click', () => {
    if (hiddenQueue.length) {
      const nextCard = hiddenQueue.shift();
      if (nextCard) {
        cardsWrapper.insertBefore(nextCard, addQuestionBtn);
        enableStandardToggleControls(nextCard);
        enableOptionControls(nextCard);
        enableQuestionDeleteControls(nextCard);
      }
      addQuestionBtn.disabled = false;
      return;
    }

    const emptyCard = createEmptyQuestionCard();
    cardsWrapper.insertBefore(emptyCard, addQuestionBtn);
    enableStandardToggleControls(emptyCard);
    enableOptionControls(emptyCard);
    enableQuestionDeleteControls(emptyCard);
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

function enableOptionControls(scope) {
  scope
    .querySelectorAll('.cycle-proposed__question-main')
    .forEach(question => {
      const optionsContainer = question.querySelector('.cycle-proposed__options');
      const addOptionBtn = question.querySelector('.cycle-proposed__link-btn');
      if (!optionsContainer || !addOptionBtn || addOptionBtn.dataset.optionsBound === 'true') return;

      const radioName =
        optionsContainer.querySelector('input[type="radio"]')?.name || `customOption${Date.now()}`;

      const createOptionRow = () => {
        const row = document.createElement('div');
        row.className = 'cycle-proposed__option-row';
        row.innerHTML = `
          <label class="cycle-proposed__radio">
            <input type="radio" name="${radioName}" />
          </label>
          <input class="cycle-proposed__input" placeholder="Option" />
          <button class="cycle-proposed__icon-btn" type="button" title="Remove option">${TRASH_ICON}</button>
        `;
        return row;
      };

      addOptionBtn.dataset.optionsBound = 'true';
      addOptionBtn.addEventListener('click', () => {
        optionsContainer.appendChild(createOptionRow());
      });

      if (optionsContainer.dataset.optionsBound === 'true') return;
      optionsContainer.dataset.optionsBound = 'true';
      optionsContainer.addEventListener('click', event => {
        const removeBtn = event.target.closest('.cycle-proposed__icon-btn');
        if (!removeBtn || removeBtn.classList.contains('cycle-proposed__question-delete')) return;
        const row = removeBtn.closest('.cycle-proposed__option-row');
        if (row && optionsContainer.children.length > 1) {
          row.remove();
        }
      });
    });
}

function enableQuestionDeleteControls(scope) {
  scope
    .querySelectorAll('.cycle-proposed__question-delete')
    .forEach(btn => {
      if (btn.dataset.questionDeleteBound === 'true') return;
      btn.dataset.questionDeleteBound = 'true';
      btn.addEventListener('click', () => {
        const card = btn.closest('.cycle-proposed__question-card');
        if (card) card.remove();
      });
    });
}
