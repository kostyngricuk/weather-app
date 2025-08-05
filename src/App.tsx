import { useState } from 'react';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import MobileNavigation from './components/MobileNavigation';
import MobileRightPanel from './components/MobileRightPanel';
import useResponsive from './hooks/useResponsive';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-theme-primary transition-colors">
        {!isMobile ? (
          <>
            <Sidebar />
            <RightPanel />
          </>
        ) : (
          <>
            <MobileNavigation onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            <MobileRightPanel isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
