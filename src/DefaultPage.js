import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Slider from "./Slider/Slider";

class DefaultPage extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Slider />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default DefaultPage;