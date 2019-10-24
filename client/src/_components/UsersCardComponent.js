import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import OverlayComponent from '../_components/OverlayComponent';

import { userService } from '../_services';

class UsersCardComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rutes: []
        };

        this.viewProfile = this.viewProfile.bind(this);
    }

    viewProfile(user) {
        userService.getRutesForUser()
            .then((rutes) => this.setState({ rutes }))
            .then(() => document.getElementById(user.username + 'ProfileOverlay').style.display = "block");
    }

    render() {
        const { rutes } = this.state;
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
                                <a onClick={this.viewProfile.bind(this, user)} className="row justify-content-md-start">
                                    <div className="col-2">
                                        <FaUserCircle />
                                    </div>
                                    <div className="col-md-auto">
                                        {user.firstName + ' ' + user.lastName}
                                    </div>
                                </a>
                                <OverlayComponent id={user.username + 'ProfileOverlay'}>
                                    <div className="overlayclass">
                                    <div className="container profileheader d-flex justify-content-between">
                                        <div><div><FaUserCircle className="welcomeicon" /></div><div>{user.firstName + ' ' + user.lastName}</div><hr /></div>
                                        <div><button type="button" className="close" onClick={() => document.getElementById(user.username + 'ProfileOverlay').style.display = 'none'} aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="container profilecontent">
                                        {rutes.map((rutes, index) => {
                                            if(rutes.username === user.username) {
                                                return <div className="container" key={index}>
                                                    <a data-toggle="collapse" href={'#'+rutes.ruteName.replace(/\s+/g,'')} role="button" aria-expanded="false" aria-controls={rutes.ruteName.replace(/\s+/g,'')}>
                                                        <div className="row justify-content-between">
                                                            <div>{rutes.ruteName}</div><div>{rutes.grade}</div>
                                                        </div>
                                                    </a>
                                                    <hr></hr>
                                                    <div className="collapse" id={rutes.ruteName.replace(/\s+/g,'')}>
                                                        <div className="row expandedarea justify-content-between">
                                                            <div className="expandedtext">
                                                                <div>{rutes.location}</div>
                                                                <div>{rutes.comment}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                }})}
                                    </div>
                                </div>
                                </OverlayComponent>
                            </li>)}
                            </ul>}
                        </div>
                    </div>
            );
        }
}

export default UsersCardComponent; 








