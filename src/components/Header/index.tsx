import React, {FC} from 'react'
import Logo from "../Logo"
import Search from "../Search"
import "./header.scss"
import {IHandleProps} from "../../types"

const Header: FC<IHandleProps> = ({handleClick, handleInput, handleSelect, inputValue, selectValue}) => {
    return (
        <header className="header">
            <Logo />
            <Search 
                handleClick={handleClick}
                handleInput={handleInput} 
                handleSelect={handleSelect} 
                inputValue={inputValue} 
                selectValue={selectValue}  
            />
        </header>
    )
}

export default Header
