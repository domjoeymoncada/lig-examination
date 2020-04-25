import React from 'react';
import './css/Slider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('./images/image1.jpg'),
                require('./images/image2.jpg'),
                require('./images/image3.jpg')
            ],
            alt: "Some carousel image",
            currentImageIndex: 0,
            leftBtn: true,
            rightBtn: false
        }

        this.moveSlider = this.moveSlider.bind(this);
    }

    async moveSlider(direction) {
        let newIndex = this.state.currentImageIndex + direction;
        await this.setState({currentImageIndex: newIndex});
        await this.setState({leftBtn: this.state.currentImageIndex === 0});
        await this.setState({rightBtn: this.state.currentImageIndex === 2});
    }

    render() {
        return( 
            <div className="slider">
                <img src={this.state.images[this.state.currentImageIndex]} alt={this.state.alt} />

                <button disabled={this.state.leftBtn} className="arrows left" onClick={() => this.moveSlider(-1)}> Left </button>
                <button disabled={this.state.rightBtn} className="arrows right" onClick={() => this.moveSlider(1)}> Right </button>
            </div>
        );
    }
}

export default Slider;