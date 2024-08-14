import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation(); // Segregate between TV and movie
    const category = pathname.includes("movie") ? "movie" : "tv";

    const { info } = useSelector((state) => state[category]); // Handle both movies and TV shows
    
    const ytvideo = info.videos; 
    

    return ytvideo ? (
        <div className="bg-[rgba(0,0,0,.9)] fixed z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
            <Link
                onClick={() => navigate(-1)}
                aria-label="Close trailer"
                className="hover:text-[#6556CD] ri-close-fill text-white right-[5%] top-[5%] absolute text-3xl cursor-pointer"
            >
                &#10005;
            </Link>
            <ReactPlayer
                width="80%"
                height="80%"
                url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
                controls
            />
        </div>
    ) : (
        <div className="text-white flex items-center justify-center h-screen">
            No trailer available
        </div>
    );
};

export default Trailer;
