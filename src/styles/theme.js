import React from 'react';
import { ThemeProvider } from 'styled-components';
import media from './media';

const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      fonts: {},
      colors: {
        primaryGreen: 'green',
        primaryBlue: 'pink',
        offBlue: 'lightblue'
      },
      ...media
    }}
  >
    {children}
  </ThemeProvider>
);

export default Theme;
