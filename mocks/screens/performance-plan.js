export function CreatePerformancePlan() {
  const wrap = document.createElement('div');
  wrap.className = 'performance-plan-page';

  const header = document.createElement('div');
  header.className = 'performance-plan-header';

  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Create Performance Plan';

  const subtitle = document.createElement('p');
  subtitle.className = 'performance-plan-subtitle';
  subtitle.textContent = 'Set plan scope, contributors, and calibration milestones. Provide section copy next.';

  const actions = document.createElement('div');
  actions.className = 'performance-plan-actions';
  actions.innerHTML = `
    <button class="btn ghost">Cancel</button>
    <button class="btn outline">Back</button>
    <button class="btn primary">Next</button>
  `;

  header.append(title, subtitle);
  wrap.append(header, actions);

  const body = document.createElement('div');
  body.className = 'performance-plan-body';

  const steps = [
    { key: 'plan-info', label: 'Plan Information' },
    { key: 'eligibility', label: 'Eligibility' },
    { key: 'evaluation', label: 'Evaluation Sections' },
    { key: 'schedule', label: 'Schedule' },
    { key: 'review', label: 'Review' }
  ];

  const nav = document.createElement('aside');
  nav.className = 'performance-plan-nav';
  const navList = document.createElement('ol');
  navList.className = 'performance-plan-steps';

  const main = document.createElement('main');
  main.className = 'performance-plan-content';

  function planInfoSection() {
    return `
      <section class="panel performance-plan-section">
        <div class="performance-plan-fieldset">
          <h3>Basic Information</h3>
          <label class="field">
            <span class="performance-plan-label">Plan Name*</span>
            <input class="input" value="Plan 105" />
          </label>
          <label class="field">
            <span class="performance-plan-label">Description (Optional)</span>
            <div class="performance-plan-editor">
              <div class="performance-plan-editor-toolbar">
                <span class="performance-plan-label">Paragraphs ▾</span>
                <div class="performance-plan-editor-buttons">
                  <button>B</button>
                  <button>I</button>
                  <button>U</button>
                  <button>•</button>
                  <button>1.</button>
                </div>
              </div>
              <textarea rows="4" placeholder="Add plan context"></textarea>
            </div>
          </label>
        </div>

        <div class="performance-plan-fieldset">
          <h3 class="performance-plan-label">Evaluation Settings</h3>
          <label class="check-row">
            <input type="checkbox" checked />
            <div>
              <div class="performance-plan-label">Turn On Self-Evaluations</div>
            </div>
          </label>
          <label class="check-row nested">
            <input type="checkbox" />
            <div>
              <div class="performance-plan-label">Allow managers to start evaluation without the associate's Self-Evaluation</div>
            </div>
          </label>
          <label class="check-row">
            <input type="checkbox" />
            <div>
              <div class="performance-plan-label">Require associate acknowledgement of manager evaluation</div>
            </div>
          </label>
          <label class="check-row">
            <input type="checkbox" />
            <div>
              <div class="performance-plan-label">Require HR Review</div>
            </div>
          </label>
          <label class="check-row">
            <input type="checkbox" />
            <div>
              <div class="performance-plan-label">Include Touchpoint History</div>
            </div>
          </label>
          <label class="check-row">
            <input type="checkbox" />
            <div>
              <div class="performance-plan-label">Include Peer Feedback History</div>
            </div>
          </label>
        </div>

        <div class="performance-plan-fieldset">
          <h3 class="performance-plan-label">Performance Plan Effective Dates</h3>
          <div class="performance-plan-date-row">
            <label class="field">
              <span class="performance-plan-label">From*</span>
              <input class="input" type="date" value="2026-01-02" />
            </label>
            <label class="field">
              <span class="performance-plan-label">To*</span>
              <input class="input" type="date" value="2026-01-31" />
            </label>
            <label class="field">
              <span class="performance-plan-label">Cutoff</span>
              <input class="input" type="date" value="2025-11-01" />
            </label>
          </div>
        </div>
      </section>
    `;
  }

  function eligibilitySection() {
    return `
      <section class="panel performance-plan-section">
        <div class="performance-plan-fieldset">
          <h3 class="performance-plan-label">Eligible Participants</h3>
          <p class="performance-plan-hint">
            <span class="performance-plan-hint-icon">i</span>
            There can only be one active plan per eligibility criteria.
          </p>
          <div class="performance-plan-radio-row">
            <label class="performance-plan-radio">
              <input type="radio" name="eligibilityScope" />
              <span>Entire Organization</span>
            </label>
            <label class="performance-plan-radio">
              <input type="radio" name="eligibilityScope" checked />
              <span>Set Eligibility Criteria</span>
            </label>
          </div>
        </div>

        <div class="performance-plan-fieldset">
          <div class="performance-plan-scope-select">
            <select class="input">
              <option>Global</option>
            </select>
          </div>
          <div class="performance-plan-criteria-banner">
            <span class="performance-plan-label">Selected Criteria:</span>
            <p>Location is (“Location = New York (OL-16)”, Include Future Hires = false)</p>
          </div>
          <div class="performance-plan-criteria-links">
            <a href="#">Expand All</a>
            <a href="#">Collapse All</a>
          </div>
        </div>

        <div class="performance-plan-condition-card">
          <div class="performance-plan-condition-header">
            <h4>Condition Group 1</h4>
            <div class="performance-plan-condition-header-actions">
              <button class="performance-plan-icon-btn">⌃</button>
              <button class="performance-plan-icon-btn">🗑</button>
            </div>
          </div>
          <div class="performance-plan-condition-main">
            <div class="performance-plan-condition-if">If</div>
            <div class="performance-plan-condition-body">
              <label class="field performance-plan-condition-search">
                <span class="performance-plan-label">Condition</span>
                <div class="performance-plan-condition-input">
                  <input class="input" value="Location" />
                  <button class="performance-plan-icon-btn">🔍</button>
                </div>
                <a href="#">View condition library</a>
              </label>

              <div class="performance-plan-condition-row">
                <div class="field">
                  <span class="performance-plan-label">Input 1</span>
                  <div class="performance-plan-label">Location</div>
                </div>
                <div class="field">
                  <span class="performance-plan-label">Operator</span>
                  <select class="input">
                    <option>Equal (=)</option>
                  </select>
                </div>
                <div class="field">
                  <span class="performance-plan-label">Location</span>
                  <div class="performance-plan-condition-input">
                    <input class="input" value="New York (OL-16)" />
                    <button class="performance-plan-icon-btn">🔍</button>
                  </div>
                </div>
              </div>

              <div class="performance-plan-condition-row">
                <div class="field">
                  <span class="performance-plan-label">Input 2</span>
                  <div class="performance-plan-label">Include Future Hires</div>
                </div>
                <div class="field">
                  <span class="performance-plan-label">Operator</span>
                  <select class="input">
                    <option>Equal (=)</option>
                  </select>
                </div>
                <div class="field">
                  <span class="performance-plan-label">Include Future Hires</span>
                  <label class="performance-plan-checkbox">
                    <input type="checkbox" />
                    <span>false</span>
                  </label>
                </div>
              </div>

              <div class="performance-plan-condition-buttons">
                <button class="btn outline">+ AND</button>
                <button class="btn outline">+ OR</button>
              </div>
            </div>
          </div>
        </div>

        <div class="performance-plan-condition-buttons">
          <button class="btn outline">+ AND</button>
          <button class="btn outline">+ OR</button>
        </div>

        <div class="performance-plan-condition-actions">
          <div>
            <button class="btn outline">Cancel</button>
            <button class="btn primary">Apply and Save</button>
          </div>
          <button class="btn outline">Export as CSV</button>
        </div>

        <div class="performance-plan-fieldset">
          <h3 class="performance-plan-label">Eligibility Participants: 67</h3>
          <div class="performance-plan-table">
            <table>
              <thead>
                <tr>
                  <th>Associate ID</th>
                  <th>Associate Name</th>
                  <th>Job Title</th>
                  <th>Hire Date</th>
                  <th>Work Status</th>
                </tr>
              </thead>
              <tbody>
                ${[
                  ['BHAPIOne', 'BHAPIOne BHAPIOne', 'asdf', '05/26/2022', 'Active'],
                  ['200805', 'Capstone Hourly', 'Bartender123Test', '01/01/2021', 'Active'],
                  ['200455', 'CarsonTwo Harrison', 'Job Template 09-hire', '03/17/2021', 'Active'],
                  ['201311', 'Fred Smith', 'GoldBot 2', '09/29/2021', 'Active'],
                  ['98409', 'Julius Randle', 'Lead Product Owner', '09/29/2021', 'Active'],
                  ['200695', 'Madhaviaa OBH93Ob', 'Account Exec', '03/08/2021', 'Active'],
                  ['345671', 'Test DhHire Test DhHire', 'A New Template', '02/01/2022', 'Active'],
                  ['3435', 'Tim Roy', 'A New Template', '09/27/2021', 'Active'],
                  ['11423', 'Tom Jones', 'ABC Speller', '07/01/2020', 'Active'],
                  ['890182', 'testpyxis testpyxis', 'A fourth-123', '02/14/2022', 'Active'],
                ].map(row => `
                  <tr>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                    <td>${row[2]}</td>
                    <td>${row[3]}</td>
                    <td>${row[4]}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <div class="performance-plan-table-footer">
              <span>Page 1 of 7</span>
              <div class="performance-plan-pagination">
                <button class="btn outline">1</button>
                <button class="btn outline">2</button>
                <button class="btn outline">3</button>
                <span>…</span>
                <button class="btn outline">7</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderSection(stepKey) {
    const step = steps.find(s => s.key === stepKey) ?? steps[0];
    if (step.key === 'plan-info') {
      main.innerHTML = planInfoSection();
      return;
    }
    if (step.key === 'eligibility') {
      main.innerHTML = eligibilitySection();
      return;
    }
    main.innerHTML = `
      <section class="panel">
        <h2>${step.label}</h2>
        <p class="muted">Placeholder content. Replace with provided copy for ${step.label}.</p>
        <div class="performance-plan-placeholder">
          Provide details for "${step.label}".
        </div>
      </section>
    `;
  }

  function setActive(stepKey) {
    [...navList.children].forEach(li => {
      li.classList.toggle('active', li.dataset.key === stepKey);
    });
    renderSection(stepKey);
  }

  steps.forEach((step, idx) => {
    const li = document.createElement('li');
    li.dataset.key = step.key;
    if (idx === 0) li.classList.add('active');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'performance-plan-step-btn';
    btn.innerHTML = `<span class="performance-plan-step-marker"></span><span>${step.label}</span>`;
    btn.addEventListener('click', () => setActive(step.key));
    li.appendChild(btn);
    navList.appendChild(li);
  });

  nav.appendChild(navList);

  body.append(nav, main);
  wrap.append(body);
  setActive(steps[0].key);
  return wrap;
}
