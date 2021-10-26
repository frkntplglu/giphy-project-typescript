import React, {FC} from 'react'
import "./search.scss"
import {IHandleProps} from "../../types"

const Search: FC<IHandleProps> = ({handleClick, handleInput, handleSelect, inputValue, selectValue}) =>  {
    

    return (
        <div className="search">
            <input type="text" value={inputValue} placeholder="Typesomething.." onChange={e => handleInput(e)}/>
            <select value={selectValue} onChange={e => handleSelect(e)}>
                <option value="0">Choose</option>
                <option value="car">Car</option>
                <option value="football">Football</option>
                <option value="sea">Sea</option>
            </select>
            <button onClick={handleClick}><i className="fas fa-search"></i></button>
        </div>
    )
}

export default Search
