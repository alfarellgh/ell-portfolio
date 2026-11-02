import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ID");

  const t = (key) => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};