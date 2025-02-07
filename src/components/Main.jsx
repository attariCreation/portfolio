import React from "react";
import avatar from '../assets/avatar.jpg'
const Main = () => {
  return (
    <main className="h-screen w-full flex justify-around items-center gap-6 px-10">
        <div id="left" className="flex-3 ">
          <h2 className="font-[var(--font-montserrat)] text-[3rem] font-bold my-3 ">Building Modern & Scalable Web Solutions</h2>
          <h3 className="text-2xl">Hi, I'm [Abdul Hannan], a passionate web developer with experience in front-end . <span> I love building user-friendly, high-performance websites and applications that solve real-world problems and  create dynamic, responsive, and scalable web applications.</span></h3>


        </div>
        <div id="right" className="flex-2">
          <img src={avatar} alt=""  />
        </div>

    </main>
  );
};

export default Main;
