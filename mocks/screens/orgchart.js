import { Modal } from '../components/Modal.js?v=20250205';

const orgData = {
  name: 'Jordan Reyes',
  position: 'Chief Executive Officer',
  color: '#111827',
  children: [
    { name: 'Maya Chen', position: 'Chief Logistics Officer', color: '#1e293b' },
    {
      name: 'Elias Romero',
      position: 'VP, Fleet Operations',
      color: '#0f766e',
      showChildrenList: true,
      children: [
        {
          name: 'Olivia Brooks',
          position: 'Regional Distribution Manager',
          readiness: 'ready-green',
          color: '#1d4ed8',
          talentPools: [
            { name: 'Top Talent', readiness: 'ready-green' },
            { name: 'Strategic Mobility Bench', readiness: 'ready-yellow' }
          ],
          incumbentNominations: [
            { incumbent: 'Elias Romero', position: 'VP, Fleet Operations', status: 'Primary Successor' },
            { incumbent: 'Connor Blake', position: 'Director, Route Analytics', status: 'Network Bench' }
          ],
          competencyGap: {
            focusAreas: [
              { label: 'Network Scenario Modeling' },
              { label: 'Fleet Cost-to-Serve' },
              { label: 'Union/Carrier Negotiations' }
            ]
          },
          perfSnapshot: {
            summary: 'Marginal Performer',
            performance: 2,
            potential: 2,
            trend: [
              { label: '12/31', performance: 1, potential: 2 },
              { label: '07/01', performance: 2, potential: 2 },
              { label: '01/01', performance: 2, potential: 3 },
              { label: '07/04', performance: 3, potential: 2 },
              { label: '01/04', performance: 3, potential: 3 }
            ]
          },
          performanceRating: {
            latest: 3.4,
            scale: 5,
            trend: [
              { label: 'H1 2023', value: 2.6 },
              { label: 'H2 2023', value: 2.8 },
              { label: 'H1 2024', value: 3.0 },
              { label: 'H2 2024', value: 3.2 },
              { label: 'H1 2025', value: 3.4 }
            ]
          },
          careerGoals: {
            title: 'Director',
            level: 'Director',
            function: 'Management',
            readiness: 'Ready in 3-5 years'
          },
          languageSkills: [
            'Workforce Planning',
            'Talent Pipeline Management',
            'HRIS Administration',
            'Performance Calibration Facilitation'
          ],
          workExperience: [
            { position: 'Talent Operations Lead', company: 'Lyric Technologies', years: '2021 – Present' },
            { position: 'HR Operations Manager', company: 'BrightPath Solutions', years: '2016 – 2021' }
          ],
          formalEducation: [
            { degree: 'B.S. Computer Science', university: 'Georgia Institute of Technology', graduation: '2012', level: 'Bachelors' },
            { degree: 'M.S. Human Capital Analytics', university: 'Northwestern University', graduation: '2017', level: 'Masters' }
          ]
        },
        {
          name: 'Amir Hassan',
          position: 'Fleet Optimization Manager',
          readiness: 'ready-yellow',
          color: '#6d28d9',
          talentPools: [
            { name: 'Strategic Bench', readiness: 'ready-yellow' },
            { name: 'Fleet Innovation Guild', readiness: 'ready-green' }
          ],
          incumbentNominations: [
            { incumbent: 'Elias Romero', position: 'VP, Fleet Operations', status: '1-2 Year Successor' },
            { incumbent: 'Connor Blake', position: 'Director, Route Analytics', status: 'Pipeline Nomination' }
          ],
          competencyGap: {
            summary: 'Needs to refine executive influence and sharpen financial storytelling for capital requests.',
            focusAreas: [
              { label: 'Telematics Storytelling' },
              { label: 'Fleet Cost Modeling' },
              { label: 'Vendor SLA Governance' }
            ]
          },
          perfSnapshot: {
            summary: 'Consistent Performer with high potential',
            performance: 2,
            potential: 3,
            trend: [
              { label: '12/31', performance: 2, potential: 3 },
              { label: '07/01', performance: 2, potential: 3 },
              { label: '01/01', performance: 2, potential: 2 },
              { label: '07/04', performance: 3, potential: 2 },
              { label: '01/04', performance: 3, potential: 3 }
            ]
          },
          performanceRating: {
            latest: 3.1,
            scale: 5,
            trend: [
              { label: 'H1 2023', value: 2.7 },
              { label: 'H2 2023', value: 2.9 },
              { label: 'H1 2024', value: 3.0 },
              { label: 'H2 2024', value: 3.1 },
              { label: 'H1 2025', value: 3.1 }
            ]
          },
          careerGoals: {
            title: 'Senior Director, Fleet Strategy',
            level: 'Senior Director',
            function: 'Operations',
            readiness: 'Ready in 1-2 years'
          },
          languageSkills: [
            'Telematics Integration',
            'Network Optimization Modeling',
            'Fuel Efficiency Programs',
            'Vendor Partnership Management'
          ],
          workExperience: [
            { position: 'Fleet Optimization Manager', company: 'ForwardFlow Logistics', years: '2020 – Present' },
            { position: 'Transportation Analyst', company: 'Atlantic Freightways', years: '2015 – 2020' }
          ],
          formalEducation: [
            { degree: 'B.S. Industrial Engineering', university: 'Purdue University', graduation: '2013', level: 'Bachelors' },
            { degree: 'M.S. Supply Chain Analytics', university: 'MIT', graduation: '2015', level: 'Masters' }
          ]
        },
        {
          name: 'Lena Ortiz',
          position: 'Warehouse Automation Lead',
          readiness: 'ready-red',
          color: '#b45309',
          talentPools: [
            { name: 'Emerging Leaders', readiness: 'ready-red' },
            { name: 'Automation Futures Cohort', readiness: 'ready-yellow' }
          ],
          incumbentNominations: [
            { incumbent: 'Elias Romero', position: 'VP, Fleet Operations', status: 'Emerging Successor' },
            { incumbent: 'Connor Blake', position: 'Director, Route Analytics', status: 'Watchlist' }
          ],
          competencyGap: {
            summary: 'Needs deeper executive communication polish and broader finance fluency for automation investments.',
            focusAreas: [
              { label: 'Automation Uptime' },
              { label: 'Pick-Pack Flow' },
              { label: 'Maintenance Handoff' }
            ]
          },
          perfSnapshot: {
            summary: 'Emerging leader driving automation pilots',
            performance: 2,
            potential: 2,
            trend: [
              { label: '12/31', performance: 2, potential: 2 },
              { label: '07/01', performance: 1, potential: 2 },
              { label: '01/01', performance: 1, potential: 2 },
              { label: '07/04', performance: 2, potential: 1 },
              { label: '01/04', performance: 2, potential: 1 }
            ]
          },
          performanceRating: {
            latest: 2.8,
            scale: 5,
            trend: [
              { label: 'H1 2023', value: 2.3 },
              { label: 'H2 2023', value: 2.4 },
              { label: 'H1 2024', value: 2.6 },
              { label: 'H2 2024', value: 2.7 },
              { label: 'H1 2025', value: 2.8 }
            ]
          },
          careerGoals: {
            title: 'Director, Smart Warehousing',
            level: 'Director',
            function: 'Operations Technology',
            readiness: 'Ready in 3+ years'
          },
          languageSkills: [
            'Automation Roadmapping',
            'Robotics Vendor Management',
            'Lean Warehousing',
            'OT Cybersecurity Basics'
          ],
          workExperience: [
            { position: 'Warehouse Automation Lead', company: 'ForwardFlow Logistics', years: '2022 – Present' },
            { position: 'Continuous Improvement Specialist', company: 'MetroFulfillment', years: '2018 – 2022' }
          ],
          formalEducation: [
            { degree: 'B.S. Mechanical Engineering', university: 'University of Texas at Austin', graduation: '2016', level: 'Bachelors' },
            { degree: 'Certificate in Robotics Systems', university: 'Georgia Tech Professional Education', graduation: '2021', level: 'Certificate' }
          ]
        }
      ]
    },
    { name: 'Priya Nair', position: 'Head of Supply Chain Systems', color: '#312e81' },
    { name: 'Connor Blake', position: 'Director, Route Analytics', color: '#27272a' }
  ]
};

