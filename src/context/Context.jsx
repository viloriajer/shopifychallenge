import React, { createContext, useState, useEffect, useContext } from 'react';


export const MovieContext = createContext();

export const MovieProvider = ({children}) => {
    const [title,setTitle] = useState("");
    const [results,setResults] = useState([]);
  
    return (
      <MovieContext.Provider
        value={{
          title,
          setTitle,
          results,
          setResults
        }}
      >
        {children}
      </MovieContext.Provider>
    );
  };
  