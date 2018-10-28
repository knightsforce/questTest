import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import ArrowLeft from '@common/images/ArrowLeft';
import Timer from '@common/Timer';

import {
    createStyle
} from '../../tools/tools';

import colors from '@tools/colors';

let hitSlop = {
    //Увеличивает область нажатия, без увеличения размеров
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
}

export default function Header(props) {
    return (
        <View
            style = { styles.container }
        >
            <TouchableOpacity
                onPress = { props.onPressBack }
                hitSlop = { hitSlop }
            >
                <ArrowLeft/>
            </TouchableOpacity>
            <Timer/>
        </View>
    );
}

const styles = createStyle({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.white,
        padding: 20,
    }
});