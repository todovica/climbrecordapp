import React from 'react';

import { userService } from '../_services';
import LoginQuoteComponent from '../_components/LoginQuoteComponent';
import InputFieldComponent from '../_components/InputFieldComponent';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, returnUrl } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });
        userService.login(username, password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(from);
                },
                error => this.setState({ error, loading: false })
            );
    }

    handleSignUp(e) {
        e.preventDefault();
        this.props.history.push({ pathname: "/signup" });
    }

    render() {
        const { username, password, submitted, loading, error } = this.state;
        return (
            <React.Fragment>
            <LoginQuoteComponent />

<div className="row justify-content-center">
<div className="col-4 col-offset-4 col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 col-lg-4 col-lg-offset-4 loginform">
<h2>Login</h2>
            <form name="form">
                <InputFieldComponent label={'Username'} htmlLabel={'username'} filedInput={username} submitted={submitted} handleChange={this.handleChange} />
                <InputFieldComponent label={'Password'} htmlLabel={'password'} filedInput={password} submitted={submitted} handleChange={this.handleChange} />
                <div className="form-group">
                    <button className="btn btn-primary btn-block" disabled={loading} onClick={this.handleLogin}>Login</button>
                </div>
                <div className="form-group">
                    <button className="btn btn-secondary btn-block" disabled={loading} onClick={this.handleSignUp}>Sign Up</button>
                </div>
                <div className="form-group" align="center">
                    {error && <div className={'alert alert-danger'}>{error}</div>}
                    {loading && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                </div>
            </form>
            </div>
            </div>
            </React.Fragment>
        );
    }
}

export { LoginPage }; 