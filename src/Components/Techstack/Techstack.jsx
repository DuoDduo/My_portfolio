import { ArrowCircleRight} from "@phosphor-icons/react";
const Techstack = ()=>{
    const devToolsData = [
        {
          name: "React",
          logo: "../src/assets/images/techstack/React.png"
        },
        {
          name: "Figma",
          logo: "../src/assets/images/techstack/Figma.png",

        },
        {
          name: "Github",
          logo: "../src/assets/images/techstack/Github.png"
        },
        {
          name: "Java",
          logo: "../src/assets/images/techstack/java.png"
        },
        {
          name: "Python",
          logo: "../src/assets/images/techstack/python.png"

        },
        {
          name: "Javascript",
          logo: "../src/assets/images/techstack/javascript.png"

        },
        {
          name: "Flutter",
          logo: "../src/assets/images/techstack/flutter.png"
        },
        {
          name: "C#",
          logo: "../src/assets/images/techstack/Csharp.png"

        },
        {
          name: "HTML5",
          logo: "../src/assets/images/techstack/html.png"
        },
        {
          name: "Adobe Photoshop",
          logo: "../src/assets/images/techstack/photoshop.png"
        },
        {
          name: "Adobe Illustrator",
          logo: "../src/assets/images/techstack/illustrator.png"

        },
        {
          name: "CSS",
          logo: "../src/assets/images/techstack/css.png"
        },
        {
            name: "Adobe Photoshop",
            logo: "../src/assets/images/techstack/photoshop.png"
          },
          {
            name: "Adobe Illustrator",
            logo: "../src/assets/images/techstack/illustrator.png"
  
          },
          {
            name: "CSS",
            logo: "../src/assets/images/techstack/css.png"
          },
      ];
    
      return (
        <div className="p-4 md:p-8 lg:p-16 mx-20">
        <h2 className="text-[1rem] sm:text-[2rem] md:text-[3rem] font-bold">
         TechStack
        </h2>
        <h1 className="color text-[#808080] mb-4">
        The dev tools I use
        </h1>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 md:gap-4 lg:gap-8 p-4">

          {devToolsData.map((tool, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg text-white flex flex-col items-center justify-center btn`}
            >
              <img src={tool.logo} alt={tool.name} className="w-20 h-20" />
              <h3 className="text-lg md:text-l  mt-4">{tool.name}</h3>
            </div>
          ))}
        </div>
          <div className="flex justify-center items-center mt-4">
            
            <button className="btn px-14 py-6 flex items-center gap-5 text-lg md:text-l justify-center ">
            <ArrowCircleRight size={32} />
            View More
          </button>
          </div>
        </div>
      );
    
}
export default Techstack;