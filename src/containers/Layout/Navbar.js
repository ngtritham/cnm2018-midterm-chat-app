import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { startLogout } from './../../actions/auth';

export function Navbar({avatar, name, startLogout}) {
    const navStyle = {
        // display: 'inline-block',
        display: 'table',
        width: '100%',
        height: '50px',
        backgroundColor: '#f48642',
        marginBottom: '20px'
    };

    const avatarStyle = {
        marginTop: '30px',
        verticalAlign: 'middle',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'table-cell',
        marginLeft: 'auto'
    }

    const nameStyle = {
        color: '#000',
        display: 'table-cell',
        // marginLeft: 'auto'
        float: 'right'
    }


    return (
        <div className="row" style={navStyle}>
        <button onClick={startLogout}>Đăng xuất</button>
            <p style={nameStyle}>{firebase.auth().currentUser.displayName}</p>
            <img src={firebase.auth().currentUser.photoURL} alt="Avatar" style={avatarStyle}></img>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Navbar);