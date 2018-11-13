import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../../actions/auth';

const divLoginStyle = {
    position: 'absolute',
    margin: 'auto',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '200px',
    height: '200px',
}
export class LoginPage extends React.Component {
    render() {
        return (
            <div style={divLoginStyle}>
                <button onClick={this.props.startLogin}>Login with Google</button>
            </div>

        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);