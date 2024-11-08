import React, { useState } from 'react';
import { Calculator as CalculatorIcon, RefreshCw } from 'lucide-react';

interface CalculatorProps {
  language: string;
}

const Calculator: React.FC<CalculatorProps> = ({ language }) => {
  const [principal, setPrincipal] = useState<string>('10000');
  const [rate, setRate] = useState<string>('5');
  const [time, setTime] = useState<string>('1');
  const [result, setResult] = useState<number | null>(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    const interest = (p * r * t) / 100;
    setResult(interest);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
        <div className="flex items-center space-x-3 mb-6">
          <CalculatorIcon className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            {language === 'english' ? 'Interest Calculator' : 'ସୁଧ କ୍ୟାଲକୁଲେଟର'}
          </h2>
        </div>

        <div className="space-y-6">
          <InputField
            label={language === 'english' ? 'Principal Amount (₹)' : 'ମୂଳ ରାଶି (₹)'}
            value={principal}
            onChange={setPrincipal}
            type="number"
          />

          <InputField
            label={language === 'english' ? 'Interest Rate (%)' : 'ସୁଧ ହାର (%)'}
            value={rate}
            onChange={setRate}
            type="number"
            step="0.1"
          />

          <InputField
            label={language === 'english' ? 'Time Period (Years)' : 'ସମୟ ଅବଧି (ବର୍ଷ)'}
            value={time}
            onChange={setTime}
            type="number"
            step="0.5"
          />

          <button
            onClick={calculateInterest}
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
          >
            <RefreshCw className="h-5 w-5" />
            <span>
              {language === 'english' ? 'Calculate Interest' : 'ସୁଧ ଗଣନା କରନ୍ତୁ'}
            </span>
          </button>

          {result !== null && (
            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                {language === 'english' ? 'Results' : 'ଫଳାଫଳ'}
              </h3>
              <div className="space-y-2">
                <ResultRow
                  label={language === 'english' ? 'Interest Amount' : 'ସୁଧ ରାଶି'}
                  value={`₹${result.toFixed(2)}`}
                />
                <ResultRow
                  label={language === 'english' ? 'Total Amount' : 'ମୋଟ ରାଶି'}
                  value={`₹${(parseFloat(principal) + result).toFixed(2)}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  step?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type = 'text', step = '1' }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      step={step}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    />
  </div>
);

interface ResultRowProps {
  label: string;
  value: string;
}

const ResultRow: React.FC<ResultRowProps> = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}</span>
    <span className="font-semibold text-purple-800">{value}</span>
  </div>
);

export default Calculator;