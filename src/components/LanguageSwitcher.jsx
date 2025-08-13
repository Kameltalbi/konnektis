import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGlobe, FiChevronDown, FiCheck } from 'react-icons/fi';

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    () => languages.find(lang => lang.code === i18n.language) || languages[0]
  );
  const dropdownRef = useRef(null);

  // Update current language when i18n language changes
  useEffect(() => {
    setCurrentLanguage(languages.find(lang => lang.code === i18n.language) || languages[0]);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
      .then(() => {
        console.log(`Language changed to ${lng}`);
        setCurrentLanguage(languages.find(lang => lang.code === lng) || languages[0]);
      })
      .catch(err => console.error('Error changing language:', err));
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FiGlobe className="w-5 h-5 text-gray-500" />
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between ${
                  i18n.language === lang.code
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
                {i18n.language === lang.code && (
                  <FiCheck className="w-4 h-4 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
