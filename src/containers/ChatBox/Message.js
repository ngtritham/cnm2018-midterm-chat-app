import React from 'react'

export default (props) => {
    const its_me = (props.mess.uid === props.auth.uid);

    let listImg = [];
    let parts = props.mess.text.match(/(https?|ftp:)([^\s]+)/g);
    if (parts) {
        parts.map((img, index) => {
            listImg.push(
                // <li className={mine ? "sent" : "replies"}>
                //     <img src={mine ? props.auth.avatarUrl : props.user.avatarUrl} alt="" />
                //     <img className="imageMess" key={index} src={img} />
                // </li>

                <li className={its_me ? 'clearfix' : null}>
                    <div className={its_me ? "message-data align-right" : "message-data"} >
                        {/* <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp; */}
                        <span className="message-data-name">{props.user.name}</span> <i className={its_me ? "fa fa-circle me" : "fa fa-circle online"} ></i>

                    </div>
                    <div className={its_me ? "message other-message float-right" : "message my-message"} >
                        {/* <img key={index} src={img} width="100px" height="100px"/> */}
                        {img}
                    </div>
                </li>
            )
        })
    }

    if (props.mess.media) {
        console.log(props.mess.media)
        Object.values(props.mess.media).map((img, index) => {
            listImg.push(
                // <li className={mine ? "sent" : "replies"}>
                //     <img src={mine ? props.auth.avatarUrl : props.user.avatarUrl} alt="" />
                //     <img className="imageMess" key={index} src={img} />
                // </li>
                <li className={its_me ? 'clearfix' : null}>
                    <div className={its_me ? "message-data align-right" : "message-data"} >
                        {/* <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp; */}
                        <span className="message-data-name">{props.user.name}</span> <i className={its_me ? "fa fa-circle me" : "fa fa-circle online"} ></i>
        
                    </div>
                    <div className={its_me ? "message other-message float-right" : "message my-message"} >
                        {/* <img key={index} src={img} width="100px" height="100px"/> */}
                        {img}
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
                    {/* <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp; */}
                    <span className="message-data-name">{props.user.name}</span> <i className={its_me ? "fa fa-circle me" : "fa fa-circle online"} ></i>

                </div>
                <div className={its_me ? "message other-message float-right" : "message my-message"} >
                    {props.mess.text}
                </div>
            </li>
        )
    }

    return (
        <li className={its_me ? 'clearfix' : null}>
            <div className={its_me ? "message-data align-right" : "message-data"} >
                {/* <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp; */}
            <span className="message-data-name">{props.user.name}</span> <i className={its_me ? "fa fa-circle me" : "fa fa-circle online"} ></i>

            </div>
            <div className={its_me ? "message other-message float-right" : "message my-message"} >
                {props.mess.text}
            </div>
        </li>
    )
}
