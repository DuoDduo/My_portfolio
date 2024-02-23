import {
  TwitterLogo,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  EnvelopeSimple,
  WhatsappLogo,
  PaperPlaneRight
} from "@phosphor-icons/react";

const Contact = () => {
  return (
    <div className="btn text-white p-4 md:p-8 lg:p-16 mx-20 my-20">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <h1 className="md:text-[3rem] font-bold">Let's work together </h1>
          <h1 className="color text-[#808080] mb-4">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </h1>
        </div>
        <button className="btn px-8 sm:px-12 md:px-16 lg:px-20 py-6 flex items-center gap-5">
        <PaperPlaneRight size={32} className="btn" />
          Send Mail
        </button>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between md:justify-start lg:justify-start items-center gap-2 sm:gap-4">
        <TwitterLogo size={30} className="btn"/>
        <LinkedinLogo size={30} />
        <GithubLogo size={30} />
        <InstagramLogo size={30} />
        <EnvelopeSimple size={30} />
        <WhatsappLogo size={30} />
      </div>
      <div className="flex justify-end items-center mt-8"></div>
    </div>
  );
};

export default Contact;
