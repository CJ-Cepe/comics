import { Link } from "react-router-dom"
import "./styles/cardsStyle.css"

function Card({data}){
    const{title, thumbnail: {path, extension}} = data
    const pathName = title.replace(/\s/g, '-').replace(/#/, '')
    const aspectRatio = "/" + "portrait_uncanny";
    
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