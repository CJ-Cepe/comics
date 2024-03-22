import { useState } from "react"
import './styles/searchStyle.css'
import searchIcon from './assets/search.svg'

function Search({checkBoxHandler, searchTermHandler, entityProp}){



    return (
        <form>
            <SelectSort />
            <YearInput/>
            <CheckBox />
            <Input/>
        </form>
    )
}

export default Search


function SelectSort(){
    const [orderValue, setOrderValue] = useState("date");
    const [arrangeValue, setArrangeValue] = useState("descending")

    function handleOrderByValueChange(event){
        setOrderValue(event.target.value)
    }

    function handleArrangeValue(event){
        setArrangeValue(event.target.value)
    }

    return (
        <label>
            Sort:
            <select onChange={handleOrderByValueChange} value={orderValue}>
                <option value="date">Date</option>
                <option value="issueNumber">Issue #</option>
                <option value="title">Title</option>
            </select>
            &nbsp; | &nbsp;
            <select onChange={handleArrangeValue} value={arrangeValue}>
                <option value="descending">Descending</option>
                <option value="ascending">Ascending</option>
            </select>
        </label>
    )
}

function YearInput({}) {
    const [year, setYear] = useState("")

    function handleYearChange(event){
        setYear(event.target.value)
    }

    return (
        <label>
            Year:
            <input type="number" min="1980" max="2024" placeholder="Any" value={year} onChange={handleYearChange}></input>
        </label>
    )
}


function CheckBox(){
    const [isChecked, setIsChecked] = useState(true)

    function handleIsCheckedChange(event){
        setIsChecked(!isChecked)
    }

    return(
        <label>
            No Variant:&nbsp;
            <input type="checkbox" checked={isChecked} onChange={handleIsCheckedChange}/>
        </label>
    )
    //noVariants=true
}


function SearchBy({}){
    const [searchBy, setSearchBy] = useState("comics");
    
    function handleSearchByChange(event){
        setSearchBy(event.target.value)
    }

    return (
        <label>
            Search By:
            <select value={searchBy} onChange={handleSearchByChange}>
                <option value="comics">Title</option>
                <option value="characters">Character</option>
                <option value="events">Event</option>
            </select>
        </label>
    )
    //startYear=1990
}

function Input({checkBoxHandler, searchTermHandler, entityProp}){
    //renaming prop
    const handleCheckboxChange = checkBoxHandler
    const setSearchTerm = searchTermHandler
    const searchEntity = entityProp

    const [searchValue, setSearchValue] = useState("")

    const handleSearchClick = (event) => {
        event.preventDefault()
        setSearchTerm(searchValue)
    }

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div>
            <SearchBy />
            <div>
                <input type="text" value={searchValue} onChange={handleInputChange}/>
                <button onClick={handleSearchClick}><img src={searchIcon} alt="search" /></button>
            </div>
        </div>
    )
}

function dummy(){
    return (
        <>
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
        </>
    )
}