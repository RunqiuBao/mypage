import { motion } from 'framer-motion';
import evShowImg from '../resources/evshow.png';
import kpvSLAMImg from '../resources/kenki-position-vSLAM.png'
import sam3Img from '../resources/sam3_in_trt.png'
import stereoMatchingImg from '../resources/stereo_matching_events.png'
import nmea2xyzImg from '../resources/nmea2xyz.png'

const SoftwareShowcases = () => {
  const software = [
    {
      name: 'EvShow',
      description: 'Visualize events camera stream. Supporting SBT, SBN, Concentrated SBN, e2vid.',
      features: ['Event camera', 'Visualization'],
      rating: 3,
      logo: <img
        src={evShowImg}
        alt="Profile"
        className="w-12 h-12 object-cover"
      />,
      language: 'Python',
      repo: 'https://github.com/RunqiuBao/evshow',
    },
    {
      name: 'sam3_in_trt',
      description: "Convert Meta's SAM3 model to TensorRT for optimized inference on NVIDIA GPUs.",
      features: ['SAM3 foundation model', 'TensorRT'],
      rating: 1,
      logo: <img
        src={sam3Img}
        alt="Profile"
        className="w-12 h-12 object-cover"
      />,
      language: 'Python, Makefile, Shell',
      repo: 'https://github.com/RunqiuBao/sam3_in_trt',
    },
    {
      name: 'fov_alignment',
      description: 'Align two cameras close to each other in autonomous driving datasets',
      features: ['Multiview-geometry'],
      users: '3',
      rating: 5,
      language: 'Python',
      repo: 'https://github.com/RunqiuBao/fov_alignment',
    },
    {
      name: 'kenki-positioning-vSLAM',
      description: 'Dynamic object detection and feature-based visual SLAM.',
      features: ['Dynamic object detection'],
      users: '5',
      rating: 30,
      logo: <img
        src={kpvSLAMImg}
        alt="Profile"
        className="w-12 h-12 object-cover"
      />,
      language: 'C++, Cuda',
      repo: 'https://github.com/RunqiuBao/kenki-positioning-vSLAM',
    },
    {
      name: 'tool_objectbasedslam',
      description: 'A lib for fast object based visual stereo SLAM.',
      features: ['Stereo Object Detection', 'Object-based visual SLAM'],
      language: 'C++, Python',
      repo: 'https://github.com/RunqiuBao/tool_objectbasedslam/tree/main',
    },
    {
      name: 'stereo_matching_with_event',
      description: 'Stereo Matching with RGB and Event input.',
      features: ['Stereo matching', "Event camera"],
      rating: 1,
      logo: <img
        src={stereoMatchingImg}
        alt="Profile"
        className="w-12 h-12 object-cover"
      />,
      language: 'Python, Cuda, C++',
      repo: 'https://github.com/RunqiuBao/stereo_matching_with_event',
    },
    {
      name: 'nmea2xyz',
      description: "Convert NMEA messages (GNSS) to Cartesian coordinates.",
      features: ['NMEA', 'Coordinates transform'],
      rating: 1,
      logo: <img
        src={nmea2xyzImg}
        alt="Profile"
        className="w-12 h-12 object-cover"
      />,
      language: 'Python',
      repo: 'https://github.com/RunqiuBao/nmea2xyz',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-l text-slate-900 dark:text-white mb-1">
            My Projects
          </h2>
          {/* <p className="text-slate-600 dark:text-slate-400"> */}
            {/* Production-ready software and tools I've built and launched */}
          {/* </p> */}
        </motion.div>

        {/* Software Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {software.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Header with Logo */}
              <div className="px-3 py-2 bg-slate-50 dark:bg-slate-700/30 border-b border-slate-200 dark:border-slate-600">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{app.logo}</div>
                  <div className="flex-1">
                    <a
                      href={app.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-slate-900 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors inline-block"
                    >
                      {app.name}
                    </a>
                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm flex-wrap">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {app.rating}
                      </span>
                      <span>•</span>
                      <span>{app.users} users</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="3" />
                        </svg>
                        {app.language}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {app.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-400 mb-2">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcases;
