
"use client"

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string; description?: string }[];
}

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    {
      name: 'About',
      href: '#about',
      children: [
        { name: 'Our Story', href: '#about/story', description: 'Learn about our journey' },
        { name: 'Team', href: '#about/team', description: 'Meet our talented team' },
      ]
    },
    {
      name: 'Experience',
      href: '#experience',
      children: [
        { name: 'Projects', href: '#experience/projects', description: 'View our portfolio' },
        { name: 'Clients', href: '#experience/clients', description: 'Our clients' },
      ]
    },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur bg-background/80 border-b border-border",
        scrolled ? "shadow-md py-2" : "py-6",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center" aria-label="Back to home">
  <img src="/tm-thato-maphakula-logo.png" alt="T.M. Thato Maphakula Logo" className="h-10 w-auto" />
</a>
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="flex items-center gap-1">
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-4 w-48">
                          {item.children.map((child) => (
                            <NavigationMenuLink
                              key={child.name}
                              href={child.href}
                              className="block py-2 px-3 rounded hover:bg-accent transition-colors"
                            >
                              <div className="font-medium">{child.name}</div>
                              <div className="text-xs text-muted-foreground">{child.description}</div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Theme Toggle (Desktop) */}
          <div className="hidden md:block ml-4">
            <ThemeToggle />
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64 bg-background">
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center justify-between mb-8">
                    <a href="#home" className="flex items-center" aria-label="Back to home">
  <img src="/tm-thato-maphakula-logo.png" alt="T.M. Thato Maphakula Logo" className="h-10 w-auto" />
</a>
                    <ThemeToggle />
                  </div>
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      item.children ? (
                        <div key={item.name}>
                          <div className="flex items-center gap-2 font-medium">
                            {item.name}
                            <ChevronDown className="h-4 w-4" />
                          </div>
                          <div className="ml-4 mt-1 flex flex-col gap-1">
                            {item.children.map((child) => (
                              <a
                                key={child.name}
                                href={child.href}
                                className="block py-1 px-2 rounded hover:bg-accent transition-colors text-sm"
                              >
                                {child.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block py-2 px-3 rounded hover:bg-accent transition-colors font-medium"
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
  className?: string;
}

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn("rounded-full transition-all duration-300", className)}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default Navbar;
