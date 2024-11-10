import React from 'react';

interface NotFoundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotFoundModal: React.FC<NotFoundModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">404 Error</h2>
        <p className="text-lg mb-4">Oops! Page Not Found Error.</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default NotFoundModal;
