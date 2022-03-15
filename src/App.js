import React, { useEffect } from 'react';
import './App.css';
import ReactApexChart from "react-apexcharts";
import "./style.css";



const state = {
  series: [408, 155, 113],
  options: {
    chart: {
      width: 150,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        customScale: 1,
        expandOnClick: false,
        donut: {
          size: "50%"
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 0,
      dashArray: 0,
    },
    expandOnClick: false,
    fill: {
      colors: ["#45E0A7", "#FFA9EF", "#009EFD"],
      type: ["gradient"],
      gradient: {
        shade: "light",
        type: "horizontal",
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 150
        },
        legend: {
          show: false
        }
      }
    },
    {
      breakpoint: 1580,
      options: {
        chart: {
          width: 270
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 130,
    }
  },
}

function App() {

  useEffect(() => {

  }, [])
  // Radialize the colors


  return (<div className="wrapper">
    <h1>
      Sam explored learning activities and practiced worksheets.
    </h1>
    <div className="divider"></div>
    <div className="sections">
      <div className="pie-chart-container">
        <h2>
          English
        </h2>
        <div className="pie-chart">
          <ReactApexChart options={state.options} series={state.series} type="donut" width={150} />
        </div>
        <div className="details">
          <div className="detail">
            <div className="dot dot-1"></div>
            <div className="value">
              <span>408</span> Videos Watched
            </div>
          </div>
          <div className="detail">
            <div className="dot dot-2"></div>
            <div className="value">
              <span>145</span> Games Played
            </div>
          </div>
          <div className="detail">
            <div className="dot dot-3"></div>
            <div className="value">
              <span>120</span> Worksheets Practiced
            </div>
          </div>
        </div>
      </div>
      <div className="pie-chart-container">
        <h2>
          Math
        </h2>
        <div className="pie-chart">
          <ReactApexChart options={state.options} series={state.series} type="donut" width={150} />
        </div>
        <div className="details">
          <div className="detail">
            <div className="dot dot-1"></div>
            <div className="value">
              <span>408</span> Videos Watched
            </div>
          </div>
          <div className="detail">
            <div className="dot dot-2"></div>
            <div className="value">
              <span>145</span> Games Played
            </div>
          </div>
          <div className="detail">
            <div className="dot dot-3"></div>
            <div className="value">
              <span>120</span> Worksheets Practiced
            </div>
          </div>
        </div>
      </div>
      <div className="pie-chart-container">
        <h2>
          Science
        </h2>
        <div className="pie-chart">
          <ReactApexChart options={state.options} series={state.series} type="donut" width={150} />
        </div>
        <div className="details">
          <div className="detail">
            <div className="dot dot-1"></div>
            <div className="value">
              <span>408</span> Videos Watched
            </div>
          </div>
          <div className="detail">
            <div className="dot dot-2"></div>
            <div className="value">
              <span>145</span> Games Played
            </div>
          </div>
          <div className="detail">
            <div className="dot dot-3"></div>
            <div className="value">
              <span>120</span> Worksheets Practiced
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
