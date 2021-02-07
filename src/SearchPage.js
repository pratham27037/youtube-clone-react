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
                views="136K"
                subs="890K"
                description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
                timestamp="29 july 2020"
                channel = "Clever programmer"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="http://i3.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />
            <VideoRow 
                views="1.9M"
                subs="890K"
                description="If you want to enroll in an EPIC Python course where you can have exercises and projects all under one account & for FREE... Click this link: https://cleverprogrammer.teachable.co...​

The tool I'm using to write my Python code online... https://repl.it​.
"
                timestamp="21 Dec 2019"
                channel = "Clever programmer"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="http://i3.ytimg.com/vi/4F2m91eKmts/maxresdefault.jpg"
            />
            <VideoRow 
                views="250K"
                subs="890K"
                description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
                timestamp="8 july 2020"
                channel = "Clever programmer"
                title="🔴 How to Build a Instagram Clone with REACT JS for Beginners (in 3 Hours!)"
                image="http://i3.ytimg.com/vi/f7T48W0cwXM/maxresdefault.jpg"
            />
            <VideoRow 
                views="114K"
                subs="890K"
                description="If you want to enroll in an EPIC Beginner Python course where you can have exercises and projects all under one account & for FREE... Click this link: https://cleverprogrammer.teachable.co..."
                timestamp="1 month ago"
                channel = "Clever programmer"
                title="Python Artificial Intelligence Tutorial - AI Full Course for Beginners in 9 Hours [2021]"
                image="http://i3.ytimg.com/vi/XIrOM9oP3pA/maxresdefault.jpg"
            />
            <VideoRow 
                views="136K"
                subs="890K"
                description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
                timestamp="29 july 2020"
                channel = "Clever programmer"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="http://i3.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />
            <VideoRow 
                views="136K"
                subs="890K"
                description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
                timestamp="29 july 2020"
                channel = "Clever programmer"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="http://i3.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />

        </div>
    )
}

export default SearchPage;
