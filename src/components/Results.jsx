import React, { useState } from 'react'
import { Nominations } from './Nominations'

export const Results = ({title, results}) => {
    const [nominees,setNominees] = useState([])

    const nominate = (movie) =>{
        nominees.push(movie)
    }
    return (
        <div>
            <h4>{title ? `Results for "${title}"` : "Results"}</h4>
            {results?.map((movie)=>{
                return (
                    <>
                    <p>{movie.Title} ({movie.Year})</p>
                    <button onClick={()=>nominate(movie)}>Nominate</button>
                    </>
                    )
            })}
        </div>
    )
}
