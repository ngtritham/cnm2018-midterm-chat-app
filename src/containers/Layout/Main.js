import React, { Component } from 'react'
import FriendsList from './../FriendsList/index';
import ChatBox from './../ChatBox/index';
import { connect } from 'react-redux';
import { startOnline } from './../../actions/auth';
import { startUserChange } from './../../actions/messages';

export class Main extends Component {
  componentWillMount() {
    this.props.startOnline();
  }

  handleOnClick = (user) => {
    this.props.startUserChange(user);
  }

  render() {
    return (
      <div className="container clearfix">
        <FriendsList handleOnClick={this.handleOnClick}/>
        <ChatBox />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.messages.user
});

const mapDispatchToProps = (dispatch) => ({
  startUserChange: (uid) => dispatch(startUserChange(uid)),
  startOnline: () => dispatch(startOnline()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);