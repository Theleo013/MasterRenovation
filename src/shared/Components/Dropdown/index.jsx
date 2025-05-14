import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Styles from "@/shared/Components/Dropdown/dropdown.module.scss";

const Dropdown = () => {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    sessionStorage.getItem("language") || i18n.language || "az"
  );

  useEffect(() => {
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  const handleChange = (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    sessionStorage.setItem("language", lang);
    window.location.reload();
  };

  return (
    <div className={Styles.dropdownContainer}>
      <label className={Styles.label} htmlFor="language-dropdown">
        {t("Language")}:
      </label>
      <select
        id="language-dropdown"
        className={Styles.languageDropdown}
        value={selectedLanguage}
        onChange={handleChange}
      >
        <option value="az">Az</option>
        <option value="en">En</option>
        <option value="ru">Ru</option>
      </select>
    </div>
  );
};

export default Dropdown;
