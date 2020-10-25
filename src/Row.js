import React, {useEffect, useState} from "react";
import axios from "./axios";
import "./Row.css";
//
const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    console.log(fetchUrl);
    // A snnipest of code which runs based on a specific conditions
    useEffect(()=>{
    // when this row component loads it runs this piece of code here
    // if [] empty, it run once when the row component loads, and dont run again
    // if [movies], it run every single time when movies changes

        async function fetchData(){
            const request = await axios.get(fetchUrl);//("https://api.themoviedb.org/3/discover/tv?api_key=1f0ef76673bf50b9d919f2779f859697&with_networks=213");//
         //   console.log("here"+request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);// deps is fetchUrl, so whenever this fetchUrl data change it will render th data.
    console.log(movies);
    return(
        <div className={"row"}>
            {/* title */}
            <h2>{title}</h2>
            <div className={"row__posters"}>
                {/*Several Row Poster(s)*/}

                {movies.map(movie =>(
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`}
                        alt={movie.name} />
                ))}

            </div>
            {/* container -> posters */}


        </div>
    )

}

export default Row;