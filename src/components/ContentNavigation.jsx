import { motion } from 'framer-motion';

const ContentNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'highlights', label: 'Highlights' },
    // { id: 'projects', label: 'Projects' },
    { id: 'software', label: 'MyProjects' },
  ];

  return (
    <nav className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-4 px-1 font-medium text-sm sm:text-base whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-primary dark:text-secondary'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary dark:bg-secondary"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ContentNavigation;
