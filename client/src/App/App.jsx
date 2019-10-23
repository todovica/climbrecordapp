import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../index.css';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { SignUpPage } from '../SignUpPage';

class App extends React.Component {
    render() {
        return (
                
                        <Router>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/signup" component={SignUpPage} />
                            </div>
                        </Router>

        );
    }
}

export { App }; 