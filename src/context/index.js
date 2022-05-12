import React, { useState, createContext, useEffect } from 'react';
import { setTheme, getTheme, fadeInAnimation } from '/src/helpers';
import { enLang, esLang } from '/src/locales';

export const appContext = createContext();

export function ContextProvider({ children }) {
	const [defaultTheme, setDefaultTheme] = useState(getTheme());
	const [activeBtn, setActiveBtn] = useState(false)

	const defaultLang = localStorage.getItem('lang');
	const setDefaultLang = lang => localStorage.setItem('lang', lang);

	const [locale, setLocale] = useState(defaultLang || 'en');

	useEffect(() => !defaultLang && setDefaultLang('en'), []);

	const setLanguage = language => {
		setLocale(language);

		setDefaultLang(language);
	};

	const changeTheme = () => {
		const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
		setDefaultTheme(newTheme);
		setTheme(newTheme);
		fadeInAnimation();
	};

	const languages = {
		en: enLang,
		es: esLang,
	};

	const state = {
		setActiveBtn,
		activeBtn,
		locale,
		defaultTheme,
		setLanguage,
		changeTheme,
		language: languages[locale],
	};

	return <appContext.Provider value={state}>{children}</appContext.Provider>;
}