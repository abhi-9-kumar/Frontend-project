import { Link } from "react-router-dom";
import noimage from "/noimage.jpg"


const Cards = ({ data,title }) => {
  return (
    <div className="flex flex-wrap w-full h-full pl-[5%] pt-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[30vh] mr-[5%] mb-[5%] hover:scale-110 transition-transform duration-300 ease-in-out"
          key={i}
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] w-[30vh] object-cover "
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt={c.name || c.title || c.original_name || c.original_title}
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] rounded-full font-xl font-semibold bg-[#6556cd] text-white w-[6vh] h-[6vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
