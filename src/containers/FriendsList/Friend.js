import React from "react";
import className from 'classnames';
const friendAvatarStyle = {
    height: '55px',
    width: '55px',
    borderRadius: '50%'
}

export class Friend extends React.Component {
    onClick = () => {
        this.props.handleOnClick(this.props.friendInfo);
    };

    render() {
        let status;
        if(this.props.friendInfo.active) {
            status = 'fa fa-circle online';
        } else {
            status = 'fa fa-circle offline';
        }
        return (
            <li className="clearfix" onClick={() => this.onClick()}>
                <img src={this.props.friendInfo.avatarUrl} alt="avatar" style={friendAvatarStyle}/>
                <div className="about">
                    <div className="name">{this.props.friendInfo.displayName}</div>
                    <div className="status">
                        <i className={status} />
                    </div>
                </div>
            </li>
        );
    }
}

export default Friend;
