import { motion } from 'framer-motion';
import crankshaftcellImg from '../resources/crankshaftcell.png';
import assemblycellImg from '../resources/irex2022_assemblycell.png';
import visualSLAMImg from '../resources/visualSLAM.png'

const Highlights = () => {
  const highlights = [
    {
      title: 'Crankshaft binpicking',
      description: 'Precise crankshafts 3D detection and picking from source to dest.',
      icon: <img
        src={crankshaftcellImg}
        alt="Profile"
        className="w-72 h-48 object-cover"
      />,
      color: 'from-green-500 to-emerald-500',
      videoUrl: 'https://www.youtube.com/watch?time_continue=1&v=AEISEHFJyRs&embeds_referring_euri=https%3A%2F%2Fwww.mujin.co.jp%2F&source_ve_path=Mjg2NjY'
    },
    {
      title: 'Metal parts assembly',
      description: (
        <>
          Automated the assembly of car brake components using a robotic arm. <br /> 
          IRex, 2022
        </>
      ),
      icon: <img
        src={assemblycellImg}
        alt="Profile"
        className="w-72 h-48 object-cover"
      />,
      color: 'from-yellow-500 to-orange-500',
      videoUrl: 'http://youtube.com/watch?v=qUrZC3w8By8' // Add this
    },
    {
      title: 'Construction vehicle navigation',
      description: (
        <>
          Navigate a construction vehicle by stereo video SLAM and dynamic object detection.
        </>
      ),
      icon: <img
        src={visualSLAMImg}
        alt="Profile"
        className="w-72 h-48 object-cover"
      />,
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="pt-8 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-l text-slate-900 dark:text-white mb-1">
            Highlights
          </h2>
          {/* <p className="text-slate-600 dark:text-slate-400">
            Key achievements and milestones throughout my career
          </p> */}
        </motion.div>

        {/* Highlights List */}
        <div className="flex flex-col gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-6 items-start">
                  {/* Icon/Thumbnail on the left */}
                  <div className="flex-shrink-0">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${highlight.color} text-white`}>
                      {highlight.icon}
                    </div>
                  </div>

                  {/* Text content on the right */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {highlight.description}
                    </p>

                  {/* YouTube Link - Only renders if highlight.videoUrl exists */}
                  {highlight.videoUrl && (
                    <div className="mt-4">
                      <a
                        href={highlight.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                      >
                        {/* Simple YouTube Icon Placeholder */}
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        VideoLink
                      </a>
                    </div>
                  )}
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

export default Highlights;
