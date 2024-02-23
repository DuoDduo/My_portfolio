
import "./Home.css";
import { CloudArrowDown} from "@phosphor-icons/react";


const Home = ()=>{
  return (
    <div className="home p-10 mx-20 my-[15%] top-[20%]">
   
    <div className="flex flex-col sm:flex-row items-center justify-between ">
     
      <div className="text-white mb-8 sm:mb-0">
      
         <h2 className= "text-lg sm:text-[2.5rem] md:text-[3.5rem] font-bold mb-4"><span className = "text-[#808080] sm:text-[2.5rem] md:text-[3.5rem] font-bold">I'm </span>Blessing James</h2>
          <br />
          <p className="md:text-[1.2rem] mb-8 color text-[#808080]">   A Software Engineer, Graphics designer and UI/UX designer passionate
          about crafting meaningful digital experiences through code and
          design. I specialize in designing and building modern mobile and
          web-based apps.</p>
         <button className="btn px-[20%] py-6 flex items-center gap-5 justify-items-start">
         <CloudArrowDown size={32}/>
             <p>Download CV</p>
         </button>

        {/* <div className="flex flex-wrap gap-10">
          
          <button className="btn px-12 py-6 rounded-lg transition-colors duration-300 flex items-center gap-5" >
          <CloudArrowDown size={32}/>
             Download CV
          </button>
        </div> */}
      </div>

      <div className="mt-4 sm:mt-0 md:mx-0">
        <img
          src="../src/assets/images/blessing.jpeg"
        
          alt="Blessing James portrait"
        
          className="w-[100%] h-[100%] object-cover rounded-full"
        />
      </div>
    </div>
  </div>
);

}

export default Home;


