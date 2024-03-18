import React, { useState, useEffect } from 'react';
import fetchContent from './hashGenerator';
import Card from './Card';


function ComicExplorer(){
    const [comicList, setComicList] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetchContent();
            setComicList(result);
        }
        fetchData();
    }, [])

    if (!comicList) {
        return <div>Loading...</div>;
    } else {
        const results = comicList.data.results

        const cards = results.map((result, index) => {
        return (
            <Card key={index} title={result.title} 
                thumbNailSrc={result.thumbnail.path} 
                extension={result.thumbnail.extension}/>
            )
        }) 

        return (
            <div className='grid gap-5 cards justify-items-center'>
                {cards}
            </div>
        )
    }
}

export default ComicExplorer
