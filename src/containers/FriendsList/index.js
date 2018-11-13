import React from 'react'
import Search from './Search';
import List from './List';

export default function FriendsList(props) {
    return (
        <div className="people-list" id="people-list">
            <Search/>
            <List handleOnClick={props.handleOnClick}/>
        </div>
    )
}
