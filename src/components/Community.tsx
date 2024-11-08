import React from 'react';
import { Users, MessageSquare, UserPlus } from 'lucide-react';

interface CommunityProps {
  language: string;
}

const Community: React.FC<CommunityProps> = ({ language }) => {
  const mentors = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: language === 'english' ? 'Financial Advisor' : 'ଆର୍ଥିକ ସଲାହକାର',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
      available: true
    },
    {
      id: 2,
      name: 'Meera Patel',
      role: language === 'english' ? 'Business Mentor' : 'ବ୍ୟବସାୟ ପରାମର୍ଶଦାତା',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
      available: false
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {language === 'english' ? 'Community Support' : 'ସାମୁଦାୟିକ ସମର୍ଥନ'}
        </h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
          <MessageSquare className="h-5 w-5" />
          <span>
            {language === 'english' ? 'Start Discussion' : 'ଆଲୋଚନା ଆରମ୍ଭ କରନ୍ତୁ'}
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Users className="h-5 w-5 text-purple-600" />
            <span>{language === 'english' ? 'Available Mentors' : 'ଉପଲବ୍ଧ ପରାମର୍ଶଦାତା'}</span>
          </h3>
          <div className="space-y-4">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} language={language} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {language === 'english' ? 'Recent Discussions' : 'ସାମ୍ପ୍ରତିକ ଆଲୋଚନା'}
          </h3>
          <div className="space-y-4">
            <DiscussionCard
              title={
                language === 'english'
                  ? 'Tips for dairy business expansion'
                  : 'ଡେୟାରୀ ବ୍ୟବସାୟ ସମ୍ପ୍ରସାରଣ ପାଇଁ ପରାମର୍ଶ'
              }
              replies={5}
              time="2h ago"
              language={language}
            />
            <DiscussionCard
              title={
                language === 'english'
                  ? 'How to manage emergency funds?'
                  : 'ଜରୁରୀକାଳୀନ ପାଣ୍ଠି କିପରି ପରିଚାଳନା କରିବେ?'
              }
              replies={3}
              time="5h ago"
              language={language}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MentorCard = ({ mentor, language }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h4 className="font-medium text-gray-800">{mentor.name}</h4>
        <p className="text-sm text-gray-600">{mentor.role}</p>
      </div>
    </div>
    <button
      className={`flex items-center space-x-1 px-3 py-1 rounded-lg ${
        mentor.available
          ? 'bg-green-100 text-green-700'
          : 'bg-gray-100 text-gray-500'
      }`}
    >
      <UserPlus className="h-4 w-4" />
      <span>
        {mentor.available
          ? language === 'english'
            ? 'Connect'
            : 'ସଂଯୋଗ'
          : language === 'english'
          ? 'Busy'
          : 'ବ୍ୟସ୍ତ'}
      </span>
    </button>
  </div>
);

const DiscussionCard = ({ title, replies, time, language }) => (
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">
        {replies}{' '}
        {language === 'english' ? 'replies' : 'ଉତ୍ତର'} • {time}
      </p>
    </div>
    <button className="text-purple-600 hover:text-purple-700">
      <MessageSquare className="h-5 w-5" />
    </button>
  </div>
);

export default Community;