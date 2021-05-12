import React, { useEffect, useState,Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'

let data = [{x: new Date(),y:20}]

class Chart extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name:'time',
                data: data.slice()
            }],
            options: {
                chart: {
                    id: 'realtime',
                    height: 350,
                    type: 'line',
                    animations: {
                        enabled: true,
                        easing: 'easein',
                        dynamicAnimation: {
                            speed: 80
                        }
                    },
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Dynamic Updating Chart',
                    align: 'left'
                },
                markers: {
                    size: 8
                },
                fill: {
                    type: 'gradient',

                    gradient: {
                        shade: 'dark',
                        type: 'vertical',
                        shadeIntensity: 1,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [10, 90, 100]
                    },
                },
                xaxis: {
                    type: 'datetime',
                    range: 2000*9,
                    tickAmount: 10,
                    labels:{
                        datetimeUTC: false,
                    }
                },
                
                yaxis: {
                    max: 60
                },
                legend: {
                    show: false
                },
                

            },
        };
    }


    componentDidMount() {
        this.setState({
            series: [{
                name: this.props.name,
                data: data.slice()
            }],
            options:{
                title:{
                    text: this.props.title
                }
            }
        })
        
        setInterval(() => {
            if (data.length > 10) {
                data = data.slice(data.length-10,data.length)
            }
            data.push({
                x: this.props.time,
                y: this.props.data
            })
            
            ApexCharts.exec('realtime', 'updateSeries', [{
                data: data
            }])
        }, 2000)
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        );
    }
}

export default Chart;

