import React from 'react'
import "./VideoRow.css"

function VideoRow(props) {
    return (
        <div className="videoRow">
            <img src={props.image} alt=""></img>
            <div className="videoRow__text">
                <h3>{props.title}</h3>
                <p className="videoRow__headline">
                    {props.channel} . <span className="videoRow__subs"><span className="videoRow__subsNumber">{props.subs}</span> Subscribers</span> {props.views} views . {props.timestamp}
                </p>
                <p className="videoRow__description">{props.description}</p>
            </div>
        </div>
    )
}

export default VideoRow
