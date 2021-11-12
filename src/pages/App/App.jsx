import React,{useState,useEffect} from 'react';
import style from './App.module.scss';
import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";
import { IntlProvider } from "react-intl";
import { _getFileFromPublicFolder } from '../../utils/_Api';

function App({ language }) {
  
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
        <>
            <header>header</header>
            <div>Hello</div>
            <footer>footer</footer>
        </>
      </DirectionProvider>
    </IntlProvider>
  );
}

export default App;
