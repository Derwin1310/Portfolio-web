import React, {useState, createContext, useEffect} from 'react';
import { enLang } from '../locales/lang-en';
import { esLang } from '../locales/lang-es';

export const langContext = createContext();

export const LangProvider = ({children}) => {
	const defaultLang = localStorage.getItem('lang')
	const setDefaultLang = (lang) => localStorage.setItem('lang', lang);

	const [locale, setLocale] = useState( defaultLang || 'en' );

	useEffect(() => !defaultLang && setDefaultLang('en'), [])
	
	const setLanguage = (language) => {
		setLocale(language)

		setDefaultLang(language);
	}

	const languages = {
		en: enLang,
		es: esLang,
	}

	const state = {
		locale,
		setLanguage,
		language: languages[locale]
	}

	return <langContext.Provider value={state}>{children}</langContext.Provider>;
};
