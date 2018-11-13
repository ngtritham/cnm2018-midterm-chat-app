import React from 'react'

const friendAvatarStyle = {
    height: '55px',
    width: '55px',
    borderRadius: '50%'
}

export default function Header(props) {
    if (props.friend.uid !== null) {
        return (
            <div className="chat-header clearfix">
                <img src={props.friend.avatarUrl} alt="avatar" style={friendAvatarStyle} />

                <div className="chat-about">
                    <div className="chat-with">Chat with {props.friend.displayName}</div>
                    {/* <div className="chat-num-messages">already 1 902 messages</div> */}
                </div>
                <i className="fa fa-star"></i>
            </div>
        )
    } else {
        return null;
    }
}
