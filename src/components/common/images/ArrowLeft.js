import React from 'react';
import {
    Image
} from 'react-native';

import { createStyle } from '@tools/tools';

export default function ArrowLeft() {
    return (
        <Image
            style = { styles.image }
            source = { require('@images/arrowLeft.png') }
        />
    )
}

const styles = createStyle({
    image: {
        width: 40,
        height: 20,
        resizeMode: 'contain'
    }
});