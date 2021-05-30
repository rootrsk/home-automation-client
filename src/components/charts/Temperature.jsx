import React, {Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'

let data = [{x: new Date(),y:20}]

class Temperature extends Component {
    
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
                        enabled: false,
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
                    align: 'left',
                    margin:20,
                    style: {
                        fontSize:  '14px',
                        fontWeight:  'bold',
                        color:  '#fff',
                        margin:'10px'
                    },
                },
                markers: {
                    size: 8
                },
                fill: {
                    colors: ['white', 'red'],
                    type: 'gradient',

                    gradient: {
                        shade: 'dark',
                        type: 'vertical',
                        shadeIntensity: 1,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 60],
                        colorStops: [
                            {
                                offset: 0,
                                color: "#EB656F",
                                opacity: 1
                            },
                            {
                                offset: 20,
                                color: "#FAD375",
                                opacity: 1
                            },
                            {
                                offset: 60,
                                color: "#61DBC3",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "#95DA74",
                                opacity: 1
                            }
                        ]

                        
                    },
                },
                grid: {
                    borderColor: '#777',
                
                },
                xaxis: {
                    type: 'datetime',
                    range: 2000*9,
                    labels:{
                        datetimeUTC: false,
                        style: {
                            colors: 'white',
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-yaxis-label',
                        }
                    },
                    title: {
                        text: 'Time',
                        rotate: -90,
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            color: '#fff',
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 700,
                            cssClass: 'apexcharts-yaxis-title',
                        },
                    },
                    axisBorder: {
                        show: true,
                        color: '#777',
                        height: 1,
                        width: '100%',
                        offsetX: 0,
                        offsetY: 0
                    },
                },
                
                yaxis: {
                    max: 60,
                    min: 20,
                    tickAmount: 5,
                    labels: {
                        show: true,
                        align: 'right',
                        minWidth: 0,
                        maxWidth: 160,
                        style: {
                            colors: ['white'],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                        
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    title: {
                        text: 'Temperature',
                        rotate: -90,
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            color: '#fff',
                            fontSize: '14px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-title',
                        },
                    },
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
        // eslint-disable-next-line 
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
            <div className='chart_container'>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={360} />
            </div>
        );
    }
}

export default Temperature;

