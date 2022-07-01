import React, { useContext } from "react";
// import { techStack } from "../constants";
import heroBg from "../assets/myImage.png";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { contactLinks } from "../constants";



const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div className="flex" style={{width:"100%"}}>
       
          <div>
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
            // className="md:w-6/3 hidden sm:block"
            style={
           
              {height:"90%",
              width:"150%",
              borderRadius:"100%",
            margin:"3px",
            marginRight:"90px"
          }
              
            }
          />
          </div>
          <div>
   <motion.div>
          
          <p
            className={
              darkMode
                ? "mt-4 text-xl text-justify text-gray-500"
                : "mt-4 text-xl text-justify text-white"
            }
          >
            {/* Observant and detail-oriented aspiring full-stack developer with a specialization in MERN stack. Self-motivated and curious, with a keen interest in building user-centric products. Looking forward to hone my skills in a challenging work environment. */}
            Hi, My name is Praful Tandekar, I have completed my Engineering from Sagar Institute of Research and Technology, Bhopal  in Mechanical Enginnering and I have worked in  Minda corporation Pvt Ltd as a Qulity Assurance. I am a self-learner, curious and enthusiastic in learning new things. Curiosity is what makes a person think different. I think learning even a small thing as it seem can make a difference.
            Take a look at some projects I built on Github or check my resume.
          </p>

          <ul className="flex">
              {contactLinks.map((el) => (
                <div>
                <a target={"_blank"} rel="noreferrer"
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                  <p className="text-md mt-2 hover:hidden">{el.name}</p>
                </a>
                </div>
              ))}
            </ul>
        </motion.div>
         
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
