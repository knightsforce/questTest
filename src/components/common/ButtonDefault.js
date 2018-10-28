import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';

// import {
//     createStyle
// } from '@tools/tools';

import colors from '@tools/colors';

export default function ButtonDefault(props) {
    return (
        <TouchableOpacity
            activeOpacity = { .8 }
            style = { props.style }
            onPress = { props.onPress }
        >
            {
                props.children
            }
        </TouchableOpacity>
    );
}


// const styles = createStyle({
//     container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         flex: 1,
//         backgroundColor: colors.white,
//         borderRadius: 50,
//         paddingHorizontal: 10
//     },
//     input: {
//         flex: 1
//     }
// });