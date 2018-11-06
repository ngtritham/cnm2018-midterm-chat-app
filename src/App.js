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

import React, { Component } from 'react';
// import CSS
import './App.css';

import Navbar from './containers/Layout/Navbar';

class App extends Component {
	render() {
		return (
			<Navbar/>
		);
	}
}

export default App;