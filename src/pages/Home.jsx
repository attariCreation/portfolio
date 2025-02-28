import React from "react";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div
      className="dark:bg-[var(--dark-bg-main)] bg-[var(--bg-main)] dark:text-[var(--dark-text-primary)] 
    text-[var(--text-primary)] h-full"
    >
      <Hero />
    </div>
  );
};

export default Home;
