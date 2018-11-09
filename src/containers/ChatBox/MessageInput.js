import React from 'react'

export default function MessageInput() {
    return (
        <div className="chat-message clearfix">
            <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>
            <i className="fa fa-file-o"></i>
            &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o"></i>
            <button>Send</button>
        </div>
    )
}
