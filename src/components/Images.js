import React, {Component} from 'react';

const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg',
    '/images/image9.jpg',
    '/images/image10.jpg'
];

class Images extends Component {
    constructor(){
        super()
        this.state = {
            image: 'image1.jpg'
        }
    }

    randomImage = () => {
        this.setState({image: images[Math.floor(Math.random() * 10)]})
    }

    render(){
        return (
            <div>
                <img src={this.state.image} style={{ height: '100px', width: '100px'}} />
                <br />
                <button onClick={this.randomImage}>Random Image</button>
            </div>
        )
    }
}

export default Images;
