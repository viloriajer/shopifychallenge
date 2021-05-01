import React, { useState } from "react";
import { Nominations } from "./Nominations";
import { Results } from "./Results";

export const Search = () => {
    const [title,setTitle] = useState("");
    const [results,setResults] = useState([]);


    const getMovies = (e) =>{
       fetch("http://www.omdbapi.com/?apikey=94d53f9c&s="+title,{
            method:"GET"
        }).then(res=>res.json()).then(data=>setResults(data.Search))
    }
  return (
    <div>
      <h4>Movie Title</h4>

        <input type="text"onChange={(e)=>{setTitle(e.target.value)}}/>
        <button onClick={getMovies}>Search</button>
    </div>
  );
};
