import { useLocation } from "react-router-dom"

function Comic ({}){
    const location = useLocation()
    const data = location.state;

    const {title, description, prices, series: {name}, thumbnail: {path, extension}} = data
    const price = prices[0].price
    const aspectRatio = "/" + "detail";
    const imageSrc = `${path}${aspectRatio}.${extension}`

    return (
        <>
            <h1>{"TITLE: " + title}</h1>
            <h2>{"SERIES: " + name}</h2>
            <p>{"DESCRIPTION: " + description}</p>
            <p>{"PRICE: " + price}</p>
            <img src={imageSrc} alt={title} width={400}/>
        </>
    )
}

export default Comic