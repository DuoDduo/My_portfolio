const Skills= ()=> {
   
  const skillData = [
    {
      title: "Web Development",
      description:
        "I specialize in crafting dynamic and interactive websites and web applications. Leveraging my proficiency in HTML, CSS, and JavaScript, I excel in front-end development, ensuring a seamless and engaging user experience. My expertise extends to utilizing popular frameworks and libraries to enhance the visual appeal and functionality of websites.",
    },
    {
      title: "Mobile Development",
      description:
        "I focus on creating applications for mobile devices such as smartphones and tablets. using cross-platform framework like Flutter that allow me to build applications that work on both iOS and Android platforms."
    },
    {
      title: "UI/UX Design",
      description:
        "I create a positive user experience  focusing on the visual elements of a product, including layout, color schemes, and typography, to ensure an attractive and user-friendly interface. I understand user behavior and create designs that enhance the overall user experience, considering factors like usability, accessibility, and user satisfaction."
    },
    {
      title: "Graphics Design",
      description:
        "I create visual content for various purposes, such as branding, marketing, and digital media. I use tools like Adobe Photoshop, Illustrator, and other design software to create visually appealing elements, including logos, brochures, posters, and digital assets. I pay attention to detail, creativity, and have  a good understanding of design principles.",
    },
  ];


  return (

    <div className="p-4 md:p-8 lg:p-16 mx-[2vw]">
      <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold">
      Skills
      </h2>
      <h1 className="color text-[#808080] mb-4">What I can do with my skills.</h1>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-8 md:gap-4 lg:gap-12 p-4">
       
        {skillData.map((skill, index) => (
       
          <div key={index} className="p-6 rounded btn text-white">
              <h3 className="text-lg md:text-2xl font-bold px-4">{skill.title}</h3>
              <p className="text-sm md:text-base mt-2 px-4 color text-[#808080]">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

  
  
  export default Skills;