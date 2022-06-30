import React, { useState, createContext, useEffect } from 'react';
import { setTheme, getTheme, fadeInAnimation } from '/src/helpers';
import { enLang, esLang } from '/src/locales';

export const appContext = createContext();

export function ContextProvider({ children }) {
	// Modal de footer
	const [modalText, setModalText] = useState(false)
	const [showModal, setShowModal] = useState(false)
	// const [showModal, setShowModal] = useState('Thanks for your submission!')

	// Tema por defecto
	const [defaultTheme, setDefaultTheme] = useState(getTheme());

	// Funcion de btnBurger
	const [activeBtn, setActiveBtn] = useState(false)

	// custom useState para el lenguaje por defecto
	const defaultLang = localStorage.getItem('lang');
	const setDefaultLang = lang => localStorage.setItem('lang', lang);

	const [locale, setLocale] = useState(defaultLang || 'en');

	useEffect(() => !defaultLang && setDefaultLang('en'), []);

	//Cambio de idioma
	const setLanguage = language => {
		setLocale(language);

		setDefaultLang(language);
	};

	//Cambio de tema
	const changeTheme = () => {
		const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
		setDefaultTheme(newTheme);
		setTheme(newTheme);
		fadeInAnimation();
	};

	//Todos los textos con sus traducciones
	const languages = {
		en: enLang,
		es: esLang,
	};

	// global states
	const initialState = {
		modalText,
		showModal,
		activeBtn,
		locale,
		defaultTheme,
		language: languages[locale],
	};

	const setStates = () => {
		return {
			setModalText,
			setShowModal,
			setActiveBtn,
			setLanguage,
		}
	}

	const state = {
		...initialState,
		effects: {
			...setStates(),
			changeTheme,
		},
	}

	return <appContext.Provider value={state}>{children}</appContext.Provider>;
}