import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaSpa } from "react-icons/fa";

class WelcomeCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-12 col-sm-3">
                        <div className="card-body">
                            <FaUserCircle className="welcomeicon"/>
                            <h5 className="card-title">Hi {this.props.user.firstName}! <FaSpa /></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Welcome to Climb Record App!!</h6>
                            <p className="card-text">This is a perfect place for you to keep track of climbing scores and get in touch with awesome people.</p>
                        </div>
                    </div>
            );
        }
}

export default WelcomeCardComponent; 