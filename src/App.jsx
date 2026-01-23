import { useState, useEffect } from 'react';
import SimpleHeader from './components/SimpleHeader';
import ContentNavigation from './components/ContentNavigation';
import Highlights from './components/Highlights';
// import Projects from './components/Projects';
import SoftwareShowcases from './components/SoftwareShowcases';
import SimpleFooter from './components/SimpleFooter';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('highlights');

  // Check for saved theme preference or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
    setDarkMode(initialDarkMode);

    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Update theme when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const renderContent = () => {
    switch (activeTab) {
      case 'highlights':
        return <Highlights />;
      // case 'projects':
        // return <Projects />;
      case 'software':
        return <SoftwareShowcases />;
      default:
        return <Highlights />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <SimpleHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <ContentNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
      <SimpleFooter />
    </div>
  );
}

export default App;
