import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

const os = Platform.OS,
      iosPlatform = 'ios',
      androidPlatform = 'android';

export function createStyle(styles, platformStyles = {}) {

    let  ios, android, style;
    
    for(let name in styles) {
        ({ios, android, ...style} = styles[name]);

        if(ios || android) {
          let platform = (os === iosPlatform) ? ios : android;
          for(let key in platform) {
            style[key] = platform[key];
          }
          platform = null;
        }
        platformStyles[name] = style;
        ios = null;
        android = null;
        style = null;
    }

    return StyleSheet.create(platformStyles);
}

export function parseDate(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export let widthImage = Dimensions.get('window').width / 4.5;