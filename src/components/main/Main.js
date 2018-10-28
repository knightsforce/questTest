import React, { PureComponent } from 'react';
import {
    View,
    FlatList
} from 'react-native';

import Search from '@common/Search';
import ButtonFilters from '@common/ButtonFilters';
import Avatar from '@common/Avatar';
import Card from './Card';

import {
    createStyle
} from '@tools/tools';

import colors from '@tools/colors';

/*
FlatList экономит память
*/

export default class Main extends PureComponent {

    constructor(props) {
        super(props);

        /*
            Не нужнается в перерисовке
        */
        this.listHeaderComponent = (
            <View
                style = { styles.top }
            >
                <Search/>
                <ButtonFilters
                    style = { styles.button }
                    onPress = { this.props.onPress }
                />
                <Avatar
                    url = {require('@images/avatar.jpg')}
                />
            </View>
        );

    }

    renderItem = ({ item }) => {
        return (
            <Card
                url = { item.url }
                rating = { item.rating }
                title = { item.title }
                tags = { item.tags }
                hours = { item.hours }
                minutes = { item.minutes }
                peoples = { item.peoples }
            />
        );
    }

    keyExtractor = (item, index) => `${item.id || index}`;

    render() {

        return (
            <View
                style = { styles.container }
            >
                <FlatList
                    ListHeaderComponent = { this.listHeaderComponent }
                    contentContainerStyle = { styles.list }
                    showsVerticalScrollIndicator = { false }
                    data = { this.props.data }
                    keyExtractor = { this.keyExtractor }
                    renderItem = { this.renderItem }
                    //style = { styles.content }
                />
            </View>
        );
    }
}

/*
Разделил paddingHorizontal на 2 компонента, а не вынес в container
потому что так elevation в Card не обрезается ограничением родителя
*/

const styles = createStyle({
    container: {
        flex: 1,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        paddingTop: 10,
        backgroundColor: colors.skyBlue
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    button: {
        width: 50,
        height: 50,
        marginRight: 15
    },
    list: {
        padding: 20
    }
});