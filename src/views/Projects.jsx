import React, { useContext } from "react";
// import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { ProjectsData } from "../constants";
import { motion } from "framer-motion";
// import { techStack } from "../constants";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        {/* flex flex-wrap mt-8 flex flex-wrap justify-between  */}
        <div className="" style={{
          display:"grid",
         gridTemplateColumns: '1fr 1fr 1fr',
         justifyContent:"space-between",
        }}>
            {ProjectsData.map((el) => (
              <motion.div
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
              // md:w-48 w-40
              className="py-2 px-4 bg-gray-100 md:m-2 mx-2 mt-3 rounded-lg  items-center hover:scale-125 cursor-pointer "
            >
              <img alt="" src={el.img} className="w-12" style={{width:"100%", border:"1px solid green" }} />
              <h4 className=" ml-4" style={{color:"yellowgreen", fontWeight:"bold", textAlign:"center", fontSize:"28px"}}>{el.name}</h4>
              <p>{el.desc}</p>
              <div style={{
               display:"flex",
               gridGap:"10px",
               paddingLeft:"4%",
               alignItems:"center"
              }}>
                <button className=" bg-blue-700  py-2 px-4 md:m-2 mx-2 mt-3 rounded-lg   hover:scale-125 cursor-pointer" >{<a href={el.code} target="_blank" rel="noreferrer">Code </a> }</button>
                <button className=" bg-blue-700   py-2 px-4 md:m-2 mx-2 mt-3 rounded-lg   hover:scale-125 cursor-pointer " > {<a href={el.demo}  target="_blank" rel="noreferrer" >Demo </a> }</button> 
                {/* py-2 px-4 md:m-2 mx-2 mt-3 rounded-lg   hover:scale-125 cursor-pointer */}
              </div>
              </motion.div>
            ))}

            
          </div>
      </div>
    </div>
  );
};

export default Projects;
