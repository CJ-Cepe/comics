import React, { useState, useEffect } from 'react';
import fetchContent from './scripts/hashGenerator';
import Search from './Search';
import Cards from './Cards';
import './styles/comicSearchStyle.css'

function ComicSearch(){
    const [state, setState] = useState('loading') // success; error; loading

    const [comicList, setComicList] = useState(null) 
    const [searchValue, setSearchValue] = useState("") // input
    const [searchTerm, setSearchTerm] = useState("wolverine")
    const [searchEntity, setSearchEntity] = useState('comics')

    useEffect(()=>{
        const fetchData = async () => {
            setState("loading")
            try {
                const result = await fetchContent(searchTerm, searchEntity);
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
        <div className='comicSearch overlay'>  
            <Search/>
            
            {(state === 'loading') ? (
                <div> Loading... </div>
            ) : (state === 'error') ? (
                <div> No comics found</div>
            ) : (
                <Cards results={comicList.data.results}/> 
            )
            }
        </div>
    )
}

export default ComicSearch
