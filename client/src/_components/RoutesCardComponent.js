

import React from 'react';
import AddRuteComponent from '../_components/AddRuteComponent';

import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { userService } from '../_services';

class RoutesCardComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rutes: [],
            loading: false
        };

        this.handleAddingRute = this.handleAddingRute.bind(this);
        this.submitDeletionOfRoute = this.submitDeletionOfRoute.bind(this);
    }

    componentDidMount() {
        userService.getRutesForUser().then((rutes) => this.setState({ rutes }));
    }

    handleAddingRute(e) {
        document.getElementById("addRouteOverlay").style.display = "block";
    }

    submitDeletionOfRoute(username, ruteName, comment, location, grade) {
        this.setState({loading: true});
        console.log('delete'  + ' ' + username + ' ' + ruteName + ' ' +  comment + ' ' +  location + ' ' +  grade);
        userService.deleteRuteForUser(username, ruteName, comment, location, grade)
            .then(rutes => this.setState({ rutes }))
            .then(() => this.setState({loading: false}));
    }

    render() {
        const { user } = this.props;
        const { rutes, loading } = this.state;
        return (
            <div className="col-12 col-sm-6">
                <div className="searchbutton mb-4">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
                {rutes.length && !loading ?
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
                    <p style={{marginTop: '15px'}}>
                    <button className="btn btn-primary" disabled={false} onClick={this.handleAddingRute}>Add new rute</button>     
                    </p>
                    </div> : <div align="center"><img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></div>}
    

                <AddRuteComponent username={user.username} />
                
                
                </div>
            );
        }
}

export default RoutesCardComponent; 