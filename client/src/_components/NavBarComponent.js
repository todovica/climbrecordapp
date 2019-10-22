import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

class NavBarComponent extends React.Component {

    render() {
        return (
            <div className="jumbotron-fluid navbar111">
                <div className="d-flex flex-row-reverse">
                    <div className="p-2"><FaSignOutAlt style={{ margin: '5px', height: '2em', width: '2em'}}/></div>
                    <div className="p-2"><FaFacebookSquare style={{ margin: '5px', height: '2em', width: '2em'}}/></div>
                    <div className="p-2"><FaInstagram style={{ margin: '5px', height: '2em', width: '2em'}}/></div>
                </div>
            </div>
            );
        }
}

export default NavBarComponent; 