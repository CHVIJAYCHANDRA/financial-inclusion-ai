import React, { useState } from 'react';
import { ArrowUpCircle, ArrowDownCircle, Sparkles } from 'lucide-react';
import { AIAssistant } from '../components/AIAssistant';
import { useLanguage } from '../components/LanguageContext';

export function Dashboard() {
  const [monthlyIncome, setMonthlyIncome] = useState(15000);
  const [totalSavings, setTotalSavings] = useState(25000);
  const [emergencyFund, setEmergencyFund] = useState(20000);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const { t } = useLanguage();

  const aiSuggestion = `Based on your monthly income of ₹${monthlyIncome}, I recommend:
    • Save ₹${Math.round(monthlyIncome * 0.2)} monthly for your dairy business
    • Keep ₹${Math.round(monthlyIncome * 0.1)} for emergency fund
    • Consider a small SIP of ₹500 in a low-risk mutual fund`;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">{t('welcome')}</h2>
        <div className="flex items-center space-x-2">
          <Sparkles className="text-yellow-300" />
          <p className="text-sm">Your AI assistant is here to help!</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Monthly Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ArrowUpCircle className="text-green-500" />
                <span>Income</span>
              </div>
              <div className="flex items-center">
                <span>₹</span>
                <input
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-24 text-right border rounded px-2 py-1 ml-1"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ArrowDownCircle className="text-blue-500" />
                <span>Savings</span>
              </div>
              <div className="flex items-center">
                <span>₹</span>
                <input
                  type="number"
                  value={totalSavings}
                  onChange={(e) => setTotalSavings(Number(e.target.value))}
                  className="w-24 text-right border rounded px-2 py-1 ml-1"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ArrowDownCircle className="text-purple-500" />
                <span>Emergency Fund</span>
              </div>
              <div className="flex items-center">
                <span>₹</span>
                <input
                  type="number"
                  value={emergencyFund}
                  onChange={(e) => setEmergencyFund(Number(e.target.value))}
                  className="w-24 text-right border rounded px-2 py-1 ml-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold mb-4">AI Insights</h3>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-sm whitespace-pre-line">{aiSuggestion}</p>
          </div>
          <button
            onClick={() => setIsAIOpen(true)}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Get Personalized Advice
          </button>
        </div>
      </div>

      <AIAssistant
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        context="general"
      />
    </div>
  );
}