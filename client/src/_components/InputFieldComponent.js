import React from 'react';

class InputFieldComponent extends React.Component {

    constructor(props) {
        super(props);
        

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e);
    }


    render() {
        const { filedInput, label, submitted } = this.props;
        return (
            <div className={'form-group' + (submitted && !filedInput ? ' has-error' : '')}>
                <label htmlFor={label}>{label}</label>
                <input type="text" className="form-control" name={label} value={filedInput} onChange={this.handleChange} />
                {submitted && !filedInput &&
                    <div className="help-block">{label} is required</div>
                }
            </div>
        );
    }

}

export default InputFieldComponent ; 