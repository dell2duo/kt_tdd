import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Routes from './navigation/Routes';
import { theme } from './shared/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
