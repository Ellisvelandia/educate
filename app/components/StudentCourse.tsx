'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface CourseCardProps {
  image: string;
  category: string;
  title: string;
  rating: number;
  lessons: number;
  duration: string;
  students: string;
  instructor: {
    name: string;
    image: string;
  };
  price: {
    current: number;
    original: number;
  };
}

const courses: CourseCardProps[] = [
  {
    image: '/course-1.jpg',
    category: 'Development',
    title: 'Complete Web Development Course From Scratch',
    rating: 4.7,
    lessons: 10,
    duration: '19h 30m',
    students: '20+',
    instructor: {
      name: 'Angela',
      image: '/instructors/angela.jpg'
    },
    price: {
      current: 60,
      original: 120
    }
  },
  {
    image: '/course-2.jpg',
    category: 'Development',
    title: 'Advanced JavaScript Programming Masterclass',
    rating: 4.6,
    lessons: 12,
    duration: '17h 30m',
    students: '25+',
    instructor: {
      name: 'David',
      image: '/instructors/david.jpg'
    },
    price: {
      current: 70,
      original: 130
    }
  },
  {
    image: '/course-3.jpg',
    category: 'Development',
    title: 'Full Stack Development with React & Node.js',
    rating: 4.8,
    lessons: 16,
    duration: '19h 30m',
    students: '30+',
    instructor: {
      name: 'Angela',
      image: '/instructors/angela.jpg'
    },
    price: {
      current: 80,
      original: 160
    }
  }
];

const CourseCard = ({ course }: { course: CourseCardProps }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Course Image Container */}
      <div className="relative w-full h-[260px]">
        <Image 
          src={course.image} 
          alt={course.title}
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute top-5 left-5">
          <span className="bg-[#0AB99D] text-white px-4 py-2 rounded-md">
            {course.category}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Icon 
              key={i}
              icon="ph:star-fill"
              className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-[#0AB99D]' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-[#4D5765]">({course.rating})</span>
        </div>

        {/* Title */}
        <h3 className="text-[#0E2A46] text-xl font-semibold mb-4 line-clamp-2">
          {course.title}
        </h3>

        {/* Course Details */}
        <div className="flex items-center gap-4 py-4 border-y border-[#4D5765]/20">
          <div className="flex items-center gap-2">
            <Icon icon="ph:book" className="w-4 h-4 text-black" />
            <span className="text-[#4D5765]">Lesson {course.lessons}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="ph:clock" className="w-4 h-4 text-black" />
            <span className="text-[#4D5765]">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="ph:users" className="w-4 h-4 text-black" />
            <span className="text-[#4D5765]">Students {course.students}</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-3 mt-6">
          <Image
            src={course.instructor.image}
            alt={course.instructor.name}
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-[#4D5765]">By {course.instructor.name} in {course.category}</span>
        </div>

        {/* Price and Cart */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="text-[#0E2A46] text-xl font-semibold">${course.price.current}</span>
            <span className="text-[#4D5765] line-through">${course.price.original}</span>
          </div>
          <button className="flex items-center gap-2 text-[#4D5765] hover:text-[#0AB99D] transition-colors">
            <Icon icon="ph:shopping-cart" className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function StudentCourse() {
  return (
    <section className="bg-[#F2F2F2] py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#0AB99D]/20 px-6 py-2 rounded-md mb-4">
            <span className="text-[#0AB99D] font-medium">Top Popular Course</span>
          </div>
          <h2 className="text-[#0E2A46] text-4xl md:text-5xl font-bold mb-4">
            Study Course <span className="relative inline-block">student
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 168 65" fill="none">
                <path d="M2 63C31.3333 32.6667 126.4 -18.8 166 34" stroke="#0AB99D" strokeWidth="3"/>
              </svg>
            </span> can
          </h2>
          <h2 className="text-[#0E2A46] text-4xl md:text-5xl font-bold">join with us.</h2>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/courses"
            className="bg-[#0AB99D] text-white px-8 py-4 rounded flex items-center gap-2 hover:bg-[#09a78d] transition-colors"
          >
            <span>Load More Course</span>
            <Icon icon="ph:arrow-right" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
} 