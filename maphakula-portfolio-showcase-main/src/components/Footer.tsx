
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './button';
import { Separator } from './separator.tsx';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <Github className="h-5 w-5" />, href: 'https://github.com/thatom', label: 'GitHub' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/thatomaphakula', label: 'LinkedIn' },
  { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/thatomaphakula', label: 'Twitter' },
  { icon: <Mail className="h-5 w-5" />, href: 'mailto:contact@thatom.com', label: 'Email' },
];

const ScrollToTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={handleScrollTop}
      size="icon"
      variant="outline"
      className="rounded-full h-10 w-10 fixed bottom-8 right-8 opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-md"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

const Footer: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
    }
  }, [isInView, controls]);
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="bg-background border-t border-border py-12 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="inline-block mb-4 hover:scale-105 transition-transform duration-200"
            aria-label="Back to home"
          >
            <img src="/tm-thato-maphakula-logo.png" alt="T.M. Thato Maphakula Logo" className="h-12 w-auto" />
          </a>
          {/* Navigation */}
          <nav className="my-4" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative text-muted-foreground hover:text-primary transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Social Links */}
          <div className="flex gap-4 my-4">
            <TooltipProvider>
              {socialLinks.map((link) => (
  <Tooltip key={link.href}>
    <TooltipTrigger asChild>
      <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary rounded-full p-2"
        whileHover={{ scale: 1.2, rotate: 8 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {link.icon}
      </motion.a>
    </TooltipTrigger>
    <TooltipContent>
      <p>{link.label}</p>
    </TooltipContent>
  </Tooltip>
))}
            </TooltipProvider>
          </div>
          <Separator className="mb-6 w-full max-w-md" />
          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              &copy; {currentYear} Thato Maphakula. All rights reserved.
              <Heart className="h-4 w-4 text-red-500 inline-block ml-1 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </motion.footer>
  );
};

export default Footer;
