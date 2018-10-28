import React, { Component } from 'react';

import colors from '../tools/colors';

export default function screenWrap(Container, navigatorStatic = {}) {
    class Screen extends Component {
        
        constructor(props) {
            super(props);
            // props.navigator.addOnNavigatorEvent(this.onNavigatorEvent);
      
            this.screenName = Container.displayName;
            //this.navigator = this.props.navigator;
            
            //if(!store) store = require('../../App.js').store;
          
            //console.log(props.navigator);
            // if(props.navigator) props.navigator.overrideBackPress = true;
            // if(props.navigator && props.navigator.addOnNavigatorEvent) props.navigator.addOnNavigatorEvent(this.onNavigatorEvent);
        }

        // onNavigatorEvent = (event) => {
        //     console.log(event);
        // }

        render() {
            return <Container { ...this.props }/>
        }

    }

    for(key in navigatorStatic) {
        
        Screen[key] = navigatorStatic[key];
    
    }

    if(!('navigatorStyle' in navigatorStatic)) {
    
        Screen.navigatorStyle = {};
    
    }
    
    Screen.navigatorStyle.navBarHidden = true;
    // Screen.navigatorStyle.navBarHeight = 78;
    // Screen.navigatorStyle.navBarBackgroundColor = colors.white;
    //Screen.navigatorStyle. navBarTranslucent = true;
    Screen.navigatorStyle.navBarBackgroundColor = 'transpatent';
    Screen.navigatorStyle.statusBarColor = '#737373';
    Screen.navigatorStyle.disabledBackGesture = true;
    Screen.navigatorStyle.screenBackgroundColor = 'white';

    Screen.displayName = `Screen(${Container.displayName})`;
    return Screen; 
}