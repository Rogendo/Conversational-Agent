import React, { useState } from 'react';
import { FiPlus, FiSend } from 'react-icons/fi';

const Imaging = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<{ message: string; sender: string }[]>([]);
  const [chatInput, setChatInput] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const file = files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { message: chatInput, sender: "user" }]);
      setChatInput("");
    }
  };

  return (
    <div className="flex">
      
      {/* Left Side: Upload and Chat */}
      <div className="flex flex-col h-[80vh] w-[60vw] mx-auto p-6 bg-gray-100 dark:bg-gray-900 justify-center items-center">
        <div className="flex flex-col gap-12 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 w-full max-w-md">
          
          {/* Image Upload Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Upload Image</h2>
            <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mb-4 flex items-center justify-center">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="max-w-full max-h-96 object-contain rounded-md"
                />
              ) : (
                <p className="text-gray-600 dark:text-gray-400"><FiPlus /></p>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              title="Upload an image"
              className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-900 file:text-white hover:file:bg-cyan-700"
            />
          </div>
  
          {/* Chat Window Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Description</h2>
            <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg overflow-y-auto h-64">
              {chatMessages.length > 0 ? (
                chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-lg ${
                      msg.sender === "user" ? "bg-cyan-100 text-gray-800 dark:bg-cyan-900 dark:text-white self-end" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                    }`}
                  >
                    {msg.message}
                  </div>
                ))
              ) : (
                <p className="text-gray-600 dark:text-gray-400">Embed text explaining your upload! [optional]</p>
              )}
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Type your message"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-lg mr-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side: Analysis Prompt */}
      <div className="w-[20vw] flex items-center justify-center p-4">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex-shrink-0 w-full flex items-center justify-center flex-col text-center bg-gray-300 p-4 rounded-lg dark:bg-gray-700">
            <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center mb-4">
              <img className="w-10 h-10 rounded-full object-cover" src="openai.svg" alt="OpenAI Logo" />
            </div>
            <h1 className="text-lg font-bold dark:text-white">Let's analyze your medical docs!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imaging;
