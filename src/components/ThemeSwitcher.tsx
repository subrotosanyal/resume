import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = ({ themes, currentTheme, setTheme, isDarkMode, setIsDarkMode }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <span className="ml-2 text-sm font-medium">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => setTheme(theme)}
            className={`px-3 py-1 rounded ${
              currentTheme.name === theme.name
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;