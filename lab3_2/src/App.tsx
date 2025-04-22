import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleReset = () => {
    setClicks(0);
  };

  const handleLanguageSwitch = (language: string) => {
    i18n.changeLanguage(language);
  };

  const getCounterText = (count: number) => {
    if (i18n.language === 'ru') {
      if (count === 1) {
        return t('counter', { count });
      } else if (count >= 2 && count <= 4) {
        return t('counter_plural_2_4', { count });
      } else {
        return t('counter_plural', { count });
      }
    } else {
      if (count === 1) {
        return t('counter', { count });
      } else {
        return t('counter_plural', { count });
      }
    }
  };

  return (
    <div className="container">
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn mb-3 btn-primary"
          data-testid="en"
          onClick={() => handleLanguageSwitch('en')}
        >
          {t('language_switcher.en')}
        </button>
        <button
          type="button"
          className="btn mb-3 btn-outline-primary"
          data-testid="ru"
          onClick={() => handleLanguageSwitch('ru')}
        >
          {t('language_switcher.ru')}
        </button>
      </div>

      <button
        type="button"
        className="btn btn-info mb-3 align-self-center"
        data-testid="counter"
        onClick={handleClick}
      >
        {getCounterText(clicks)}
      </button>

      <button
        type="button"
        className="btn btn-warning"
        data-testid="reset"
        onClick={handleReset}
      >
        {t('reset')}
      </button>
    </div>
  );
};

export default App;
