import {enLang} from './lang-en';
import {esLang} from './lang-es';

export const Singleton = (() => {
    const localLang = JSON.parse(localStorage.getItem('lang'));
    const language = localLang ? localLang.value : 'en';

	let instance;

	function createInstance() {
        const languages = {
            es: esLang,
            en: enLang,
        };

        return languages[language];
	};

	return {
		getInstance:() => instance ? instance : instance = createInstance()
	};
})();

export const locales = Singleton.getInstance();