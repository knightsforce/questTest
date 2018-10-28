import React from 'react';
import {
    Image
} from 'react-native';

import {
    createStyle
} from '@tools/tools';

export default function Avatar(props) {
    return (
        <Image
            source = { props.url }
            style = { styles.image }
        />
    );
}


const styles = createStyle({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,//На ios для круга нужно ставить половину размеров
    }
});