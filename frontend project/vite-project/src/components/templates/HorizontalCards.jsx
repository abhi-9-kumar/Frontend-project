import { Link } from "react-router-dom";
import noimage from "/noimage.jpg"

const HorizontalCards = ({ data }) => {
    return (
      <div className="w-full overflow-hidden">
        <div className="flex w-full animate-move">
          {data.map((d, i) => (
            <Link to={`/${d.media_type}/details/${d.id}`}
              key={i}
              className="min-w-[15%] h-[40vh] bg-zinc-900 mr-5 mb-5 transform transition-transform duration-300 hover:scale-110"
            >
              <img
                className="w-full h-[55%] object-cover"
                src={d.backdrop_path || d.poster_path?
                  `https://image.tmdb.org/t/p/original/${
                  d.backdrop_path || d.poster_path
                }`: noimage}
                alt=""
              />
              <div className="text-white p-3 h-[45%]">
                <h1 className="text-xl font-semibold">
                  {d.name || d.title || d.original_name || d.original_title}
                </h1>
                <p className="mt-3 mb-3">
                  {d.overview.slice(0, 50)}...
                  <span className="text-zinc-500">more</span>
                </p>
              </div>
            </Link>
          ))}
          
        </div>
      </div>
    );
  };
  
  export default HorizontalCards;
  