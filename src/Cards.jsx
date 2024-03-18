import { Link } from "react-router-dom"

function Card({data}){
    const{title, thumbnail: {path, extension}} = data
    const pathName = title.replace(/\s/g, '-').replace(/#/, '')

    const aspectRatio = "/" + "portrait_uncanny";
    
    return (
        <div className="">
            <Link to={`/${pathName}`} state={data}>
                <img src={`${path}${aspectRatio}.${extension}`} alt={title} width={200} className=""/>
            </Link>

            <p className="text-sm">{title}</p>
        </div>
    )
}


function Cards({results}){
    const cards = results.map((result, index) => {
        return (
            <Card key={index} data={result}/>
            )
        })

    return <div className="grid gap-5 cards justify-items-center"> {cards} </div>
}

export default Cards