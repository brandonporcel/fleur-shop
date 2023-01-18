import { createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	<ThemeProvider.Provider>{children}</ThemeProvider.Provider>;
};
