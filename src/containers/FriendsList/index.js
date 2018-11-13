import React from 'react'
import List from './List';

export default function FriendsList(props) {
    return (
        <div className="people-list" id="people-list">
            <List handleOnClick={props.handleOnClick}/>
        </div>
    )
}
