import TopSection from './TopSection';
import HourlyForecastSection from './HourlyForecastSection';
import ActivitiesSection from './ActivitiesSection';

const Sidebar = () => {
  return (
    <aside className="w-[480px] bg-theme-primary p-8 flex flex-col gap-8 border-r border-theme-secondary">
      <TopSection />
      <HourlyForecastSection />
      <ActivitiesSection />
    </aside>
  );
};

export default Sidebar;
