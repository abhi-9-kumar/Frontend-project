import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'; 
import noimage from '/noimage.jpg';

import axios from '../../utils/axios';

const Topnav = () => {
    const [query,setquery] = useState("");
    const [searches,setSearches] = useState([]);
    const GetSearches=async()=>{
      try{
        const {data}=await axios.get(`/search/multi?query=${query}`);
        setSearches(data.results);
      } catch(error){
        console.log("Error:", error);
      }
    }


  useEffect(() => {
    GetSearches();
  },[query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text" 
        placeholder="search anything"
      />
      {query.length > 0 && (
                <i onClick={() => setquery("")}
                className="text-zinc-400 text-3xl ri-close-fill right-0 cursor-pointer">
                </i>
        )}
      
      
      <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%]  left-[5%] overflow-auto rounded">
        {
          searches.map((s,i)=>(

            <Link key={i} 
            to={`/${s.media_type}/details/${s.id}`}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img 
           className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
          src={s.backdrop_path ||s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path}`: noimage} 
          alt=""/>

          <span>{s.name||s.title||s.original_name||s.original_title}</span> 
        </Link>
          ))
        }
        
      </div>

      <div className="p-[8%] ">
        <div className="text-2xl text-white rounded-full bg-[#6556cd] p-1 pr-2 hover:cursor-pointer">
        <span>✨ MovieSphere</span>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
