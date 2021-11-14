import React,{useState,useEffect, useContext} from 'react';
import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";
import { IntlProvider } from "react-intl";
import { _getFileFromPublicFolder } from '../../utils/_Api';
import { Header } from '../../components/Header/Header';
import { BrowserRouter as Router} from 'react-router-dom'
import  Routers from '../../Routers';
import { MoviesContext } from '../../context/MoviesContext';
import { Footer } from '../../components/Footer/Footer';
function App() {
  const{language} = useContext(MoviesContext);
  const [message, setMessage] = useState({});
  
  useEffect(() => {
    document.title = "Fix Movies";
  }, []);



  useEffect(() => {
    switch (language) {
      case "en":
        _getFileFromPublicFolder("/localization/en.json").then((lang) => {
          setMessage({ en: lang });
        });
        break;
      case "ar":
        _getFileFromPublicFolder("/localization/ar.json").then((lang) => {
          setMessage({ ar: lang });
        });
        break;
      default:
        break;
    }
  }, [language]);

  const dire = language === "ar" ? DIRECTIONS.RTL : DIRECTIONS.LTR;
  return (
    <IntlProvider locale="en" defaultLocale="en" messages={message[language]}>
      <DirectionProvider direction={dire}>
      <Router>
               <Header/>
               <Routers/>
               <Footer/>
        </Router>
      </DirectionProvider>
    </IntlProvider>
  );
}

export default App;
