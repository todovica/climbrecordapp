import React from 'react';
import InputFieldComponent from '../_components/InputFieldComponent';
import NavBarComponent from '../_components/NavBarComponent';
import WelcomeCardComponent from '../_components/WelcomeCardComponent';
import UsersCardComponent from '../_components/UsersCardComponent';
import RoutesCardComponent from '../_components/RoutesCardComponent';

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
        console.log("ddddd")
        this.setState({ addRutesMenu: !this.state.addRutesMenu });
    }

    submitNewRute(e) {
        this.setState({ addRutesMenu: !this.state.addRutesMenu });
        userService.addRuteForUser(this.state.user.username, this.state.ruteName, this.state.comment).then(rutes => this.setState({ rutes }));
    }

    render() {
        const { user, users, rutes, addRutesMenu, ruteName, comment, submitted } = this.state;
        return (
            <React.Fragment>
                <NavBarComponent />
                <div className="row home">
                    <WelcomeCardComponent user={user} />
                    <RoutesCardComponent user={user} users={users} rutes={rutes} addRutesMenu={addRutesMenu} ruteName={ruteName} comment={comment} submitted={submitted} handleAddingRute={this.handleAddingRute} />
                    <UsersCardComponent users={users} />
                </div>
            </React.Fragment>
        );
    }
}

export { HomePage };