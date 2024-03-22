import { useLocation } from "react-router-dom"

function Comic ({}){
    const location = useLocation()
    const data = location.state;

    const {title, description, prices, series: {name}, thumbnail: {path, extension}} = data
    const price = prices[0].price
    const aspectRatio = "/" + "detail";
    const imageSrc = `${path}${aspectRatio}.${extension}`
    let {urls} = data
    let readLink = urls[0].url

    return (
        <>
            <h1>{"TITLE: " + title}</h1>
            <h2>{"SERIES: " + name}</h2>
            <p>{"DESCRIPTION: " + description}</p>
            <a href={"readLink"} target="_blank">{"PRICE: " + price}</a>
            <img src={imageSrc} alt={title} width={400}/>
        </>
    )
}

export default Comic