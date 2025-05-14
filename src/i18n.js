import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationAZ from "@/locales/az/translation.json";
import translationEN from "@/locales/en/translation.json";
import translationRU from "@/locales/ru/translation.json";

const resources = {
  az: { translation: translationAZ },
  en: { translation: translationEN },
  ru: { translation: translationRU },
};

const storedLang = localStorage.getItem("lang") || "az";
i18n.use(initReactI18next).init({
  resources,
  lng: storedLang,
  fallbackLng: ["az", "en", "ru"],
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
