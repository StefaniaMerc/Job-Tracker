import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: {
          text: 'Total applications 17',
        },
        plotOptions: {
          pie: {
            customScale: 0.5,
            offsetX:-100,
            offsetY: -30,
            donut:{
              size: '40%'
            }
          }
        },
        legend: {
          horizontalAlign: 'left',
          itemMargin: {
            horizontal: 20,
            vertical: 5
          },
          offsetX: -40,
          offsetY: -60,
          show: true,
          showForSingleSeries: true,
          position:'bottom',
          customLegendItems: ['Rejection (11)', 'Interviews done (3)', 'Interview booked (2)', 'Proposals (1)']       
        },
        colors:['#252525',
        '#E5A560',
        '#EDC67D',
        '#F4DCAC',
        '#FFF'],
        dataLabels: {
            enabled: false
          }
        
        
      },
      series: [11, 3, 2, 1],
      labels: ['Rejection', 'Interviews done', 'Interview booked', 'Proposals']
      
    }
    
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;