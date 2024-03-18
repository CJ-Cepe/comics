import React, { useState, useEffect } from 'react';
import fetchContent from './hashGenerator';
import Cards from './Cards';


function ComicExplorer(){
    const [comicList, setComicList] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetchContent();
            setComicList(result);
        }
        fetchData();
    }, [])

    return (
        <>
            <input type="text" />
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
