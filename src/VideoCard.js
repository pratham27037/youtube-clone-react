import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";
function VideoCard(props) {
    return (
        <div className="videoCard">
           <img className="videoCard__thumbnail" src={props.image} alt=""></img> 
           <div className="videoCard__info">
             <Avatar className="videoCard__avatar" alt={props.channel} src={props.channelImage}></Avatar>   
            <div className="videoCard_text">
               <h4>{props.title}</h4>
               <p>{props.channel}</p>
               <p>
                   {props.views} . {props.timestamp}
               </p> 
            </div>
           </div>
        </div>
    )
}

export default VideoCard;
