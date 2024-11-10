import React, { useState } from 'react';
import { Wallet, Send, Receipt, HelpCircle } from 'lucide-react';
import { AIAssistant } from '../components/AIAssistant';

export function Banking() {
  const [walletBalance] = useState(1000);
  const [billAmount, setBillAmount] = useState('');
  const [transferAmount, setTransferAmount] = useState('200');
  const [isAIOpen, setIsAIOpen] = useState(false);

  const handlePayBill = () => {
    // Handle bill payment logic
  };

  const handleTransfer = () => {
    // Handle transfer logic
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90">Wallet Balance</p>
            <h2 className="text-2xl font-bold">₹{walletBalance.toFixed(2)}</h2>
          </div>
          <Wallet size={32} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Receipt size={20} />
            <h3 className="font-semibold">Pay Bill</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Enter Bill Amount
              </label>
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button
              onClick={handlePayBill}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Pay Bill
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Send size={20} />
            <h3 className="font-semibold">Bank Transfer</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Transfer Money to Other Account
              </label>
              <input
                type="number"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button
              onClick={handleTransfer}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Transfer ₹{transferAmount}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <HelpCircle size={20} />
          <h3 className="font-semibold">AI Banking Assistant</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Need help with banking? I can assist you with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
          <li>Understanding different types of accounts</li>
          <li>Explaining banking terms in simple language</li>
          <li>Helping you make safe transactions</li>
          <li>Providing money-saving tips</li>
        </ul>
        <button 
          onClick={() => setIsAIOpen(true)}
          className="mt-4 w-full bg-indigo-100 text-indigo-600 py-2 rounded-lg hover:bg-indigo-200"
        >
          Ask AI Assistant
        </button>
      </div>

      <AIAssistant
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        context="banking"
      />
    </div>
  );
}