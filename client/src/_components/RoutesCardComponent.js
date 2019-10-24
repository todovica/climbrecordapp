

import React from 'react';
import AddRuteComponent from '../_components/AddRuteComponent';

import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { userService } from '../_services';

class RoutesCardComponent extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddingRute = this.handleAddingRute.bind(this);
    }

    handleAddingRute(e) {
        document.getElementById("addRouteOverlay").style.display = "block";
    }

    submitDeletionOfRoute(username, ruteName, comment, location, grade) {
        console.log('delete'  + ' ' + username + ' ' + ruteName + ' ' +  comment + ' ' +  location + ' ' +  grade);
        userService.deleteRuteForUser(username, ruteName, comment, location, grade).then(u => console.log(u));
    }

    render() {
        const { user, rutes } = this.props;
        return (
            <div className="col-12 col-sm-6">
                <div className="searchbutton mb-4">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
                {rutes.length ?
                <div className="card cardPadding noborder">
                    {rutes.map((rutes, index) => {
                        if(rutes.username === user.username) {
                            return <div className="container" key={index}>
                                    <a data-toggle="collapse" href={'#'+rutes.ruteName.replace(/\s+/g,'')} role="button" aria-expanded="false" aria-controls={rutes.ruteName.replace(/\s+/g,'')}>
                                        <div className="row justify-content-between" >
                                        <div>{rutes.ruteName}</div><div>{rutes.grade}</div></div>
                                    </a>
                                    <hr></hr>
                                    <div className="collapse" id={rutes.ruteName.replace(/\s+/g,'')}>
                                    <div className="row expandedarea justify-content-between">
                                        <div className="expandedtext">
                                            <div>{rutes.location}</div>
                                            <div>{rutes.comment}</div>
                                        </div>
                                        <div>
                                            <a id="myLink" title="Click to delete route" href="#" onClick={() => console.log("editing to be implemented")}><FaEdit /></a>
                                            {' '}
                                            <a id="myLink" title="Click to delete route" href="#" onClick={this.submitDeletionOfRoute.bind(this, user.username, rutes.ruteName, rutes.comment, rutes.location, rutes.grade)}><FaTrashAlt /></a>
                                        </div>
                                    </div>
                                    </div></div>}
                                 
                    })}
                    </div> : null}
                <p>
                <button className="btn btn-primary" disabled={false} onClick={this.handleAddingRute}>Add new rute</button>     
                </p>

                <AddRuteComponent username={user.username} />
                
                
                </div>
            );
        }
}

export default RoutesCardComponent; 