import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
           <div className="seachPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
           </div> 
           <hr/>

           <ChannelRow 
               image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
               channel="Clever Programmer"
               verified
               subs="890K"
               noOfVideos={529}
               description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
           />
           <hr />

            <VideoRow 
                views="136K Views"
                subs="890K"
                description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
                timestamp="29 july 2020"
                channel = "Clever programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginners"
                image="http://i3.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />

        </div>
    )
}

export default SearchPage;