const talentProfileMap = {};
collectTalentProfiles(orgData);

function collectTalentProfiles(node) {
  if (!node || typeof node !== 'object') return;
  const hasTalentData = node.talentPools || node.perfSnapshot || node.performanceRating || node.competencyGap || node.workExperience || node.formalEducation;
  if (hasTalentData) {
    talentProfileMap[node.name] = node;
  }
  (node.children ?? []).forEach(child => collectTalentProfiles(child));
}

export function getTalentProfile(name) {
  return talentProfileMap[name];
}

const learningLibrary = {
  competency: [
    {
      title: 'Route Reliability',
      summary: 'Cross-dock playbook for contingencies and proactive reroutes.',
      duration: '45 min',
      competencies: ['Crisis routing', 'Scenario planning', 'On-time performance']
    },
    {
      title: 'Driver Coaching',
      summary: 'Micro-lessons on feedback loops, rider safety, and route hygiene.',
      duration: '35 min',
      competencies: ['Coaching frameworks', 'Behavior feedback', 'Safety mentoring']
    },
    {
      title: 'SLA Triage',
      summary: 'Tabletop simulations to diagnose SLAs and reset expectations fast.',
      duration: '1 hr',
      competencies: ['Service diagnostics', 'Escalation design', 'Stakeholder alignment']
    },
    {
      title: 'Strategic Bench Readiness',
      summary: 'Readiness kit for elevating successors through simulations and feedback.',
      duration: '55 min',
      competencies: ['Succession coaching', 'Capability mapping', 'Stakeholder updates']
    },
    {
      title: 'Ops Mentorship Circuits',
      summary: 'Guided peer mentor loops with structured prompts and facilitator packs.',
      duration: '30 min',
      competencies: ['Mentor frameworks', 'Peer learning', 'Feedback hygiene']
    },
    {
      title: 'Precision Workforce Planning',
      summary: 'Scenario math lab for blending attrition, hiring, and upskilling pipelines.',
      duration: '1 hr 15 min',
      competencies: ['Capacity modeling', 'Upskilling design', 'Hiring tradeoffs']
    },
    {
      title: 'Ops Influence Studio',
      summary: 'Role-play reps to align dotted-line partners on tough resourcing calls.',
      duration: '50 min',
      competencies: ['Stakeholder influence', 'Narrative building', 'Decision framing']
    },
    {
      title: 'Governance Scrums',
      summary: 'Teaches tight rituals for linking steering forums to field execution.',
      duration: '35 min',
      competencies: ['Governance design', 'Meeting hygiene', 'Accountability loops']
    }
  ],
  catalog: [
    {
      title: 'Auto Systems 101',
      summary: 'Covers robotics cells, AMR orchestration, and telemetry dashboards.',
      tags: ['Automation', 'Robotics'],
      duration: '1 hr 20 min',
      competencies: ['Automation fluency', 'Systems thinking', 'Telemetry interpretation']
    },
    {
      title: 'Energy Optimizer',
      summary: 'Simulated lab trimming idle time and blending EV range planning.',
      tags: ['Sustainability', 'Fleet'],
      duration: '50 min',
      competencies: ['Fuel stewardship', 'EV route planning', 'Efficiency coaching']
    },
    {
      title: 'Cold Chain Core',
      summary: 'Ensures SOP alignment across chill, freeze, and ambient zones.',
      tags: ['Compliance', 'Cold Chain'],
      duration: '55 min',
      competencies: ['Temperature governance', 'Audit readiness', 'Contingency mapping']
    },
    {
      title: 'Ops Scenario Lab',
      summary: 'Immersive scenario drills for hub disruptions and crew shortages.',
      tags: ['Operations', 'Leadership'],
      duration: '40 min',
      competencies: ['Crisis decisioning', 'Cross-team comms', 'Risk triage']
    },
    {
      title: 'Data Stories for Ops',
      summary: 'Storytelling sprint translating telemetry into exec-ready briefs.',
      tags: ['Analytics', 'Communication'],
      duration: '35 min',
      competencies: ['Insight framing', 'Data literacy', 'Executive storytelling']
    },
    {
      title: 'Network Refresh Studio',
      summary: 'Workshop to re-balance zones, optimize linehaul cadence, and right-size nodes.',
      tags: ['Network Design', 'Strategy'],
      duration: '1 hr 10 min',
      competencies: ['Network modeling', 'Capacity planning', 'Strategic tradeoffs']
    },
    {
      title: 'Digital Twin Sandbox',
      summary: 'Hands-on lab mirroring live operations for rapid scenario testing.',
      tags: ['Simulation', 'Innovation'],
      duration: '45 min',
      competencies: ['Simulation fluency', 'Hypothesis testing', 'Experiment design']
    },
    {
      title: 'Cost-To-Serve Deep Dive',
      summary: 'Analytics sprint to expose unprofitable lanes and rebalance capital spend.',
      tags: ['Finance', 'Analytics'],
      duration: '1 hr',
      competencies: ['Financial acumen', 'Scenario modeling', 'Value storytelling']
    }
  ]
};

