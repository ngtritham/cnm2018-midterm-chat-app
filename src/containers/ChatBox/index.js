import React from 'react'
import Header from './Header';
import History from './History';
import MessageInput from './MessageInput';

export default () => {
    return (
        <div className="chat">
            <Header/>
            <History/>
            <MessageInput/>
        </div>
    )
}
