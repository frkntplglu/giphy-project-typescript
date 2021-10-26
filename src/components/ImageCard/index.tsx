import React,{FC} from 'react'
import "./imagecard.scss"
import {GifType} from "../../types"


interface IGifProps {
    gif: GifType;
    addToFav: (photo: string) => void 
}

const ImageCard: FC<IGifProps> = React.memo(({gif, addToFav}) => {

    return (
        <div className="image-card">
            <button className="btn-primary" onClick={() => addToFav(gif.images.original.webp)}><i className="fas fa-heart"></i></button>
            <figure className="image-card-image"><img src={gif.images.original.webp} alt={gif.title} /></figure>
            <div className="image-card-owner"><i className="fas fa-user"></i> {gif.username || "Anonymous"}</div>
        </div>
    )
})

export default ImageCard
