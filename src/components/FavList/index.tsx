import React,{FC} from 'react'
import FavListItem from "../FavListItem"
import "./favlist.scss"

interface IFavList{
    favList: string[],
    removeFromFav: (photo: string) => void
}

const FavList: FC<IFavList> = ({favList, removeFromFav}) => {
    
    return (
        <div className="fav-list">
            <div className="fav-list-title">Your Favorite Photos</div>
            <ul className="fav-list-wrapper">
                {favList.length > 0 ? favList.map((photo: string, index: number) => <FavListItem key={index} photo={photo} removeFromFav={removeFromFav} />) : <div className="fav-list-msg">There is no favorite image...</div>}
            </ul>
        </div>
    )
}

export default FavList
