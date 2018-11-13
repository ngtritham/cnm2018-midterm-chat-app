import React from 'react'

export default function MessageInput({onSubmit, handleChosen}) {
    return (
        <div className="chat-message clearfix">
            <form onSubmit={onSubmit} id="mess-form">
                <input type="text" name="message"/>
                <label htmlFor="file">
                    <i className="fa fa-file-image-o" aria-hidden="true"></i>
                </label>
                <button name="submit">Send</button>
                <input className="inputfile" type="file" id="file" accept="image/*" onChange={handleChosen} />
            </form>
        </div>
    )
}