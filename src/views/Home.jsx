import React, { useContext } from "react";
import heroBg from "../assets/myImage.png";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";


const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
       
        style={
          darkMode
            ? { backgroundColor:"#D9C1C1", backgroundSize: "cover" }
            : {  backgroundColor:"#1A1A40", backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-center">
            <h3 className="text-4xl tracking-tight  text-gray-900 ">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                <span className="font-extrabold sm:text-5xl md:text-6xl ">Hi, I am Praful Tandekar</span>
                
              </motion.span>
              <span className="block text-blue-500 z-0 sm:inline" >
                <Typical
                  steps={[
                    "A Software Developer",
                    1000,
                    " A Full Stack Developer",
                    1000,
                    "A Problem Solver",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h3>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a Full-Stack Developer (MERN). I’m currently pursuing Full Stack WebDevelopment Course at Masai School.
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125 "
                >
                  {/* <img alt="" src={el.url} /> */}
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/3 flrx">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700  hover:bg-blue-200 md:py-4 md:text-lg md:px-10" >
                 {
                    <a target={"_blank"} rel="noreferrer"  href="https://docs.google.com/document/d/1AN45c_ZMOP80CnmSs5TDbAJAMMqqIL2ZDrKXLzmd1S8/edit?usp=sharing"> Resume</a>
                 } 
                </button>
               
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="md:w-2/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
