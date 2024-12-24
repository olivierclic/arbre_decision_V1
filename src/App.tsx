import React, { useState } from 'react';
import { steps } from './data/steps';
import { StepDisplay } from './components/StepDisplay';
import { ActionButtons } from './components/ActionButtons';
import { ProgressBar } from './components/ProgressBar';

function App() {
  const [currentStep, setCurrentStep] = useState<string>('start');
  const [history, setHistory] = useState<string[]>([]);

  const handleResponse = (response: boolean) => {
    const currentStepData = steps[currentStep];
    setHistory([...history, currentStep]);
    setCurrentStep(response ? currentStepData.yesNext : currentStepData.noNext);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousStep = newHistory.pop();
      setHistory(newHistory);
      setCurrentStep(previousStep || 'start');
    }
  };

  const handleReset = () => {
    setCurrentStep('start');
    setHistory([]);
  };

  const currentStepData = steps[currentStep];
  const isFinalStep = currentStep === 'success' || currentStep === 'service' || currentStep === 'end';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-xl p-6 space-y-6">
          <StepDisplay step={currentStepData} />
          
          <ActionButtons 
            onYes={() => handleResponse(true)}
            onNo={() => handleResponse(false)}
            onBack={handleBack}
            onReset={handleReset}
            canGoBack={history.length > 0}
            showYesNo={!isFinalStep}
          />
        </div>

        <ProgressBar history={history} />
      </div>
    </div>
  );
}

export default App;