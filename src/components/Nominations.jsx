import React from 'react'

export const Nominations = ({nominations}) => {

    const remove = () =>{
    }
    return (
        <div>
            <h4>Nominations</h4>
            {nominations?.map((movie)=>{
                return (
                    <>
                    <p>{movie.Title} ({movie.Year})</p>
                    <button onClick={()=>remove}>Remove</button>
                    </>
                )
            })}
        </div>
    )
}
