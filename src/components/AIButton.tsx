import React from 'react';
import { MessageSquare } from 'lucide-react';

interface AIButtonProps {
  onClick: () => void;
  label?: string;
}

export function AIButton({ onClick, label = "Ask AI Assistant" }: AIButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
    >
      <MessageSquare size={20} />
      <span>{label}</span>
    </button>
  );
}