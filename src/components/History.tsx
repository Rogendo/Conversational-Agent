import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const History: React.FC<ModalProps> = ({ isOpen, onClose }) => {
 
  if (!isOpen) {
    return null;
  }

  // Sample chat history data (you can replace this with actual data later)
  const chatHistory = [
    { id: 1, title: "Chat with AI Therapist", date: "2024-11-01" },
    { id: 2, title: "Conversation on Nutrition", date: "2024-11-03" },
    { id: 3, title: "Mental Health Session", date: "2024-11-05" }
  ];

  return (
    <div 
      className="fixed inset-0 bg-gray-950 bg-opacity-50 flex justify-end z-50"
      onClick={onClose} // Close on clicking outside
    >
      {/* Sidebar panel positioned on the right */}
      <div 
        className="bg-white w-80 h-full p-6 shadow-lg dark:bg-gray-800 dark:text-white relative right-0"
        onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the overlay
      >
        
        {/* Close button at the top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
        >
          ✖
        </button>

        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Chat History</h2>

        {/* List of chat history items */}
        <div className="space-y-4 overflow-y-auto">
          {chatHistory.length > 0 ? (
            chatHistory.map((chat) => (
              <div key={chat.id} className="p-3 border border-gray-300 rounded-lg dark:border-gray-600">
                <h3 className="text-md font-medium text-gray-700 dark:text-gray-300">{chat.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{chat.date}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-400">No chat history available.</p>
          )}
        </div>

        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default History;
