import React, { useState, useEffect } from 'react';
import fetchContent from './hashGenerator';
import Cards from './Cards';

import { createContext } from "react";
import { Outlet } from 'react-router-dom';

function DisplayComic(){
    
}

function ComicExplorer(){
    const [state, setState] = useState('loading') // success; error; loading

    const [comicList, setComicList] = useState(null) 
    const [searchValue, setSearchValue] = useState("") // input
    const [searchTerm, setSearchTerm] = useState("wolverine")

    const ComicContext = createContext('null') 

    useEffect(()=>{
        const fetchData = async () => {
            setState("loading")
            try {
                const result = await fetchContent(searchTerm);
                if(result.data.count == 0){
                    throw new Error("Result count is 0")
                }
                setState("success")
                setComicList(result);
            } catch (error) {
                setState("error")
            } 
        }
       
        fetchData();
    }, [searchTerm])

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleSearchClick = () => {
        console.log('blade')
        setSearchTerm(searchValue)
    }

    return (
        <ComicContext.Provider value={ComicContext}>
            <input type="text" value={searchValue} onChange={handleInputChange}/>
            <button onClick={handleSearchClick}>Search</button>
            {(state === 'loading') ? (
                <div> Loading... </div>
            ) : (state === 'error') ? (
                <div> No comics found</div>
            ) : (
                <Cards results={comicList.data.results}/>
            )
            }

            <Outlet />
        </ComicContext.Provider>
    )
}

export default ComicExplorer
