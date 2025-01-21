'use client'

import dynamic from 'next/dynamic'

const AppReactApexCharts = dynamic(() => import('../ui/lib/AppReactApexCharts'))

const ApexRadialBarChart = ({ progress }) => {

  var options = {
    chart: {
      height: 300,
      type: "radialBar",
    },
    states: {
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0.85,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0.85,
        },
      },
    },
    series: [67],
    colors: ["#97d1ca"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%",

        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 2,
            right: 2,
            blur: 6,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#6AD2C8",
            fontSize: "30px"
          },
          value: {
            show: false
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#EAE5C9"],
        stops: [0, 80]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: [""],

  };

  return (
    <AppReactApexCharts type='radialBar' width='70%' height={400} options={options} series={[progress]} />
  )
}

export default ApexRadialBarChart
