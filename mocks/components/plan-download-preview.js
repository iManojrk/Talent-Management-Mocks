import { buildAssessmentTrendChart, buildPerformanceTrendChart } from './trend-charts.js?v=20250205';

const eliasPlanData = {
  name: 'Elias Romero',
  position: 'VP, Fleet Operations',
  avatarColor: '#0f766e',
  successors: [
    { name: 'Olivia Brooks', readiness: 'Ready Now' },
    { name: 'Amir Hassan', readiness: '1 Year' },
    { name: 'Lena Ortiz', readiness: '3 Years' }
  ],
  successorProfiles: [
    {
      name: 'Olivia Brooks',
      position: 'Regional Distribution Manager',
      avatarColor: '#1d4ed8',
      readiness: 'Ready Now',
      performanceRating: {
        latest: 3.9,
        scale: 5,
        label: 'Exceeds Expectations',
        trend: [
          { label: 'FY22', value: 3.6 },
          { label: 'FY23', value: 3.7 },
          { label: 'FY24', value: 3.8 },
          { label: 'FY25', value: 3.9 }
        ]
      },
      talentAssessment: [
        { label: 'Potential', value: 'High' },
        { label: 'Performance', value: 'High' },
        { label: 'Readiness', value: 'Ready Now' },
        { label: 'Risk of loss', value: 'Low' },
        { label: 'Impact of loss', value: 'Medium' },
        { label: 'Next Move', value: 'Senior Director' }
      ],
      talentAssessmentTrend: [
        { label: 'FY22', performance: 3, potential: 3 },
        { label: 'FY23', performance: 3, potential: 3 },
        { label: 'FY24', performance: 3, potential: 2 },
        { label: 'FY25', performance: 3, potential: 3 }
      ],
      nominatedFor: [{ name: 'Maya Chen', position: 'Chief Logistics Officer' }],
      talentPools: [
        { name: 'Top Talent', readiness: 'Ready Now' },
        { name: 'Strategic Mobility Bench', readiness: '1 Year' }
      ]
    },
    {
      name: 'Amir Hassan',
      position: 'Fleet Optimization Manager',
      avatarColor: '#6d28d9',
      readiness: '1 Year',
      performanceRating: {
        latest: 3.6,
        scale: 5,
        label: 'Consistent Performer',
        trend: [
          { label: 'FY22', value: 3.2 },
          { label: 'FY23', value: 3.4 },
          { label: 'FY24', value: 3.5 },
          { label: 'FY25', value: 3.6 }
        ]
      },
      talentAssessment: [
        { label: 'Potential', value: 'High' },
        { label: 'Performance', value: 'High' },
        { label: 'Readiness', value: '2 Years' },
        { label: 'Risk of loss', value: 'Medium' },
        { label: 'Impact of loss', value: 'High' },
        { label: 'Next Move', value: 'Director' }
      ],
      talentAssessmentTrend: [
        { label: 'FY22', performance: 2, potential: 2 },
        { label: 'FY23', performance: 3, potential: 2 },
        { label: 'FY24', performance: 3, potential: 3 },
        { label: 'FY25', performance: 3, potential: 3 }
      ],
      nominatedFor: [{ name: 'Connor Blake', position: 'Director, Route Analytics' }],
      talentPools: [
        { name: 'Strategic Bench', readiness: '1 Year' },
        { name: 'Fleet Innovation Guild', readiness: 'Ready Now' }
      ]
    },
    {
      name: 'Lena Ortiz',
      position: 'Warehouse Automation Lead',
      avatarColor: '#b45309',
      readiness: '3 Years',
      performanceRating: {
        latest: 3.1,
        scale: 5,
        label: 'Developing Leader',
        trend: [
          { label: 'FY22', value: 2.7 },
          { label: 'FY23', value: 2.9 },
          { label: 'FY24', value: 3.0 },
          { label: 'FY25', value: 3.1 }
        ]
      },
      talentAssessment: [
        { label: 'Potential', value: 'Medium' },
        { label: 'Performance', value: 'Medium' },
        { label: 'Readiness', value: '3 Years' },
        { label: 'Risk of loss', value: 'Medium' },
        { label: 'Impact of loss', value: 'High' },
        { label: 'Next Move', value: 'Director' }
      ],
      talentAssessmentTrend: [
        { label: 'FY22', performance: 2, potential: 2 },
        { label: 'FY23', performance: 2, potential: 3 },
        { label: 'FY24', performance: 3, potential: 3 },
        { label: 'FY25', performance: 3, potential: 2 }
      ],
      nominatedFor: [{ name: 'Priya Nair', position: 'Head of Supply Chain Systems' }],
      talentPools: [
        { name: 'Emerging Leaders', readiness: '3 Years' },
        { name: 'Automation Futures Cohort', readiness: '1 Year' }
      ]
    }
  ],
  nominatedFor: [
    { name: 'Jordan Reyes', position: 'Chief Executive Officer' },
    { name: 'Priya Nair', position: 'Head of Supply Chain Systems' }
  ],
  talentPools: [{ name: 'Strategic Growth Leaders', readiness: '1 Year' }],
  performanceRating: {
    latest: 4.6,
    scale: 5,
    label: 'Outstanding',
    trend: [
      { label: 'FY22', value: 4.2 },
      { label: 'FY23', value: 4.4 },
      { label: 'FY24', value: 4.5 },
      { label: 'FY25', value: 4.6 }
    ]
  },
  talentAssessment: [
    { label: 'Potential', value: 'High' },
    { label: 'Performance', value: 'High' },
    { label: 'Readiness', value: '1 Year' },
    { label: 'Risk of loss', value: 'Medium' },
    { label: 'Impact of loss', value: 'Low' },
    { label: 'Next Move', value: 'Director' }
  ],
  talentAssessmentTrend: [
    { label: 'FY22', performance: 3, potential: 3 },
    { label: 'FY23', performance: 3, potential: 2 },
    { label: 'FY24', performance: 3, potential: 3 },
    { label: 'FY25', performance: 3, potential: 3 }
  ],
  talentComments:
    'Piloted a cross-functional analytics project; recommend scheduling monthly CEO readouts to keep visibility high.'
};

