import React, { createContext, useState, useContext } from 'react';
import { translations } from './Translations';

// store language-related data.
const LanguageData = createContext();

// provides the whole app (children) with the Language Data context
export function LangProvider({ children }) {
    const [language, setLanguage] = useState('en');

    // translation function
    // t is a helper function to fetch the correct translations
    const t = (key) => {
        // returns translated string for a given key
        // looks for key in current language
        // if not found, falls back to default English 
        // if still not found, returns key itself to prevent undefined
        return translations[language]?.[key] || translations['en']?.[key] || key;
    };

    // provide language state and translation function to whole app (children components)
    return (
        <LanguageData.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageData.Provider>
    );
}

// custom hook to access the LanguageData
// ensures components can use { language, setLanguage, t } without manually calling useContext.
export function useLanguage() {
    const context = useContext(LanguageData);
    // error handling if used outside provider
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
