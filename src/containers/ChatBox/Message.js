import React from 'react'

export default () => {
    const its_me = (this.props.mess.uid === this.props.auth.uid);
    return (
        <li className={its_me ? 'clearfix' : null}>
            <div className={its_me ? "message-data align-right" : "message-data"} >
                {/* <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp; */}
            <span className="message-data-name">{this.props.user.name}</span> <i className={its_me ? "fa fa-circle me" : "fa fa-circle online"} ></i>

            </div>
            <div className={its_me ? "message other-message float-right" : "message my-message"} >
                {this.props.mess.text}
            </div>
        </li>
    )
}