function buildSection(titleText, contentEl) {
  const section = document.createElement('section');
  section.className = 'talent-card__section';
  const title = document.createElement('h4');
  title.className = 'talent-card__section-title';
  title.textContent = titleText;
  section.append(title, contentEl);
  return section;
}

function buildSuccessorSection(titleText, contentEl) {
  const section = document.createElement('section');
  section.className = 'successor-card__section';
  const title = document.createElement('h4');
  title.className = 'successor-card__section-title';
  title.textContent = titleText;
  section.append(title, contentEl);
  return section;
}

function getReadinessClass(readiness) {
  switch (readiness) {
    case 'Ready Now':
      return 'green';
    case '1 Year':
      return 'amber';
    case '2 Years':
    case '3 Years':
      return 'red';
    default:
      return '';
  }
}

function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function createPlanDownloadPreview() {
  const wrapper = document.createElement('div');
  wrapper.className = 'plan-preview';

  const card = document.createElement('div');
  card.className = 'talent-card plan-preview__card';

  const header = document.createElement('div');
  header.className = 'talent-card__header';
  const main = document.createElement('div');
  main.className = 'talent-card__main';
  const avatar = document.createElement('div');
  avatar.className = 'avatar large';
  avatar.textContent = 'ER';
  avatar.style.backgroundColor = eliasPlanData.avatarColor;
  const bio = document.createElement('div');
  bio.className = 'talent-card__bio';
  const name = document.createElement('div');
  name.className = 'talent-card__name';
  name.textContent = eliasPlanData.name;
  const position = document.createElement('div');
  position.className = 'talent-card__position';
  position.textContent = eliasPlanData.position;
  bio.append(name, position);
  main.append(avatar, bio);
  header.appendChild(main);
  card.appendChild(header);

  const divider = document.createElement('div');
  divider.className = 'plan-preview__divider';
  card.appendChild(divider);

  const contentGrid = document.createElement('div');
  contentGrid.className = 'plan-preview__grid';
  const leftColumn = document.createElement('div');
  leftColumn.className = 'plan-preview__column plan-preview__column--left';
  const rightColumn = document.createElement('div');
  rightColumn.className = 'plan-preview__column plan-preview__column--right';
  contentGrid.append(leftColumn, rightColumn);
  card.appendChild(contentGrid);

  const assessmentContent = document.createElement('div');
  assessmentContent.className = 'plan-preview__assessment';
  const qaList = document.createElement('div');
  qaList.className = 'plan-preview__qa';
  eliasPlanData.talentAssessment.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'plan-preview__qa-row';
    row.innerHTML = `
      <span class="plan-preview__qa-question">${entry.label}</span>
      <span class="plan-preview__qa-answer">${entry.value}</span>
    `;
    qaList.appendChild(row);
  });
  assessmentContent.appendChild(qaList);
  const assessmentSection = buildSection('Talent Assessment', assessmentContent);
  assessmentSection.classList.add('talent-card__section--borderless');
  leftColumn.appendChild(assessmentSection);
  if (eliasPlanData.talentAssessmentTrend?.length) {
    assessmentSection.appendChild(buildAssessmentTrendChart(eliasPlanData.talentAssessmentTrend));
  }

  const ratingContent = document.createElement('div');
  ratingContent.className = 'plan-preview__rating';
  const score = document.createElement('div');
  score.className = 'plan-preview__rating-score';
  score.innerHTML = `<strong>${eliasPlanData.performanceRating.latest.toFixed(1)} / ${eliasPlanData.performanceRating.scale}</strong> — ${eliasPlanData.performanceRating.label}`;
  const bar = document.createElement('div');
  bar.className = 'plan-preview__rating-bar';
  const fill = document.createElement('div');
  fill.className = 'plan-preview__rating-fill';
  fill.style.width = `${(eliasPlanData.performanceRating.latest / eliasPlanData.performanceRating.scale) * 100}%`;
  bar.appendChild(fill);
  ratingContent.append(score, bar);
  const ratingSection = buildSection('Performance Rating', ratingContent);
  ratingSection.classList.add('talent-card__section--borderless');
  rightColumn.appendChild(ratingSection);
  if (eliasPlanData.performanceRating.trend?.length) {
    ratingSection.appendChild(
      buildPerformanceTrendChart(eliasPlanData.performanceRating.trend, eliasPlanData.performanceRating.scale)
    );
  }

  const nominationsContent = document.createElement('div');
  nominationsContent.className = 'plan-preview__nominations';
  eliasPlanData.nominatedFor.forEach(nominee => {
    const row = document.createElement('div');
    row.className = 'plan-preview__nomination-row';
    row.innerHTML = `
      <span class="plan-preview__nomination-name">${nominee.name}</span>
      <span class="plan-preview__nomination-position">— ${nominee.position}</span>
    `;
    nominationsContent.appendChild(row);
  });
  const nominatedSection = buildSection('Nominated For', nominationsContent);
  rightColumn.appendChild(nominatedSection);

  const poolsContent = document.createElement('div');
  poolsContent.className = 'plan-preview__pools';
  eliasPlanData.talentPools.forEach(pool => {
    const row = document.createElement('div');
    row.className = 'plan-preview__pool-row';
    const readinessClass = getReadinessClass(pool.readiness);
    const readinessModifier = readinessClass ? ` plan-preview__pool-readiness--${readinessClass}` : '';
    row.innerHTML = `
      <span class="plan-preview__pool-name">${pool.name}</span>
      ${
        pool.readiness
          ? `<span class="plan-preview__pool-readiness${readinessModifier}">${pool.readiness}</span>`
          : ''
      }
    `;
    poolsContent.appendChild(row);
  });
  rightColumn.appendChild(buildSection('Talent Pool Nominations', poolsContent));

  const lowerDivider = document.createElement('div');
  lowerDivider.className = 'plan-preview__divider plan-preview__divider--spacious';
  card.appendChild(lowerDivider);

  const successorsHeading = document.createElement('h3');
  successorsHeading.className = 'plan-preview__associate-title';
  successorsHeading.textContent = 'Successors';
  card.appendChild(successorsHeading);

  const associateGrid = document.createElement('div');
  associateGrid.className = 'plan-preview__associate-grid';
  const orderedProfiles = [...eliasPlanData.successorProfiles].sort((a, b) => {
    if (a.readiness === 'Ready Now') return -1;
    if (b.readiness === 'Ready Now') return 1;
    if (a.readiness === '1 Year') return -1;
    if (b.readiness === '1 Year') return 1;
    return 0;
  });
  orderedProfiles.forEach(profile => {
    const successorCard = document.createElement('div');
    successorCard.className = 'successor-card';

    const header = document.createElement('div');
    header.className = 'successor-card__header';
    const mainInfo = document.createElement('div');
    mainInfo.className = 'successor-card__main';
    const successorAvatar = document.createElement('div');
    successorAvatar.className = 'avatar';
    successorAvatar.textContent = getInitials(profile.name);
    successorAvatar.style.backgroundColor = profile.avatarColor;
    const successorBio = document.createElement('div');
    successorBio.className = 'successor-card__bio';
    const successorName = document.createElement('div');
    successorName.className = 'successor-card__name';
    successorName.textContent = profile.name;
    const successorRole = document.createElement('div');
    successorRole.className = 'successor-card__role';
    successorRole.textContent = profile.position;
    const readinessPill = document.createElement('span');
    const successorReadinessClass = getReadinessClass(profile.readiness) || 'neutral';
    readinessPill.className = `successor-card__readiness plan-preview__successor-readiness plan-preview__successor-readiness--${successorReadinessClass}`;
    readinessPill.textContent = profile.readiness;
    successorBio.append(successorName, successorRole, readinessPill);
    mainInfo.append(successorAvatar, successorBio);
    header.appendChild(mainInfo);
    successorCard.appendChild(header);

    const body = document.createElement('div');
    body.className = 'successor-card__body';

    const assessmentContent = document.createElement('div');
    assessmentContent.className = 'plan-preview__assessment';
    const assessmentQa = document.createElement('div');
    assessmentQa.className = 'plan-preview__qa';
    profile.talentAssessment.forEach(entry => {
      const row = document.createElement('div');
      row.className = 'plan-preview__qa-row';
      row.innerHTML = `
        <span class="plan-preview__qa-question">${entry.label}</span>
        <span class="plan-preview__qa-answer">${entry.value}</span>
      `;
      assessmentQa.appendChild(row);
    });
    assessmentContent.appendChild(assessmentQa);
    const successorAssessment = buildSuccessorSection('Talent Assessment', assessmentContent);
    body.appendChild(successorAssessment);
    if (profile.talentAssessmentTrend?.length) {
      successorAssessment.appendChild(buildAssessmentTrendChart(profile.talentAssessmentTrend));
    }

    const perfContent = document.createElement('div');
    perfContent.className = 'plan-preview__rating';
    const perfScore = document.createElement('div');
    perfScore.className = 'plan-preview__rating-score';
    perfScore.innerHTML = `<strong>${profile.performanceRating.latest.toFixed(1)} / ${profile.performanceRating.scale}</strong> — ${profile.performanceRating.label}`;
    const perfBar = document.createElement('div');
    perfBar.className = 'plan-preview__rating-bar';
    const perfFill = document.createElement('div');
    perfFill.className = 'plan-preview__rating-fill';
    perfFill.style.width = `${(profile.performanceRating.latest / profile.performanceRating.scale) * 100}%`;
    perfBar.appendChild(perfFill);
    perfContent.append(perfScore, perfBar);
    const successorPerformance = buildSuccessorSection('Performance Rating', perfContent);
    body.appendChild(successorPerformance);
    if (profile.performanceRating.trend?.length) {
      successorPerformance.appendChild(
        buildPerformanceTrendChart(profile.performanceRating.trend, profile.performanceRating.scale)
      );
    }

    const nominationsContent = document.createElement('div');
    nominationsContent.className = 'successor-card__list';
    profile.nominatedFor.forEach(item => {
      const row = document.createElement('div');
      row.className = 'successor-card__nomination-row';
      row.innerHTML = `
        <span class="successor-card__nomination-name">${item.name}</span>
        <span class="successor-card__nomination-position">— ${item.position}</span>
      `;
      nominationsContent.appendChild(row);
    });
    body.appendChild(buildSuccessorSection('Nominated For', nominationsContent));

    const poolsContent = document.createElement('div');
    poolsContent.className = 'successor-card__list';
    profile.talentPools.forEach(pool => {
      const row = document.createElement('div');
      row.className = 'successor-card__list-row';
      const poolReadinessClass = getReadinessClass(pool.readiness);
      const poolReadinessModifier = poolReadinessClass
        ? ` plan-preview__successor-readiness--${poolReadinessClass}`
        : '';
      row.innerHTML = `
        <span>${pool.name}</span>
        ${
          pool.readiness
            ? `<span class="plan-preview__successor-readiness${poolReadinessModifier}">${pool.readiness}</span>`
            : ''
        }
      `;
      poolsContent.appendChild(row);
    });
    body.appendChild(buildSuccessorSection('Talent Pool Nominations', poolsContent));

    successorCard.appendChild(body);
    associateGrid.appendChild(successorCard);
  });
  card.appendChild(associateGrid);

  wrapper.appendChild(card);
  return wrapper;
}
