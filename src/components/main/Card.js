import React, { PureComponent } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';

import {
    createStyle
} from '../../tools/tools';

import colors from '../../tools/colors';

//Не const, нет необходимости держать в памяти пока жива область видимости
let tagsList = {
    'male': require('@images/male.png'),
    'female': require('@images/female.png'),
    'home': require('@images/home.png')
}

let iconsList = {
    hours: require('@images/hours.png'),
    minutes: require('@images/minutes.png'),
    peoples: require('@images/peoples.png')
}

export default class Card extends PureComponent {

    state = {
        tags: []
    }

    static getDerivedStateFromProps(props) {
        /*
            Чтобы заново рендерить теги тогда когда нужно, а не на каждом рендере
            Также в идеале нужно проверять сами теги, чтобы не нагружать Bridge
        */

        if(!props.tags) return null;

        return {
            tags: props.tags.map(Card.renderTag)
        }

    }

    static renderTag(item) {
        if(!(item in tagsList)) return null;
        
        return (
            <View
                key = { item }
                style = { styles[`${item}Tag`] }
            >
                <Image
                    style = { styles.tagImage }
                    source = {tagsList[item]}
                />
            </View>
        );
    }

    renderRaiting = (props) => {//Пеедаю по ссылке в аргументы чтобы срезать цепочку объектов 
        return (
            <View
                style = { { height: 10, width: '100%', backgroundColor: 'red'}}
            />
        )
    }

    render() {
        return (
            <View
                style = { styles.container }
            >
                <View
                    style = { styles.content }
                >
                    <View
                        style = { styles.description }
                    >
                        {
                            this.props.title ?
                            <Text
                                style = { styles.title }
                            >
                                {
                                    this.props.title
                                }
                            </Text>
                            : null
                        }
                        <View
                            style = { styles.tags }
                        >
                            {
                                this.state.tags
                            }
                        </View>
                        
                    </View>

                    <Image
                        style = { styles.image }
                        source = { this.props.url }
                    />
                </View>

                <View
                    style = { styles.footer }
                >
                    {
                        this.props.hours ?
                        <Icon
                            type = 'hours'
                            text = { this.props.hours }
                        />
                        : null
                    }
                    {
                        this.props.minutes ?
                        <Icon
                            type = 'minutes'
                            text = { this.props.minutes }
                        />
                        : null
                    }
                    {
                        this.props.peoples ?
                        <Icon
                            type = 'peoples'
                            text = { this.props.peoples }
                        />
                        : null
                    }
                </View>
            </View>
        );
    }
}

function Icon(props) {
    return (
        <View
            style = { styles.iconBlock }
        >
            <Image
                style = { styles.icon }
                source = { iconsList[props.type] }
            />
            <Text>
                {
                    props.text
                }
            </Text>
        </View>
    )
}

const styles = createStyle({
    container: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 10,
        marginBottom: 20,
        android: {
            //Доступно только на android, на ios - shadow
            elevation: 4
        },
        overflow: 'hidden'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 110,
    },
    description: {
        flex: 3,
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    title: {
        marginTop: 10
    },
    tags: {
        flexDirection: 'row',
        marginTop: 10
    },
    maleTag:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 34,
        marginRight: 10,
        backgroundColor: colors.red1
    },
    femaleTag: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 34,
        marginRight: 10,
        backgroundColor: colors.red1
    },
    homeTag: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 34,
        marginRight: 10,
        backgroundColor: colors.blue1
    },
    tagImage:{
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    image: {
        flex: 2,
        height: '100%',
        //borderWidth: 1
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 20,
    },
    iconBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '15%'
    },
    icon: {
        width: 10,
        height: 10,
        marginRight: 10
    },
});