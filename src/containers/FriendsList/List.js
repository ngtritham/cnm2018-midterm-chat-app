import React from 'react'
import Friend from './Friend';
import Search from './Search';
import { connect } from 'react-redux';
import { startUsersList } from './../../actions/users';

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
                if(this.state.filter === "" || element.displayName.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1) {
                    listFriend.push(
                        <Friend key={element.uid} friendInfo={element} handleOnClick={this.props.handleOnClick} />
                    )
                }
            }

        });

        return listFriend;
    }

    handleSearchChange = (e) => {
        console.log(e.target)
        this.setState({
            filter: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <Search onChange={this.handleSearchChange}/>
                <ul className="list">
                    {this.createUserComponent()}
                </ul>
            </div>

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
