// src/LanguageContext.js
import React, { createContext, useContext, useState } from 'react';
import { translateText } from '../src/services/translateService';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English
  const [translations, setTranslations] = useState({});

  const switchLanguage = async (lng) => {
    setLanguage(lng);
    const newTranslations = {};

    // Translate all texts in your app
    for (let key in translations) {
      const translatedText = await translateText(translations[key], lng);
      newTranslations[key] = translatedText;
    }

    setTranslations(newTranslations); // Update translated texts
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
