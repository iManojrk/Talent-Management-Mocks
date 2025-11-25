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
      performanceRating: { latest: 3.9, scale: 5, label: 'Exceeds Expectations' },
      talentAssessment: [
        { label: 'Potential', value: 'High' },
        { label: 'Performance', value: 'High' },
        { label: 'Readiness', value: 'Ready Now' },
        { label: 'Risk of loss', value: 'Low' },
        { label: 'Impact of loss', value: 'Medium' },
        { label: 'Next Move', value: 'Senior Director' }
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
      performanceRating: { latest: 3.6, scale: 5, label: 'Consistent Performer' },
      talentAssessment: [
        { label: 'Potential', value: 'High' },
        { label: 'Performance', value: 'High' },
        { label: 'Readiness', value: '2 Years' },
        { label: 'Risk of loss', value: 'Medium' },
        { label: 'Impact of loss', value: 'High' },
        { label: 'Next Move', value: 'Director' }
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
      performanceRating: { latest: 3.1, scale: 5, label: 'Developing Leader' },
      talentAssessment: [
        { label: 'Potential', value: 'Medium' },
        { label: 'Performance', value: 'Medium' },
        { label: 'Readiness', value: '3 Years' },
        { label: 'Risk of loss', value: 'Medium' },
        { label: 'Impact of loss', value: 'High' },
        { label: 'Next Move', value: 'Director' }
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
    label: 'Outstanding'
  },
  talentAssessment: [
    { label: 'Potential', value: 'High' },
    { label: 'Performance', value: 'High' },
    { label: 'Readiness', value: '1 Year' },
    { label: 'Risk of loss', value: 'Medium' },
    { label: 'Impact of loss', value: 'Low' },
    { label: 'Next Move', value: 'Director' }
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

function buildAssociateSection(titleText, contentEl) {
  const section = document.createElement('section');
  section.className = 'associate-card__section';
  const title = document.createElement('h4');
  title.className = 'associate-card__section-title';
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
  leftColumn.appendChild(ratingSection);

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
  leftColumn.appendChild(buildSection('Talent Assessment', assessmentContent));

  const successorsContent = document.createElement('div');
  successorsContent.className = 'plan-preview__successors';
  eliasPlanData.successors.forEach(successor => {
    const row = document.createElement('div');
    row.className = 'plan-preview__successor-row';
    const readinessClass = getReadinessClass(successor.readiness) || 'neutral';
    row.innerHTML = `
      <span class="plan-preview__successor-name">${successor.name}</span>
      <span class="plan-preview__successor-readiness plan-preview__successor-readiness--${readinessClass}">${successor.readiness}</span>
    `;
    successorsContent.appendChild(row);
  });
  const successorsSection = buildSection('Successors', successorsContent);
  successorsSection.classList.add('talent-card__section--flush');
  rightColumn.appendChild(successorsSection);

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
  leftColumn.appendChild(buildSection('Nominated For', nominationsContent));

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
  leftColumn.appendChild(buildSection('Talent Pool Nominations', poolsContent));

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
    const associateCard = document.createElement('div');
    associateCard.className = 'associate-card';

    const header = document.createElement('div');
    header.className = 'associate-card__header';
    const mainInfo = document.createElement('div');
    mainInfo.className = 'associate-card__main';
    const associateAvatar = document.createElement('div');
    associateAvatar.className = 'avatar';
    associateAvatar.textContent = getInitials(profile.name);
    associateAvatar.style.backgroundColor = profile.avatarColor;
    const associateBio = document.createElement('div');
    associateBio.className = 'associate-card__bio';
    const associateName = document.createElement('div');
    associateName.className = 'associate-card__name';
    associateName.textContent = profile.name;
    const associateRole = document.createElement('div');
    associateRole.className = 'associate-card__role';
    associateRole.textContent = profile.position;
    associateBio.append(associateName, associateRole);
    mainInfo.append(associateAvatar, associateBio);

    const readinessPill = document.createElement('span');
    const associateReadinessClass = getReadinessClass(profile.readiness) || 'neutral';
    readinessPill.className = `plan-preview__successor-readiness plan-preview__successor-readiness--${associateReadinessClass}`;
    readinessPill.textContent = profile.readiness;
    header.append(mainInfo, readinessPill);
    associateCard.appendChild(header);

    const body = document.createElement('div');
    body.className = 'associate-card__body';

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
    body.appendChild(buildAssociateSection('Performance Rating', perfContent));

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
    body.appendChild(buildAssociateSection('Talent Assessment', assessmentContent));

    const nominationsContent = document.createElement('div');
    nominationsContent.className = 'associate-card__list';
    profile.nominatedFor.forEach(item => {
      const row = document.createElement('div');
      row.className = 'associate-card__nomination-row';
      row.innerHTML = `
        <span class="associate-card__nomination-name">${item.name}</span>
        <span class="associate-card__nomination-position">— ${item.position}</span>
      `;
      nominationsContent.appendChild(row);
    });
    body.appendChild(buildAssociateSection('Nominated For', nominationsContent));

    const poolsContent = document.createElement('div');
    poolsContent.className = 'associate-card__list';
    profile.talentPools.forEach(pool => {
      const row = document.createElement('div');
      row.className = 'associate-card__list-row';
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
    body.appendChild(buildAssociateSection('Talent Pool Nominations', poolsContent));

    associateCard.appendChild(body);
    associateGrid.appendChild(associateCard);
  });
  card.appendChild(associateGrid);

  wrapper.appendChild(card);
  return wrapper;
}
