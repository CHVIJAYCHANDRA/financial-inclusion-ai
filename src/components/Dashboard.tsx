import React, { useState } from 'react';
import { IndianRupee, TrendingUp, PiggyBank, AlertCircle } from 'lucide-react';

interface DashboardProps {
  language: string;
}

const Dashboard: React.FC<DashboardProps> = ({ language }) => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
  const [totalSavings, setTotalSavings] = useState<number>(0);
  const [emergencyFundTarget, setEmergencyFundTarget] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);

  const translations = {
    welcome: {
      english: 'Welcome, Lakshmi!',
      odia: 'ସ୍ୱାଗତ, ଲକ୍ଷ୍ମୀ!'
    },
    monthlyIncome: {
      english: 'Monthly Income',
      odia: 'ମାସିକ ଆୟ'
    },
    totalSavings: {
      english: 'Total Savings',
      odia: 'ମୋଟ ସଞ୍ଚୟ'
    },
    emergencyFund: {
      english: 'Emergency Fund',
      odia: 'ଜରୁରୀକାଳୀନ ପାଣ୍ଠି'
    },
    target: {
      english: 'Target',
      odia: 'ଲକ୍ଷ୍ୟ'
    },
    aiRecommendation: {
      english: 'AI Recommendations',
      odia: 'ଏଆଇ ସୁପାରିଶ'
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    setShowResults(true);
  };

  // AI Recommendation calculation
  const recommendedSavings = (monthlyIncome * 0.3).toFixed(2);
  const emergencyFundProgress = emergencyFundTarget > 0 ? (totalSavings / emergencyFundTarget) * 100 : 0;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">
        {translations.welcome[language]}
      </h2>

      {/* Input Form */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            {translations.monthlyIncome[language]}
          </label>
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter Monthly Income"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            {translations.totalSavings[language]}
          </label>
          <input
            type="number"
            value={totalSavings}
            onChange={(e) => setTotalSavings(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter Total Savings"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            {translations.emergencyFund[language]}
          </label>
          <input
            type="number"
            value={emergencyFundTarget}
            onChange={(e) => setEmergencyFundTarget(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter Emergency Fund Target"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-blue-600 text-white rounded-lg"
        >
          Calculate
        </button>
      </div>

      {/* Display Results After Calculation */}
      {showResults && (
        <div className="mt-8 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">{translations.aiRecommendation[language]}</h3>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">Monthly Savings Recommendation</h4>
            <p className="text-xl text-gray-900">
              Save ₹{recommendedSavings} monthly to reach your dairy business goal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mt-4">
            <h4 className="text-lg font-semibold text-gray-800">{translations.emergencyFund[language]} Progress</h4>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${emergencyFundProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {emergencyFundProgress.toFixed(2)}% of your emergency fund target achieved.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