function getLearningRecommendations(person) {
  const focusAreas = person?.competencyGap?.focusAreas ?? [];
  if (!focusAreas.length) return [];
  const keywords = new Set();
  focusAreas.forEach(area => {
    const tokens = String(area.label ?? '')
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter(token => token.length >= 4);
    tokens.forEach(token => keywords.add(token));
  });
  const haystackList = learningLibrary.competency.map(course => {
    const haystack = [course.title, course.summary, ...(course.competencies ?? [])]
      .join(' ')
      .toLowerCase();
    let score = 0;
    keywords.forEach(keyword => {
      if (haystack.includes(keyword)) score += 1;
    });
    return { course, score };
  });
  const ranked = haystackList
    .filter(entry => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(entry => entry.course);
  if (ranked.length) return ranked.slice(0, 3);
  return learningLibrary.competency.slice(0, 3);
}

export function OrgChart() {
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Succession Org Chart';

  const modals = {
    profile: Modal(),
    assign: Modal(),
    learning: Modal()
  };
  const chart = renderOrgTree(orgData, modals);

  wrap.append(title, chart);
  return wrap;
}

function renderNode({ name = 'Name', position = 'Position', showChildrenList = false, children = [], color }, modals) {
  const n = document.createElement('div');
  n.className = 'org-node';
  if (showChildrenList) {
    n.classList.add('expanded');
  } else {
    n.classList.add('compact');
  }
  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.textContent = initials(name);
  const avatarColor = color ?? '#1f2937';
  avatar.style.backgroundColor = avatarColor;
  const line1 = document.createElement('div');
  line1.className = 'org-name';
  line1.textContent = name;
  const line2 = document.createElement('div');
  line2.className = 'org-position';
  line2.textContent = position;
  n.append(avatar, line1, line2);

  if (showChildrenList && children.length) {
    const divider = document.createElement('div');
    divider.className = 'org-divider';
    n.appendChild(divider);
    children.forEach(child => {
      const childLine = document.createElement('div');
      childLine.className = `org-child-line ${child.readiness ?? ''}`.trim();

      const name = document.createElement('span');
      name.textContent = child.name;
      childLine.appendChild(name);

      const menuBtn = document.createElement('button');
      menuBtn.type = 'button';
      menuBtn.className = 'successor-menu-btn';
      menuBtn.textContent = '⋯';
      menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openContextMenu(menuBtn, [
          { label: 'Assign Learning', onSelect: () => openAssignLearning(modals, child) },
          { label: 'Edit Successor', onSelect: () => console.log(`Edit Successor -> ${child.name}`) },
          { label: 'Remove Successor', onSelect: () => console.log(`Remove Successor -> ${child.name}`) }
        ]);
      });
      childLine.appendChild(menuBtn);

      childLine.addEventListener('click', () => {
        openProfile(modals, child);
      });

      n.appendChild(childLine);
    });
  }
  return n;
}

let activeMenu;
function openContextMenu(anchor, options = []) {
  closeContextMenu();
  const menu = document.createElement('div');
  menu.className = 'context-menu';
  const items = options.length ? options : [{ label: 'No actions available' }];
  items.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = opt.label;
    btn.disabled = !opt.onSelect;
    btn.addEventListener('click', () => {
      opt.onSelect?.();
      closeContextMenu();
    });
    menu.appendChild(btn);
  });
  document.body.appendChild(menu);

  const rect = anchor.getBoundingClientRect();
  requestAnimationFrame(() => {
    menu.style.top = `${rect.bottom + window.scrollY + 4}px`;
    menu.style.left = `${rect.left + window.scrollX}px`;
  });

  const onClickOutside = (e) => {
    if (!menu.contains(e.target)) {
      closeContextMenu();
    }
  };
  document.addEventListener('mousedown', onClickOutside);
  activeMenu = { menu, onClickOutside };
}

function closeContextMenu() {
  if (!activeMenu) return;
  document.removeEventListener('mousedown', activeMenu.onClickOutside);
  activeMenu.menu.remove();
  activeMenu = null;
}

export function createTalentCard(person = {}) {
  const profile = person ?? {};
  const body = document.createElement('div');
  body.className = 'talent-card';

  const header = document.createElement('div');
  header.className = 'talent-card__header';

  const avatar = document.createElement('div');
  avatar.className = 'avatar large';
  const displayName = profile.name ?? 'Associate Profile';
  avatar.textContent = initials(displayName);
  const avatarColor = profile.color ?? '#1f2937';
  avatar.style.backgroundColor = avatarColor;

  const main = document.createElement('div');
  main.className = 'talent-card__main';
  const info = document.createElement('div');
  info.className = 'talent-card__bio';
  const nameEl = document.createElement('div');
  nameEl.className = 'talent-card__name';
  nameEl.textContent = displayName;

  const posEl = document.createElement('div');
  posEl.className = 'talent-card__position';
  posEl.textContent = profile.position ?? 'Role not provided';

  info.append(nameEl, posEl);
  main.append(avatar, info);
  header.append(main);
  body.append(header);

  const sections = [];
  if (profile.perfSnapshot) {
    sections.push(talentAssessmentSection(profile.perfSnapshot));
  }
  if (profile.performanceRating) {
    sections.push(performanceRatingSection(profile.performanceRating));
  }
  sections.push(incumbentNominationSection(profile));
  sections.push(talentPoolSection(profile));
  sections.push(competencyGapSection(profile));
  sections.push(workExperienceSection(profile));
  sections.push(skillsSection(profile));
  sections.push(educationSection(profile));

  sections.forEach(section => {
    if (section) {
      body.append(section);
    }
  });

  return body;
}

