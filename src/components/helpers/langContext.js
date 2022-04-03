import React, {useState, createContext, useEffect} from 'react';
import { enLang } from '../locales/lang-en';
import { esLang } from '../locales/lang-es';

export const langContext = createContext({prueba:'prueba'});

export const LangProvider = ({children}) => {
	const [locale, setLocale] = useState(localStorage.getItem('lang') || 'en' );

	useEffect(() => {
		if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
	}, [])
	
	const setLanguage = (language) => {
		setLocale(language)

		localStorage.setItem('lang', language);
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
