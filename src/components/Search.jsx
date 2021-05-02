import React, { useState } from "react";
import { Nominations } from "./Nominations";
import { Results } from "./Results";
import {useContext} from 'react'
import {Context} from '../App'
import Button from '@material-ui/core/Button';


export const Search = () => {

    const {title,setTitle,results,setResults,nominees,setNominees} = useContext(Context)

    const getMovies = async (e) =>{
      await fetch("http://www.omdbapi.com/?apikey=94d53f9c&s="+title,{
            method:"GET"
        }).then(res=>res.json()).then(data=>setResults(data.Search))
    }

    const nominate = (movie) =>{
      const newArray = [...nominees,movie]
      setNominees(newArray)
      console.log(newArray);
  }
  return (
    <div>
      <h4>Movie Title</h4>

        <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
        <button onClick={getMovies}>Search</button>
        <div style={{display:"flex", flexDirection:"column"}}>
            <h4>{title ? `Results for "${title}"` : ""}</h4>
            {results?.map((movie)=>{
                return (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <p>{movie.Title} ({movie.Year})</p>
                    <Button color="primary" variant="outlined" onClick={()=>nominate(movie)} disabled={nominees.some(item=>item.imdbID === movie.imdbID) ? true: false}>Nominate</Button>
                    </div>
                    )
            })}
        </div>
    </div>
  );
};
