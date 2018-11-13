import React from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import Header from './Header';
import { connect } from 'react-redux';
import { sendMessage, startListening } from './../../actions/messages';

export class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preImg: [],
            inputImg: [],
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const message = e.target.message.value;

        if (!message.trim() && this.state.inputImg === []) {
            console.log(this.state.inputImg)
            e.target.submit.diabled = true;
            return;
        }


        this.props.sendMessage(this.props.user.uid, message, this.state.inputImg);
        e.target.reset();

        this.setState({
            preImg: [],
            inputImg: [],
        })
    }

    handleChosen = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                let preImgs = this.state.preImg.concat(e)
                this.setState({ preImg: preImgs })
            }
            reader.readAsDataURL(event.target.files[0])

            let tmp = this.state.inputImg.concat(event.target.files[0])
            this.setState({ inputImg: tmp })
            event.target.value = null;
        }
    }

    handleImageClick = (e) => {
        let rm = e.target.getAttribute('data-key')
        let tmpPre = this.state.preImg
        tmpPre.splice(rm, 1)
        let tmpIn = this.state.inputImg
        tmpIn.splice(rm, 1)
        this.setState({ inputImg: tmpIn, preImg: tmpPre })
    }

    render() {
        let listMess = [];
        this.props.mess.list.forEach((element, index) => {
            listMess.push(
                <Message key={index + 9999} mess={element} auth={this.props.auth} user={this.props.user} />
            )
        });

        let listimg = this.state.preImg.map((img, index) => {
            return (
                <img key={index} data-key={index} src={img.target.result} width="48" height="48"
                    onClick={(e) => this.handleImageClick(e)} />
            )
        })

        return (
            <div>
                <Header friend={this.props.user}/>
                <div className="chat-history">
                    <ul>
                        {listMess}
                    </ul>
                </div>
                <MessageInput onSubmit={(e) => this.onSubmit(e)} handleChosen={(e) => this.handleChosen(e)}/>
                <div>
                    {listimg}
                </div>
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
    sendMessage: (uid, text, img) => dispatch(sendMessage(uid, text, img)),
    startListening: (uid) => dispatch(startListening(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);