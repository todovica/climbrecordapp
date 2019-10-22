import React from 'react';

class LoginQuoteComponent extends React.Component {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid" style={{ background: '#AEEA00', color: "darkgreen"}}>
                <div className="container">
                    <h1 className="display-4">Climbing Record App</h1>
                    <blockquote className="blockquote" style={{ border: 0}}>
                        <p className="mb-0">It is not the mountain we conquer, but ourselves.</p>
                        <footer className="blockquote-footer">Sir Edmund Hillary</footer>
                    </blockquote>
                </div>
            </div>

        );
    }

}

export default LoginQuoteComponent; 