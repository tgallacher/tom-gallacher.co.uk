import React from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const { theme } = resolveConfig(tailwindConfig);

// eslint-disable-next-line react/jsx-props-no-spreading
const ThemeProvider = (props: any) => <StyledComponentThemeProvider {...props} theme={theme} />;

export default ThemeProvider;
