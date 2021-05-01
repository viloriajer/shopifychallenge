import React, { useState,useContext } from 'react'
import { MovieProvider } from '../context/Context'
import { Nominations } from './Nominations'
import {Context} from '../App'

export const Results = () => {

    const {results,title,nominees,setNominees} = useContext(Context);

    const nominate = (movie) =>{
        const newArray = [...nominees,movie]
        setNominees(newArray)
        console.log(newArray);
    }
    return (
        <div>
            <h4>{title ? `Results for "${title}"` : "Results"}</h4>
            {results?.map((movie)=>{
                return (
                    <>
                    <p>{movie.Title} ({movie.Year})</p>
                    <button onClick={()=>nominate(movie)} disabled={nominees.some(item=>item.imdbID === movie.imdbID) ? true: false}>Nominate</button>
                    </>
                    )
            })}
        </div>
    )
}
