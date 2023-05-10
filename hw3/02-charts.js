const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';


async function get_info() {
  const response = await fetch(url);
  const char_group = await response.json();
  return char_group;
}
async function renderChart() {
  const donutChart = document.querySelector('.donut-chart');
  const char_list = await get_info();
  const house_list = char_list.map(character => character.family);
  const fam_totals = {};
house_list.forEach(name => {
  if (name in fam_totals) {
    fam_totals[name]++;
  } else {
    fam_totals[name] = 1;
  }
});

let chart_labels = [];
let chart_data = [];

Object.entries(fam_totals).forEach(([family, count], index) => {
  chart_labels.push(`${family} (${count})`);
  chart_data.push(count);
});

const colors = chart_labels.map(() => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.2)`;
});

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: chart_labels,
      datasets: [
        {
          label: 'G.O.T. Number of Characters by House',
          data: chart_data,
          backgroundColor: colors.map(color => color.replace('0.2', '1')),
          borderColor: '#fff' ,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();