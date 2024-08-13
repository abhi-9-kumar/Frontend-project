import { useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Loading from './Loading';
import Cards from './templates/Cards';

const Movie = () => {
    document.title = "Top Rated Movies";
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);

    const GetMovie = async () => {
        try {
            let allMovies = [];
            for (let page = 1; page <= 3; page++) {
                const { data } = await axios.get(`movie/top_rated?page=${page}`);
                allMovies = [...allMovies, ...data.results];
            }
            setMovie(allMovies);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetMovie();
    }, []);

    return movie.length > 0 ? (
        <div className="p-5 w-screen h-screen overflow-hidden overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-4xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover: ri-arrow-left-line rounded-full p-3 hover:bg-[#6556CD] hover:text-white transition-all duration-300"
                    ></i>
                    Movies
                </h1>
                <Topnav />
            </div>
            <Cards data={movie} title="movie"/>
        </div>
    ) : (
        <Loading />
    );
};

export default Movie;
