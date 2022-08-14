import React from "react";
import Chart from "react-apexcharts";
// eslint-disable-next-line 
export default (props) => {
     
    const options = {
        chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 2000
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: props.title,
        align: 'left',
        margin: 20,
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#fff',
            margin: '10px'
        },
        },
        // markers: {
        //     size: 8
        // },
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
    tooltip: {
        x: {
            format: "yyyy/MM/dd HH:mm:ss.f"
        }
    },
    xaxis: {
        type: "datetime",
        range: props.range,
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
        max: props.max ? props.max : 60,
        min: props.min ? props.min : 20,
        tickAmount: 5,
        labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
                colors: 'white',
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
            text: '',
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
  };
  return <Chart type="line" options={options} series={props.dataList} height={360} />;
};
