import { ArrowCircleRight} from "@phosphor-icons/react";
const Projects = () => {
    // Define an array of objects to store the projects data
    const projects = [
      {
        title: "Abby's Kitchen",
        description:
          "A very dynamic kitchen website where you can find various food items and their recipes.",
        image: "../src/assets/images/projects/abby.png",
        url: "https://duodduo.github.io/abby/", // Add the url property for each project
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
    ];
  
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Map over the projects data and render each project with the image, title, description, and button */}
          {projects.map((project, index) => (
            <div key={index} className="btn text-white p-4 rounded-lg">
                 <h3 className="text-xl mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-2"
              />
             
              {/* Use the url property to create an anchor tag for each button */}
              <a
                href={project.url}
                target="_blank"
                className=" text-white px-8 py-2 cursor-pointer"
              >
                  <ArrowCircleRight size={32} />
                View Site
              
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center mt-4">
          <a
            href=""
            className="text-lg md:text-xl font-bold text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            View More
          </a>
          <ion-icon
            name="arrow-forward-outline"
            className="text-lg md:text-xl text-gray-700 hover:text-gray-900 transition-colors duration-300 ml-2"
          ></ion-icon>
        </div>
      </div>
    );
  };
  
  export default Projects;