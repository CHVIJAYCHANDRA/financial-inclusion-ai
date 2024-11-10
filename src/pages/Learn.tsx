import React from 'react';
import { BookOpen, Users, Calculator, Building } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Basic Financial Planning',
    level: 'Beginner',
    duration: '30 min',
    content: [
      'Step 1: Understand your financial goals.',
      'Step 2: Create a budget plan.',
      'Step 3: Allocate funds for savings.',
      'Step 4: Monitor your spending.',
    ],
  },
  {
    id: 2,
    title: 'Saving Strategies',
    level: 'Intermediate',
    duration: '45 min',
    content: [
      'Step 1: Set realistic saving goals.',
      'Step 2: Track your spending habits.',
      'Step 3: Cut unnecessary expenses.',
      'Step 4: Save a fixed percentage of income.',
      'Step 5: Build an emergency fund.',
    ],
  },
];

export function Learn() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-indigo-600 text-white rounded-lg p-6">
          <BookOpen className="mb-2" size={24} />
          <h3 className="font-semibold">Financial Education</h3>
        </div>
        <div className="bg-purple-600 text-white rounded-lg p-6">
          <Users className="mb-2" size={24} />
          <h3 className="font-semibold">Community</h3>
        </div>
        <div className="bg-pink-600 text-white rounded-lg p-6">
          <Calculator className="mb-2" size={24} />
          <h3 className="font-semibold">Calculator</h3>
        </div>
        <div className="bg-blue-600 text-white rounded-lg p-6">
          <Building className="mb-2" size={24} />
          <h3 className="font-semibold">Banking</h3>
        </div>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">
                  {course.level} • {course.duration}
                </p>
              </div>
              <button className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm">
                Start
              </button>
            </div>
            <div className="space-y-2">
              {course.content.map((step, index) => (
                <p key={index} className="text-sm text-gray-600">
                  {step}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="font-semibold mb-2">AI Learning Assistant</h3>
        <p className="text-sm mb-4">
          Get personalized learning recommendations based on your goals and progress.
        </p>
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold">
          Start Learning Journey
        </button>
      </div>
    </div>
  );
}