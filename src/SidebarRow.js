import React from 'react'
import "./SidebarRow.css";

function SidebarRow(props) {
    return (
        <div className="sidebarRow">
        <props.icon />
            <h2>{props.title}</h2>
        </div>
    )
}

export default SidebarRow
