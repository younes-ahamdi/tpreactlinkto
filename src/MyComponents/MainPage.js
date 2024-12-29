import { useContext } from 'react';
import { AppContext, AppProvider } from './AppContext';
import NavBar from './NavBar';

const MainContent = () => {
  const { isDarkTheme, toggleTheme, language, changeLanguage, t } = useContext(AppContext);

  return (
    <div className={`min-vh-100 ${isDarkTheme ? 'bg-dark' : 'bg-light'}`}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className={`card ${isDarkTheme ? 'bg-dark text-light border-secondary' : 'bg-white'}`}>
              {/* Settings Bar */}
              <div className="card-header border-0 bg-transparent d-flex justify-content-end gap-2 pt-3 px-3">
                {/* Language Selector */}
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    {language.toUpperCase()}
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>English</button></li>
                    <li><button className="dropdown-item" onClick={() => changeLanguage('fr')}>Français</button></li>
                    <li><button className="dropdown-item" onClick={() => changeLanguage('ar')}>العربية</button></li>
                  </ul>
                </div>
                {/* Theme Toggle */}
                <button 
                  className={`btn ${isDarkTheme ? 'btn-light' : 'btn-dark'}`}
                  onClick={toggleTheme}
                >
                  {t('themeSwitch')}
                </button>
              </div>
              
              {/* Cover Image */}
              <div className="upper">
                <img 
                  src="profile2.JPG" 
                  className="img-fluid w-100" 
                  style={{ height: '150px', objectFit: 'cover' }} 
                  alt="cover"
                />
              </div>
              
              {/* Profile Section */}
              <div className="user text-center position-relative">
                <div className="profile" style={{ marginTop: '-45px' }}>
                  <img 
                    src="profile.JPG" 
                    className="rounded-circle border border-4 border-white" 
                    width="90" 
                    height="90"
                    alt="profile"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              {/* User Info */}
              <div className="mt-3 text-center">
                <h4 className="mb-0">Younes Ahamdi</h4>
                <span className={`d-block mb-2 ${isDarkTheme ? 'text-light-50' : 'text-muted'}`}>
                  {t('location')}
                </span>
                <button className="btn btn-primary btn-sm px-4 rounded-pill">
                  {t('follow')}
                </button>
                
                {/* Stats */}
                <div className={`
                  d-flex justify-content-between align-items-center mt-4 px-4 pb-4
                  ${isDarkTheme ? 'text-light' : ''}
                `}>
                  <div className="stats text-center">
                    <h6 className="mb-1" style={language === "ar"?{textAlign:"right"} : {textAlign: "left"}} >{t('followers')}</h6>
                    <span className={isDarkTheme ? 'text-light-50' : 'text-muted'}></span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;