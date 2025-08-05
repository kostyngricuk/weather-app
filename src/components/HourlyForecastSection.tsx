import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const HourlyForecastSection = () => {
  const data = {
    labels: ['9 AM', '12 PM', '3 PM', '6 PM', '9 PM', '12 AM'],
    datasets: [
      {
        data: [19, 22, 24, 21, 18, 16],
        borderColor: '#7C7C8A',
        tension: 0.4,
        pointBackgroundColor: '#7C7C8A',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        display: false,
        min: 10,
        max: 30,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#7C7C8A',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-theme-text-primary text-xl font-semibold">Today's Forecast</h2>
      <div className="h-[200px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default HourlyForecastSection;
