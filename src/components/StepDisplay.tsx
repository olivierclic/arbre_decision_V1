import React from 'react';
import { Step } from '../types/Step';

interface StepDisplayProps {
  step: Step;
}

export function StepDisplay({ step }: StepDisplayProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {step.icon}
      <h2 className="text-xl font-semibold text-gray-800">
        {step.question}
      </h2>
    </div>
  );
}