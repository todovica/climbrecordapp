

import React from 'react';
import InputFieldComponent from '../_components/InputFieldComponent';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { userService } from '../_services';

class RoutesCardComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Comment: '',
            submitted: false,
            addRutesMenu: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddingRute = this.handleAddingRute.bind(this);
        this.submitNewRute = this.submitNewRute.bind(this);
    }

    handleChange(e) {
        console.log(e.target);
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleAddingRute(e) {
        this.setState({ addRutesMenu: !this.state.addRutesMenu });
    }

    submitNewRute(e) {
        console.log(this.props.user.username + ' ' + this.state.ruteName + ' ' + this.state.comment + ' ' + this.state.location + ' ' + this.state.grade)
        this.setState({ addRutesMenu: !this.state.addRutesMenu });
        userService.addRuteForUser(this.props.user.username, this.state.ruteName, this.state.comment, this.state.location, this.state.grade).then(rutes => this.setState({ rutes }));
    }

    render() {
        const { user, rutes } = this.props;
        const { ruteName, comment, location, grade, submitted, addRutesMenu } = this.state;
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
                                            <div>{rutes.location} </div>
                                            <div>{rutes.comment} </div>
                                        </div>
                                        <div><FaEdit />{' '}<FaTrashAlt /></div>
                                    </div>
                                    </div></div>}
                                 
                    })}
                    </div> : null}
                <p>
                <button className="btn btn-primary" disabled={false} onClick={this.handleAddingRute}>Add new rute</button>     
                </p>
                {addRutesMenu &&
                <form name="form">
                    <InputFieldComponent label={'Route Name'} htmlLabel={'ruteName'} filedInput={ruteName} submitted={submitted} handleChange={this.handleChange} />
                    <InputFieldComponent label={'Comment'} htmlLabel={'comment'} filedInput={comment} submitted={submitted} handleChange={this.handleChange} />
                    <InputFieldComponent label={'Location'} htmlLabel={'location'} filedInput={location} submitted={submitted} handleChange={this.handleChange} />
                    <InputFieldComponent label={'Grade'} htmlLabel={'grade'} filedInput={grade} submitted={submitted} handleChange={this.handleChange} />
                
                    <p>
                    <button className="btn btn-primary" disabled={false} onClick={this.submitNewRute}>Submit new rute</button>     
                    </p>
                    
                    {/*error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    */}
                </form>}
                
                </div>
            );
        }
}

export default RoutesCardComponent; 