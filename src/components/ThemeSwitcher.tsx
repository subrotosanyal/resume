import { useState } from 'react';
import { Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Theme } from '../types/Theme'; // Import Theme interface

interface ThemeSwitcherProps {
  themes: Theme[];
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const ThemeSwitcher = ({ themes, currentTheme, setTheme, isDarkMode, setIsDarkMode }: ThemeSwitcherProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
      <div
          className={`fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 ${
              isCollapsed ? 'w-12' : 'w-64'
          }`}
      >
        <div className="flex items-center justify-between">
          <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
              onClick={toggleCollapse}
              className="ml-auto p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {isCollapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        {!isCollapsed && (
            <div className="mt-4 grid grid-cols-2 gap-2">
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
        )}
      </div>
  );
};

export default ThemeSwitcher;