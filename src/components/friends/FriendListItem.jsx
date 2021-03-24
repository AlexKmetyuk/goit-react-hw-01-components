import React from 'react'

export default function FriendListItem({friend}) {
    return (
        <li className="item">
            <span className={friend.isOnline ? "online" : "offline"}></span>
            <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p className="name">{friend.name}</p>
        </li>
    )
}