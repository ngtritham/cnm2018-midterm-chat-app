import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import FriendsList from './../containers/FriendsList/FriendsList';
import ChatBox from './../containers/ChatBox/ChatBox';

export const history = createHistory();
const AppRouter = () => (
  <div className="container clearfix">
    <FriendsList />
    <ChatBox />
  </div>
);

export default AppRouter;
