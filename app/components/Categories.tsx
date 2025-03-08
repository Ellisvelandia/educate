import Link from 'next/link';
import { Icon } from '@iconify/react';

const categories = [
  { name: 'UI/UX Design', courses: 25, icon: 'ph:pencil-circle-fill' },
  { name: 'Development', courses: 43, icon: 'ph:code-fill' },
  { name: 'Business', courses: 19, icon: 'ph:briefcase-fill' },
  { name: 'Marketing', courses: 33, icon: 'ph:chart-line-up-fill' },
  { name: 'Photography', courses: 34, icon: 'ph:camera-fill' },
  { name: 'Music', courses: 28, icon: 'ph:music-notes-fill' },
  { name: 'Data Science', courses: 27, icon: 'ph:database-fill' },
  { name: 'Personal Dev', courses: 32, icon: 'ph:user-focus-fill' }
];

export default function Categories() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div className="space-y-4 mb-6 md:mb-0">
            <div className="inline-block px-6 py-2 bg-[#0AB99D]/20 rounded-md">
              <span className="text-[#0AB99D] font-medium">CATEGORIES</span>
            </div>
            <h2 className="text-[#0E2A46] text-3xl md:text-4xl font-bold flex items-center gap-6">
              Browse By
              <div className="relative hidden md:block">
                <span className="text-[#0E2A46]">Categories</span>
                <div className="absolute -bottom-4 left-0 w-full">
                  <svg width="168" height="65" viewBox="0 0 168 65" fill="none">
                    <path d="M2 2C2 2 42 12 84 12C126 12 166 2 166 2" stroke="#0AB99D" strokeWidth="3"/>
                  </svg>
                </div>
              </div>
              <span className="md:hidden">Categories</span>
            </h2>
          </div>
          
          <Link 
            href="/categories"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0AB99D] text-white rounded-md hover:bg-[#09a78d] transition-colors"
          >
            <span className="font-medium">All Categories</span>
            <Icon icon="ph:arrow-right" className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#F2F2F2] rounded-lg p-8 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-[87px] h-[87px] bg-[#0AB99D] rounded-full flex items-center justify-center">
                  <Icon icon={category.icon} className="w-11 h-11 text-white" />
                </div>
                <div className="absolute -inset-2 border border-[#0AB99D] rounded-full" />
              </div>

              {/* Content */}
              <h3 className="text-[#4D5765] font-medium text-lg mb-4">{category.name}</h3>
              
              <Link 
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 text-[#4D5765] hover:text-[#0AB99D] transition-colors"
              >
                <span>{category.courses} Courses</span>
                <Icon icon="ph:arrow-right" className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 