function openProfile(modals, person) {
  const modal = modals.profile;
  closeContextMenu();
  const body = createTalentCard(person);
  modal.open({ title: 'Talent Card', body });
}

function openAssignLearning(modals, person) {
  const modal = modals.assign;
  const detailModal = modals.learning;
  closeContextMenu();

  const body = document.createElement('div');
  body.className = 'assign-modal';

  const header = document.createElement('div');
  header.className = 'assign-header';
  const title = document.createElement('div');
  title.className = 'assign-title';
  title.textContent = 'Assign learning to';
  const target = document.createElement('div');
  target.className = 'assign-target';
  target.textContent = person.name;
  header.append(title, target);
  body.append(header);

  const tabs = [
    {
      key: 'competency',
      label: 'Recommended Courses',
      placeholder: 'Search competencies',
      items: learningLibrary.competency
    },
    {
      key: 'catalog',
      label: 'Search by Catalog',
      placeholder: 'Search catalog titles or tags',
      items: learningLibrary.catalog
    }
  ];

  let activeTab = tabs[0].key;
  let query = '';

  const tabBar = document.createElement('div');
  tabBar.className = 'assign-tabs';
  tabs.forEach(tab => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = tab.label;
    btn.className = 'assign-tab';
    btn.dataset.tab = tab.key;
    btn.addEventListener('click', () => {
      activeTab = tab.key;
      query = '';
      renderTabs();
      renderContent();
    });
    tabBar.appendChild(btn);
  });
  body.append(tabBar);

  const content = document.createElement('div');
  content.className = 'assign-content';
  body.append(content);

  function renderTabs() {
    [...tabBar.children].forEach(btn => btn.classList.toggle('active', btn.dataset.tab === activeTab));
  }

  function renderContent() {
    const config = tabs.find(t => t.key === activeTab);
    content.innerHTML = '';

    if (config.key === 'competency') {
      const recWrap = document.createElement('div');
      recWrap.className = 'assign-recommendations';
      const recTitle = document.createElement('div');
      recTitle.className = 'assign-recommendations__title';
      recTitle.textContent = 'Selected Competencies';
      const recList = document.createElement('div');
      recList.className = 'assign-recommendations__pills';
      const focusAreas = (person.competencyGap?.focusAreas ?? []).slice(0, 3);
      if (focusAreas.length) {
        focusAreas.forEach(area => {
          const pill = document.createElement('span');
          pill.textContent = area.label;
          recList.appendChild(pill);
        });
      } else {
        const empty = document.createElement('div');
        empty.className = 'assign-recommendations__empty';
        empty.textContent = 'No competency gaps recorded.';
        recList.appendChild(empty);
      }
      recWrap.append(recTitle, recList);
      content.appendChild(recWrap);
    }

    const form = document.createElement('form');
    form.className = 'assign-search';
    form.addEventListener('submit', (e) => e.preventDefault());

    const input = document.createElement('input');
    input.type = 'search';
    input.placeholder = config.placeholder;
    input.value = query;
    input.addEventListener('input', (e) => {
      query = e.target.value;
      renderResults();
    });
    form.appendChild(input);

    content.appendChild(form);

    const results = document.createElement('div');
    results.className = 'assign-results';
    content.appendChild(results);

    function renderResults() {
      results.innerHTML = '';
      const normalized = query.trim().toLowerCase();
      const filtered = config.items.filter(item => {
        if (!normalized) return true;
        const haystack = [
          item.title,
          item.summary,
          ...(item.tags ?? []),
          ...(item.competencies ?? [])
        ].join(' ').toLowerCase();
        return haystack.includes(normalized);
      });
      results.classList.toggle('grid-three', true);

      if (!filtered.length) {
        const empty = document.createElement('div');
        empty.className = 'assign-empty';
        empty.textContent = normalized ? 'No learning items match that search.' : 'Start typing to search available learning.';
        results.appendChild(empty);
        return;
      }

      filtered.forEach(item => {
        results.appendChild(buildCourseCard(item, config.label));
      });
    }

    renderResults();

    function buildCourseCard(item, sourceLabel) {
      const card = document.createElement('div');
      card.className = 'assign-card compact clickable';
      const openDetail = () => {
        modal.close();
        openLearningDetail(detailModal, person, { ...item, source: sourceLabel });
      };
      card.addEventListener('click', openDetail);
      const info = document.createElement('div');
      info.className = 'assign-card-info';
      const h4 = document.createElement('div');
      h4.className = 'assign-card-title';
      h4.textContent = item.title;
      const summary = document.createElement('p');
      summary.textContent = item.summary;
      const meta = document.createElement('div');
      meta.className = 'assign-card-meta';
      meta.textContent = item.duration;
      info.append(h4, summary, meta);
      if (config.key === 'competency' && item.competencies?.length) {
        const pillWrap = document.createElement('div');
        pillWrap.className = 'assign-competency-pills';
        item.competencies.forEach(label => {
          const pill = document.createElement('span');
          pill.textContent = label;
          pillWrap.appendChild(pill);
        });
        info.appendChild(pillWrap);
      }
      card.append(info);
      return card;
    }
  }

  renderTabs();
  renderContent();
  modal.open({ title: 'Assign Learning', body, className: 'modal-wide' });
}

