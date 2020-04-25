import React from 'react';
import './css/Header.css';
import { withRouter } from 'react-router-dom';
import websiteLogo from './images/website-logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.redirectToHome = this.redirectToHome.bind(this);
    }

    redirectToHome() {
        this.props.history.push('/');
    }

    render() {
        return(
           <div className='top-navbar'>
            <img className='top-navbar__logo' src={websiteLogo} alt="Some website logo" onClick={this.redirectToHome} />
           </div>
        );
    }
}

export default withRouter(Header);