import { createContext, useState } from 'react';
import React from 'react';

export const themeContext = createContext();

function ThemeContext({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem('darkMode'))
  );

  return (
    <themeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContext;
