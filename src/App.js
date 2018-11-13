// import React, { Component } from 'react';
// import './App.css';
// import firebase from 'firebase';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// firebase.initializeApp({
// 	apiKey: "AIzaSyAZogLvcgSDlSD5cQ1_CaKEaEZc4EvBDnw",
// 	authDomain: "chat-app-28a7a.firebaseapp.com"
// })

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isSignedIn: false
// 		}
// 	}

// 	uiConfig = {
// 		signInFlow: "popup",
// 		signInOptions: [
// 			firebase.auth.GoogleAuthProvider.PROVIDER_ID
// 		],
// 		callbacks: {
// 			signInSuccess: () => false
// 		}
// 	}

// 	componentDidMount = () => {
// 		firebase.auth().onAuthStateChanged(user => {
// 		this.setState({ isSignedIn: !!user })
// 		})
// 	}

// 	render() {
// 		return (
// 		<div className="App">
// 			{this.state.isSignedIn ? (
// 			<span>
// 				<div>Đăng nhập thành công!</div>
// 				<button onClick={() => firebase.auth().signOut()}>Đăng xuất</button>
// 				<h1>{firebase.auth().currentUser.displayName}</h1>
// 				<img
// 				alt="profile avatar"
// 				src={firebase.auth().currentUser.photoURL}
// 				/>
// 			</span>
// 			) : (
// 			<StyledFirebaseAuth
// 				uiConfig={this.uiConfig}
// 				firebaseAuth={firebase.auth()}
// 			/>
// 			)}
// 		</div>
// 		);
// 	}
// }

// export default App;

// import React, { Component } from 'react';
// // import CSS
// import './App.css';

// import Navbar from './containers/Layout/Navbar';

// class App extends Component {
// 	render() {
// 		return (
// 			<Navbar/>
// 		);
// 	}
// }

// export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import { firebase, configureStore } from './firebase/firebase';
import './App.css';
import FriendsList from './containers/FriendsList/index';
import ChatBox from './containers/ChatBox/index';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		const name = user.displayName ? user.displayName : user.email;
		store.dispatch(login(user.uid, name, user.photoURL));
		if (history.location.pathname === '/') {
			history.push('/home');
		}
	} else {
		store.dispatch(logout());
		history.push('/');
	}
});


class App extends Component {
	render() {
		return (
			// <div className="container clearfix">
			// 	<FriendsList />
			// 	<ChatBox />
			// </div>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);
	}
}

export default App;
