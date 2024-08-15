import { useEffect } from 'react';
import { useLocation, useNavigate, Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncloadmovie, removemovie } from "../store/actions/movieActions.jsx";
import Loading from './Loading';
import HorizontalCards from './templates/HorizontalCards';

const MovieDetails = () => {
  document.title = "Movie Details";

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id, dispatch]);

  if (!info || !info.detail) {
    return <Loading />;
  }

  const { detail } = info;

  const backdropPath = detail.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`
    : '';
  const posterPath = detail.poster_path
    ? `https://image.tmdb.org/t/p/original/${detail.poster_path}`
    : '';

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)),url(${backdropPath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "125vh",
      }}
      className="relative w-screen px-10"
    >
      {/* Navigation */}
      <nav className="h-20 w-full text-zinc-100 flex items-center gap-10  font-weight:800">
    <Link
   onClick={() => navigate(-1)}
   className="ri-arrow-left-line text-3xl rounded-full p-3 hover:bg-[#6556CD] hover:text-white transition-all duration-300 cursor-pointer"
   ></Link>
  
  {info.externalid && info.externalid.imdb_id && (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
      className="text-2xl rounded-full p-3 hover:bg-[#6556CD] hover:text-white transition-all duration-300 cursor-pointer"
    >
      Check on IMDb
    </a>
  )}
      </nav>


      {/* Poster and Details */}
      <div className="flex w-full mt-5">
        <img
          className="shadow-lg h-[55vh] object-cover"
          src={posterPath}
          alt={detail.title || detail.name}
        />

        <div className="ml-5 text-white">
          <h1 className="text-5xl font-black">
            {detail.name || detail.title || detail.original_name || detail.original_title}
            {detail.release_date && (
              <small className="text-2xl font-bold text-zinc-300">
                ({detail.release_date.split("-")[0]})
              </small>
            )}
          </h1>

          <div className="mt-3 mb-5 flex items-center gap-x-3">
            <span className="rounded-full font-xl font-semibold bg-[#6556CD] text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6">User Score</h1>
            <h1>{detail.release_date}</h1>
            <h1>{detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{detail.runtime} min</h1>
          </div>


          <h1 className="text-xl font-semibold italic text-zinc-200">{detail.tagline}</h1>
          <h1 className="text-2xl mb-3 mt-5">Overview</h1>
          <p>{detail.overview}</p>
          <h1 className="text-2xl mb-3 mt-5">Movie Translated</h1>
          <p className="mb-10">{info.translations ? info.translations.join(", ") : "No translations available."}</p>

          <Link
             className="p-5 bg-[#6556CD] rounded-lg text-white inline-flex items-center transform transition duration-300 ease-in-out hover:bg-[#4f42b5] hover:shadow-lg hover:scale-105"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl ri-play-fill mr-3"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* Recommendations and Similar */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white p-3">Recommendations and Similar Stuff</h1>
      <HorizontalCards
        data={info.recommendations.length > 0 ? info.recommendations : info.similar}
      />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
