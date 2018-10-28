import React from 'react';
import {
    View
} from 'react-native';

import {
    createStyle
} from '@tools/tools';

import colors from '@tools/colors';

export default function FiltersIcon(props) {
    return (
        <View
            style = { styles.container }
        >
           <View
                style = { styles.topLine }
           />
           <View
                style = { styles.middleLine }
           />
           <View
                style = { styles.bottomLine }
           />
        </View>
    );
}


const styles = createStyle({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: 50,
        height: 50,
        borderRadius: 50,
        paddingHorizontal: 10
    },
    topLine: {
        backgroundColor: colors.black,
        width: 25,
        height: 2,
        marginBottom: 3.5,
        borderRadius: 10,
    },
    middleLine: {
        backgroundColor: colors.black,
        width: 18,
        height: 2,
        marginBottom: 3.5,
        borderRadius: 10,
    },
    bottomLine: {
        backgroundColor: colors.black,
        width: 10,
        height: 2,
        borderRadius: 10,
    },
});