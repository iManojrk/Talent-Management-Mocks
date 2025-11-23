const summaryRows = [
  {
    position: 'Director, Information Technology - Anthony Rizzo',
    incumbent: 'Jack Taylor',
    readiness: 'Ready Now',
    potential: 'High',
    achievableLevel: '2-3 Levels',
    retention: 'Low',
    lossImpact: 'High',
    highPotential: 'Yes',
    performanceRating: '4 - Exceeds Expectations'
  },
  {
    position: 'Director, Information Technology - Helen Meyer',
    incumbent: 'Helen Meyer',
    readiness: '1-2 Years',
    potential: 'High',
    achievableLevel: '2-3 Levels',
    retention: 'Low',
    lossImpact: 'Medium',
    highPotential: 'Yes',
    performanceRating: '4 - Exceeds Expectations'
  },
  {
    position: 'Director, Information Technology - Marc Johansson',
    incumbent: 'Timothy Perkins',
    readiness: '1 Year',
    potential: 'Low',
    achievableLevel: '1 Level',
    retention: 'Medium',
    lossImpact: 'Medium',
    highPotential: 'No',
    performanceRating: '3 - Solid Performance'
  }
];

export function SuccessionSummary() {
  const page = document.createElement('div');
  page.className = 'succession-summary';

  const header = document.createElement('div');
  header.className = 'succession-plans__header';
  header.innerHTML = `
    <div>
      <p class="succession-plans__eyebrow">Succession Planning</p>
      <h1>Succession Planning Summary</h1>
    </div>
  `;

  const card = document.createElement('div');
  card.className = 'table-card';
  card.innerHTML = `
    <div class="succession-plans__table-wrapper">
      <table>
        <thead>
          <tr>
            <th rowspan="2">Incumbent</th>
            <th rowspan="2">Position</th>
            <th rowspan="2">Readiness</th>
            <th colspan="6">Candidates</th>
          </tr>
          <tr>
            <th>Potential</th>
            <th>Achievable Level</th>
            <th>Risk of Loss</th>
            <th>Impact of Loss</th>
            <th>Is High Potential</th>
            <th>Performance Rating</th>
          </tr>
        </thead>
        <tbody>
          ${summaryRows
            .map(
              row => `
                <tr>
                  <td>${row.incumbent}</td>
                  <td>${row.position}</td>
                  <td>${row.readiness}</td>
                  <td>${row.potential}</td>
                  <td>${row.achievableLevel}</td>
                  <td>${row.retention}</td>
                  <td>${row.lossImpact}</td>
                  <td>${row.highPotential}</td>
                  <td>${row.performanceRating}</td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;

  page.append(header, card);
  return page;
}
