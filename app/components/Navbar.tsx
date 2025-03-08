'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from './TopBar';
import { Icon } from '@iconify/react';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  items?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Products', 
    href: '/products',
    hasDropdown: true,
    items: [
      { label: 'Overview', href: '/products' },
      { label: 'Features', href: '/products/features' },
    ]
  },
  { 
    label: 'Solutions', 
    href: '/solutions',
    hasDropdown: true,
    items: [
      { label: 'Enterprise', href: '/solutions/enterprise' },
      { label: 'Business', href: '/solutions/business' },
    ]
  },
  { 
    label: 'Resources', 
    href: '/resources',
    hasDropdown: true,
    items: [
      { label: 'Documentation', href: '/resources/docs' },
      { label: 'Blog', href: '/resources/blog' },
    ]
  },
  { 
    label: 'About', 
    href: '/about',
    hasDropdown: true,
    items: [
      { label: 'Company', href: '/about/company' },
      { label: 'Team', href: '/about/team' },
    ]
  },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm' : ''}`}>
      <TopBar />
      <div className="mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg h-[74px] px-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-[151px] h-[40px] relative">
              <Image
                src="/educate.svg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-[#0E2A46] hover:text-[#0A99D3] py-7"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <Icon icon="ph:caret-down" className="w-4 h-4" />
                  )}
                </Link>
                
                {/* Desktop Dropdown */}
                {item.hasDropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-[#0E2A46] hover:bg-gray-50"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button className="text-[#333333] hover:text-[#0A99D3]">
              <Icon icon="ph:magnifying-glass" className="w-5 h-5" />
            </button>

            {/* Contact Button - Hidden on mobile */}
            <Link
              href="/contact"
              className="hidden md:flex bg-[#0AB99D] text-white px-6 py-4 rounded hover:bg-[#09a78d] transition-colors items-center space-x-2"
            >
              <span>Contact Us</span>
              <Icon icon="ph:arrow-right" className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#0E2A46] hover:text-[#0A99D3]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon icon={isMobileMenuOpen ? "ph:x-bold" : "ph:list-bold"} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ top: '74px' }}
          >
            <div className="h-full overflow-y-auto px-4 py-6">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-4 text-[#0E2A46]"
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                      >
                        <span>{item.label}</span>
                        <Icon 
                          icon={mobileDropdown === item.label ? "ph:caret-up" : "ph:caret-down"} 
                          className="w-4 h-4" 
                        />
                      </button>
                      {mobileDropdown === item.label && (
                        <div className="pl-4 pb-4">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block py-2 text-[#4D5765] hover:text-[#0A99D3]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-[#0E2A46] hover:text-[#0A99D3]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#0AB99D] text-white px-6 py-4 rounded hover:bg-[#09a78d] transition-colors w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Contact Us</span>
                  <Icon icon="ph:arrow-right" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 