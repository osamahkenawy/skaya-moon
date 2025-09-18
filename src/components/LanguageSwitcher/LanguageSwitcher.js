import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Dropdown } from 'react-bootstrap';
import useTranslation from '../../hooks/useTranslation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t, locale, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <Dropdown show={isOpen} onToggle={setIsOpen}>
        <Dropdown.Toggle
          variant="link"
          id="language-dropdown"
          className="language-toggle d-flex align-items-center text-decoration-none"
        >
          <span className="flag me-2">{currentLanguage.flag}</span>
          <span className="lang-text">{currentLanguage.name}</span>
          <i className={`fa fa-chevron-down ms-2 ${isOpen ? 'rotated' : ''}`}></i>
        </Dropdown.Toggle>

        <Dropdown.Menu className="language-menu">
          {languages.map((language) => (
            <Dropdown.Item
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`language-item ${locale === language.code ? 'active' : ''}`}
            >
              <span className="flag me-2">{language.flag}</span>
              <span>{language.name}</span>
              {locale === language.code && (
                <i className="fa fa-check ms-auto text-primary"></i>
              )}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <style jsx>{`
        .language-switcher {
          position: relative;
        }

        .language-toggle {
          color: #ffffff !important;
          padding: 8px 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          font-size: 14px;
          min-width: 120px;
        }

        .language-toggle:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .language-toggle:focus {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);
        }

        .flag {
          font-size: 16px;
        }

        .lang-text {
          font-weight: 500;
        }

        .fa-chevron-down {
          font-size: 12px;
          transition: transform 0.3s ease;
        }

        .fa-chevron-down.rotated {
          transform: rotate(180deg);
        }

        :global(.language-menu) {
          border: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          padding: 8px 0;
          min-width: 150px;
          margin-top: 8px;
        }

        :global(.language-item) {
          padding: 10px 16px;
          display: flex;
          align-items: center;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        :global(.language-item:hover) {
          background-color: #f8f9fa;
        }

        :global(.language-item.active) {
          background-color: #e3f2fd;
          color: #1976d2;
          font-weight: 500;
        }

        :global(.language-item.active:hover) {
          background-color: #e3f2fd;
        }

        /* RTL Support */
        :global([dir="rtl"]) .language-toggle {
          direction: ltr;
        }

        :global([dir="rtl"]) .flag {
          margin-left: 8px;
          margin-right: 0;
        }

        :global([dir="rtl"]) .fa-chevron-down {
          margin-right: 8px;
          margin-left: 0;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
