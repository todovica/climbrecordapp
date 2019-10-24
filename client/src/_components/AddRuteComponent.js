import React, { Children } from 'react';
import OverlayComponent from '../_components/OverlayComponent';
import InputFieldComponent from '../_components/InputFieldComponent';

import { userService } from '../_services';

class AddRuteComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ruteName: '',
            comment: '',
            location: '',
            grade: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitNewRute = this.submitNewRute.bind(this);
        
    }

    handleChange(e) {
        console.log(e.target);
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitNewRute(e) {

        this.setState({ submitted: true });
        // stop here if form is invalid
        if (!(this.props.username && this.state.ruteName && this.state.comment && this.state.location && this.state.grade)) {
            console.log("form input is invalid");
            return;
        }
        userService.addRuteForUser(this.props.username, this.state.ruteName, this.state.comment, this.state.location, this.state.grade)
            .then(() => this.props.updateRoutesList());
        document.getElementById("addRouteOverlay").style.display = "none";   
    }


    render() {
        const { ruteName, comment, location, grade, submitted } = this.state;
        return (
            <OverlayComponent id={"addRouteOverlay"}>
                <div className="overlayclass">
                    <h4>Add new route</h4>
                    <form name="form" className="formmargin">
                    <InputFieldComponent label={'Route Name'} htmlLabel={'ruteName'} filedInput={ruteName} submitted={submitted} handleChange={this.handleChange} />
                    <div className="d-flex flex-wrap">
                        <InputFieldComponent label={'Location'} htmlLabel={'location'} filedInput={location} submitted={submitted} handleChange={this.handleChange} />
                        <div className="gradepicker">
                            <InputFieldComponent label={'Grade'} htmlLabel={'grade'} filedInput={grade} submitted={submitted} handleChange={this.handleChange} />
                        </div>
                    </div>
                    <InputFieldComponent label={'Comment'} htmlLabel={'comment'} filedInput={comment} submitted={submitted} handleChange={this.handleChange} />
                    
                    
                    {/*error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    */}
                    </form>

                    <div className="d-flex justify-content-between">
                    
                    <button className="btn btn-primary" disabled={false} onClick={this.submitNewRute}>Submit new rute</button>     
                    
                    <button className="btn btn-secondary" disabled={false} onClick={()=>document.getElementById("addRouteOverlay").style.display = "none"}>Cancel</button>     
                    
                    </div>
                </div>
            </OverlayComponent>
        );
    }

}

export default AddRuteComponent; 