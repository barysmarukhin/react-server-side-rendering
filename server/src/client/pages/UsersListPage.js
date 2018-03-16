import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

class UsersListPage extends Component {
    //it is not useful since we use initialState when the store is created
    componentDidMount() {
        // this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    render() {
        return (
            <div>
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export { loadData };

export default {
    loadData,
    component: connect(mapStateToProps,{ fetchUsers })(UsersListPage)
}
