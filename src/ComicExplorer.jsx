import React, { useState, useEffect } from 'react';
import fetchContent from './hashGenerator';
import Cards from './Cards';


function ComicExplorer(){
    const [comicList, setComicList] = useState(null)
    const [searchValue, setSearchValue] = useState("")
    const [searchTerm, setSearchTerm] = useState("wolverine")

    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetchContent(searchTerm);
            setComicList(result);
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
        <>
            <input type="text" value={searchValue} onChange={handleInputChange}/>
            <button onClick={handleSearchClick}>Search</button>
            {!comicList ? (
                <div>
                    Loading...
                </div>
                ) : (
                <Cards results={comicList.data.results}/>
                )
            }
        </>
    )
}

export default ComicExplorer
