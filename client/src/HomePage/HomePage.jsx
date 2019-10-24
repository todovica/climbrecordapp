import React from 'react';
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
            submitted: false,
            ruteName: '',
            comment: '',
            location: '',
            grade: ''
        };

        this.handleChange = this.handleChange.bind(this);
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

    render() {
        const { user, users, rutes, ruteName, comment, submitted, location, grade } = this.state;
        return (
            <React.Fragment>
                <NavBarComponent />
                <div className="row home">
                    <WelcomeCardComponent user={user} />
                    <RoutesCardComponent
                            user={user}
                            users={users}
                            rutes={rutes}
                            ruteName={ruteName}
                            comment={comment}
                            location={location}
                            grade={grade}
                            submitted={submitted}
                        />
                    <UsersCardComponent users={users} />
                </div>
            </React.Fragment>
        );
    }
}

export { HomePage };