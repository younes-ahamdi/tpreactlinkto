import { createContext, useState } from 'react';

export const AppContext = createContext();

const translations = {
  en: {
    title: 'My Profile',
    location: 'Tangier',
    followers: 'My name is Younes Ahamdi i have 23 years old, a passionate and dynamic developer specializing in IT development. With a foundation in programming languages like Python, JavaScript, ReactJS, and PHP, I have expertise in building applications and managing databases using MySQL. I value teamwork, creativity, and continuous learning.',
    follow: 'Follow',
    settings: 'Settings',
    themeSwitch: 'Switch Theme'
  },
  fr: {
    title: 'Mon Profil',
    location: 'Tanger',
    followers: 'Je m’appelle Younes Ahamdi et j’ai 23 ans, un développeur passionné et dynamique spécialisé dans le développement informatique. Avec une base dans les langages de programmation comme Python, JavaScript, ReactJS et PHP, j’ai une expertise en construction d’applications et gestion de bases de données utilisant MySQL. J’apprécie le travail d’équipe, la créativité et l’apprentissage continu.',
    follow: 'Suivre',
    settings: 'Paramètres',
    themeSwitch: 'Changer le thème'
  },
  ar: {
    title: 'ملفي الشخصي',
    location: 'طنجة',
    followers: 'اسمي يونس أحمدي وعمري 23 عامًا، مطور شغوف وديناميكي متخصص في تطوير الكمبيوتر. مع خلفية في لغات البرمجة مثل Python و JavaScript و ReactJS و PHP، لدي خبرة في بناء التطبيقات وإدارة قواعد البيانات باستخدام MySQL. أنا أستمتع بالعمل الجماعي والإبداع والتعلم المستمر.',
    follow: 'متابعة',
    settings: 'إعدادات',
    themeSwitch: 'تغيير المظهر'
  }
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const changeLanguage = (lang) => setLanguage(lang);
  const t = (key) => translations[language][key];

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleTheme, language, changeLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </AppContext.Provider>
  );
};
