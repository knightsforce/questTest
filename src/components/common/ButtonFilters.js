import React, { PureComponent } from 'react';
import {
    View,
    TouchableNativeFeedback
} from 'react-native';

import ButtonDefault from './ButtonDefault';
import FiltersIcon from './FiltersIcon'

import {
    createStyle
} from '@tools/tools';

import colors from '@tools/colors';

export default function ButtonFilters(props) {
    return (
        <ButtonDefault
            style = { [styles.container, props.style] }
            onPress = { props.onPress }
        >
            <FiltersIcon/>
        </ButtonDefault>
    );
}


const styles = createStyle({
    container: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.white,
        android: {
            elevation: 3
        }
    },
});