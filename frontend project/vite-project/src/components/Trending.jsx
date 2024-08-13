import { useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Loading from './Loading';
import Cards from './templates/Cards';

const Trending = () => {
    document.title = 'Trending Movies and TV Shows';
    const navigate = useNavigate();
    const [trending, setTrending] = useState([]);

    const GetTrending = async () => {
        try {
            let allTrending = [];
            for (let page = 1; page <= 3; page++) { // Fetching first 5 pages
                const { data } = await axios.get(`/trending/all/day?page=${page}`);
                allTrending = [...allTrending, ...data.results];
            }
            setTrending(allTrending);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetTrending();
    }, []);

    return trending.length > 0 ? (
        <div className="p-5 w-screen h-screen overflow-hidden overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-4xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover: ri-arrow-left-line rounded-full p-3 hover:bg-[#6556CD] hover:text-white transition-all duration-300"
                    ></i>
                    Trending
                </h1>
                <Topnav />
            </div>
            <Cards data={trending} />
        </div>
    ) : (
        <Loading />
    );
};

export default Trending;
