import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import profileImg from '../resources/DSC00726.jpg';
import cvPdf from '../resources/CV_RUNQIU_BAO_ENGLISH.pdf'


const SimpleHeader = ({ darkMode, setDarkMode }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/RunqiuBao',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/runqiu-bao-0154a7164/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'X',
      url: 'https://x.com/BaoRunqiu',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:bao@robot.t.u-tokyo.ac.jp',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'CV',
      url: cvPdf,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const personalUpdates = [
    {
      date: 'Feb. 2026',
      update: 'Released personal project "sam3_in_trt".',
    },
    {
      date: 'Jan. 2026',
      update: 'Released personal project "tool_objectbasedslam".',
    },
    {
      date: 'Dec. 2025',
      update: 'Attended Tokyo IRex 2025 at the booth of Mujin Inc.',
    },
  ];

  return (
    <header className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-700">
      {/* Dark Mode Toggle - Top Right */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {darkMode ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </motion.button>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          {/* Profile Picture - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-40 h-56 sm:w-48 sm:h-72 rounded-xl overflow-hidden shadow-lg">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <div className="flex-1 text-center md:text-left w-full">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-slate-900 dark:text-white"
            >
              Runqiu Bao
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-medium text-primary dark:text-secondary mb-4"
            >
              Roboticist & software developer
            </motion.p>

            {/* Current Position & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-slate-600 dark:text-slate-400 mb-6 justify-center md:justify-start"
            >
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Senior Developer at Mujin, Inc.</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Tokyo, Jp.</span>
              </div>
            </motion.div>

            {/* Social Links - Moved here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center md:justify-start items-center gap-4 mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary dark:hover:bg-secondary hover:text-white transition-all block"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>

                  {/* Tooltip */}
                  {hoveredLink === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-md whitespace-nowrap pointer-events-none"
                    >
                      {link.name}
                      {/* Arrow */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-700 rotate-45" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 space-y-3"
            >
              <p>
                Runqiu Bao (潤秋　包) was born in China in 1995. He received his B.Sc. (2018) from School of Automotive Studies in Tongji University (TJU) in Shanghai and M.Sc. (2020) from School of Engineering in the University of Tokyo (UTokyo).
              </p>
              <p>
                During his bachelor period, he attended the <a href="https://www.robomaster.com/en-US" target="_blank" rel="noopener noreferrer"><u>RoboMaster Competition</u></a> and thus started his journey as a robot developer. In the master period, he was working on object-level visual SLAM and mobile robots navigation supervised by <a href="https://www.robot.t.u-tokyo.ac.jp/yamalab/index-e.html" target="_blank" rel="noopener noreferrer"><u>Prof. Yamashita Atsushi</u></a>. In 2021, he joined <a href="https://www.mujin.co.jp/" target="_blank" rel="noopener noreferrer"><u>Mujin Inc.</u></a> as a robotics and computer vision engineer and is working on creating robot products in real-world environments.
              </p>
            </motion.div>

            {/* Personal Updates - Foldable Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={() => setIsUpdatesOpen(!isUpdatesOpen)}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-secondary transition-colors group mx-auto md:mx-0"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isUpdatesOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Recent Updates</span>
                <span className="text-xs bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary px-2 py-0.5 rounded-full">
                  {/* {personalUpdates.length} */}
                  "(until 2026.02)"
                </span>
              </button>

              <AnimatePresence>
                {isUpdatesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3">
                      {personalUpdates.map((update, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex gap-3 items-start p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        >
                          <div className="text-2xl flex-shrink-0">{update.icon}</div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                              {update.date}
                            </div>
                            <div className="text-sm text-slate-700 dark:text-slate-300">
                              {update.update}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
