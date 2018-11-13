import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../../actions/auth';

export class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Login by Google</h1>
                <button onClick={this.props.startLogin}>Login with Google</button>
            </div>

        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);