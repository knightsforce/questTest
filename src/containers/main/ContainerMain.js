import React, { Component } from 'react';

import {
    Alert
} from 'react-native';

import screenWrap from '@hocs/screenWrap';

import Main from '@components/main/Main';

class ContainerMain extends Component {

    url = require('@images/lakeandballoon.jpg');

    data = [
        {
            id: 0,
            url: this.url,
            rating: 1,
            title: 'Заголовок0',
            tags: ['male', 'female', 'home'],
            hours: '5',
            peoples: '2-7 ppl'
        },
        {
            id: 1,
            url: this.url,
            rating: 3,
            title: 'Заголовок1',
            tags: ['male', 'female'],
            hours: '2',
            minutes: '10',
            peoples: '2-7 ppl'
        },
        {
            id: 2,
            url: this.url,
            rating: 4,
            title: 'Заголовок2',
            hours: '1-1.5',
            minutes: '15',
            peoples: '2-7 ppl'
        },
        {
            id: 3,
            url: this.url,
            rating: 4.5,
            title: 'Заголовок3',
            tags: ['male', 'female', 'home'],
            hours: '1-1.5',
            minutes: '15',
        },
        {
            id: 4,
            url: this.url,
            rating: 5,
            title: 'Заголовок4',
            tags: ['male', 'female', 'home'],
            hours: '1-1.5',
        }
    ]

    onPress = () => {
        this.props.navigator.push({
            screen: 'QuestTest.Gallery'
        })
    }
    
    render() {
        
        return (
            <Main
                data = { this.data }
                onPress = { this.onPress }
            />
        );

    }
}

export default screenWrap(ContainerMain);