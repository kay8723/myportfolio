
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, Calendar } from 'lucide-react';

const infoCards = [
  {
    icon: <Phone className="text-primary w-5 h-5" />, label: 'Phone', value: '0680982934',
  },
  {
    icon: <Mail className="text-primary w-5 h-5" />, label: 'Email', value: 'thatomaphakula14@gmail.com',
  },
  {
    icon: <Calendar className="text-primary w-5 h-5" />, label: 'Education', value: 'Matric Graduate',
  },
  {
    icon: (
      <svg className="text-primary w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location', value: 'Johannesburg, South Africa',
  },
];

const AboutSection = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      <div id="about" className="bg-background py-20">
        <div className="section-container">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground max-w-xl">
                  An energetic volunteer with exceptional telephone etiquette, social media proficiency, and strong interpersonal skills. Valuable experience working with both children and elderly individuals. Well-trained and adept at providing compassionate care and support. Punctuality and dedication drive commitment to service.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {infoCards.map((card, idx) => (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.45, delay: 0.1 + idx * 0.08 }}
                    >
                      <Card className="shadow-sm border-border bg-card">
                        <CardContent className="p-6 flex items-center space-x-4">
                          <div className="bg-secondary p-3 rounded-full">
                            {card.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-muted-foreground">{card.label}</p>
                            <p className="font-medium text-foreground break-all w-full">{card.value}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src="/bachelor-information-science-logo.png"
                alt="Bachelor of Information Science Logo"
                className="w-64 h-64 object-cover rounded-xl shadow-lg border border-border"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