function openLearningDetail(modal, person, course) {
  const body = document.createElement('div');
  body.className = 'learning-detail';

  const header = document.createElement('div');
  header.className = 'learning-detail-header';
  const label = document.createElement('div');
  label.className = 'learning-detail-label';
  label.textContent = `Course selected for ${person.name}`;
  const title = document.createElement('h3');
  title.textContent = course.title;
  header.append(label, title);
  body.appendChild(header);

  const summary = document.createElement('p');
  summary.className = 'learning-detail-summary';
  summary.textContent = course.summary;
  body.appendChild(summary);

  const meta = document.createElement('div');
  meta.className = 'learning-detail-meta';
  const duration = document.createElement('span');
  duration.textContent = course.duration;
  const source = document.createElement('span');
  source.textContent = course.source ?? 'Learning Catalog';
  meta.append(duration, source);
  body.appendChild(meta);

  if (course.tags?.length) {
    const tags = document.createElement('div');
    tags.className = 'learning-detail-tags';
    course.tags.forEach(tag => {
      const chip = document.createElement('span');
      chip.textContent = tag;
      tags.appendChild(chip);
    });
    body.appendChild(tags);
  }

  if (course.competencies?.length) {
    const compSection = document.createElement('div');
    compSection.className = 'learning-detail-competencies';
    const compTitle = document.createElement('div');
    compTitle.className = 'learning-detail-competency-title';
    compTitle.textContent = 'Competencies reinforced';
    const pills = document.createElement('div');
    pills.className = 'learning-detail-competency-pills';
    course.competencies.forEach(item => {
      const pill = document.createElement('span');
      pill.textContent = item;
      pills.appendChild(pill);
    });
    compSection.append(compTitle, pills);
    body.appendChild(compSection);
  }

  modal.open({
    title: 'Learning Details',
    body,
    actions: [
      {
        label: 'Assign',
        onClick: () => {
          // placeholder assign action
        }
      }
    ],
    className: 'modal-wide'
  });
}

function incumbentNominationSection(person) {
  const nominations = person.incumbentNominations ?? [];
  const section = document.createElement('div');
  section.className = 'talent-card__section';
  const title = document.createElement('div');
  title.className = 'talent-card__section-title';
  title.textContent = `Nominated for Incumbents and Positions (${nominations.length || 0})`;
  section.appendChild(title);

  if (!nominations.length) {
    section.appendChild(createEmptyState('No incumbent nominations recorded.'));
    return section;
  }

  const list = document.createElement('div');
  list.className = 'talent-card__pool-list';
  nominations.forEach(item => {
    const row = document.createElement('div');
    row.className = 'talent-card__pool-row talent-card__pool-row--incumbent';
    const name = document.createElement('div');
    name.className = 'talent-card__pool-name';
    name.innerHTML = `<strong>${item.incumbent}</strong> <span>${item.position}</span>`;
    row.appendChild(name);
    list.appendChild(row);
  });
  section.appendChild(list);
  return section;
}

function talentPoolSection(person) {
  const pools = person.talentPools ?? [{ name: 'Top Talent', readiness: person.readiness }];
  const section = document.createElement('div');
  section.className = 'talent-card__section';
  const sectionTitle = document.createElement('div');
  sectionTitle.className = 'talent-card__section-title';
  sectionTitle.textContent = `Talent Pool Nominations (${pools.length || 0})`;
  section.appendChild(sectionTitle);

  if (!pools.length) {
    section.appendChild(createEmptyState('No pool nominations recorded.'));
    return section;
  }

  const poolList = document.createElement('div');
  poolList.className = 'talent-card__pool-list';
  pools.forEach(pool => {
    const row = document.createElement('div');
    row.className = 'talent-card__pool-row';
    const name = document.createElement('div');
    name.className = 'talent-card__pool-name';
    name.textContent = pool.name;
    const chip = document.createElement('span');
    chip.className = `chip readiness ${pool.readiness ?? ''}`.trim();
    chip.textContent = readinessLabel(pool.readiness ?? person.readiness);
    name.appendChild(chip);
    row.appendChild(name);
    poolList.appendChild(row);
  });
  section.appendChild(poolList);
  return section;
}

function competencyGapSection(person) {
  const { section, body } = buildInfoSection('Competency Gaps');
  const gap = person.competencyGap ?? {};
  const focusAreas = gap.focusAreas ?? [];
  if (focusAreas.length) {
    const list = document.createElement('div');
    list.className = 'talent-card__gap-list';
    focusAreas.forEach(area => {
      const pill = document.createElement('span');
      pill.className = 'talent-card__gap-pill';
      pill.textContent = area.label;
      list.appendChild(pill);
    });
    body.appendChild(list);
  }
  return section;
}

function workExperienceSection(person) {
  const { section, body } = buildInfoSection('Work Experience', 'talent-card__info-card-body--experience');
  const experiences = person.workExperience ?? [];
  if (experiences.length) {
    experiences.forEach(item => {
      const entry = document.createElement('div');
      entry.className = 'talent-card__experience-entry';
      entry.innerHTML = `<strong>${item.position}</strong> · ${item.company}<br/><span>${item.years}</span>`;
      body.appendChild(entry);
    });
  } else if (!body.children.length) {
    body.textContent = 'No Records Found';
  }

  return section;
}

function skillsSection(person) {
  const { section, body } = buildInfoSection('Skills', 'talent-card__info-card-body--skills');
  const skills = person.languageSkills ?? [];
  if (skills.length) {
    skills.forEach(skill => {
      const pill = document.createElement('span');
      pill.textContent = skill;
      body.appendChild(pill);
    });
  } else {
    body.textContent = 'No Records Found';
  }
  return section;
}

function educationSection(person) {
  const { section, body } = buildInfoSection('Education', 'talent-card__info-card-body--education');
  const education = person.formalEducation ?? [];
  if (education.length) {
    education.forEach(item => {
      const entry = document.createElement('div');
      entry.className = 'talent-card__education-entry';
      entry.innerHTML = `<strong>${item.degree}</strong> · ${item.university}<br/><span>${item.level} · Graduated ${item.graduation}</span>`;
      body.appendChild(entry);
    });
  } else {
    body.textContent = 'No Records Found';
  }
  return section;
}

