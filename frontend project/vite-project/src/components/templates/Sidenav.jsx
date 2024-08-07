// import { Link } from 'react-router-dom'; 

// const Sidenav = () => {
//     return (
//         <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3">
//             <h1 className="text-2xl text-white font-bold">
//                 <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
//                 <span className="text-2xl">MovieSphere</span>
//             </h1>
//             <nav className="flex flex-col text-zinc-400 text-xl gap-3">
//                 <h1 className="text-white font-semibold text-xl mt-10 mb-5">
//                     New feeds
//                 </h1>
//                 <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 flex items-center">
//                     <i className="ri-fire-fill mr-2"></i>
//                     Trending
//                 </Link>
//                 <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 flex items-center">
//                     <i className="ri-bard-fill mr-2"></i>
//                     Popular
//                 </Link>
//                 <Link to="/movies" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 flex items-center">
//                     <i className="ri-movie-2-fill mr-2"></i>
//                     Movies
//                 </Link>
//                 <Link to="/tv-shows" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 flex items-center">
//                     <i className="ri-tv-2-fill mr-2"></i>
//                     TV Shows
//                 </Link>
//                 <Link to="/people" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 flex items-center">
//                     <i className="ri-team-fill mr-2"></i>
//                     People
//                 </Link>
//             </nav>
            
//             <hr className="border-none h-[1px] bg-zinc-400"/>
            
//             <nav className="flex flex-col text-zinc-400 text-xl gap-3">
//                 <h1 className="text-white font-semibold text-xl mt-10 mb-5">
//                     Website Information
//                 </h1>
//                 <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 flex items-center">
//                     <i className="ri-information-fill mr-2"></i>
//                     About 
//                 </Link>
//                 <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 flex items-center">
//                     <i className="ri-phone-fill mr-2"></i>
//                     Contact Us
//                 </Link>
//             </nav>
//         </div>
//     );
// };

// export default Sidenav;


import { motion } from 'framer-motion';



const Sidenav = () => {
    


  return (
    <section className="w-[20%] h-full border-r-2 border-zinc-400 p-5">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Trending" 
          subheading="Learn what we do here"
          href="#"
          icon="ri-fire-fill"
        />
        <Link
          heading="Popular"
          subheading="We work with great people"
          href="#"
          icon="ri-bard-fill"
        />
        <Link
          heading="Movies"
          subheading="Our work speaks for itself"
          href="#"
          icon="ri-movie-2-fill"
        />
        <Link
          heading="TV Shows"
          subheading="We want cool people"
          href="#"
          icon="ri-tv-2-fill"
        />
        <Link
          heading="People"
          subheading="In case you're bored"
          href="#"
          icon="ri-team-fill mr-2"
        />
        <Link
          heading="About"
          href="#"
          icon="ri-information-fill"
        />
        <Link
          heading="Contact"
          href="#"
          icon="ri-phone-fill mr-2"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, subheading, href, icon }) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-3 transition-colors duration-500 hover:border-neutral-50 md:py-6"
    >
      <div className="flex items-center">
        <i className={`${icon} mr-2 text-4xl text-neutral-400 group-hover:text-neutral-50`}></i>
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-2xl font-bold text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50 md:text-3xl"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-2 block text-base text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
            {subheading}
          </span>
        </div>
      </div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
      </motion.div>
    </motion.a>
  );
};

export default Sidenav;
