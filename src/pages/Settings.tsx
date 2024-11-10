import React, { useState } from 'react';

export function Settings() {
    const [theme, setTheme] = useState<string>('System');
    const [language, setLanguage] = useState<string>('Auto-detect');

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value);
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };  

    const appVersion = "1.0.0"; // Set your app version here

    return (
        <div className="max-w-lg  mx-auto w-full p-6 bg-gray-500 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>

            <div className="mb-8">
                <h3 className="text-lg font-semibold">General</h3>
                <div className="mb-4">
                    <label className="block mb-1">Theme:</label>
                    <select
                        title="Select Theme"
                        value={theme}
                        onChange={handleThemeChange}
                        className="w-200 p-2 bg-gray-700 border border-gray-300 rounded"
                    >
                        <option value="System">System</option>
                        <option value="Light">Light</option>
                        <option value="Dark">Dark</option>
                    </select>
                </div>
               
                <div className="mb-4">
                    <label className="block mb-1">Language:</label>
                    <select
                        title="Select Language"
                        value={language}
                        onChange={handleLanguageChange}
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                    >
                        <option value="Auto-detect">Auto-detect</option>
                        <option value="English">English</option>
                        <option value="Swahili">Zulu</option>
                        <option value="Swahili">French</option>
                        <option value="Swahili">Swahili</option>
                        <option value="Swahili">Arabic</option>
                        <option value="Swahili">Afrikanas</option>

                        {/* Add more languages as needed */}
                    </select>
                </div>
                           
            </div>

            {/* Help Section */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold">Help</h3>
                <button
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded"
                    onClick={() => console.log('Help clicked')}
                >
                    Help
                </button>
            </div>

            {/* App Version Section */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold">App Version</h3>
                <p className="text-gray-400">{appVersion}</p>
            </div>
        </div>
    );
}
