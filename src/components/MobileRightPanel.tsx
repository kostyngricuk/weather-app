import { X, Search } from 'lucide-react';
import WeatherIcon from './WeatherIcon';

interface MobileRightPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileRightPanel = ({ isOpen, onClose }: MobileRightPanelProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-theme-primary p-4 z-50">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-theme-text-primary text-xl font-semibold">Cities</h2>
          <button onClick={onClose} className="p-2 text-theme-text">
            <X size={24} />
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-theme-text" />
          <input
            type="text"
            placeholder="Search for cities..."
            className="w-full pl-12 pr-4 py-3 bg-theme-secondary rounded-xl text-theme-text-primary placeholder-theme-text focus:outline-none focus:ring-2 focus:ring-theme-accent"
          />
        </div>

        <div className="flex-1 overflow-auto">
          <div className="grid gap-4">
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
    </div>
  );
};

export default MobileRightPanel;
