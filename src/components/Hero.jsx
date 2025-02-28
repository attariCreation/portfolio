import avatar from "../assets/avatar.jpg";
import {motion} from "framer-motion"
const Main = () => {
  const headline = "Building Modern & Scalable Web Solutions"
  const letters = headline.split("")
  return (
    <main className="w-full flex justify-center text-center items-center flex-col  gap-10 px-20 py-15 ">
      <div id="left" className=" flex-6">
        <h2 className="font-[var(--font-montserrat)]  text-[3rem] font-black  ">
          {/* Building{" "}
          <span className="text-[var(--dark-text-heading)]">
            Modern & Scalable <br /> Web Solutions{" "}
          </span> */}

          {letters.map((letter, index) => (<motion.p
          initial={{filter:"blur(10px)" , opacity:0,  y:12}}
          animate={{filter:"blur(0)" , opacity:1,  y:0}}
          transition={{duration:0.1, delay:0.1 * index}}
           key={index}
           className=" inline-block">
            {letter === " " ? "\u00a0" : letter }</motion.p>))}
        </h2>
        <h3 className="text-2xl mt-5">
          Hi, I am
          <motion.span className="text-[var(--dark-text-heading)] font-bold tracking-wide font-DMMono mx-3 inline-block bg-[var(--dark-bg-secondary)]  p-3 "
           initial={{ filter: "blur(2px)", opacity:0.5 }}
           whileHover={{ filter: "blur(0)", opacity: 1}}
          transition={{duration: 0.3 , delay:0.1}}
           >
            
            [ Abdul Hannan ]
          </motion.span>{" "}
          <br />
          <p className="leading-7 font-poppins text-lg my-5">
          A passionate web developer with experience in front-end .
          <span>
              I love building user-friendly, high-performance websites and
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
