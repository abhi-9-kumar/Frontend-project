
import { useNavigate } from 'react-router-dom';

const Aboutus = () => {
    document.title = "About Us";
    const navigate = useNavigate();




  return (
    <div className=" text-white p-[2%] flex flex-row items-stretch gap-4">
       <h1 className="text-4xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover: ri-arrow-left-line rounded-full p-3 hover:bg-[#6556CD] hover:text-white transition-all duration-300"
                    ></i>
                </h1>
     
      <div className="lg:w-1/4 mb-8 lg:mb-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Left Image" 
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>

      
      <div className="w-2/4 px-8 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-center mb-6 underline decoration-double">About MovieSphere</h1>
        <p className="text-2xl  mb-4">
          Welcome to <span className="text-[#6556CD] font-semibold">MovieSphere</span> – your ultimate destination for everything movies and TV shows!
        </p>
        <p className="text-2xl mb-4">
          At MovieSphere, we are passionate about bringing the magic of cinema to your fingertips. Whether you’re a casual viewer or a die-hard cinephile, MovieSphere offers a comprehensive and user-friendly platform to explore, discover, and dive deep into the world of entertainment.
        </p>
        <h2 className="text-3xl font-semibold mb-3">What does we provide?</h2>
        <ul className="list-disc text-2xl space-y-2 pl-4">
          <li> Stay up-to-date with the latest trending movies and TV shows, curated just for you.</li>
          <li> Access detailed information about your favorite movies, shows including ratings, reviews, trailers, and more.</li>
          <li> Get information about your favourite celebrities</li>
        </ul>
        <p className="text-2xl mt-6">
          Our mission is to create a vibrant community of entertainment enthusiasts who can come together to share their love for movies and TV shows. We’re constantly working on new features and improvements to make your experience even better.
        </p>
        <p className="text-2xl mt-6 font-semibold text-center">
          Join us at <span className="text-[#6556CD]">MovieSphere</span> and start your cinematic journey today!
        </p>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/4">
        <img 
          src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Right Image" 
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Aboutus;
