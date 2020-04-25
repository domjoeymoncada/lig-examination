import React from 'react';
import './css/MoreButton.css';
import  { withRouter } from 'react-router-dom';

class MoreButton extends React.Component {
    constructor(props) {
        super(props);

        this.moreElements = this.moreElements.bind(this);
    }

    moreElements() {
        this.props.history.push('/more/elements');
    }

    render() {
        return(
            <div className="more-btn-container" onClick={this.moreElements}>
                <div className="more-btn">MORE ></div>
            </div>
        );
    }
}

export default withRouter(MoreButton);