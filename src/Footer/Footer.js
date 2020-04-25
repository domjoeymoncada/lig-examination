import React from 'react';
import './css/Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return(
            <div className="footer">
                <ul>
                    <li>Nav1</li>
                    <li>Nav2</li>
                    <li>Nav3</li>
                </ul>

                <button className="top-scroll-btn" onClick={this.scrollToTop}>
                    Move to top
                </button>
            </div>
        );
    }
}

export default Footer;