import React, {FC} from 'react'
import ImageCard from "../ImageCard"
import "./imagelist.scss"
import {GifType} from "../../types"

interface IGifsProps {
    gifs: GifType[];
    addToFav: (photo: string) => void
}

const ImageList: FC<IGifsProps> = ({gifs, addToFav}) => {
    return (
        <div className="image-list">
            {
                gifs.map(gif => <ImageCard key={gif.id} gif={gif} addToFav={addToFav} />)
            }
        </div>
    )
}

export default ImageList
