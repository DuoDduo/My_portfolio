import { ArrowCircleRight} from "@phosphor-icons/react";

const About = () => {
  return (
    <div className="">
      <div className="mx-[7vw]">
        <h1 className="md:text-[3.5rem] font-bold">About Me</h1>
        <h1 className="color text-[#808080] mb-4">
          Who I am and what I do.
        </h1>
      </div>
      <div className="mx-[6%] flex flex-wrap items-center justify-between align-middle">
        <div className="color text-[#808080] text-lg md:text-xl btn px-10 py-6 flex flex-wrap items-center justify-between w-full md:w-[40vw] gap-8">
          <div className="mb-4">
            <h2 className="color text-[#808080]-900 mb-2">WHO I AM</h2>

            <p>
              I am Blessing James, a multi-disciplinary Software Engineer,
              Graphics Designer and UI/UX Designer based in Lagos, Nigeria. I'm
              passionate about crafting meaningful digital experiences through
              code and design.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="color text-[#808080]-900 mb-2">WHAT I DO</h2>

            <p>
              With three years of invaluable experience as a student of Aptech
              Computer Education(Abeokuta, Nigeria) —a tech school—and studying
              the Advanced Diploma in Software Engineering(ADSE), I have honed my
              skills allowing me to craft seamless and interactive user
              experiences. During my time at Aptech, I had the privilege of
              collaborating on projects for the masses with my colleagues,and
              instituting; it was an incredibly rewarding experience to develop
              applications that directly impact the lives of people.
            </p>
          </div>

          <div className="mb-4 flex flex-wrap">
            <h2 className="color text-[#808080]-900 mb-2">WHAT I DID</h2>

            <p>
              Before delving into the realm of software engineering,I studied
              graphic design.This background has equipped me with,a keen eye for
              aesthetics anda deep understandingof user-centered design
              principles.It enables me to seamlessly blend functionalityand
              visual appeal in every projectI undertake.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[30vw] flex flex-wrap items-center justify-between gap-10 align-middle">
          <div className="btn p-2 rounded-lg w-[82%]">
            <img
              src="./src/assets/images/Blessing.jpg"
              alt="Blessing James photo"
              className="object-cover rounded-lg btn"
            />
          </div>

          <button className="btn px-24 py-6 flex items-center gap-5">
            <ArrowCircleRight size={32} />
            See my resume
          </button>
        </div>
      </div>
    </div>
  );
};


export default About;