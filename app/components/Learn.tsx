'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: 'FLEXIBLE CLASSES',
    description: 'Suspendisse ultrices gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.'
  },
  {
    title: 'FLEXIBLE CLASSES',
    description: 'Suspendisse ultrices gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.'
  }
];

export default function Learn() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0">
        <Image
          src="/decorative-star.svg"
          alt="Decorative star"
          width={80}
          height={80}
          className="opacity-50"
        />
      </div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <Image
          src="/decorative-wave.svg"
          alt="Decorative wave"
          width={120}
          height={40}
          className="opacity-50"
        />
      </div>
      <div className="absolute top-0 left-0">
        <Image
          src="/decorative-dots.svg"
          alt="Decorative dots"
          width={60}
          height={60}
          className="opacity-30"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="relative w-[80%] aspect-[4/5]">
              <Image
                src="/student-1.jpg"
                alt="Student studying"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute -bottom-12 -right-12 w-[60%] aspect-square">
                <Image
                  src="/student-2.jpg"
                  alt="Student learning"
                  fill
                  className="object-cover rounded-lg border-8 border-white"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-[60%] aspect-square border-4 border-[#0AB99D] rounded-lg" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8">
            <div className="inline-block bg-[#E8F9F6] px-4 py-2 rounded-md mb-6">
              <span className="text-[#0AB99D] font-medium uppercase">OUR ABOUT US</span>
            </div>

            <h2 className="text-[#0E2A46] text-4xl lg:text-5xl font-bold mb-6">
              Learn & Grow Your Skills
              <span className="relative inline-block ml-2">
                From
                <div className="absolute -top-1 -right-2 w-12 h-12">
                  <Image
                    src="/decorative-circle.svg"
                    alt="Decorative circle"
                    fill
                    className="opacity-80"
                  />
                </div>
              </span>
              <br />
              Anywhere
            </h2>

            <p className="text-[#4D5765] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-[#0E2A46] font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[#4D5765]">{feature.description}</p>
                </div>
              ))}
            </div>

            <Link 
              href="/about"
              className="inline-flex items-center bg-[#0AB99D] text-white px-6 py-3 rounded mt-8 hover:bg-[#09a78d] transition-colors"
            >
              More About Us
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 