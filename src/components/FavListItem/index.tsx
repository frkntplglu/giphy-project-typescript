import React, {FC} from 'react'
import "./favlistitem.scss"

interface IFavListItem{
    photo: string;
    removeFromFav: (photo: string) => void
}

const FavListItem:FC<IFavListItem> = ({photo, removeFromFav}) => {
    return (
        <li className="fav-list-item">
            <figure className="fav-list-item-image"><button onClick={() => removeFromFav(photo)}><i className="fas fa-trash"></i></button><img src={photo} alt="Fav" /></figure>
        </li>
    )
}

export default FavListItem
