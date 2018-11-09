import React from 'react';
import MessageInput from './MessageInput';
import CurrentChatFriend from './CurrentChatFriend';
import ChatHistory from './ChatHistory';

export default () => {
    return (
        <div className="chat">
            <CurrentChatFriend/>
            <ChatHistory/>
            <MessageInput/>
        </div>
    )
}
