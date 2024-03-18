function Card({title, thumbNailSrc, extension}){
    const aspectRatio = "/" + "portrait_xlarge"
    console.log(title)
    console.log(`${thumbNailSrc}${aspectRatio}"."${extension}`)
    return (
        <div>
            <p>{title}</p>
            <img src={`${thumbNailSrc}${aspectRatio}.${extension}`} alt={title} />
        </div>
    )
}

export default Card