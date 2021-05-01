import React, { useState } from "react";
import { Nominations } from "./Nominations";
import { Results } from "./Results";
import {useContext} from 'react'
import {Context} from '../App'

export const Search = () => {

    const {title,setTitle,setResults} = useContext(Context)

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
