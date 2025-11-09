import { Modal } from '../components/Modal.js?v=20250205';

const orgData = {
  name: 'Jordan Patel',
  position: 'Chief Executive Officer',
  children: [
    { name: 'Maya Chen', position: 'Chief People Officer' },
    {
      name: 'Elias Romero',
      position: 'VP, Talent Strategy',
      showChildrenList: true,
      children: [
        {
          name: 'Olivia Brooks',
          position: 'Talent Operations Lead',
          readiness: 'ready-green',
          talentPools: [{ name: 'Top Talent', readiness: 'ready-green' }],
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
          position: 'Succession Planning Manager',
          readiness: 'ready-yellow',
          talentPools: [{ name: 'Strategic Bench', readiness: 'ready-yellow' }]
        },
        {
          name: 'Lena Ortiz',
          position: 'Performance Programs Lead',
          readiness: 'ready-red',
          talentPools: [{ name: 'Emerging Leaders', readiness: 'ready-red' }]
        }
      ]
    },
    { name: 'Priya Nair', position: 'Head of HR Technology' },
    { name: 'Connor Blake', position: 'Director, People Analytics' }
  ]
};

export function OrgChart() {
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Succession Org Chart';

  const chart = document.createElement('div');
  chart.className = 'org';
  const modal = Modal();
  chart.appendChild(renderBranch(orgData, modal));

  wrap.append(title, chart);
  return wrap;
}

function renderBranch(nodeData, modal) {
  const parentBlock = block(renderNode(nodeData, modal));
  if (!nodeData.children || !nodeData.children.length) {
    return parentBlock;
  }
  const childBlocks = nodeData.children.map(child => renderBranch(child, modal));
  const group = withChildren(parentBlock, childBlocks);
  return group;
}

function renderNode({ name = 'Name', position = 'Position', showChildrenList = false, children = [] }, modal) {
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

      childLine.tabIndex = 0;
      childLine.setAttribute('role', 'button');
      childLine.addEventListener('click', (e) => {
        if (e.target.closest('.org-child-menu-btn')) return;
        openProfile(modal, child);
      });
      childLine.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProfile(modal, child);
        }
      });

      const menuBtn = document.createElement('button');
      menuBtn.type = 'button';
      menuBtn.className = 'org-child-menu-btn';
      menuBtn.setAttribute('aria-label', `Actions for ${child.name}`);
      menuBtn.textContent = '⋯';
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openContextMenu(menuBtn, [
          { label: 'Assign Learning', onSelect: () => console.log(`Assign Learning -> ${child.name}`) },
          { label: 'Edit Successor', onSelect: () => console.log(`Edit Successor -> ${child.name}`) },
          { label: 'Remove Successor', onSelect: () => console.log(`Remove Successor -> ${child.name}`) }
        ]);
      });
      childLine.appendChild(menuBtn);

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

function openProfile(modal, person) {
  closeContextMenu();
  const body = document.createElement('div');
  body.className = 'profile-modal';

  const header = document.createElement('div');
  header.className = 'profile-header';

  const avatar = document.createElement('div');
  avatar.className = 'avatar large';
  avatar.textContent = initials(person.name);

  const info = document.createElement('div');
  const nameEl = document.createElement('div');
  nameEl.className = 'profile-name';
  nameEl.textContent = person.name;

  const posEl = document.createElement('div');
  posEl.className = 'profile-position';
  posEl.textContent = person.position;

  const readiness = document.createElement('span');
  readiness.className = `chip readiness ${person.readiness ?? ''}`.trim();
  readiness.textContent = readinessLabel(person.readiness);

  info.append(nameEl, posEl, readiness);
  header.append(avatar, info);
  body.append(header);

  const pools = person.talentPools ?? [{ name: 'Top Talent', readiness: person.readiness }];
  const section = document.createElement('div');
  section.className = 'profile-section';
  const sectionTitle = document.createElement('div');
  sectionTitle.className = 'profile-section-title';
  sectionTitle.textContent = `Talent Pool Nominations (${pools.length || 0})`;
  section.appendChild(sectionTitle);

  const poolList = document.createElement('div');
  poolList.className = 'talent-pool-list';
  pools.forEach(pool => {
    const row = document.createElement('div');
    row.className = 'talent-pool-row';
    const name = document.createElement('div');
    name.className = 'talent-pool-name';
    name.textContent = pool.name;
    const chip = document.createElement('span');
    chip.className = `chip readiness ${pool.readiness ?? ''}`.trim();
    chip.textContent = readinessLabel(pool.readiness ?? person.readiness);
    name.appendChild(chip);
    row.append(name);
    poolList.appendChild(row);
  });
  section.appendChild(poolList);
  body.append(section);

  if (person.perfSnapshot) {
    body.append(performanceSection(person.perfSnapshot));
  }

  if (person.performanceRating) {
    body.append(performanceRatingSection(person.performanceRating));
  }

  body.append(careerSection(person));

  modal.open({ title: 'Talent Profile', body });
}

