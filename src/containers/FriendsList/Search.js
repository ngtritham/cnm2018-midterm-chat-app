import React from 'react'

export default function Search(props) {
    return (
        <div className="search">
            <input type="text" placeholder="search" onChange={props.onChange}/>
            <i className="fa fa-search"></i>
        </div>
    )
}
