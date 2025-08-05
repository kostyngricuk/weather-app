import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 bg-theme-secondary rounded-xl text-theme-text hover:text-theme-text-primary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
