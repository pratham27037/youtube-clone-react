import React from 'react'
import "./ChannelRow.css"
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow(props) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={props.channel} src={props.image}></Avatar>
            <div className="channelRow__text">
               <h4>{props.channel} {props.verified && <CheckCircleOutlineIcon/>}</h4> 
            
            <p>{props.subs} Subscribers . {props.noOfVideos} Videos</p>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
