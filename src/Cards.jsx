import { Link } from "react-router-dom"

function Card({title, thumbNailSrc, extension}){
    const aspectRatio = "/" + "portrait_uncanny";
    const pageTitle = title.replace(/\s/g, '-');

    return (
        <div className="">
            <Link to={`/${pageTitle}`}>
                <img src={`${thumbNailSrc}${aspectRatio}.${extension}`} alt={title} width={200} className=""/>
            </Link>

            <p className="text-sm">{title}</p>
        </div>
    )
}


function Cards({results}){
    const cards = results.map((result, index) => {
        return (
            <Card key={index} title={result.title} 
                thumbNailSrc={result.thumbnail.path} 
                extension={result.thumbnail.extension}/>
            )
        }) 

    return <div className="grid gap-5 cards justify-items-center"> {cards} </div>
}

export default Cards