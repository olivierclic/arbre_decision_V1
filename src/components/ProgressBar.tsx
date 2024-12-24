import React from 'react';

interface ProgressBarProps {
  history: string[];
}

export function ProgressBar({ history }: ProgressBarProps) {
  return (
    <div className="mt-6 bg-white rounded-xl shadow-xl p-4">
      <div className="flex flex-wrap gap-2">
        {history.map((step, index) => (
          <div key={index} className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="mx-1 text-gray-400">→</span>
          </div>
        ))}
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
    </div>
  );
}