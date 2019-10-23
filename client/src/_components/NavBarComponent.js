import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

class NavBarComponent extends React.Component {

    render() {
        return (
            <div className="jumbotron-fluid navbarmain">
                <div className="d-flex flex-row-reverse">
                    <div className="p-2"><a href="/login"><FaSignOutAlt className="navbaricon" to="/login"/></a></div>
                    <div className="p-2"><FaFacebookSquare className="navbaricon"/></div>
                    <div className="p-2"><FaInstagram className="navbaricon"/></div>
                </div>
            </div>
            );
        }
}

export default NavBarComponent; 