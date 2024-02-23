import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white p-6 md:p-8 lg:p-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0 flex flex-col justify-center">
          <img src="../src/assets/images/DuoDduo logo.png" alt="Logo" className="mb-2 w-20"/>
        <div className="">
        <h1 className="md:text-[1.5em] font-bold">DuoDduo</h1>
        <h1 className="color text-[#808080] mb-6">
        Thanks for stopping by 
        </h1>
        <h1 className="color text-[#808080]">
        © 2024, Blessing James. All Rights Reserved
        </h1>
        
      </div>
        </div>

        <div className='flex flex-wrap gap-8'>
            
        <div className="text-left">
          <h3 className=" md:text-[1em] font-bold">Quick Links</h3>
          {['Home', 'About', 'Tech Stack', 'Skills', 'Projects', 'Contact'].map(link => (
            <p key={link} className="color text-[#808080] mb-1">{link}</p>
          ))}
        </div>

        <div className="text-left">
          <h3 className=" md:text-[1em] font-bold">Social Media</h3>
          {['Email', 'LinkedIn', 'GitHub', 'Twitter', 'Facebook', 'Instagram', 'Whatsapp'].map(media => (
            <p key={media} className="color text-[#808080] mb-1 cursor-pointer">{media}</p>
          ))}
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
