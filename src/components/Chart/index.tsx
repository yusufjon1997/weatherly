import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Hourly } from 'types';

type ChartType = {
  activeDay : string;
  hourly : Array<Hourly>
}
import './style.css';

const Chart = ({ activeDay , hourly } : ChartType) => {

  
  const data = hourly.filter(h => h.day === activeDay);
  const temp = data.map(h => h.temp);
  const hours = data.map(h => h.time)
  
  console.log('hourly' , data);


  const series = [{
      data: temp
    }]


  const options: ApexOptions = {
    chart: {
      height: 250,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#d2f05d'],
    grid: {
      show: false
    },
    yaxis : {
      show : false
    },
    xaxis: {
      
      type : 'category',

      categories: hours,
      
      labels: {
          show : true
        },
      tooltip : {
        enabled : false
      },
      crosshairs : {
        show : false
      },
    },
    tooltip : {
      marker : {
        show : false
      },
      items: {
         display: 'flex',
      },
      // tooltip: {
      custom: function({series, seriesIndex, dataPointIndex, w}) {  
          return '<div class="arrow_box p-3">' +
          '<span>' +
          w.globals.categoryLabels[dataPointIndex] +
          ': ' +
          series[seriesIndex][dataPointIndex].toFixed(1) + '℃' +
          '</span>' +
          '</div'
        // }
      }
    },

  };

  return (
    <div className='chart mt-1 pl-2'>
      { data.length > 0 ?  
      <ReactApexChart options={options} series={series} type='area' />
      : <div className='no-data'>
        <h2>No Data</h2>
      </div>
      }
    </div>
  )
}

export default Chart;