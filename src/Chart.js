import React, { Component } from 'react';
const ReactDOM = require('react-dom')
const {Line} = require("react-chartjs")

const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
}

const options = {
    legend: {
        position: "top"
    },
    title: {
        display: true,
        text: 'Chart.js Radar Chart'
    },
    scale: {
        reverse: false,
        ticks: {
            beginAtZero: true
        }
    }
}

const App = () => (
  <Line data={chartData} width="600" height="600"/>
)


export default class Chart extends Component {
    render() {
        let graph;
        if (typeof(window) == 'undefined') {
            graph = (<div></div>);
        } else {
            const Radar = require('react-chartjs').Radar
            graph = (<Radar data={chartData} options={options} width="600" height="600"/>)
        }

        return (
            <div>
                {graph}
            </div>
        )
    }
}
