import  { useEffect } from 'react';
import { useLocation, useNavigate, Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { asyncloadtv, removetv } from '../store/actions/tvActions.jsx'; 
import Loading from './Loading';
import HorizontalCards from './templates/HorizontalCards'; 

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id, dispatch]);

  if (!info || !info.detail) {
    return <Loading />;
  }

  const { detail } = info;
  const backdropPath = detail.backdrop_path ? `https://image.tmdb.org/t/p/original/${detail.backdrop_path}` : '';
  const posterPath = detail.poster_path ? `https://image.tmdb.org/t/p/original/${detail.poster_path}` : '';

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)),url(${backdropPath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[180vh] px-[10%]"
    >
      {/* Navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" rel="noopener noreferrer" href={detail.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata.id}`}>
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDb
        </a>
      </nav>

      {/* Poster and Details */}
      <div className="w-full flex mt-5">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover"
          src={posterPath}
          alt={detail.title || detail.name || 'TV Show Poster'}
        />
        <div className="ml-5 text-white">
          <h1 className="text-5xl font-black">
            {detail.name || detail.title || detail.original_name || detail.original_title}
            <small className="text-2xl font-bold text-zinc-300">
              ({detail.first_air_date.split("-")[0]})
            </small>
          </h1>
          <div className="mt-3 mb-5 flex items-center gap-x-3">
            <span className="rounded-full font-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6">User Score</h1>
            <h1>{detail.first_air_date}</h1>
            <h1>{detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{detail.runtime} min</h1>
          </div>
          <h1 className="text-xl font-semibold italic text-zinc-200">{detail.tagline}</h1>
          <h1 className="text-2xl mb-3 mt-5">Overview</h1>
          <p>{detail.overview}</p>
          <h1 className="text-2xl mb-3 mt-5">TV Translated</h1>
          <p className="mb-10">{info.translations ? info.translations.join(", ") : 'No translations available'}</p>
          <Link
            className="p-5 bg-[#6556CD] rounded-lg text-white inline-flex items-center"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl ri-play-fill mr-3"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* Available on Platforms */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
          </div>
        )}
      </div>

      {/* Seasons */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">Seasons</h1>
      <div className="w-full flex overflow-x-scroll mb-5 p-5">
        {detail.seasons.map((s, i) => (
          <div key={i} className="w-[15vh] mr-[8%]">
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[30vh] min-w-[14vw] object-cover"
              src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
              alt={s.title || s.name || 'Season Poster'}
            />
            <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
              {s.name || s.title || 'Season Title'}
            </h1>
          </div>
        ))}
      </div>

      {/* Recommendations and Similar Stuff */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">Recommendations and Similar Stuff</h1>
      <HorizontalCards
        data={info.recommendations.length > 0 ? info.recommendations : info.similar}
      />
      <Outlet />
    </div>
  );
};

export default TvDetails;
