import React, { useState, useEffect } from 'react';
import { DarkThemeToggle } from 'flowbite-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    // Check localStorage for the user's theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Apply the theme to the document body
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Save the preference
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save the preference
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded w-96 text-center dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className='columns-2'>
          <p className="font-bold mb-8 block">Theme</p>
          {/* Toggle the theme when DarkThemeToggle is clicked */}
          <DarkThemeToggle onClick={toggleTheme} />
        </div>

        {/* Language Selection Section */}
        <section className="columns-2 mb-4">
          <label htmlFor="language-select" className="font-bold mb-2 block">
            Select Language:
          </label>
          <select
            id="language-select"
            className="border border-gray-300 rounded p-2 w-full"
            defaultValue="English"
            disabled
            aria-label="Language selection"
          >
            <option value="English">Auto-Detect</option>
            <option value="Spanish" disabled>Spanish</option>
            <option value="French" disabled>French</option>
            <option value="German" disabled>German</option>
          </select>
        </section>

        {/* App Version Section */}
        <section className="columns-2 mb-8">
          <h3 className="font-bold mb-2">App Version:</h3>
          <p>v1.0.0</p>
        </section>

        {/* Close Modal Button */}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
