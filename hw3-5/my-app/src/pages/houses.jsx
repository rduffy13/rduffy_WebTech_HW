import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './style.css'
const url = 'https://thronesapi.com/api/v2/Characters';
Chart.register(...registerables);



const Houses = () => {
  const ChartComponent = ({ chartType, data, options }) => {
    const Cont = useRef(null);
    let chart_Inst = useRef(null);
  
    useEffect(() => {
      chart_Inst.current = new Chart(Cont.current, {
        type: chartType,
        data: data,
        options: options,
      });
  
      return () => {
        chart_Inst.current.destroy();
      };
    }, [chartType, data, options]);
  
    return <canvas  ref={Cont} />;
  };
  const [houses, setHouses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url);
        const characters = await response.json();
        const Houses = {};

        characters.forEach((character) => {
          if (character.family.includes('House')) {
            if (Houses[character.family]) {
              Houses[character.family] += 1;
            } else {
              Houses[character.family] = 1;
            }
          }
        });

        setHouses(Houses);
    };

    fetchData();
  }, []);

  
  const [labels, characterCount] = [Object.keys(houses),Object.values(houses)];
  const colors = labels.map(() => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, 0.2)`;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Count',
        data: characterCount,
        backgroundColor: colors.map(color => color.replace('0.2', '1')),
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="big">
      <div>
        <div className="names">G.O.T. Houses</div>
        <ChartComponent chartType="doughnut" data={data} />
      </div>
    </div>
  );
};

  export default Houses;