"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const studentIcons = [
  { icon: 'ph:user-circle-fill', color: '#0AB99D', alt: 'Student 1' },
  { icon: 'ph:user-circle-fill', color: '#0E2A46', alt: 'Student 2' },
  { icon: 'ph:user-circle-fill', color: '#FF725E', alt: 'Student 3' },
  { icon: 'ph:user-circle-fill', color: '#4B5563', alt: 'Student 4' },
  { icon: 'ph:user-circle-fill', color: '#6366F1', alt: 'Student 5' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#E5F6F3] to-transparent -translate-y-1/4 translate-x-1/4" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-24 md:pt-28 lg:pt-32">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 lg:max-w-[600px]">
            {/* Heading */}
            <h1 className="text-[#0E2A46] text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.2]">
              <span className="block">Develop</span>
              <span className="block">your skills</span>
              <span className="block text-3xl md:text-4xl lg:text-[40px] mt-2">
                with online courses
              </span>
              <span className="block text-3xl md:text-4xl lg:text-[40px]">
                From A Pro
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#333339] text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-6">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-[#0AB99D] text-white px-6 py-3.5 rounded-md hover:bg-[#09a78d] transition-colors"
              >
                <span className="text-base font-medium">
                  Explore All Courses
                </span>
                <Icon icon="ph:arrow-right" className="w-5 h-5" />
              </Link>

              <div className="flex items-center gap-3">
                <button
                  className="flex items-center justify-center w-12 h-12 bg-[#0E2A46] rounded-full text-white hover:bg-[#0a1f35] transition-colors"
                  aria-label="Play video"
                >
                  <Icon icon="ph:play-fill" className="w-5 h-5 ml-0.5" />
                </button>
                <span className="text-[#333339] text-base font-medium">
                  Watch Now
                </span>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="relative">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                className="absolute -left-6 -bottom-12"
              >
                <circle cx="4" cy="4" r="4" fill="#0AB99D" fillOpacity="0.3" />
                <circle cx="22" cy="4" r="4" fill="#0AB99D" fillOpacity="0.3" />
                <circle cx="40" cy="4" r="4" fill="#0AB99D" fillOpacity="0.3" />
                <circle cx="4" cy="22" r="4" fill="#0AB99D" fillOpacity="0.3" />
                <circle
                  cx="22"
                  cy="22"
                  r="4"
                  fill="#0AB99D"
                  fillOpacity="0.3"
                />
                <circle
                  cx="40"
                  cy="22"
                  r="4"
                  fill="#0AB99D"
                  fillOpacity="0.3"
                />
                <circle cx="4" cy="40" r="4" fill="#0AB99D" fillOpacity="0.3" />
                <circle
                  cx="22"
                  cy="40"
                  r="4"
                  fill="#0AB99D"
                  fillOpacity="0.3"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="4"
                  fill="#0AB99D"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] max-w-[600px] mx-auto">
              <Image
                src="/woman.png"
                alt="Professional woman with tablet"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Student Count Card */}
            <div className="absolute bottom-4 lg:bottom-32 left-1/2 lg:-left-20 transform -translate-x-1/2 lg:translate-x-0 bg-white rounded-lg shadow-lg p-6 w-[280px]">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-[#0AB99D] text-3xl font-bold">21k+</h3>
                <p className="text-[#0E2A46] text-lg font-medium">
                  Total Student
                </p>
                <div className="flex -space-x-3">
                  {studentIcons.map((item, index) => (
                    <div 
                      key={index} 
                      className="w-10 h-10 rounded-full bg-white border-2 border-white relative"
                      style={{ zIndex: 5 - index }}
                    >
                      <Icon 
                        icon={item.icon}
                        className="w-full h-full"
                        style={{ color: item.color }}
                        aria-label={item.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
