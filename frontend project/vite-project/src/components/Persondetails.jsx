import  { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { asyncloadperson, removeperson } from '../store/actions/personActions.jsx'; 
import HorizontalCards from './templates/HorizontalCards'; 
import Loading from './Loading'; 

const PersonDetails = () => {
  document.title = "Person Details";

   const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  //console.log(info);
  const [category,setcategory] = useState("movie")


  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id, dispatch]);

  if (!info || !info.detail) {
    return <Loading />;
  }

  const { detail } = info;

  const profilePath = detail.profile_path ? `https://image.tmdb.org/t/p/original/${detail.profile_path}` : '';

  return (
    <div className="px-[10%] w-screen h-[150vh] bg-[#1F1E24]">
      {/* Navigation */}
      <nav className="h-[11vh] w-full text-zinc-100 pt-5">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-5xl rounded-full p-3 hover:bg-[#6556CD] hover:text-white transition-all duration-300 cursor-pointer"
        ></Link>
      </nav>

      <div className="w-full flex">
        {/* Left Poster and Details */}
        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] object-cover"
            src={profilePath}
            alt={detail.name || 'Profile'}
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          {/* Social Media Links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a target="_blank" rel="noopener noreferrer" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
              <i className="ri-earth-fill"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
              <i className="ri-instagram-fill"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={`https://x.com/${info.externalid.twitter_id}`}>
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* Personal Info */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">Person Info</h1>
          <h1 className="text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400">{detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400">{detail.gender === 2 ? "Male" : "Female"}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-zinc-400">{detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Deathday</h1>
          <h1 className="text-zinc-400">{detail.deathday ? detail.deathday : "Still Alive"}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Place of Birth</h1>
          <h1 className="text-zinc-400">{detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Also Known As</h1>
          <h1 className="text-zinc-400">{detail.also_known_as.join(", ")}</h1>
        </div>

        {/* Right Details and Information */}
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-white font-black my-5">{detail.name}</h1>

          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>
          <p className="text-zinc-400 mt-3">{detail.biography}</p>

          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between mt-5">
            <h1 className="text-xl text-zinc-400 font-semibold">Acting</h1>
            
          </div>

          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5">
            {info[category + "Credits"].cast.map((c, i) => (
              <li key={i} className="hover:text-white duration-300 cursor-pointer p-3">
                <Link to={`/${category}/details/${c.id}`}>
                  <span>
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="block ml-5 mt-2">
                    {c.character && `Character: ${c.character}`}
                  </span>
                </Link>
                
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
