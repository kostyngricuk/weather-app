import { format } from 'date-fns';
import WeatherIcon from './WeatherIcon';

const TopSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-semibold text-theme-text-primary">Montreal</h1>
          <p className="text-theme-text mt-1">{format(new Date(), 'EEEE, d MMM yyyy')}</p>
          <p className="text-theme-text mt-1">Sunny</p>
        </div>
        <div className="text-6xl font-semibold text-theme-text-primary">19°</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-24 h-24">
          <WeatherIcon type="sunny" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-theme-text">Real Feel:</span>
            <span className="text-theme-text-primary">17°</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-theme-text">Chance of Rain:</span>
            <span className="text-theme-text-primary">0%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-theme-text">Wind Speed:</span>
            <span className="text-theme-text-primary">7 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
