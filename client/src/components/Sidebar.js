import React from 'react'

export const Sidebar = () =>{
    return(
        <div className="chat-sidebar">
        <h3><i className="fas fa-comments"></i> Room Name:</h3>
        <h2 id="room-name">JavaScript</h2>
        <h3><i className="fas fa-users"></i> Users</h3>
        <ul id="users">
          <li>Brad</li>
          <li>John</li>
          <li>Mary</li>
          <li>Paul</li>
          <li>Mike</li>
        </ul>
      </div>
    )
}