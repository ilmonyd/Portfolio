import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const currentLocale = Cookies.get('i18next') || 'en';

export default function LanguageSwitch() {
  const [language, setLanguage] = useState(currentLocale);
  const { i18n } = useTranslation();

  const handleChangeLocale = () => {
    const lang = language === 'en' ? 'pl' : 'en';
    setLanguage(lang);
    i18n.changeLanguage(lang);
    document.getElementById('switch').innerHTML = language.toUpperCase();
  };

  return (
    <div className="lang-switch">
      <a id="switch" href={'#'.concat(language)} onClick={handleChangeLocale}>
        {language.toUpperCase()}
      </a>
    </div>
  );
}
