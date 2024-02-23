import { ArrowCircleRight} from "@phosphor-icons/react";
const Projects = () => {
  
    const projects = [
      {
        title: "Abby's Kitchen",
        description:
          "A very dynamic kitchen website where you can find various food items and their recipes.",
        image: "../src/assets/images/projects/abby.png",
        url: "https://duodduo.github.io/abby/",
      },
      {
        title: "Finendar",
        description:
          "This project is a web and mobile application that allows users to create custom quizzes.",
        image: "../src/assets/images/projects/finendar.png",
        url: "https://finendar.com",
      },
      {
        title: "Chimjoy",
        description:
          "A social media app that connects people who love chimps and want to adopt them.",
        image: "../src/assets/images/projects/chimjoy.png",
        url: "https://duodduo.github.io/Chimjoy-Project/",
      },
      {
        title: "StreamEase",
        description:
          "A streaming service that lets you watch movies and shows from different platforms in one place.",
        image: "../src/assets/images/projects/stream.png",
        url: "https://streamease.com",
      },
      {
        title: "Anchor Port",
        description:
          "A social media app that connects people who love chimps and want to adopt them.",
        image: "../src/assets/images/projects/anchor.png",
        url: "https://duodduo.github.io/Chimjoy-Project/",
      },
      {
        title: "Faith Explorers",
        description:
          "A streaming service that lets you watch movies and shows from different platforms in one place.",
        image: "../src/assets/images/projects/faith.png",
        url: "https://streamease.com",
      },
    ];
  
    return (
      <div className="container mx-20 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        
          {projects.map((project, index) => (
            <div key={index} className="btn text-white p-4 rounded-lg">
                 <h3 className="text-xl mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-2"
              />
              <a
                href={project.url} target="_blank" className="flex items-center text-white px-8 py-2 cursor-pointer">
                <ArrowCircleRight size={32} />
                View Site
              </a>
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
  };
  
  export default Projects;