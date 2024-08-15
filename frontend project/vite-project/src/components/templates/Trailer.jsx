import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';
import instance from '../../utils/axios';
import Notfound from '../Notfound';

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation(); 
    
   
    const [video, setVideo] = useState('');

    useEffect(()=>{
            const id = pathname.split("/")[3];
            const cat = pathname.split("/")[1] ;
            instance.get(`/${cat}/${id}/videos`).then(res=>{
            const video =res.data.results.find(m =>m.type ==="Trailer");
            setVideo(video); 
           
        });
        
        
    }, [pathname])

    return video ? (
        <div className="bg-[rgba(0,0,0,.9)] fixed z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
            <Link
                onClick={() => navigate(-1)}
                aria-label="Close trailer"
                className="hover:text-[#6556CD] ri-close-fill text-white right-[5%] top-[5%] absolute text-3xl cursor-pointer"
            >
            </Link>
            <ReactPlayer
                width="80%"
                height="80%"
                url={`https://www.youtube.com/watch?v=${video.key}`}
                controls
            />
        </div>
    ) : (
        <Notfound/>
    );
};

export default Trailer;
