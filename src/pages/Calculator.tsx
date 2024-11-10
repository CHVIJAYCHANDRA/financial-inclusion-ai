import React, { useState } from 'react';

export function Calculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(1);
  const [result, setResult] = useState(0);

  const calculateInterest = () => {
    const interest = (principal * rate * time) / 100;
    setResult(interest);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Interest Calculator</h2>

      <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Principal Amount (₹)
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Interest Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Time Period (Years)
          </label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          onClick={calculateInterest}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Calculate Interest
        </button>

        {result > 0 && (
          <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-semibold mb-2">Results</h3>
            <div className="space-y-2">
              <p className="text-sm">
                Principal Amount: ₹{principal.toLocaleString()}
              </p>
              <p className="text-sm">Interest Earned: ₹{result.toLocaleString()}</p>
              <p className="text-sm">
                Total Amount: ₹{(principal + result).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="font-semibold mb-4">AI Recommendation</h3>
        <p className="text-sm text-gray-600">
          Based on your calculation, here's what you should know:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-600">
          <li>This is a simple interest calculation</li>
          <li>Consider compound interest for long-term savings</li>
          <li>Compare with current FD rates: 6-7%</li>
          <li>For your dairy business, consider higher-yield options</li>
        </ul>
      </div>
    </div>
  );
}