import { useRouter } from 'next/router';
import { translations } from '../locales/translations';

export const useTranslation = () => {
  const router = useRouter();
  const { locale } = router;
  const currentLocale = locale || 'en';

  // Translation function
  const t = (key, namespace) => {
    // If no namespace provided, try to get it from the key
    if (!namespace) {
      // For keys like 'company.name', 'navigation.home', etc.
      const keyParts = key.split('.');
      if (keyParts.length > 1) {
        const firstPart = keyParts[0];
        // Check if the first part is a valid namespace
        if (translations[currentLocale] && translations[currentLocale][firstPart]) {
          namespace = firstPart;
          key = keyParts.slice(1).join('.');
        }
      }
    }

    // Get the translation object for current locale
    const localeTranslations = translations[currentLocale];
    if (!localeTranslations) {
      return key;
    }

    // If namespace is provided, look there first
    if (namespace && localeTranslations[namespace]) {
      const keys = key.split('.');
      let value = localeTranslations[namespace];
      
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k];
        } else {
          break;
        }
      }
      
      if (value && typeof value === 'string') {
        return value;
      }
    }

    // If not found in namespace, try to find in the whole translation object
    const keys = key.split('.');
    let value = localeTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };

  // Change language function
  const changeLanguage = (newLocale) => {
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return {
    t,
    locale: currentLocale,
    changeLanguage,
    isLoading: false,
    isRTL: currentLocale === 'ar'
  };
};

export default useTranslation;
