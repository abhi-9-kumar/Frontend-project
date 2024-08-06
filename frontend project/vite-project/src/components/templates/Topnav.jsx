import { Link } from 'react-router-dom'; 
import {useState} from "react";

const Topnav = () => {
    const [query,setquery] = useState("");

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
      
      
      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%]  overflow-auto rounded">
        {/* <Link to="#" className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt=""/>
          <span>Hello Everyone </span> 
        </Link> */}
        
      </div>
    </div>
  );
}

export default Topnav;
