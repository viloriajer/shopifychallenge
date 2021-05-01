import React,{useContext} from 'react'
import {Context} from '../App'

export const Nominations = () => {

    const {nominees,setNominees} = useContext(Context)

    const remove = (movie) =>{
        const remove = nominees.findIndex(item=>item.imdbID === movie.imdbID)
        let newArray = [...nominees]
        newArray.splice(remove,1)
        console.log(newArray);
        setNominees(newArray)

    }
    return (
        <div>
            <h4>Nominations</h4>
            {nominees?.map((movie)=>{
                return (
                    <>
                    <p>{movie.Title} ({movie.Year})</p>
                    <button onClick={()=>remove(movie)}>Remove</button>
                    </>
                )
            })}
        </div>
    )
}
