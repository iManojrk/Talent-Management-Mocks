export function CreateTalentPlanningCycleProposed() {
  const wrap = document.createElement('div');
  wrap.className = 'cycle-proposed';
  wrap.innerHTML = `
    <div class="cycle-proposed__header">
      <div>
        <h1 class="page-title">Create Talent Planning Cycle (Proposed)</h1>
        <div class="cycle-proposed__subtitle">Assessment Settings</div>
      </div>
      <div class="cycle-proposed__actions">
        <button class="cycle-proposed__btn cycle-proposed__btn--ghost">Cancel</button>
        <button class="cycle-proposed__btn cycle-proposed__btn--outline">← Back</button>
        <button class="cycle-proposed__btn cycle-proposed__btn--primary">Next →</button>
      </div>
    </div>
    <div class="cycle-proposed__body">
      <aside class="cycle-proposed__nav">
        <ol class="cycle-proposed__steps">
          <li class="done"><span></span>Cycle Details</li>
          <li class="done"><span></span>Eligible Associates</li>
          <li class="active"><span></span>Assessment Settings</li>
          <li><span></span>Schedule</li>
          <li><span></span>Review</li>
        </ol>
      </aside>
      <main class="cycle-proposed__content">
        <section class="cycle-proposed__panel">
          <h2>Assessment Settings</h2>
          <p class="cycle-proposed__muted">Configure talent assessment questions and the derived values that appear in the assessment.</p>
          <div class="cycle-proposed__check-group">
            <label class="cycle-proposed__check-row">
              <input type="checkbox" />
              <div>
                <div class="cycle-proposed__check-title">Performance Ratings</div>
                <div class="cycle-proposed__check-desc">Ratings will be derived from the most recent performance plan.</div>
              </div>
            </label>
            <label class="cycle-proposed__check-row">
              <input type="checkbox" />
              <div>
                <div class="cycle-proposed__check-title">Mobility Preferences</div>
                <div class="cycle-proposed__check-desc">Preferences will be derived from associates’ entries in their career profile.</div>
              </div>
            </label>
          </div>
        </section>

        <section class="cycle-proposed__panel cycle-proposed__question-layout">
          <div>
            <h2>Questions</h2>
            <div class="cycle-proposed__question-card">
              <div class="cycle-proposed__question-main">
                <label class="cycle-proposed__field">
                  <span>Question*</span>
                  <input class="cycle-proposed__input" value="Potential" disabled />
                  <small>Question should not exceed 30 characters (ex. Potential, Performance, Impact of Loss).</small>
                </label>
                <div class="cycle-proposed__field cycle-proposed__toggle-field is-hidden"></div>
                <label class="cycle-proposed__field">
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
                <label class="cycle-proposed__field">
                  <span>Question*</span>
                  <input class="cycle-proposed__input" value="Performance" disabled />
                </label>
                <div class="cycle-proposed__field cycle-proposed__toggle-field is-hidden"></div>
                <label class="cycle-proposed__field">
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
                <label class="cycle-proposed__field">
                  <span>Question*</span>
                  <input class="cycle-proposed__input" value="Risk of Loss" disabled />
                </label>
                <div class="cycle-proposed__field cycle-proposed__toggle-field">
                  <span>Required</span>
                  <div class="cycle-proposed__toggle cycle-proposed__toggle--disabled is-on"><span></span></div>
                </div>
                <label class="cycle-proposed__field">
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
                <label class="cycle-proposed__field">
                  <span>Question*</span>
                  <input class="cycle-proposed__input" value="Impact of Loss" disabled />
                </label>
                <div class="cycle-proposed__field cycle-proposed__toggle-field">
                  <span>Required</span>
                  <div class="cycle-proposed__toggle cycle-proposed__toggle--disabled is-on"><span></span></div>
                </div>
                <label class="cycle-proposed__field">
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

            <div class="cycle-proposed__question-card">
              <div class="cycle-proposed__question-main">
                <label class="cycle-proposed__field">
                  <span>Question*</span>
                  <input class="cycle-proposed__input" value="Readiness" />
                </label>
                <div class="cycle-proposed__field cycle-proposed__toggle-field">
                  <span>Required</span>
                  <div class="cycle-proposed__toggle is-on"><span></span></div>
                </div>
                <label class="cycle-proposed__field">
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

            <div class="cycle-proposed__question-card">
              <div class="cycle-proposed__question-main">
                <label class="cycle-proposed__field">
                  <span>Question*</span>
                  <input class="cycle-proposed__input" value="Next Move" />
                </label>
                <div class="cycle-proposed__field cycle-proposed__toggle-field">
                  <span>Required</span>
                  <div class="cycle-proposed__toggle is-on"><span></span></div>
                </div>
                <label class="cycle-proposed__field">
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
          </div>
        </section>
      </main>
    </div>
  `;
  return wrap;
}
