import React, { useEffect } from "react";
import { MdNightsStay } from "react-icons/md";
import useThemeToggle from "../context/themeToggle";
const Button = () => {
  const { themeMode, darkTheme, lightTheme } = useThemeToggle();

  const setTheme = () => {
    {themeMode === 'dark' ? lightTheme() : darkTheme()}
  };
  return (
    <button
      id="mode"
      className="font-bold text-2xl p-2
            dark:bg-[var(--bg-main)] dark:hover:text-[var(--bg-secondary)]
            dark:hover:bg-[var(--text-heading)]/80 transition-all duration-200
            dark:text-[var(--text-heading)]
            bg-[var(--btn-primary)] text-white rounded-md border-2 border-[var(--border-custom)]
            hover:bg-[var(--btn-primary-hover)] hover:border-[var(--hover-border)]"
      onClick={setTheme}
    >
      <MdNightsStay />
    </button>
  );
};

export default Button;
