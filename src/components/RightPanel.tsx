import { MapPin, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import WeatherIcon from './WeatherIcon';

const RightPanel = () => {
  return (
    <div className="flex-1 bg-theme-primary p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-theme-text" />
            <input
              type="text"
              placeholder="Search for cities..."
              className="w-full pl-12 pr-4 py-3 bg-theme-secondary rounded-xl text-theme-text-primary placeholder-theme-text focus:outline-none focus:ring-2 focus:ring-theme-accent"
            />
          </div>
          <div className="flex gap-2">
            <ThemeToggle />
            <button className="p-3 bg-theme-secondary rounded-xl text-theme-text hover:text-theme-text-primary transition-colors">
              <MapPin />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="bg-theme-secondary rounded-xl p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-theme-text-primary text-lg font-semibold">New York</h3>
                  <p className="text-theme-text">Sunny</p>
                </div>
                <div className="text-2xl font-semibold text-theme-text-primary">24°</div>
              </div>
              <div className="w-16 h-16">
                <WeatherIcon type="sunny" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
