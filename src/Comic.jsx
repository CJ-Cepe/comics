import { useLocation } from "react-router-dom"

function Comic ({}){
    const location = useLocation()
    const data = location.state;
    console.log(data)
    
    return (
        <>
            <div>yeah!</div>
        </>
    )
}

export default Comic