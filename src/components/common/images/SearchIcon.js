import React from 'react';
import {
    Image
} from 'react-native';

import { createStyle } from '@tools/tools';

export default function Search() {
    return (
        <Image
            style = { styles.image }
            source = { require('@images/search.png') }
        />
    )
}

const styles = createStyle({
    image: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
});