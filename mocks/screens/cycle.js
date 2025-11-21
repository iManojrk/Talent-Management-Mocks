export function CreateTalentPlanningCycle() {
  const wrap = document.createElement('div');
  wrap.className = 'cycle-page';
  wrap.innerHTML = `
    <div class="cycle-header">
      <div>
        <h1 class="page-title">Create Talent Planning Cycle (Current)</h1>
        <div class="cycle-subtitle">Assessment Settings</div>
      </div>
      <div class="cycle-actions">
        <button class="btn ghost">Cancel</button>
        <button class="btn outline">← Back</button>
        <button class="btn primary">Next →</button>
      </div>
    </div>
    <div class="cycle-body">
      <aside class="cycle-nav">
        <ol class="cycle-steps">
          <li class="done"><span></span>Cycle Details</li>
          <li class="done"><span></span>Eligible Associates</li>
          <li class="active"><span></span>Assessment Settings</li>
          <li><span></span>Schedule</li>
          <li><span></span>Review</li>
        </ol>
      </aside>
      <main class="cycle-content">
        <section class="panel">
          <h2>Assessment Settings</h2>
          <p class="muted">Configure talent assessment questions and the derived values that appear in the assessment.</p>
          <div class="check-group">
            <label class="check-row">
              <input type="checkbox" />
              <div>
                <div class="check-title">Performance Ratings</div>
                <div class="check-desc">Ratings will be derived from the most recent performance plan.</div>
              </div>
            </label>
            <label class="check-row">
              <input type="checkbox" />
              <div>
                <div class="check-title">Mobility Preferences</div>
                <div class="check-desc">Preferences will be derived from associates’ entries in their career profile.</div>
              </div>
            </label>
          </div>
          <div class="callout warning">
            <div class="icon">⚠️</div>
            <div>In order to populate the Talent Matrix correctly, any question you choose for the X or Y matrix axis must have exactly 3 answer choices.</div>
          </div>
        </section>

        <section class="panel question-layout">
          <div>
            <h2>Questions</h2>
            <div class="question-card">
              <div class="question-main">
                <label class="field">
                  <span>Question*</span>
                  <input class="input" value="Potential" />
                  <small>Question should not exceed 30 characters (ex. Potential, Performance, Impact of Loss).</small>
                </label>
              <div class="field toggle-field">
                <span>Required</span>
                <div class="toggle on"><span></span></div>
              </div>
              <label class="field">
                <span>Question Description</span>
                <textarea class="input" rows="3">The degree to which an associate has demonstrated initial mastery of skills required to do their current role and a high likelihood of being able to make an impact in a larger scope.</textarea>
                </label>

              <div class="options">
                ${['Low','Medium','High'].map(option => `
                  <div class="option-row">
                    <label class="radio">
                      <input type="radio" name="questionOne" />
                    </label>
                    <input class="input" value="${option}" />
                    <button class="icon-btn" title="Remove option">🗑</button>
                  </div>
                `).join('')}
                </div>
                <button class="link-btn">+ Add Option</button>
              </div>
              <div class="axis-card">
                <div class="axis-header">
                  <span>Talent Matrix Axis Settings</span>
                  <button class="icon-btn minimal">⌃</button>
                </div>
                <label class="radio">
                  <input type="radio" name="axisSetting1" />
                  <span>Assign to X Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting1" checked />
                  <span>Assign to Y Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting1" />
                  <span>N/A</span>
                </label>
              </div>
            </div>

            <div class="question-card">
              <div class="question-main">
                <label class="field">
                  <span>Question*</span>
                  <input class="input" value="Performance" />
                </label>
                <div class="field toggle-field">
                  <span>Required</span>
                  <div class="toggle on"><span></span></div>
                </div>
                <label class="field">
                  <span>Question Description</span>
                  <textarea class="input" rows="3">Measures the overall execution and business impact demonstrated in the associate's most recent review cycle.</textarea>
                </label>

                <div class="options">
                  ${['Low','Medium','High'].map(option => `
                    <div class="option-row">
                      <label class="radio">
                        <input type="radio" name="questionTwo" />
                      </label>
                      <input class="input" value="${option}" />
                      <button class="icon-btn" title="Remove option">🗑</button>
                    </div>
                  `).join('')}
                </div>
                <button class="link-btn">+ Add Option</button>
              </div>
              <div class="axis-card">
                <div class="axis-header">
                  <span>Talent Matrix Axis Settings</span>
                  <button class="icon-btn minimal">⌃</button>
                </div>
                <label class="radio">
                  <input type="radio" name="axisSetting2" checked />
                  <span>Assign to X Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting2" />
                  <span>Assign to Y Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting2" />
                  <span>N/A</span>
                </label>
            </div>
          </div>

            <div class="question-card">
              <div class="question-main">
                <label class="field">
                  <span>Question*</span>
                  <input class="input" value="Risk of Loss" />
                </label>
                <div class="field toggle-field">
                  <span>Required</span>
                  <div class="toggle on"><span></span></div>
                </div>
                <label class="field">
                  <span>Question Description</span>
                  <textarea class="input" rows="3">Likelihood the associate will depart in the next 12 months based on intent, engagement, and market pull.</textarea>
                </label>

                <div class="options">
                  ${['Low','Medium','High'].map(option => `
                    <div class="option-row">
                      <label class="radio">
                        <input type="radio" name="questionThree" />
                      </label>
                      <input class="input" value="${option}" />
                      <button class="icon-btn" title="Remove option">🗑</button>
                    </div>
                  `).join('')}
                </div>
                <button class="link-btn">+ Add Option</button>
              </div>
              <div class="axis-card">
                <div class="axis-header">
                  <span>Talent Matrix Axis Settings</span>
                  <button class="icon-btn minimal">⌃</button>
                </div>
                <label class="radio">
                  <input type="radio" name="axisSetting3" />
                  <span>Assign to X Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting3" />
                  <span>Assign to Y Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting3" checked />
                  <span>N/A</span>
                </label>
              </div>
            </div>

            <div class="question-card">
              <div class="question-main">
                <label class="field">
                  <span>Question*</span>
                  <input class="input" value="Impact of Loss" />
                </label>
                <div class="field toggle-field">
                  <span>Required</span>
                  <div class="toggle on"><span></span></div>
                </div>
                <label class="field">
                  <span>Question Description</span>
                  <textarea class="input" rows="3">The impact on the organization if an associate leaves or transitions to a different role, factoring in replacement difficulty and knowledge transfer.</textarea>
                </label>

                <div class="options">
                  ${['Low','Medium','High','N/A'].map(option => `
                    <div class="option-row">
                      <label class="radio">
                        <input type="radio" name="questionFour" />
                      </label>
                      <input class="input" value="${option}" />
                      <button class="icon-btn" title="Remove option">🗑</button>
                    </div>
                  `).join('')}
                </div>
                <button class="link-btn">+ Add Option</button>
              </div>
              <div class="axis-card">
                <div class="axis-header">
                  <span>Talent Matrix Axis Settings</span>
                  <button class="icon-btn minimal">⌃</button>
                </div>
                <label class="radio">
                  <input type="radio" name="axisSetting4" />
                  <span>Assign to X Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting4" />
                  <span>Assign to Y Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting4" checked />
                  <span>N/A</span>
                </label>
              </div>
            </div>

            <div class="question-card">
              <div class="question-main">
                <label class="field">
                  <span>Question*</span>
                  <input class="input" value="Readiness" />
                </label>
                <div class="field toggle-field">
                  <span>Required</span>
                  <div class="toggle on"><span></span></div>
                </div>
                <label class="field">
                  <span>Question Description</span>
                  <textarea class="input" rows="3">The extent to which the associate has the skills and experiences necessary to succeed in the next role you envision for them.</textarea>
                </label>

                <div class="options">
                  ${['Ready now','6 - 12 months','12 - 24 months'].map(option => `
                    <div class="option-row">
                      <label class="radio">
                        <input type="radio" name="questionFive" />
                      </label>
                      <input class="input" value="${option}" />
                      <button class="icon-btn" title="Remove option">🗑</button>
                    </div>
                  `).join('')}
                </div>
                <button class="link-btn">+ Add Option</button>
              </div>
              <div class="axis-card">
                <div class="axis-header">
                  <span>Talent Matrix Axis Settings</span>
                  <button class="icon-btn minimal">⌃</button>
                </div>
                <label class="radio">
                  <input type="radio" name="axisSetting5" />
                  <span>Assign to X Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting5" />
                  <span>Assign to Y Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting5" checked />
                  <span>N/A</span>
                </label>
              </div>
            </div>

            <div class="question-card">
              <div class="question-main">
                <label class="field">
                  <span>Question*</span>
                  <input class="input" value="Next Move" />
                </label>
                <div class="field toggle-field">
                  <span>Required</span>
                  <div class="toggle on"><span></span></div>
                </div>
                <label class="field">
                  <span>Question Description</span>
                  <textarea class="input" rows="3">Based on their capabilities, drive, and interests, which role do you see this associate growing into next.</textarea>
                </label>

                <div class="options">
                  ${['Individual Contributor','Manager','Director','N/A'].map(option => `
                    <div class="option-row">
                      <label class="radio">
                        <input type="radio" name="questionSix" />
                      </label>
                      <input class="input" value="${option}" />
                      <button class="icon-btn" title="Remove option">🗑</button>
                    </div>
                  `).join('')}
                </div>
                <button class="link-btn">+ Add Option</button>
              </div>
              <div class="axis-card">
                <div class="axis-header">
                  <span>Talent Matrix Axis Settings</span>
                  <button class="icon-btn minimal">⌃</button>
                </div>
                <label class="radio">
                  <input type="radio" name="axisSetting6" />
                  <span>Assign to X Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting6" />
                  <span>Assign to Y Axis</span>
                </label>
                <label class="radio">
                  <input type="radio" name="axisSetting6" checked />
                  <span>N/A</span>
                </label>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
  return wrap;
}
