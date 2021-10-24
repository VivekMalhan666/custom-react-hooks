import React from 'react';
import SideBar from '../components/SideBar';
import useTranslations from './useTranslations';

function TranslationComponent() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslations
  ()

  return (
    <div>
      <SideBar />
      <div>{language}</div>
      <div>{t('hi')}</div>
      <div>{t('bye')}</div>
      <div>{t('nested.value')}</div>
      <button type="text" onClick={() => setLanguage('esp')}>
        Change to Spanish
      </button>
      <button type="text" onClick={() => setLanguage('en')}>
        Change to English
      </button>
      <button type="text" onClick={() => setFallbackLanguage('esp')}>
        Change Fallback to Spanish
      </button>
    </div>
  );
}

export default TranslationComponent;
