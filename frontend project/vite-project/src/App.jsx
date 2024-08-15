import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import Persondetails from "./components/Persondetails";
import Trailer from "./components/templates/Trailer";
import Notfound from "./components/Notfound";



const App = () => {
    return( 
        <div className=" bg-[#1F1E24] w-screen h-screen flex">

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/trending" element={<Trending/>}/>
                <Route path="/popular" element={<Popular/>}/>

                <Route path="/movie" element={<Movie/>}/>
                <Route path="/movie/details/:id" element={<Moviedetails/>}/>
                <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
                

                <Route path="/tvshows" element={<Tvshows/>}/>
                <Route path="/tv/details/:id" element={<Tvdetails/>}/>
                <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
                

                <Route path="/people" element={<People/>}/>
                <Route path="/person/details/:id" element={<Persondetails/>}/>
                

                <Route path="/aboutus" element={<Aboutus/>}/>
                <Route path="/contact" element={<Contact/>}/>

                <Route path="*" element={<Notfound/>}/>


                
            </Routes>
        
        
        </div>
    );
};

export default App;