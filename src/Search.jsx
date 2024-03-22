import { useState } from "react"

function Search({checkBoxHandler, searchTermHandler, entityProp}){

    //renaming prop
    const handleCheckboxChange = checkBoxHandler
    const setSearchTerm = searchTermHandler
    const searchEntity = entityProp

    const [searchValue, setSearchValue] = useState("")

    const handleSearchClick = (event) => {
        console.log('blade')
        event.preventDefault()
        setSearchTerm(searchValue)
    }

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <form>
            <input type="text" value={searchValue} onChange={handleInputChange}/>
            <div>
                <label htmlFor="">
                    <input type="radio" name="entity" value="comics" checked={searchEntity==="comics"} onChange={handleCheckboxChange}/>
                    Comic Title
                </label>
                <label htmlFor="" >
                    <input type="radio" name="entity" value="characters" checked={searchEntity==="characters"} onChange={handleCheckboxChange}/>
                    Character
                </label>
                <label htmlFor="">
                    <input type="radio" name="entity" value="events" checked={searchEntity==="events"} onChange={handleCheckboxChange}/>
                    Event
                </label>
            </div>
            <button onClick={handleSearchClick}>Search</button>
        </form>
    )
}

export default Search