import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './layout.css';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();  // Corrected the useTranslation call
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false); // Track dropdown visibility
  const dropdownRef = useRef(null); // Ref to track dropdown

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language using i18next
    setSelectedLanguage(lang); // Update the selected language in state
    setIsOpen(false); // Close the dropdown menu after language change
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-switcher" ref={dropdownRef}>
      {/* Dropdown Button */}
      <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <button
          className="dropdown-button language-switcher"
          aria-expanded={isOpen}
        >
          {selectedLanguage.toUpperCase()}
          <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="dropdown-menu">
            <li
              className={`dropdown-item ${selectedLanguage === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </li>
            <li
              className={`dropdown-item ${selectedLanguage === 'ar' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('ar')}
            >
              AR
            </li>
            <li
              className={`dropdown-item ${selectedLanguage === 'fr' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('fr')}
            >
             FR
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
