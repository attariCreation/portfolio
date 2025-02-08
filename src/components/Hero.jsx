import React, { useState } from "react";
import avatar from "../assets/avatar.jpg";
const Main = () => {
  const [name, setName] = useState("Abdul Hannan");
  return (
    <main className="w-full flex justify-around items-center sm:flex-row gap-10 px-20 py-15 ">
      <div id="left" className=" flex-6">
        <h2 className="font-[var(--font-montserrat)] text-[3rem] font-bold  ">
          Building{" "}
          <span className="text-[var(--dark-text-heading)]">
            Modern & Scalable <br /> Web Solutions{" "}
          </span>
        </h2>
        <h3 className="text-2xl">
          Hi, I'm
          <span className="text-[var(--dark-text-heading)] font-bold tracking-wide font-DMMono mx-3 inline-block bg-[var(--dark-bg-secondary)]  p-3 ">
            
            [ Abdul Hannan ]
          </span>{" "}
          <br />
          <p className="leading-[35px] font-poppins">
          A passionate web developer with experience in front-end .
          <span>
            {""}I love building user-friendly, high-performance websites and
            applications that solve real-world problems and create dynamic,
            responsive, and scalable web applications.
          </span>
          </p>
        </h3>
      </div>
      <div id="right" className="flex-8 max-w-[25vw] ">
        <img src={avatar} alt="" />
      </div>
    </main>
  );
};

export default Main;
