import React from 'react'
import Friend from './Friend';
import { connect } from 'react-redux';
import { startUsersList } from './../../actions/users';

// export default function List() {
//     return (
//         <ul className="list">
//             <Friend/>
//             <Friend/>
//             <Friend/>
//         </ul>
//     )
// }



export class FriendsList extends React.Component {
    state = ({
        filter: "",
    })

    componentWillMount() {
        this.props.startUsersList();
    }

    createUserComponent = () => {
        let listFriend = [];
        this.props.users.forEach(element => {
            if(element.uid !== this.props.auth.uid) {
                listFriend.push(
                    <Friend key={element.uid} friendInfo={element} handleOnClick={this.props.handleOnClick} />
                )
            }

        });

        return listFriend;
    }

    render() {
        return (
            <ul className="list">
                {this.createUserComponent()}
            </ul>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
    startUsersList: () => dispatch(startUsersList())
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