function buildInfoSection(title, bodyClass) {
  const section = document.createElement('div');
  section.className = 'talent-card__section talent-card__section--info-list';
  const sectionTitle = document.createElement('div');
  sectionTitle.className = 'talent-card__section-title';
  sectionTitle.textContent = title;
  section.appendChild(sectionTitle);

  const card = document.createElement('div');
  card.className = 'talent-card__info-card';
  const body = document.createElement('div');
  body.className = 'talent-card__info-card-body';
  if (bodyClass) {
    body.classList.add(bodyClass);
  }
  card.appendChild(body);
  section.appendChild(card);
  return { section, body };
}

function createEmptyState(text) {
  const wrap = document.createElement('div');
  wrap.className = 'talent-card__empty';
  wrap.textContent = text;
  return wrap;
}

function talentAssessmentSection(snapshot) {
  const section = document.createElement('div');
  section.className = 'talent-card__section talent-card__section--performance';

  const header = document.createElement('div');
  header.className = 'talent-card__perf-header';
  const title = document.createElement('div');
  title.className = 'talent-card__section-title';
  title.textContent = 'Talent Assessment';
  const links = document.createElement('div');
  links.className = 'talent-card__tabs';
  const latestBtn = document.createElement('button');
  latestBtn.type = 'button';
  latestBtn.textContent = 'Latest Rating';
  const trendBtn = document.createElement('button');
  trendBtn.type = 'button';
  trendBtn.textContent = 'Trend';
  links.append(latestBtn, trendBtn);
  header.append(title, links);

  const content = document.createElement('div');
  content.className = 'talent-card__tab-content';
  section.append(header, content);

  let mode = 'latest';
  latestBtn.classList.add('active');

  latestBtn.addEventListener('click', () => {
    mode = 'latest';
    render();
  });
  trendBtn.addEventListener('click', () => {
    mode = 'trend';
    render();
  });

  function render() {
    latestBtn.classList.toggle('active', mode === 'latest');
    trendBtn.classList.toggle('active', mode === 'trend');
    content.innerHTML = '';
    if (mode === 'latest') {
      renderLatest();
    } else {
      renderTrend();
    }
  }

  function renderLatest() {
    const summary = document.createElement('div');
    summary.className = 'talent-card__summary';
    summary.textContent = snapshot.summary ?? 'No data available';

    const grid = document.createElement('div');
    grid.className = 'talent-card__ninebox-grid';
    for (let row = 3; row >= 1; row--) {
      for (let col = 1; col <= 3; col++) {
        const cell = document.createElement('div');
        cell.className = 'talent-card__ninebox-cell';
        if (row === snapshot.potential && col === snapshot.performance) {
          cell.classList.add('talent-card__ninebox-cell--active');
        }
        grid.appendChild(cell);
      }
    }
    const perfLabel = document.createElement('div');
    perfLabel.className = 'talent-card__ninebox-label talent-card__ninebox-label--x';
    perfLabel.textContent = 'Performance';
    const potLabel = document.createElement('div');
    potLabel.className = 'talent-card__ninebox-label talent-card__ninebox-label--y';
    potLabel.textContent = 'Potential';
    const gridWrap = document.createElement('div');
    gridWrap.className = 'talent-card__ninebox';
    gridWrap.append(grid, perfLabel, potLabel);

    const latestLayout = document.createElement('div');
    latestLayout.className = 'talent-card__latest-layout';
    latestLayout.append(summary, gridWrap);
    content.appendChild(latestLayout);
  }

  function renderTrend() {
    const trendData = snapshot.trend ?? [];
    const trendWrap = document.createElement('div');
    trendWrap.className = 'talent-card__trend';

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 260 140');

    const axis = document.createElementNS(svgNS, 'rect');
    axis.setAttribute('x', '40');
    axis.setAttribute('y', '20');
    axis.setAttribute('width', '200');
    axis.setAttribute('height', '90');
    axis.setAttribute('fill', 'none');
    axis.setAttribute('stroke', 'var(--border)');
    svg.appendChild(axis);

    const gridLines = [1, 2];
    gridLines.forEach(level => {
      const y = mapY(level);
      const line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', '40');
      line.setAttribute('x2', '240');
      line.setAttribute('y1', y);
      line.setAttribute('y2', y);
      line.setAttribute('stroke', 'var(--border)');
      line.setAttribute('stroke-dasharray', '2,4');
      svg.appendChild(line);
    });

    const perfPoints = trendData.map((point, idx) => [mapX(idx, trendData.length), mapY(point.performance)]);
    const potPoints = trendData.map((point, idx) => [mapX(idx, trendData.length), mapY(point.potential)]);

    const perfLine = document.createElementNS(svgNS, 'polyline');
    perfLine.setAttribute('points', perfPoints.map(p => p.join(',')).join(' '));
    perfLine.setAttribute('fill', 'none');
    perfLine.setAttribute('stroke', '#3b82f6');
    perfLine.setAttribute('stroke-width', '2');
    svg.appendChild(perfLine);

    const potLine = document.createElementNS(svgNS, 'polyline');
    potLine.setAttribute('points', potPoints.map(p => p.join(',')).join(' '));
    potLine.setAttribute('fill', 'none');
    potLine.setAttribute('stroke', '#111');
    potLine.setAttribute('stroke-width', '2');
    svg.appendChild(potLine);

    perfPoints.forEach(pt => svg.appendChild(pointDot(pt, '#3b82f6')));
    potPoints.forEach(pt => svg.appendChild(pointDot(pt, '#111')));

    const leftLabel = document.createElement('div');
    leftLabel.className = 'talent-card__trend-axis talent-card__trend-axis--y';
    leftLabel.textContent = 'PERFORMANCE';
    const rightLabel = document.createElement('div');
    rightLabel.className = 'talent-card__trend-axis talent-card__trend-axis--right';
    rightLabel.textContent = 'POTENTIAL';

    const bottom = document.createElement('div');
    bottom.className = 'talent-card__trend-bottom';
    trendData.forEach(point => {
      const span = document.createElement('span');
      span.textContent = point.label;
      bottom.appendChild(span);
    });

    const legend = document.createElement('div');
    legend.className = 'talent-card__trend-legend';
    legend.innerHTML = '<span><i class="talent-card__legend-dot is-performance"></i>Performance</span><span><i class="talent-card__legend-dot is-potential"></i>Potential</span>';

    trendWrap.append(svg, leftLabel, rightLabel, bottom, legend);
    content.appendChild(trendWrap);
  }

  function mapX(index, total) {
    if (total <= 1) return 40;
    const step = 200 / (total - 1);
    return 40 + step * index;
  }

  function mapY(value) {
    const min = 1;
    const max = 3;
    const range = max - min;
    const normalized = (value - min) / range;
    return 110 - normalized * 90;
  }

  function pointDot([x, y], color) {
    const svgNS = 'http://www.w3.org/2000/svg';
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', '3');
    circle.setAttribute('fill', color);
    return circle;
  }

  render();
  return section;
}

