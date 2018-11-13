import { compose, combineReducers, applyMiddleware, createStore } from "redux";
import {
  reactReduxFirebase,
  getFirebase,
  firebaseReducer
} from "react-redux-firebase";
import firebase from "firebase";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import usersReducer from "../reducers/users";
import messagesReducer from "../reducers/messages";

var config = {
  apiKey: "AIzaSyAZogLvcgSDlSD5cQ1_CaKEaEZc4EvBDnw",
  authDomain: "chat-app-28a7a.firebaseapp.com",
  databaseURL: "https://chat-app-28a7a.firebaseio.com",
  projectId: "chat-app-28a7a",
  storageBucket: "chat-app-28a7a.appspot.com",
  messagingSenderId: "501216473772"
};

const configDB = {
  userProfile: "users", // firebase root where user profiles are stored
  firebaseStateName: "firebase" // should match the reducer name ('firebase' is default)
};

export function configureStore(initialState = {}) {
  firebase.initializeApp(config);

  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, configDB),
    applyMiddleware(thunk.withExtraArgument(getFirebase))
  )(createStore);

  const store = createStoreWithFirebase(
    combineReducers({
      firebase: firebaseReducer,
      auth: authReducer,
      users: usersReducer,
      messages: messagesReducer
    })
  );

  return store;
}

export { firebase, configureStore as default };
