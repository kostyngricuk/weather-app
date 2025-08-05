import { Sun, Cloud, CloudRain, CloudSnow, CloudFog } from 'lucide-react';

type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'foggy';

interface WeatherIconProps {
  type: WeatherType;
  className?: string;
}

const WeatherIcon = ({ type, className = '' }: WeatherIconProps) => {
  const getIcon = () => {
    switch (type) {
      case 'sunny':
        return <Sun className={`text-yellow-400 ${className}`} />;
      case 'cloudy':
        return <Cloud className={`text-gray-400 ${className}`} />;
      case 'rainy':
        return <CloudRain className={`text-blue-400 ${className}`} />;
      case 'snowy':
        return <CloudSnow className={`text-blue-200 ${className}`} />;
      case 'foggy':
        return <CloudFog className={`text-gray-300 ${className}`} />;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {getIcon()}
    </div>
  );
};

export default WeatherIcon;