function performanceSection(snapshot) {
  const section = document.createElement('div');
  section.className = 'profile-section performance';

  const header = document.createElement('div');
  header.className = 'perf-header';
  const title = document.createElement('div');
  title.className = 'profile-section-title';
  title.textContent = 'Performance & Potential';
  const links = document.createElement('div');
  links.className = 'perf-links';
  const latestBtn = document.createElement('button');
  latestBtn.type = 'button';
  latestBtn.textContent = 'Latest Rating';
  const trendBtn = document.createElement('button');
  trendBtn.type = 'button';
  trendBtn.textContent = 'Trend';
  links.append(latestBtn, trendBtn);
  header.append(title, links);

  const content = document.createElement('div');
  content.className = 'perf-content';
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
    summary.className = 'perf-summary';
    summary.textContent = snapshot.summary ?? 'No data available';

    const grid = document.createElement('div');
    grid.className = 'ninebox';
    for (let row = 3; row >= 1; row--) {
      for (let col = 1; col <= 3; col++) {
        const cell = document.createElement('div');
        cell.className = 'ninebox-cell';
        if (row === snapshot.potential && col === snapshot.performance) {
          cell.classList.add('active');
        }
        grid.appendChild(cell);
      }
    }
    const perfLabel = document.createElement('div');
    perfLabel.className = 'ninebox-label ninebox-label-x';
    perfLabel.textContent = 'Performance';
    const potLabel = document.createElement('div');
    potLabel.className = 'ninebox-label ninebox-label-y';
    potLabel.textContent = 'Potential';
    const gridWrap = document.createElement('div');
    gridWrap.className = 'ninebox-wrap';
    gridWrap.append(grid, perfLabel, potLabel);

    const latestLayout = document.createElement('div');
    latestLayout.className = 'perf-latest-layout';
    latestLayout.append(summary, gridWrap);
    content.appendChild(latestLayout);
  }

  function renderTrend() {
    const trendData = snapshot.trend ?? [];
    const trendWrap = document.createElement('div');
    trendWrap.className = 'perf-trend';

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
    leftLabel.className = 'trend-axis trend-axis-y';
    leftLabel.textContent = 'PERFORMANCE';
    const rightLabel = document.createElement('div');
    rightLabel.className = 'trend-axis trend-axis-right';
    rightLabel.textContent = 'POTENTIAL';

    const bottom = document.createElement('div');
    bottom.className = 'trend-bottom';
    trendData.forEach(point => {
      const span = document.createElement('span');
      span.textContent = point.label;
      bottom.appendChild(span);
    });

    const legend = document.createElement('div');
    legend.className = 'perf-legend';
    legend.innerHTML = '<span><i class="dot perf"></i>Performance</span><span><i class="dot pot"></i>Potential</span>';

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
  section.className = 'profile-section rating';

  const header = document.createElement('div');
  header.className = 'perf-header';
  const title = document.createElement('div');
  title.className = 'profile-section-title';
  title.textContent = 'Performance Rating';
  const links = document.createElement('div');
  links.className = 'perf-links';
  const latestBtn = document.createElement('button');
  latestBtn.type = 'button';
  latestBtn.textContent = 'Latest Rating';
  const trendBtn = document.createElement('button');
  trendBtn.type = 'button';
  trendBtn.textContent = 'Trend';
  links.append(latestBtn, trendBtn);
  header.append(title, links);

  const content = document.createElement('div');
  content.className = 'rating-content';
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
      score.className = 'rating-score';
      score.innerHTML = `<span>${rating.latest.toFixed(1)}</span><small>/ ${rating.scale}</small>`;

      const meter = document.createElement('div');
      meter.className = 'rating-meter';
      const fill = document.createElement('div');
      fill.style.width = `${(rating.latest / rating.scale) * 100}%`;
      meter.appendChild(fill);

      content.append(score, meter);
    } else {
      const trendWrap = document.createElement('div');
      trendWrap.className = 'rating-trend';
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
      labels.className = 'rating-trend-labels';
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

function careerSection(person) {
  const wrap = document.createElement('div');
  wrap.className = 'profile-section info-list';

  const blocks = [
    {
      title: 'Career Goals',
      type: 'text',
      value: person.careerGoals
        ? `Title: ${person.careerGoals.title}, Level: ${person.careerGoals.level}<br/>Function: ${person.careerGoals.function}, ${person.careerGoals.readiness}`
        : null
    },
    {
      title: 'Work Experience',
      type: 'experience',
      value: person.workExperience ?? []
    },
    {
      title: 'Skills',
      type: 'skills',
      value: person.languageSkills ?? []
    },
    {
      title: 'Education',
      type: 'education',
      value: person.formalEducation ?? []
    }
  ];

  blocks.forEach(block => {
    const card = document.createElement('div');
    card.className = 'info-card';
    const header = document.createElement('div');
    header.className = 'info-card-header';

    const title = document.createElement('div');
    title.className = 'info-card-title';
    title.textContent = block.title;
    const menuBtn = document.createElement('button');
    menuBtn.type = 'button';
    menuBtn.className = 'section-menu-btn';
    menuBtn.setAttribute('aria-label', `${block.title}`);
    menuBtn.textContent = '⋯';
    menuBtn.disabled = true;
    header.append(title, menuBtn);

    const body = document.createElement('div');
    body.className = 'info-card-body';

    if (block.type === 'skills') {
      body.classList.add('skills-body');
      if (block.value?.length) {
        block.value.forEach(skill => {
          const pill = document.createElement('span');
          pill.textContent = skill;
          body.appendChild(pill);
        });
      } else {
        body.textContent = 'No Records Found';
      }
    } else if (block.type === 'experience') {
      body.classList.add('experience-body');
      if (block.value?.length) {
        block.value.forEach(item => {
          const entry = document.createElement('div');
          entry.className = 'exp-entry';
          entry.innerHTML = `<strong>${item.position}</strong> · ${item.company}<br/><span>${item.years}</span>`;
          body.appendChild(entry);
        });
      } else {
        body.textContent = 'No Records Found';
      }
    } else if (block.type === 'education') {
      body.classList.add('education-body');
      if (block.value?.length) {
        block.value.forEach(item => {
          const entry = document.createElement('div');
          entry.className = 'edu-entry';
          entry.innerHTML = `<strong>${item.degree}</strong> · ${item.university}<br/><span>${item.level} · Graduated ${item.graduation}</span>`;
          body.appendChild(entry);
        });
      } else {
        body.textContent = 'No Records Found';
      }
    } else {
      body.innerHTML = block.value ?? 'No Records Found';
    }

    card.append(header, body);
    wrap.appendChild(card);
  });

  return wrap;
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

function withChildren(parentBlock, childBlocks) {
  const group = document.createElement('div');
  group.className = 'org-group';
  const parentRow = document.createElement('div');
  parentRow.className = 'org-parent';
  parentRow.appendChild(parentBlock);

  const childrenRow = document.createElement('div');
  childrenRow.className = 'org-children';
  childBlocks.forEach(cb => childrenRow.appendChild(cb));

  group.append(parentRow, connector(), childrenRow);
  return group;
}

function connector() {
  const c = document.createElement('div');
  c.className = 'org-connector';
  return c;
}

function initials(name) {
  const parts = String(name).trim().split(/\s+/).slice(0, 2);
  const init = parts.map(p => p[0] ? p[0].toUpperCase() : '').join('');
  return init || '*';
}
