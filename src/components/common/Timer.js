import React, { PureComponent } from 'react';
import {
    Text,
    AppState
} from 'react-native';

import {
    createStyle,
    parseDate
} from '@tools/tools';

import colors from '@tools/colors';


export default class Timer extends PureComponent {

    static period = 1000; //Статичная чтобы хранилось на уровне класса, а не экземпляра

    constructor(props) {
        super(props);

        /*
            Не учел замораживание потока при уходе приложения в фон
        */

        this.state = {
            stamp: Math.random()
        }

        this.date = new Date();

        this.timer = setInterval(this.intervalHandler, Timer.period);

        AppState.addEventListener('change', this.handleAppState)
    }

    componentWillUnmount() {
        this.date = null;
        clearInterval(this.timer);
        this.timer = null;

        AppState.removeEventListener('change', this.handleAppState)

    }

    intervalHandler = () => {
        
        this.date.setSeconds(this.date.getSeconds() + 1);

        this.setState({
            stamp: Math.random()
        });

    }

    handleAppState = () => {

        //При сворачивании приложения замораживается JS поток

        this.date = new Date();

    }

    render() {
        return (
            <Text>
                {
                    parseDate(this.date)  
                }       
            </Text>
        );
    }
}

const styles = createStyle({
    container: {
       flex: 1,
       alignSelf: 'stretch'
    }
});