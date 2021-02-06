import React,{useState} from "react";
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';

function Header(){
    const [inputSearch,setInputSearch] =  useState("");

    return(
        <div className="header">

            <div className="header__left">
            <MenuIcon />
            <Link to={`/`}>
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube-logo"></img>
            </Link>
            
            </div>

            <div className="header__mid">
                <input 
                onChange={e => setInputSearch(e.target.value)} 
                value={inputSearch} 
                placeholder="Search" 
                type="text" 
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
                <MicOutlinedIcon className="mic"/>
            </div>

            <div className="header__right">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar alt="pratham-choudhary" src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/09/25/Pictures/_115e3b3a-df82-11e9-b0cd-667d8786d605.jpg"/>
            </div>

        </div>
    )
}

export default Header;