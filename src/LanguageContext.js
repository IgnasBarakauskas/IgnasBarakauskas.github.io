import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

import en from "./locales/translations.en.json";
import fr from "./locales/translations.fr.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [lang, setLang] = useState(localStorage.getItem("lang") || navigator.language);
	const changeLanguage = useCallback((newLang) => {
		setLang(newLang);
		localStorage.setItem("lang", newLang);
		document.documentElement.lang = newLang;
	}, []);

	const translate = useCallback(
		(key) => {
			let currentTranslation = en;
			if (lang.includes("fr")) {
				currentTranslation = fr;
			}
			const value = currentTranslation[key];
			return value ?? key;
		},
		[lang]
	);

	const valueMemo = useMemo(() => ({ lang, changeLanguage, translate }), [lang, changeLanguage, translate]);

	return <LanguageContext.Provider value={valueMemo}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
