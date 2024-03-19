import React, { useState, useEffect } from 'react';
import fetchContent from './hashGenerator';
import Cards from './Cards';

function ComicExplorer(){
    const [state, setState] = useState('loading') // success; error; loading

    const [comicList, setComicList] = useState(null) 
    const [searchValue, setSearchValue] = useState("") // input
    const [searchTerm, setSearchTerm] = useState("wolverine")
    const [searchEntity, setSearchEntity] = useState('title')

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

    const handleSearchClick = (event) => {
        console.log('blade')
        event.preventDefault()
        setSearchTerm(searchValue)
    }

    const handleCheckboxChange = (event) => {
        setSearchEntity(event.target.value);
    };

    return (
        <>  
            <form>
                <input type="text" value={searchValue} onChange={handleInputChange}/>
                <div>
                    <label htmlFor="">
                        <input type="radio" name="entity" value="title" checked={searchEntity==="title"} onChange={handleCheckboxChange}/>
                        Comic Title
                    </label>
                    <label htmlFor="" >
                        <input type="radio" name="entity" value="character" checked={searchEntity==="character"} onChange={handleCheckboxChange}/>
                        Character
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="entity" value="creator" checked={searchEntity==="creator"} onChange={handleCheckboxChange}/>
                        Creator
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="entity" value="event" checked={searchEntity==="event"} onChange={handleCheckboxChange}/>
                        Event
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="entity" value="series" checked={searchEntity==="series"} onChange={handleCheckboxChange}/>
                        Series
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="entity" value="story" checked={searchEntity==="story"} onChange={handleCheckboxChange}/>
                        Story
                    </label>
                </div>
                <button onClick={handleSearchClick}>Search</button>
            </form>
            
            {(state === 'loading') ? (
                <div> Loading... </div>
            ) : (state === 'error') ? (
                <div> No comics found</div>
            ) : (
                <Cards results={comicList.data.results}/> 
            )
            }
        </>
    )
}

export default ComicExplorer
