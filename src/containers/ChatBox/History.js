// import React from 'react'

// export default () => {
//     return (
//         <div className="chat-history">
//             <ul>
//                 <li className="clearfix">
//                     <div className="message-data align-right">
//                         <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
//                         <span className="message-data-name">Olia</span> <i className="fa fa-circle me"></i>

//                     </div>
//                     <div className="message other-message float-right">
//                         Hi Vincent, how are you? How is the project coming along?
//                     </div>
//                 </li>

//                 <li>
//                     <div className="message-data">
//                         <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
//                         <span className="message-data-time">10:12 AM, Today</span>
//                     </div>
//                     <div className="message my-message">
//                         Are we meeting today? Project has been already finished and I have results to show you.
//                     </div>
//                 </li>

//                 <li className="clearfix">
//                     <div className="message-data align-right">
//                         <span className="message-data-time">10:14 AM, Today</span> &nbsp; &nbsp;
//                         <span className="message-data-name">Olia</span> <i className="fa fa-circle me"></i>

//                     </div>
//                     <div className="message other-message float-right">
//                         Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any
//                         problems at the last phase of the project?
//                     </div>
//                 </li>

//                 <li>
//                     <div className="message-data">
//                         <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
//                         <span className="message-data-time">10:20 AM, Today</span>
//                     </div>
//                     <div className="message my-message">
//                         Actually everything was fine. I'm very excited to show this to our team.
//                     </div>
//                 </li>

//                 {/* <li>
//                     <div className="message-data">
//                         <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
//                         <span className="message-data-time">10:31 AM, Today</span>
//                     </div>
//                     <i className="fa fa-circle online"></i>
//                     <i className="fa fa-circle online" style="color: #AED2A6"></i>
//                     <i className="fa fa-circle online" style="color:#DAE9DA"></i>
//                 </li> */}

//             </ul>

//         </div>
//     )
// }

import React from 'react';
import Message from './Message';
import { connect } from 'react-redux';
import { sendMessage, startListening } from './../../actions/messages';

export class Messages extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        const message = e.target.message.value;

        if (!message.trim()) {
            e.target.submit.diabled = true;
            return;
        }

        this.props.sendMessage(this.props.user.uid, message);
        e.target.reset();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        let listMess = [];
        this.props.mess.list.forEach(element => {
            listMess.push(
                <Message mess={element} auth={this.props.auth} user={this.props.user} />
            )
        });

        return (
            <div className="chat-history">
                <ul>
                    {listMess}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.messages.user,
    mess: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (uid, text) => dispatch(sendMessage(uid, text)),
    startListening: (uid) => dispatch(startListening(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);