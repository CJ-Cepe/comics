function Card({title, thumbNailSrc, extension}){

    const aspectRatio = "/" + "portrait_uncanny"

    return (
        <div className="">
            <img src={`${thumbNailSrc}${aspectRatio}.${extension}`} alt={title} width={200} className=""/>
            <p className="text-sm">{title}</p>
        </div>
    )
}

export default Card