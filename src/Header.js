import React from "react";
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header(){
    return(
        <div className="header">

            <div className="header__left">
            <MenuIcon />
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube-logo"></img>
            </div>

            <div className="header__mid">
            <input type="text" />
            <SearchIcon className="header__inputButton"/>
            </div>

            <div className="header__right">
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar alt="pratham-choudhary" src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/09/25/Pictures/_115e3b3a-df82-11e9-b0cd-667d8786d605.jpg"/>
            </div>

        </div>
    )
}

export default Header;