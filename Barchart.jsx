import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Barchart extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        options: {
            responsive: [{
                breakpoint: 767,
                options: {
                    chart:{
                        width:300,
                        height: 350,
                    }
                },
            }],
            xaxis: {
                categories: ['M','T','W','T','F','S','S'],
              },
            grid:{
                show:false
            },
            chart:{
                background:'#bfe1e1',
                width: 312,
                height: 300,
                // offsetX: 100,
                redrawOnWindowResize: true  
            },
            legend: {
                show: false
              },
            plotOptions:{
                bar:{
                    distributed: true
                }
            },
          title: {
            text: 'Title',
          },
          colors:[
          '#FFF'],
          dataLabels: {
              enabled: true,
              style:{
                colors:'#252525'
              }
            }
        },
        series:  [{
            name: 'Applications',
            data: [3,3,3,5,3,0,0]
          }],
          labels:{
            style: {
                colors: '#252525',
                fontSize: '12px'
              }
          } 
      }
    }
  
    render() {
  
      return (
        <div className="barchart">
          <Chart options={this.state.options} series={this.state.series} type="bar" width="380" />
        </div>
      );
    }
  }
  
  export default Barchart;