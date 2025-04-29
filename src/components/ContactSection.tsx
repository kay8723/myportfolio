import React, { useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Skeleton } from '@/components/ui/skeleton';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
    }
  }, [isInView, controls]);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      e.currentTarget.reset();
    }, 1200);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
    <div id="contact" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            className="animate-fade-in-up"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              I'm always interested in new opportunities and connections. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-portfolio-lightblue p-3 rounded-full mr-4">
                  <Mail className="text-portfolio-blue w-5 h-5" />
                </div>
                <span className="text-gray-700">thatomaphakula14@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-portfolio-lightblue p-3 rounded-full mr-4">
                  <Phone className="text-portfolio-blue w-5 h-5" />
                </div>
                <span className="text-gray-700">0680982934</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-medium text-portfolio-blue mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-portfolio-lightblue p-3 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-portfolio-lightblue p-3 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="animate-slide-in-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-portfolio-blue mb-6">Send Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      {loading ? (
                        <Skeleton className="h-10 w-full" />
                      ) : (
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                        />
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      {loading ? (
                        <Skeleton className="h-10 w-full" />
                      ) : (
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Your email"
                        />
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      {loading ? (
                        <Skeleton className="h-10 w-full" />
                      ) : (
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          placeholder="Subject"
                        />
                      )}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      {loading ? (
                        <Skeleton className="h-24 w-full" />
                      ) : (
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          placeholder="Your message..."
                        />
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white w-full py-6"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default ContactSection;
