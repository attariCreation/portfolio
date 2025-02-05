import react, {createContext, useContext} from 'react';
export const themeToggleContext = createContext({
    themeMode: 'dark',
    darkTheme: () => {}, 
    lightTheme: () => {}
});

export const ThemeToggleProvider = themeToggleContext.Provider

export default function useThemeToggle(){
    return useContext(themeToggleContext)
}