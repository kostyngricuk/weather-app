import { Menu, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import WeatherIcon from './WeatherIcon';

interface MobileNavigationProps {
  onMenuToggle: () => void;
}

const MobileNavigation = ({ onMenuToggle }: MobileNavigationProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-theme-primary p-4 border-b border-theme-secondary">
      <div className="flex items-center justify-between">
        <button onClick={onMenuToggle} className="p-2 text-theme-text">
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <WeatherIcon type="sunny" />
          </div>
          <div>
            <h1 className="text-theme-text-primary font-semibold">19°</h1>
            <p className="text-theme-text text-sm">Montreal</p>
          </div>
        </div>
        <div className="flex gap-2">
          <ThemeToggle />
          <button className="p-2 text-theme-text">
            <MapPin size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
