import React from 'react';

import ThemeProvider from './components/ThemeProvider';

export default ({ element }: any) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