function performanceRatingSection(rating) {
  const section = document.createElement('div');
  section.className = 'talent-card__section talent-card__section--rating';

  const header = document.createElement('div');
  header.className = 'talent-card__perf-header';
  const title = document.createElement('div');
  title.className = 'talent-card__section-title';
  title.textContent = 'Performance Rating';
  const links = document.createElement('div');
  links.className = 'talent-card__tabs';
  const latestBtn = document.createElement('button');
  latestBtn.type = 'button';
  latestBtn.textContent = 'Latest Rating';
  const trendBtn = document.createElement('button');
  trendBtn.type = 'button';
  trendBtn.textContent = 'Trend';
  links.append(latestBtn, trendBtn);
  header.append(title, links);

  const content = document.createElement('div');
  content.className = 'talent-card__rating';
  section.append(header, content);

  let mode = 'latest';
  latestBtn.classList.add('active');

  latestBtn.addEventListener('click', () => { mode = 'latest'; render(); });
  trendBtn.addEventListener('click', () => { mode = 'trend'; render(); });

  function render() {
    latestBtn.classList.toggle('active', mode === 'latest');
    trendBtn.classList.toggle('active', mode === 'trend');
    content.innerHTML = '';
    if (mode === 'latest') {
      const score = document.createElement('div');
      score.className = 'talent-card__rating-score';
      score.innerHTML = `<span>${rating.latest.toFixed(1)}</span><small>/ ${rating.scale}</small>`;

      const meter = document.createElement('div');
      meter.className = 'talent-card__rating-meter';
      const fill = document.createElement('div');
      fill.style.width = `${(rating.latest / rating.scale) * 100}%`;
      meter.appendChild(fill);

      content.append(score, meter);
    } else {
      const trendWrap = document.createElement('div');
      trendWrap.className = 'talent-card__rating-trend';
      const svgNS = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('viewBox', '0 0 260 120');

      const axis = document.createElementNS(svgNS, 'rect');
      axis.setAttribute('x', '30');
      axis.setAttribute('y', '10');
      axis.setAttribute('width', '200');
      axis.setAttribute('height', '80');
      axis.setAttribute('fill', 'none');
      axis.setAttribute('stroke', 'var(--border)');
      svg.appendChild(axis);

      const max = rating.scale;
      const min = 1;

      const line = document.createElementNS(svgNS, 'polyline');
      const points = rating.trend.map((point, idx) => {
        const x = mapLinear(idx, rating.trend.length, 30, 230);
        const y = mapValue(point.value, min, max, 90, 10);
        return `${x},${y}`;
      });
      line.setAttribute('points', points.join(' '));
      line.setAttribute('fill', 'none');
      line.setAttribute('stroke', '#3b82f6');
      line.setAttribute('stroke-width', '2');
      svg.appendChild(line);

      rating.trend.forEach((point, idx) => {
        const dot = document.createElementNS(svgNS, 'circle');
        dot.setAttribute('cx', mapLinear(idx, rating.trend.length, 30, 230));
        dot.setAttribute('cy', mapValue(point.value, min, max, 90, 10));
        dot.setAttribute('r', '3');
        dot.setAttribute('fill', '#3b82f6');
        svg.appendChild(dot);
      });

      const labels = document.createElement('div');
      labels.className = 'talent-card__rating-labels';
      rating.trend.forEach(point => {
        const span = document.createElement('span');
        span.textContent = point.label;
        labels.appendChild(span);
      });

      trendWrap.append(svg, labels);
      content.appendChild(trendWrap);
    }
  }

  function mapLinear(index, total, minPx, maxPx) {
    if (total <= 1) return minPx;
    const step = (maxPx - minPx) / (total - 1);
    return minPx + step * index;
  }

  function mapValue(value, min, max, minPx, maxPx) {
    const ratio = (value - min) / (max - min);
    return minPx - (minPx - maxPx) * ratio;
  }

  render();
  return section;
}

function readinessLabel(code) {
  switch (code) {
    case 'ready-green':
      return 'Ready Now';
    case 'ready-yellow':
      return '1-2 Years';
    case 'ready-red':
      return '3+ Years';
    default:
      return 'Readiness N/A';
  }
}

function block(content) {
  const b = document.createElement('div');
  b.className = 'org-block';
  b.appendChild(content);
  return b;
}

const ORG_SVG_NS = 'http://www.w3.org/2000/svg';
let orgNodeIdCounter = 0;
let activeOrgChart = null;

