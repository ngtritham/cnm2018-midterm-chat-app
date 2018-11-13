import React from 'react'

const imgStyle = {
    width:'100%',
    height: '100%',
    maxWidth:'400px',
    maxHeight:'400px'
}

export default (props) => {
    const its_me = (props.mess.uid === props.auth.uid);

    let listImg = [];
    let parts = props.mess.text.match(/(https?|ftp:)([^\s]+)/g);
    if (parts) {
        parts.map((img, index) => {
            listImg.push(
                <li className={its_me ? 'clearfix' : null}>
                    <div className={its_me ? "message-data align-right" : "message-data"} >
                        <span className="message-data-time">16:12 PM, Hôm nay</span> &nbsp; &nbsp;
                        <span className="message-data-name">{props.user.name}</span> <i className={its_me ? "fa fa-circle me" : "fa fa-circle online"} ></i>

                    </div>
                    <div className={its_me ? "message other-message float-right" : "message my-message"} >
                        <img key={index} src={img} style={imgStyle}/>
                    </div>
                </li>
            )
        })
    }

    if (props.mess.media) {
        Object.values(props.mess.media).map((img, index) => {
            listImg.push(
                <li className={its_me ? 'clearfix' : null}>
                    <div className={its_me ? "message-data align-right" : "message-data"} >
                        <span className="message-data-time">15:23 PM, Hôm nay</span> &nbsp; &nbsp;
                        <span className="message-data-name">{props.user.name}</span> <i className={its_me ? "fa fa-circle me" : "fa fa-circle online"} ></i>

                    </div>
                    <div className={its_me ? "message other-message float-right" : "message my-message"} >
                        <img key={index} src={img} style={imgStyle}/>
                    </div>
                </li>
            )
        })
    }

    let mess;
    if (props.mess.text != "") {
        mess = (
            <li className={its_me ? 'clearfix' : null}>
                <div className={its_me ? "message-data align-right" : "message-data"} >
                    <span className="message-data-time">13:19 PM, Hôm nay</span> &nbsp; &nbsp;
                    <span className="message-data-name">{props.user.name}</span> <i className={its_me ? "fa fa-circle me" : "fa fa-circle online"} ></i>

                </div>
                <div className={its_me ? "message other-message float-right" : "message my-message"} >
                    {props.mess.text}
                </div>
            </li>
        )
    }

    return (
        <div>
            {mess}
            {listImg}
        </div>
    )
}
