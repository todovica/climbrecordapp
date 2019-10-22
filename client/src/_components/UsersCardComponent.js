import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

class UsersCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { users } = this.props;
        return (
            <div className="col-12 col-sm-3">
                    <div className="card-body menu">
                            <h5 className="card-subtitle mb-2 text-muted">Members</h5>
                            {users.loading && <em>Loading users...</em>}
                            {users.length &&
                        <ul>
                            {users.map((user, index) =>
                            <li key={user.username}>
                                <div className="row justify-content-md-start">
                                    <div className="col-2">
                                        <FaUserCircle />
                                    </div>
                                    <div className="col-md-auto">
                                        {user.firstName + ' ' + user.lastName}
                                    </div>
                                </div>
                            </li>)}
                        </ul>}
                        </div>
    

                        
                    </div>
            );
        }
}

export default UsersCardComponent; 








