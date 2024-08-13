
import { MdArrowDownward, MdEmail } from "react-icons/md";
import { SiGithub, SiTwitter, SiYoutube, SiInstagram } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  document.title = "Contact Us";
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-white p-8">
      {/* Back Navigation Button */}
      <div className="absolute top-4 left-4">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-3xl rounded-full p-3 hover:bg-[#6556CD] hover:text-white transition-all duration-300 cursor-pointer"
          ></i>
        </h1>
      </div>

      {/* Main Content */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Abhinav
          <span className="block text-zinc-400 text-3xl font-light mt-2">
            I build cool websites like this one.
          </span>
        </h1>
        <h2 className="flex items-center gap-2 text-red-400 text-2xl">
          Contact me <MdArrowDownward className="text-3xl" />
        </h2>
      </div>
      
      {/* Social Media Icons */}
      <div className="grid grid-cols-5 gap-10 mt-8 w-[80%]">
        <div className="bg-red-500 rounded-lg shadow-lg hover:bg-red-400 transition-all duration-300 hover:scale-110 ease-in-out">
          <a
            href="https://www.youtube.com/@037_abhinavkumar3"
            className="flex items-center justify-center h-24 text-5xl text-white"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SiYoutube />
          </a>
        </div>
        <div className="bg-green-600 rounded-lg shadow-lg hover:bg-green-500 transition-all duration-300 hover:scale-110 ease-in-out">
          <a
            href="https://github.com/abhi-9-kumar"
            className="flex items-center justify-center h-24 text-5xl text-white"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
        </div>
        <div className="bg-orange-500 rounded-lg shadow-lg hover:bg-orange-300 transition-all duration-300 hover:scale-110 ease-in-out">
          <a
            href="https://www.instagram.com/abhi_9_kumar/"
            className="flex items-center justify-center h-24 text-5xl text-white"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SiInstagram />
          </a>
        </div>
        <div className="bg-blue-500 rounded-lg shadow-lg hover:bg-blue-400 transition-all duration-300 hover:scale-110 ease-in-out">
          <a
            href="https://x.com/Abhi99904652079"
            className="flex items-center justify-center h-24 text-5xl text-white"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SiTwitter />
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 hover:scale-110 ease-in-out">
          <a
            href="mailto:abhikr987654@gmail.com"
            className="flex items-center justify-center h-24 text-5xl text-black"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