function renderOrgTree(rootData, modals) {
  orgNodeIdCounter = 0;
  const entries = flattenOrgTree(rootData);
  const levelEntries = [];
  const childrenByParent = new Map();
  entries.forEach(entry => {
    if (!levelEntries[entry.depth]) levelEntries[entry.depth] = [];
    levelEntries[entry.depth].push(entry);
    if (entry.parentId) {
      if (!childrenByParent.has(entry.parentId)) {
        childrenByParent.set(entry.parentId, []);
      }
      childrenByParent.get(entry.parentId).push(entry);
    }
  });

  const chart = document.createElement('div');
  chart.className = 'org';

  const svg = document.createElementNS(ORG_SVG_NS, 'svg');
  svg.classList.add('org-lines');
  chart.appendChild(svg);

  const tiersWrap = document.createElement('div');
  tiersWrap.className = 'org-tiers';
  chart.appendChild(tiersWrap);

  levelEntries.forEach((levelList = [], depth) => {
    if (!levelList?.length) return;
    const tier = document.createElement('div');
    tier.className = `org-tier org-tier--level${depth}`;
    tier.dataset.level = depth;
    if (depth === 0) {
      levelList.forEach(entry => {
        const blockEl = block(renderNode(entry.data, modals));
        blockEl.dataset.nodeId = entry.id;
        tier.appendChild(blockEl);
      });
    } else {
      const parentLevel = levelEntries[depth - 1] ?? [];
      const parentsWithChildren = parentLevel.filter(parentEntry => {
        const kids = childrenByParent.get(parentEntry.id) ?? [];
        return kids.length > 0;
      });
      const slotParents = parentsWithChildren.length ? parentsWithChildren : parentLevel;
      const totalCols = slotParents.length || 1;
      tier.style.display = 'grid';
      tier.style.gridTemplateColumns = `repeat(${totalCols}, minmax(220px, 1fr))`;
      tier.style.justifyItems = 'center';

      slotParents.forEach(parentEntry => {
        const kids = childrenByParent.get(parentEntry.id) ?? [];
        if (!kids.length && parentsWithChildren.length) return;

        const slot = document.createElement('div');
        slot.className = 'org-tier-slot';
        slot.dataset.parentId = parentEntry.id;

        slot.style.display = 'flex';
        slot.style.justifyContent = 'center';
        slot.style.alignItems = 'flex-start';
        slot.style.gap = '18px';
        slot.style.flexWrap = 'wrap';

        kids.forEach(entry => {
          const blockEl = block(renderNode(entry.data, modals));
          blockEl.dataset.nodeId = entry.id;
          blockEl.dataset.parentId = entry.parentId;
          slot.appendChild(blockEl);
        });
        tier.appendChild(slot);
      });
    }
    tiersWrap.appendChild(tier);
  });

  scheduleOrgLineLayout(chart);
  return chart;
}

function flattenOrgTree(node, depth = 0, parentId = null, acc = []) {
  const id = `org-node-${++orgNodeIdCounter}`;
  acc.push({ id, data: node, depth, parentId });
  (node.children ?? []).forEach(child => flattenOrgTree(child, depth + 1, id, acc));
  return acc;
}

function scheduleOrgLineLayout(chart) {
  activeOrgChart = chart;
  requestAnimationFrame(() => {
    if (activeOrgChart !== chart || !chart.isConnected) return;
    layoutOrgLines(chart);
  });
}

window.addEventListener('resize', () => {
  if (activeOrgChart?.isConnected) {
    layoutOrgLines(activeOrgChart);
  }
});

function layoutOrgLines(chart) {
  const svg = chart.querySelector('.org-lines');
  if (!svg) return;
  const nodes = chart.querySelectorAll('[data-node-id]');
  if (!nodes.length) {
    svg.innerHTML = '';
    return;
  }

  const chartRect = chart.getBoundingClientRect();
  const width = chartRect.width;
  const height = chartRect.height;
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.innerHTML = '';

  // Reset slot offsets before remeasuring
  const slots = chart.querySelectorAll('.org-tier-slot[data-parent-id]');
  slots.forEach(slot => {
    slot.style.transform = 'translateX(0px)';
  });

  // Align successor slot centers under their parent nodes
  slots.forEach(slot => {
    const parentId = slot.dataset.parentId;
    if (!parentId) return;
    const parent = chart.querySelector(`[data-node-id="${parentId}"]`);
    if (!parent) return;

    const slotRect = slot.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const slotCenter = slotRect.left + slotRect.width / 2;
    const parentCenter = parentRect.left + parentRect.width / 2;
    let delta = parentCenter - slotCenter;

    const slotLeft = slotRect.left - chartRect.left;
    const slotRight = slotRect.right - chartRect.left;
    const newLeft = slotLeft + delta;
    const newRight = slotRight + delta;

    if (newLeft < 0) {
      delta -= newLeft;
    }
    if (newRight > width) {
      delta -= (newRight - width);
    }

    slot.style.transform = `translateX(${delta}px)`;
  });

  nodes.forEach(node => {
    const parentId = node.dataset.parentId;
    if (!parentId) return;
    const parent = chart.querySelector(`[data-node-id="${parentId}"]`);
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const childRect = node.getBoundingClientRect();
    const startX = parentRect.left + parentRect.width / 2 - chartRect.left;
    const startY = parentRect.bottom - chartRect.top;
    const endX = childRect.left + childRect.width / 2 - chartRect.left;
    const endY = childRect.top - chartRect.top;
    const midY = (startY + endY) / 2;

    const horizontalDir = Math.sign(endX - startX) || 1;
    const verticalDir = Math.sign(endY - midY) || 1;
    const cornerRadius = Math.min(14, Math.abs(endX - startX) / 2);
    const verticalCornerY = midY;
    const horizontalCornerX = endX;
    const firstVerticalStop = verticalCornerY - cornerRadius;
    const horizontalEnd = horizontalCornerX - horizontalDir * cornerRadius;

    const path = document.createElementNS(ORG_SVG_NS, 'path');
    let d = `M ${startX} ${startY}`;
    d += ` L ${startX} ${firstVerticalStop}`;
    d += ` Q ${startX} ${verticalCornerY} ${startX + horizontalDir * cornerRadius} ${verticalCornerY}`;
    d += ` L ${horizontalEnd} ${verticalCornerY}`;
    d += ` Q ${horizontalCornerX} ${verticalCornerY} ${horizontalCornerX} ${verticalCornerY + verticalDir * cornerRadius}`;
    d += ` L ${horizontalCornerX} ${endY}`;
    path.setAttribute('d', d);
    path.classList.add('org-line');
    svg.appendChild(path);
  });
}

function initials(name) {
  const parts = String(name).trim().split(/\s+/).slice(0, 2);
  const init = parts.map(p => p[0] ? p[0].toUpperCase() : '').join('');
  return init || '*';
}
