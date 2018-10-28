import React, { PureComponent } from 'react';
import {
    View,
    Animated,
    Image,
    Text
} from 'react-native';

import Header from '../headers/Header';

import {
    createStyle,
    widthImage
} from '@tools/tools';

import colors from '@tools/colors';

/*
    При удерживании пальца на изображении воспроизводится анимация
*/
export default class Gallery extends PureComponent {

    static renderImages(item) {
        return (
            <Icon
                key = { item.id }
                url = { item.url }
            />
        )
    }

    static getDerivedStateFromProps(props) {
        return {
            images: props.images.map(Gallery.renderImages)
        }
    }

    state = {
        images: null
    }

    async componentDidMount() {
        //Асинхронный вызов, чтобы не задерживать поток
        this.setState({
            images: this.props.images.map(Gallery.renderImages)
        })
    }

    render() {
        return (
            <View
                style = { styles.container }
            >
                <Header
                    onPressBack = { this.props.onPressBack } 
                />
                
                <View
                    style = { styles.content }
                >
                    <View
                        style = { styles.containerList }
                    >
                        <Text
                            style = { styles.title }
                        >
                            Небольшой пример для теста. В данном приложении.
                        </Text>
                        <View
                            style = { styles.imagesList }
                        >

                        {
                            this.state.images
                        }                        

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

class Icon extends PureComponent {

    static pressedValue = .8;

    scale = new Animated.Value(1);

    onStartShouldSetResponder = () => true;
    
    onResponderGrant = () => {
        this.runAnimate(Icon.pressedValue);
    }

    onResponderRelease = () => {
        this.runAnimate(1);
    }


    runAnimate(toValue) {
        Animated.timing(
            this.scale,
            {
                toValue
            }
        ).start();
    }

    render() {
        return (
            <Animated.Image
                onStartShouldSetResponder = { this.onStartShouldSetResponder }
                onResponderGrant = { this.onResponderGrant }
                onResponderRelease = { this.onResponderRelease }
                source = { this.props.url }
                style = {[
                    styles.image,
                    {
                        transform: [
                            {scale: this.scale}
                        ]
                    }
                ]}
            />
        );
    }
}

const styles = createStyle({
    container: {
       flex: 1,
       alignSelf: 'stretch'
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginTop: 20,
        marginHorizontal: 30,
        marginBottom: 0
    },
    containerList: {
        backgroundColor: colors.skyBlue
    },
    imagesList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: widthImage,
        height: widthImage,
        borderRadius: 8,
        margin: 5,
    }
});