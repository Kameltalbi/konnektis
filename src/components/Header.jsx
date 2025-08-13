import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const linkClass = ({ isActive }) =>
    `px-3 py-2 font-semibold ${
      isActive
        ? "text-blue-600 font-bold"
        : "text-gray-600 hover:text-gray-900"
    }`;

  return (
    <header className="border-b bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Logo */}
        <div className="h-12 cursor-pointer">
          <img 
            src="/src/assets/logo connectis nv.png" 
            alt="Konnektis Logo" 
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/" className={linkClass}>{t('navigation.home')}</NavLink>
          <NavLink to="/features" className={linkClass}>{t('navigation.features')}</NavLink>
          <NavLink to="/pricing" className={linkClass}>{t('navigation.pricing')}</NavLink>
          <NavLink to="/about" className={linkClass}>{t('navigation.about')}</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* CTA Button and Language Switcher */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 rounded-lg transition-all duration-300 hover:shadow-md group"
            >
              {/* Flag Icon */}
              <div className="w-5 h-5 rounded-full overflow-hidden border-2 border-white shadow-sm">
                {i18n.language === 'en' ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">EN</span>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FR</span>
                  </div>
                )}
              </div>
              
              {/* Language Text */}
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                {i18n.language === 'en' ? 'English' : 'Français'}
              </span>
              
              {/* Dropdown Arrow */}
              <svg 
                className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-transform duration-200 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Language Options Dropdown */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center gap-3 ${
                    i18n.language === 'en' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">EN</span>
                  </div>
                  <div>
                    <div className="font-medium">English</div>
                    <div className="text-xs text-gray-500">English</div>
                  </div>
                  {i18n.language === 'en' && (
                    <svg className="w-4 h-4 text-blue-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center gap-3 ${
                    i18n.language === 'fr' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FR</span>
                  </div>
                  <div>
                    <div className="font-medium">Français</div>
                    <div className="text-xs text-gray-500">French</div>
                  </div>
                  {i18n.language === 'fr' && (
                    <svg className="w-4 h-4 text-blue-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <NavLink
            to="/auth"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('navigation.getStarted')}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
