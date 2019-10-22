

import React from 'react';
import InputFieldComponent from '../_components/InputFieldComponent';

class RoutesCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { user, rutes, addRutesMenu, ruteName, comment, submitted } = this.props;
        return (
            <div className="col-12 col-sm-6">
                <div className="active-pink-3 active-pink-4 mb-4">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
                {rutes.length ?
                <div className="card" style={{ padding: '10px'}}>
                    {rutes.map((rutes, index) => {
                        if(rutes.username === user.username) {
                            return <div className="container" key={index}>
                                    <a data-toggle="collapse" href={'#'+rutes.ruteName} role="button" aria-expanded="false" aria-controls={rutes.ruteName}>
                                        <div className="row justify-content-between" >
                                        <div>{rutes.ruteName}</div><div>7a+</div></div>
                                    </a>
                                    <hr></hr>
                                    <div className="collapse" id={rutes.ruteName}>
                                    <div className="row">
                                        <div> {rutes.comment} </div>
                                        <div></div>
                                    </div>
                                    </div></div>}
                                 
                    })}
                    </div> : null}
                <p>
                    <button className="btn btn-primary" disabled={false} onClick={this.props.handleAddingRute}>Add new rute</button>      
                </p>
                {addRutesMenu &&
                <form name="form">
                    <InputFieldComponent label={'ruteName'} filedInput={ruteName} submitted={submitted} handleChange={this.handleChange} />
                    <InputFieldComponent label={'comment'} filedInput={comment} submitted={submitted} handleChange={this.handleChange} />
                
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