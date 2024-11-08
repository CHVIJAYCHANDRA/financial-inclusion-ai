import React, { useState } from 'react';

interface FinancialGoal {
  name: string;
  targetValue: number;
  currentValue: number;
  targetDate: string;
  progress: number; // percentage
}

const FinancialGoalsDashboard: React.FC = () => {
  // Define the initial goals
  const [goals, setGoals] = useState<FinancialGoal[]>([
    {
      name: 'Dairy Business Expansion',
      targetValue: 100000,
      currentValue: 25000,
      targetDate: '31 December 2024',
      progress: (25000 / 100000) * 100, // 25% complete
    },
    {
      name: 'Emergency Fund',
      targetValue: 150000,
      currentValue: 20000,
      targetDate: '30 June 2024',
      progress: (20000 / 150000) * 100, // 13% complete
    },
  ]);

  const [newGoal, setNewGoal] = useState({
    name: '',
    targetValue: 0,
    currentValue: 0,
    targetDate: '',
  });

  // Function to update the progress of a goal
  const updateGoalProgress = (index: number, value: number) => {
    const newGoals = [...goals];
    newGoals[index].currentValue = value;
    newGoals[index].progress = (value / newGoals[index].targetValue) * 100;
    setGoals(newGoals);
  };

  // Function to add a new financial goal
  const addNewGoal = () => {
    if (!newGoal.name || !newGoal.targetValue || !newGoal.targetDate) {
      alert('Please fill in all fields.');
      return;
    }

    const newGoals = [...goals, {
      ...newGoal,
      progress: (newGoal.currentValue / newGoal.targetValue) * 100,
    }];
    setGoals(newGoals);

    // Clear the form after adding the new goal
    setNewGoal({
      name: '',
      targetValue: 0,
      currentValue: 0,
      targetDate: '',
    });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Financial Goals</h2>

      {/* List of Financial Goals */}
      {goals.map((goal, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">{goal.name}</h3>
            <span className="text-sm text-gray-500">{goal.targetDate}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold text-gray-900">₹{goal.currentValue.toLocaleString()} / ₹{goal.targetValue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{goal.progress.toFixed(2)}% Complete</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${goal.progress}%` }}
            />
          </div>

          {/* Input to Update Progress */}
          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700">Update Current Value</label>
            <input
              type="number"
              value={goal.currentValue}
              onChange={(e) => updateGoalProgress(index, Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter current value"
            />
          </div>
        </div>
      ))}

      {/* Form to Add a New Goal */}
      <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
        <h3 className="text-lg font-semibold text-gray-800">Add New Financial Goal</h3>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700">Goal Name</label>
          <input
            type="text"
            value={newGoal.name}
            onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter goal name"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700">Target Value (₹)</label>
          <input
            type="number"
            value={newGoal.targetValue}
            onChange={(e) => setNewGoal({ ...newGoal, targetValue: Number(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter target value"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700">Current Value (₹)</label>
          <input
            type="number"
            value={newGoal.currentValue}
            onChange={(e) => setNewGoal({ ...newGoal, currentValue: Number(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter current value"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-700">Target Date</label>
          <input
            type="date"
            value={newGoal.targetDate}
            onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          onClick={addNewGoal}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add Goal
        </button>
      </div>
    </div>
  );
};

export default FinancialGoalsDashboard;
