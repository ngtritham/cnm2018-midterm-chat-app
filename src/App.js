import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import { firebase, configureStore } from './firebase/firebase';
import './App.css';

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
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);
	}
}

export default App;
