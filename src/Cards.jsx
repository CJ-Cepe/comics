import { Link } from "react-router-dom"
import "./styles/cardsStyle.css"

function Card({data}){
    let {title, thumbnail: {path, extension}} = data
    const pathName = title.replace(/\s/g, '-').replace(/#/, '')
    const aspectRatio = "/" + "landscape_amazing";
    path = "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4ce5a9bf70e19";
    console.log(`${path}${aspectRatio}.${extension}`)
    return (
        <div className="card">
            <div>
                <div>
                    <Link to={`/${pathName}`} state={data}>
                        <img src={`${path}${aspectRatio}.${extension}`} alt={title} width={200} className=""/>
                    </Link>
                </div>
            </div>
            <p>{title}</p>
        </div>
    )
}


function Cards({results}){
    const cards = results.map((result, index) => {

        return (
            <Card key={index} data={result}/>
            )
        })

    return <div className="cards"> {cards} </div>
}

export default Cards