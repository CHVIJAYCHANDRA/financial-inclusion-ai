import React, { useState } from 'react';
import { Plus, Target } from 'lucide-react';

interface Goal {
  id: number;
  name: string;
  targetValue: number;
  currentValue: number;
  targetDate: string;
}

export function Goals() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      name: 'Dairy Business Expansion',
      targetValue: 100000,
      currentValue: 25000,
      targetDate: '2024-12-31',
    },
    {
      id: 2,
      name: 'Emergency Fund',
      targetValue: 150000,
      currentValue: 20000,
      targetDate: '2024-06-30',
    },
  ]);

  const [newGoal, setNewGoal] = useState({
    name: '',
    targetValue: 0,
    currentValue: 0,
    targetDate: '',
  });

  const addGoal = () => {
    if (newGoal.name && newGoal.targetValue > 0 && newGoal.targetDate) {
      setGoals([
        ...goals,
        { ...newGoal, id: goals.length + 1 },
      ]);
      setNewGoal({ name: '', targetValue: 0, currentValue: 0, targetDate: '' });
    }
  };

  const updateGoalValue = (id: number, value: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, currentValue: value } : goal
    ));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Financial Goals</h2>

      <div className="space-y-4">
        {goals.map(goal => {
          const progress = (goal.currentValue / goal.targetValue) * 100;
          return (
            <div key={goal.id} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">{goal.name}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(goal.targetDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ₹{goal.currentValue.toLocaleString()} / ₹{goal.targetValue.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    {progress.toFixed(2)}% Complete
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="mt-4">
                <label className="text-sm text-gray-600">Update Current Value</label>
                <input
                  type="number"
                  value={goal.currentValue}
                  onChange={(e) => updateGoalValue(goal.id, Number(e.target.value))}
                  className="w-full mt-1 border rounded px-3 py-2"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="font-semibold mb-4 flex items-center">
          <Plus className="mr-2" size={20} />
          Add New Financial Goal
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Goal Name</label>
            <input
              type="text"
              placeholder="Enter goal name"
              value={newGoal.name}
              onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Target Value (₹)</label>
            <input
              type="number"
              value={newGoal.targetValue}
              onChange={(e) => setNewGoal({ ...newGoal, targetValue: Number(e.target.value) })}
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Current Value (₹)</label>
            <input
              type="number"
              value={newGoal.currentValue}
              onChange={(e) => setNewGoal({ ...newGoal, currentValue: Number(e.target.value) })}
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Target Date</label>
            <input
              type="date"
              value={newGoal.targetDate}
              onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>
          <button
            onClick={addGoal}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Add Goal
          </button>
        </div>
      </div>
    </div>
  );
}