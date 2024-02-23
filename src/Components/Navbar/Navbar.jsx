import { useState } from "react";
// import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import { List} from "@phosphor-icons/react";




const Navbar = () => {
 
  let [open, setOpen] = useState(false); // This variable keeps track of the state of the navlinks
 
  return (
    <div>
    <nav className="nav mx-[7.5vw] lg:my-[1.3rem] top-5 lg:flex justify-between md:py-8 md:px-10 px-0 md:mt-10 items-center w-[85vw] nav ">
      <div className="flex justify-start items-center gap-3">
      <img src="../src/assets/images/DuoDduo logo.png" className="logo"></img>
      <h2 className="text-white md:text-[2vw] font-bold" >DuoDduo</h2>
      </div>
     
    <div className="flex justify-between">
      {/* Use the List component with the size attribute and the onClick function */}
      <List size={32} className="text-white text-3xl cursor-pointer md:hidden" onClick={()=> setOpen(!open)}></List>
    <ul className={`md:flex justify-evenly gap-8 font-semi-bold items-center cursor-pointer w-full md:w-auto md:pl-0 px-6 transition-all duration-[0.3] ease-in ${open ? 'block pb-5' : 'hidden'}`}>
        <li><a href="" className="text-white hover:text-gray-300 transition-colors duration-300">Home</a></li>
        <li><a href="" className="text-white hover:text-gray-300 transition-colors duration-300">About</a></li>
        <li><a href="" className="text-white hover:text-gray-300 transition-colors duration-300">Skills</a></li>
        <li><a href="" className="text-white hover:text-gray-300 transition-colors duration-300">Techstack</a></li>
        <li><a href="" className="text-white hover:text-gray-300 transition-colors duration-300">Projects</a></li>
        <li><a href="" className="text-white hover:text-gray-300 transition-colors duration-300">Contact</a></li>
      </ul>
    </div>
   
    </nav>
    </div>
  );
};

export default Navbar;