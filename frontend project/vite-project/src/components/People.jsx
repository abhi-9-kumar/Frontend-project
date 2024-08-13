import { useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Loading from './Loading';
import Cards from './templates/Cards';

const People = () => {
    document.title = "Popular People";
    const navigate = useNavigate();
    const [person, setPerson] = useState([]);

    const GetPerson = async () => {
        try {
            let allPersons = [];
            for (let page = 1; page <= 5; page++) {
                const { data } = await axios.get(`person/popular?page=${page}`);
                allPersons = [...allPersons, ...data.results];
            }
            setPerson(allPersons);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetPerson();
    }, []);

    return person.length > 0 ? (
        <div className="p-5 w-screen h-screen overflow-hidden overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-4xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover: ri-arrow-left-line rounded-full p-3 hover:bg-[#6556CD] hover:text-white transition-all duration-300"
                    ></i>
                    People
                </h1>
                <Topnav />
            </div>
            <Cards data={person} title="person" />
        </div>
    ) : (
        <Loading />
    );
};

export default People;
