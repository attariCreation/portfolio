import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeToggleProvider } from "./context/themeToggle";
import Header from './components/Header'
const App = () => {
  // const [themeMode, setThemeMode] = useState('dark');

  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : "dark"
  })
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");

  };
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    console.log("themes ", themeMode, currentTheme);
    setThemeMode(currentTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
    

    console.log("themes " , themeMode )
    localStorage.setItem("theme", themeMode);
    console.log(localStorage.getItem('theme'))
  }, [themeMode]);

  return (
    <BrowserRouter>
      <ThemeToggleProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="w-full h-screen">
          < Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ThemeToggleProvider>
    </BrowserRouter>
  );
};

export default App;
