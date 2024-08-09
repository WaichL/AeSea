let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
let secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim();
let fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-family').trim();

window.Apex = {
  chart: {
    foreColor: primaryColor,
    toolbar: {
      show: false
    },
  },
  colors: ['#FCCF31', '#17ead9', '#f02fc2'],
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: "#40475D",
  },
  xaxis: {
    axisTicks: {
      color: '#333'
    },
    axisBorder: {
      color: "#333"
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      gradientToColors: ['#F55555', '#6078ea', '#6094ea']
    },
  },
  tooltip: {
    theme: 'dark',
    x: {
      formatter: function (val) {
        return moment(new Date(val)).format("HH:mm:ss")
      }
    }
  },
  yaxis: {
    decimalsInFloat: 2,
    opposite: true,
    labels: {
      offsetX: -10
    }
  }
};


var optionsEfficiency = {
    chart: {
      height: 250,
      type: 'line',
      stacked: true,
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      dropShadow: {
        enabled: false,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 5,
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    series: [{
      name: 'Efficiency',
      data: [0,1,2,3,4,5]
      }],
    // }, {
    //   name: 'Waiting',
    //   data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
    //     min: 30,
    //     max: 110
    //   })
    // yaxis:{
    //   min: 70,
    //   max: 100
    // },
    // xaxis: {
    //   type: 'datetime',
    //   range: 32400000
    // },
    title: {
      text: 'Efficiency',
      align: 'left',
      style: {
        fontSize: '12px'
      }
    },
    subtitle: {
      text: '%',
      floating: true,
      align: 'right',
      offsetY: 0,
      style: {
        fontSize: '22px'
      }
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: 'left',
      onItemClick: {
        toggleDataSeries: false
      },
      position: 'top',
      offsetY: -28,
      offsetX: 60
    },
  }
  
  var chartEfficiency = new ApexCharts(
    document.querySelector("#chart-efficiency"),
    optionsEfficiency
  );
  chartEfficiency.render()