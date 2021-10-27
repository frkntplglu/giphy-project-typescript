import React, {FC, useState, useEffect} from 'react'
import ImageList from "../../components/ImageList"
import FavList from "../../components/FavList"
import "./home.scss"
import {GifType} from "../../types"
import {getFromStorage, saveToStorage} from "../../helpers/storage"


interface IHomeProps {
    gifs: GifType[];
}

const Home: FC<IHomeProps> = ({gifs}) => {
    const [favList, setFavList] = useState<string[]>([]);
    
    const addToFav = (photo: string): void => {
        const newFavList = Array.from(new Set([...favList, photo]));
        setFavList(newFavList);
        saveToStorage("favPhotos", newFavList);
    }

    const removeFromFav = (photo: string): void => {
        const newFavList = favList.filter(favPhoto => favPhoto !== photo);
        setFavList(newFavList);
        saveToStorage("favPhotos", newFavList);
    }

    useEffect(() => {
        const favPhotos = getFromStorage("favPhotos");

        if(!favPhotos) return;

        setFavList(favPhotos);
    },[])
    return (
        <div className="page-content">
            <ImageList gifs={gifs} addToFav={addToFav} />
            <FavList favList={favList} removeFromFav={removeFromFav} />
        </div>
    )
}

export default Home
