
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
    }
  }, [isInView, controls]);
  const skills = [
    { name: "Communication", percentage: 90 },
    { name: "Interpersonal Skills", percentage: 85 },
    { name: "Team Collaboration", percentage: 80 },
    { name: "Computer Literacy", percentage: 75 },
    { name: "Microsoft Office Suite", percentage: 70 },
    { name: "Data Management", percentage: 65 },
    { name: "Time Management", percentage: 85 },
    { name: "Adaptability", percentage: 80 },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
    <section id="skills" className="bg-portfolio-gray">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white rounded-lg shadow-lg p-8 card-shadow">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-portfolio-blue">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 bg-portfolio-lightblue p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-portfolio-blue mb-4">Key Strengths</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-portfolio-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Strong communication skills
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-portfolio-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Problem-solving abilities
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-portfolio-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Digital information organization
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-portfolio-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Willingness to learn new tech
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-portfolio-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Effective multitasking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-portfolio-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Team collaboration
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
