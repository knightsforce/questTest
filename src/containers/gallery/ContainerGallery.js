import React, { Component } from 'react';


import screenWrap from '@hocs/screenWrap';

import Gallery from '@components/gallery/Gallery';

let avatar = require('@images/avatar.jpg'),
    nature = require('@images/lakeandballoon.jpg');

class ContainerGallery extends Component {
    
    images = [
        {
            id: 0,
            url: avatar
        },
        {
            id: 1,
            url: nature
        },
        {
            id: 2,
            url: avatar
        },
        {
            id: 3,
            url: nature
        },
        {
            id: 4,
            url: avatar
        },
        {
            id: 5,
            url: nature
        },
        {
            id: 6,
            url: avatar
        },
        {
            id: 7,
            url: nature
        },
        {
            id: 8,
            url: avatar
        }
    ]    

    onPressBack = () => this.props.navigator.pop();

    render() {
        
        return (
            <Gallery
                images = { this.images }
                onPressBack = { this.onPressBack }
            />
        );

    }
}

export default screenWrap(ContainerGallery);