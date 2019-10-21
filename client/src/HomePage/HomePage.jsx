import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: [],
            rutes: [],
            addRutesMenu: false,
            submitted: false,
            ruteName: '',
            comment: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddingRute = this.handleAddingRute.bind(this);
        this.submitNewRute = this.submitNewRute.bind(this);
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
        userService.getRutesForUser().then((rutes) => this.setState({ rutes }));
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleAddingRute(e) {
        this.setState({ addRutesMenu: !this.state.addRutesMenu });
    }

    submitNewRute(e) {
        this.setState({ addRutesMenu: !this.state.addRutesMenu });
        userService.addRuteForUser(this.state.user.username, this.state.ruteName, this.state.comment).then(rutes => this.setState({ rutes }));
    }

    render() {
        const { user, users, rutes, addRutesMenu, ruteName, comment, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in to Climb Recort App!!</p>
                <h3>Users from secure api end point:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.length &&
                    <ul>
                        {users.map((user, index) =>
                            <li key={user.username}>
                                {user.firstName + ' ' + user.lastName}
                            </li>
                        )}
                    </ul>
                }
                <h3>Rutes for {user.firstName}:</h3>
                {rutes.length ?
                    <ul>
                        {rutes.map((rutes, index) =>
                            <li key={index}>
                                {'Name: '+ rutes.ruteName + ' Comment:' + rutes.comment}
                            </li>
                        )}
                    </ul> : null
                }
                <p>
                    <button className="btn btn-primary" disabled={false} onClick={this.handleAddingRute}>Add new rute</button>      
                </p>
                {addRutesMenu &&
                <form name="form">
                    <div className={'form-group' + (submitted && !ruteName ? ' has-error' : '')}>
                        <label htmlFor="ruteName">Name of the rute</label>
                        <input type="text" className="form-control" name="ruteName" value={ruteName} onChange={this.handleChange} />
                        {submitted && !ruteName &&
                            <div className="help-block">Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !comment ? ' has-error' : '')}>
                        <label htmlFor="comment">Comment</label>
                        <input type="comment" className="form-control" name="comment" value={comment} onChange={this.handleChange} />
                        {submitted && !comment &&
                            <div className="help-block">Comment is required</div>
                        }
                    </div>
                    <p>
                        <button className="btn btn-primary" disabled={false} onClick={this.submitNewRute}>Submit new rute</button>      
                    </p>
                    
                    {/*error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    */}
                </form>}
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export { HomePage };