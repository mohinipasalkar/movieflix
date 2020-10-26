import React, {useEffect, useState} from "react";

import axios from './axios';
import requests from './requests';

const test= [{"abc":"pqr"},{"abc2":"pqr2"},{"abc3":"pqr3"}];

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            
            console.log(test[1]);
            const request = await axios.get(requests.fetchNetflixOriginals);
           // console.log(request.data.result[Math.floor(Math.random()* request.data.results.length -1)]); //[]
           // Math.floor(Math.random()* request.data.results.length -1);
            setMovie(
                    request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                    ]
            );
            return request;
        }
        fetchData();
    },[]);
    console.log('movie is', movie);
    return(
    <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
    > {/* <<<BackgroundImage */}
        <div className="banner__contents">
        {/* title*/}
            
        {" "}
        <h1>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
         {/* div > 2 buttons 
         button.banner__button*2
       // div.banner__buttons>banner__buttons*2
        */}
        <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        </div>
       
        {/* description */}
        <h1 className="banner__description">{movie?.overview}</h1>
        </div>
    </header>
    )
}

export default Banner;