import React from 'react';

interface ActionButtonsProps {
  onYes: () => void;
  onNo: () => void;
  onBack: () => void;
  onReset: () => void;
  canGoBack: boolean;
  showYesNo: boolean;
}

export function ActionButtons({ 
  onYes, 
  onNo, 
  onBack, 
  onReset, 
  canGoBack, 
  showYesNo 
}: ActionButtonsProps) {
  return (
    <>
      {showYesNo && (
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onYes}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            Oui
          </button>
          <button
            onClick={onNo}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            Non
          </button>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          disabled={!canGoBack}
          className={`px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
            !canGoBack
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Retour
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Recommencer
        </button>
      </div>
    </>
  );
}