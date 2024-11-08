import React, { useState } from 'react';
import { IndianRupee, BookOpen, Target, Users, Calculator as CalculatorIcon, Banknote } from 'lucide-react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import GoalTracker from './components/GoalTracker';
import Education from './components/Education';
import Community from './components/Community';
import Calculator from './components/Calculator';
import Banking from './components/Banking';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [language, setLanguage] = useState('english');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard language={language} />;
      case 'goals':
        return <GoalTracker language={language} />;
      case 'education':
        return <Education language={language} />;
      case 'community':
        return <Community language={language} />;
      case 'calculator':
        return <Calculator language={language} />;
      case 'banking':
        return <Banking language={language} />;
      default:
        return <Dashboard language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header language={language} setLanguage={setLanguage} />
      
      <main className="container mx-auto px-4 py-8">
        <nav className="flex justify-center space-x-6 mb-8">
          <NavButton
            icon={<IndianRupee />}
            label={language === 'english' ? 'Dashboard' : 'ଡ୍ୟାସବୋର୍ଡ'}
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          />
          <NavButton
            icon={<Target />}
            label={language === 'english' ? 'Goals' : 'ଲକ୍ଷ୍ୟ'}
            active={activeTab === 'goals'}
            onClick={() => setActiveTab('goals')}
          />
          <NavButton
            icon={<BookOpen />}
            label={language === 'english' ? 'Learn' : 'ଶିକ୍ଷା'}
            active={activeTab === 'education'}
            onClick={() => setActiveTab('education')}
          />
          <NavButton
            icon={<Users />}
            label={language === 'english' ? 'Community' : 'ସମୁଦାୟ'}
            active={activeTab === 'community'}
            onClick={() => setActiveTab('community')}
          />
          <NavButton
            icon={<CalculatorIcon />}
            label={language === 'english' ? 'Calculator' : 'କ୍ୟାଲକୁଲେଟର'}
            active={activeTab === 'calculator'}
            onClick={() => setActiveTab('calculator')}
          />
          <NavButton
            icon={<Banknote />}
            label={language === 'english' ? 'Banking' : 'ବ୍ୟାଙ୍କିଂ'}
            active={activeTab === 'banking'}
            onClick={() => setActiveTab('banking')}
          />
        </nav>

        {renderContent()}
      </main>
    </div>
  );
}

const NavButton = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center p-3 rounded-lg transition-all ${
      active
        ? 'bg-purple-600 text-white shadow-lg scale-105'
        : 'bg-white text-gray-600 hover:bg-purple-50'
    }`}
  >
    <span className="mb-1">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default App;