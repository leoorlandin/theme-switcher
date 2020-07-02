import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState'

import GlobalStyles from './styles/global'
import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';


function App() {

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
