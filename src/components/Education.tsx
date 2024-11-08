import React, { useState } from 'react';
import { BookOpen, Play, Award } from 'lucide-react';

interface EducationProps {
  language: string;
}

const Education: React.FC<EducationProps> = ({ language }) => {
  const courses = [
    {
      id: 1,
      title: language === 'english' ? 'Basic Financial Planning' : 'ମୌଳିକ ଆର୍ଥିକ ଯୋଜନା',
      level: language === 'english' ? 'Beginner' : 'ପ୍ରାରମ୍ଭିକ',
      duration: '30 min',
      description:
        language === 'english'
          ? 'In this course, you will learn the basics of financial planning.'
          : 'ଏହି କୋର୍ସରେ ଆପଣ ଆର୍ଥିକ ଯୋଜନାର ମୌଳିକତା ସମ୍ପର୍କରେ ସିଖିବେ।',
      steps: [
        language === 'english' ? 'Step 1: Understand your financial goals.' : 'ପଦକ୍ଷେପ ୧: ଆପଣଙ୍କ ଆର୍ଥିକ ଲକ୍ଷ୍ୟ ବୁଝିବେ।',
        language === 'english' ? 'Step 2: Create a budget plan.' : 'ପଦକ୍ଷେପ ୨: ଏକ ବଜେଟ୍ ପ୍ଲାନ୍ ତିଆରି କରନ୍ତୁ।',
        language === 'english' ? 'Step 3: Allocate funds for savings.' : 'ପଦକ୍ଷେପ ୩: ସଞ୍ଚୟ ପାଇଁ ଧନ ବିଭାଜନ କରନ୍ତୁ।',
        language === 'english' ? 'Step 4: Monitor your spending.' : 'ପଦକ୍ଷେପ ୪: ଆପଣଙ୍କ ଖର୍ଚ୍ଚ ଅନୁସରଣ କରନ୍ତୁ।',
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300&h=200',
    },
    {
      id: 2,
      title: language === 'english' ? 'Saving Strategies' : 'ସଞ୍ଚୟ ରଣନୀତି',
      level: language === 'english' ? 'Intermediate' : 'ମଧ୍ୟମ',
      duration: '45 min',
      description:
        language === 'english'
          ? 'In this course, you will learn strategies for saving money effectively.'
          : 'ଏହି କୋର୍ସରେ ଆପଣ ଟଙ୍କା ସଞ୍ଚୟ କରିବାର ସ୍ରାଟେଜୀ ସିଖିବେ।',
      steps: [
        language === 'english' ? 'Step 1: Set realistic saving goals.' : 'ପଦକ୍ଷେପ ୧: ବ୍ୟବହାରିକ ସଞ୍ଚୟ ଲକ୍ଷ୍ୟ ସେଟ୍ କରନ୍ତୁ।',
        language === 'english' ? 'Step 2: Track your spending habits.' : 'ପଦକ୍ଷେପ ୨: ଆପଣଙ୍କ ଖର୍ଚ୍ଚ ଅଭିନୟ ସମ୍ପର୍କରେ ଟ୍ରାକ୍ କରନ୍ତୁ।',
        language === 'english' ? 'Step 3: Cut unnecessary expenses.' : 'ପଦକ୍ଷେପ ୩: ଅନାବଶ୍ୟକ ଖର୍ଚ୍ଚ କମାନ୍ତୁ।',
        language === 'english' ? 'Step 4: Save a fixed percentage of income.' : 'ପଦକ୍ଷେପ ୪: ଆୟର ଏକ ସ୍ଥିର ପ୍ରତିଶତ ସଞ୍ଚୟ କରନ୍ତୁ।',
        language === 'english' ? 'Step 5: Build an emergency fund.' : 'ପଦକ୍ଷେପ ୫: ଏକ ଆପଦ ଧନର ନିର୍ମାଣ କରନ୍ତୁ।',
      ],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=300&h=200',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {language === 'english' ? 'Financial Education' : 'ଆର୍ଥିକ ଶିକ୍ଷା'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} language={language} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({ course, language }) => {
  const [isLearning, setIsLearning] = useState(false); // Track whether the user has clicked "Start Learning"

  const toggleLearning = () => {
    setIsLearning((prev) => !prev); // Toggle the learning state when the button is clicked
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-purple-100">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>{course.level}</span>
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        {!isLearning ? (
          <button
            className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
            onClick={toggleLearning}
          >
            <Play className="h-4 w-4" />
            <span>{language === 'english' ? 'Start Learning' : 'ଶିକ୍ଷା ଆରମ୍ଭ କରନ୍ତୁ'}</span>
          </button>
        ) : (
          <div className="mt-4">
            <p className="text-gray-800 mb-2">{course.description}</p>
            <div className="space-y-2">
              {course.steps.map((step, index) => (
                <div key={index} className="text-gray-600">
                  <span className="font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
