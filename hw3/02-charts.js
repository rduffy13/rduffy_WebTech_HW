
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


async function getCharacters() {
  const response = await fetch('https://thronesapi.com/api/v2/Characters');
  const characters = await response.json();
  return characters;
}





async function renderChart() {
  const donutChart = document.querySelector('.donut-chart');
  const characters = await getCharacters();
  const familyNames = characters.map(character => character.family);
  const familyCounts = {};
familyNames.forEach(name => {
  if (name in familyCounts) {
    familyCounts[name]++;
  } else {
    familyCounts[name] = 1;
  }
});


const labels = [];
const data = [];
//const labels = Object.keys(familyCounts);
//const data = Object.values(familyCounts);


Object.entries(familyCounts).forEach(([family, count], index) => {
  labels.push(`${family} (${count})`);
  data.push(count);
});

const colors = labels.map(() => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.2)`;
});

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Game of Thrones Characters by House',
          data: data,
          backgroundColor: colors.map(color => color.replace('0.2', '1')),
          borderColor: '#fff' ,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();