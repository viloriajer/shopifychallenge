import React,{useContext} from 'react'
import {Context} from '../App'

export const Nominations = () => {

    const {nominees} = useContext(Context)

    const remove = () =>{
    }
    return (
        <div>
            <h4>Nominations</h4>
            {nominees?.map((movie)=>{
                return (
                    <>
                    <p>{movie.Title} ({movie.Year})</p>
                    <button onClick={()=>test()}>Remove</button>
                    </>
                )
            })}
        </div>
    )
}
