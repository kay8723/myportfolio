
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { School, BookOpen, Award, GraduationCap } from 'lucide-react';

const EducationSection = () => {
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
    <section id="education" className="bg-gradient-to-b from-white to-portfolio-gray">
      <div className="section-container">
        <h2 className="section-title">Academic Background</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Pursuing formal education in Information Science with a focus on knowledge management, 
          digital systems, and data organization methodologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up border-t-4 border-portfolio-blue">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-lightblue p-3 rounded-full mr-4">
                  <GraduationCap className="text-portfolio-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-blue">University of South Africa (UNISA)</h3>
                  <p className="text-gray-500">Current</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 font-medium">Bachelor of Information Science</p>
              <p className="text-gray-600 mb-4">
                Currently pursuing a degree focused on information management, knowledge organization systems, 
                data analysis methodologies, and digital information ecosystems.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-portfolio-lightblue text-portfolio-blue px-3 py-1 rounded-full font-medium">Information Management</span>
                <span className="text-xs bg-portfolio-lightblue text-portfolio-blue px-3 py-1 rounded-full font-medium">Data Systems</span>
                <span className="text-xs bg-portfolio-lightblue text-portfolio-blue px-3 py-1 rounded-full font-medium">Digital Libraries</span>
                <span className="text-xs bg-portfolio-lightblue text-portfolio-blue px-3 py-1 rounded-full font-medium">Knowledge Organization</span>
              </div>
            </div>
            <div className="px-6 pb-4">
              <div className="w-full bg-gray-200 h-1 mb-1 rounded-full">
                <div className="bg-portfolio-blue h-1 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-xs text-right text-gray-500">In progress (45% complete)</p>
            </div>
          </Card>
          
          <Card className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-75 border-t-4 border-portfolio-blue">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-lightblue p-3 rounded-full mr-4">
                  <School className="text-portfolio-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-blue">Thutolore Secondary School</h3>
                  <p className="text-gray-500">2022</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 font-medium">Matric / Grade 12</p>
              <p className="text-gray-600 mb-4">
                Completed secondary education with a focus on developing strong academic foundations, 
                critical thinking abilities, and essential research skills.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-portfolio-lightblue text-portfolio-blue px-3 py-1 rounded-full font-medium">Academic Writing</span>
                <span className="text-xs bg-portfolio-lightblue text-portfolio-blue px-3 py-1 rounded-full font-medium">Research Methods</span>
                <span className="text-xs bg-portfolio-lightblue text-portfolio-blue px-3 py-1 rounded-full font-medium">Critical Analysis</span>
              </div>
            </div>
            <div className="px-6 pb-4">
              <div className="w-full bg-gray-200 h-1 rounded-full">
                <div className="bg-portfolio-blue h-1 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p className="text-xs text-right text-gray-500">Completed</p>
            </div>
          </Card>
          
          <Card className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-150 md:col-span-2">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-lightblue p-3 rounded-full mr-4">
                  <Award className="text-portfolio-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-blue">Sakhane Youth Development Forum</h3>
                  <p className="text-gray-500">2021</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 font-medium">Certificate in Computer Literacy</p>
              <p className="text-gray-600 mb-4">
                Gained comprehensive training in digital literacy fundamentals, document management,
                information processing tools, and foundational technology skills essential for modern information work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-medium text-sm text-portfolio-blue mb-2">Key Competencies Gained:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Document creation and management</li>
                    <li>Spreadsheet analysis and data visualization</li>
                    <li>Digital research techniques</li>
                    <li>Information organization systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-portfolio-blue mb-2">Applied Skills:</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Office Productivity</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1 rounded-full">
                        <div className="bg-portfolio-blue h-1 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Document Management</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1 rounded-full">
                        <div className="bg-portfolio-blue h-1 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Digital Communication</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1 rounded-full">
                        <div className="bg-portfolio-blue h-1 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-gray-600 mb-4">
            <BookOpen className="w-5 h-5 text-portfolio-blue" />
            <span className="font-medium">Continuous Learning Philosophy</span>
          </div>
          <blockquote className="italic text-gray-600 bg-portfolio-lightblue p-6 rounded-lg border-l-4 border-portfolio-blue">
            "Information is the oil of the 21st century, and analytics is the combustion engine."
            <footer className="mt-2 text-right text-sm font-medium">— Peter Sondergaard</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
