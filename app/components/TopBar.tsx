'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

const socialLinks = [
  { 
    href: '#', 
    label: 'X', 
    icon: 'ri:twitter-x-fill',
    color: '#0E2A46',
    hoverColor: '#0A99D3'
  },
  { 
    href: '#', 
    label: 'LinkedIn', 
    icon: 'mdi:linkedin',
    color: '#0E2A46',
    hoverColor: '#0A99D3'
  },
  { 
    href: '#', 
    label: 'Facebook', 
    icon: 'mdi:facebook',
    color: '#0E2A46',
    hoverColor: '#0A99D3'
  },
  { 
    href: '#', 
    label: 'Instagram', 
    icon: 'mdi:instagram',
    color: '#0E2A46',
    hoverColor: '#0A99D3'
  },
];

export default function TopBar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className="h-9 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Mobile View */}
        <div className="lg:hidden flex justify-between items-center h-full">
          <div className="flex items-center space-x-3">
            {socialLinks.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block"
                aria-label={link.label}
                onMouseEnter={() => setHoveredIcon(link.label)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Icon
                  icon={link.icon}
                  className="w-4 h-4"
                  color={hoveredIcon === link.label ? link.hoverColor : link.color}
                />
              </Link>
            ))}
          </div>

          <div className="relative">
            <button
              className="flex items-center space-x-1 text-[#0E2A46] hover:text-[#0A99D3]"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
              <Icon 
                icon={isLanguageOpen ? "ph:caret-up" : "ph:caret-down"} 
                className="w-4 h-4" 
              />
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-1 w-32 bg-white rounded-md shadow-lg py-2 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="w-full text-left px-4 py-2 text-sm text-[#0E2A46] hover:bg-gray-50"
                    onClick={() => {
                      setCurrentLanguage(lang);
                      setIsLanguageOpen(false);
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-end items-center h-full">
          <div className="flex items-center space-x-14">
            {/* Language Selector */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-[#0E2A46] hover:text-[#0A99D3]"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span className="text-sm">{currentLanguage.name}</span>
                <Icon 
                  icon={isLanguageOpen ? "ph:caret-up" : "ph:caret-down"} 
                  className="w-4 h-4" 
                />
              </button>

              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-1 w-32 bg-white rounded-md shadow-lg py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full text-left px-4 py-2 text-sm text-[#0E2A46] hover:bg-gray-50"
                      onClick={() => {
                        setCurrentLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-[#0A090A] opacity-10"></div>

            {/* Social Links */}
            <div className="flex items-center space-x-3.5">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block"
                  aria-label={link.label}
                  onMouseEnter={() => setHoveredIcon(link.label)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <Icon
                    icon={link.icon}
                    className="w-4 h-4"
                    color={hoveredIcon === link.label ? link.hoverColor : link.color}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 