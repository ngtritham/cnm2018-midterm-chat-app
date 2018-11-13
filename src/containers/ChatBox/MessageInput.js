import React from 'react'

export default function MessageInput({onSubmit, handleChosen}) {
    return (
        <div className="chat-message clearfix">
            <form onSubmit={onSubmit} id="mess-form">
                <input type="text" name="message"/>
                <button name="submit">Send</button>
                <div>
                <label htmlFor="file">
                    <i className="fa fa-file-image-o" aria-hidden="true"></i>
                    <input className="inputfile" type="file" id="file" accept="image/*" width="1px" onChange={handleChosen} />
                </label>
                </div>
            </form>
        </div>
    )
}