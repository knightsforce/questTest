import React, { PureComponent } from 'react';
import {
    View,
    TextInput
} from 'react-native';

import SearchIcon from '@common/images/SearchIcon';

import {
    createStyle
} from '@tools/tools';

import colors from '@tools/colors';

export default class Search extends PureComponent {

    
    render() {

        return (
            <View
                style = { styles.container }
            >
                <SearchIcon/>
                <TextInput
                    style = { styles.input }
                    underlineColorAndroid = { colors.transparent }
                />
            </View>
        );
    }
}


const styles = createStyle({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 50,
        paddingHorizontal: 10,
        marginRight: 15,
        android: {
            elevation: 3
        }
    },
    input: {
        flex: 1
    }
});