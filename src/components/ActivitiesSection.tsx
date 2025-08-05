import { Wind, Droplets, Sun, Thermometer } from 'lucide-react';

const ActivitiesSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-theme-text-primary text-xl font-semibold">Weather Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-theme-secondary rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary rounded-lg">
              <Wind className="text-theme-text" />
            </div>
            <div>
              <p className="text-theme-text">Wind Speed</p>
              <p className="text-theme-text-primary font-semibold">7 km/h</p>
            </div>
          </div>
        </div>
        <div className="bg-theme-secondary rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary rounded-lg">
              <Droplets className="text-theme-text" />
            </div>
            <div>
              <p className="text-theme-text">Humidity</p>
              <p className="text-theme-text-primary font-semibold">65%</p>
            </div>
          </div>
        </div>
        <div className="bg-theme-secondary rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary rounded-lg">
              <Sun className="text-theme-text" />
            </div>
            <div>
              <p className="text-theme-text">UV Index</p>
              <p className="text-theme-text-primary font-semibold">3</p>
            </div>
          </div>
        </div>
        <div className="bg-theme-secondary rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary rounded-lg">
              <Thermometer className="text-theme-text" />
            </div>
            <div>
              <p className="text-theme-text">Feels Like</p>
              <p className="text-theme-text-primary font-semibold">17°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
