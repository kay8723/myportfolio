
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
    }
  }, [isInView, controls]);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
    <section id="experience" className="bg-portfolio-gray">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-portfolio-blue"></div>
            
            {/* Experience Item */}
            <div className="relative animate-fade-in-up">
              <div className="flex flex-col md:flex-row items-start mb-10">
                <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1 mt-6 md:mt-0">
                  <div className="bg-white rounded-lg shadow-lg p-6 card-shadow">
                    <h3 className="text-xl font-semibold text-portfolio-blue mb-2">Volunteer</h3>
                    <p className="text-gray-600 mb-2">Local Police Station</p>
                    <p className="text-gray-500 text-sm mb-4">2023</p>
                    <ul className="list-disc ml-5 text-gray-700 space-y-2">
                      <li>Assisted with administrative tasks, including data entry and record-keeping.</li>
                      <li>Supported community outreach programs by organizing public awareness events.</li>
                      <li>Managed and maintained documentation for various police station activities.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:mx-auto flex justify-center order-1 md:order-2 z-10">
                  <div className="bg-portfolio-blue rounded-full p-3 border-4 border-white shadow-md">
                    <Briefcase className="text-white w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex-1 md:pl-8 order-3 invisible md:visible">
                  {/* Empty space to balance the layout */}
                </div>
              </div>
            </div>
            
            {/* Additional experience would go here */}
          </div>
        </div>
      </div>
    </section>
    </motion.section>
  );
};

export default ExperienceSection;
