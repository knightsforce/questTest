import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screenController';

registerScreens();

class App {
  constructor() {
    
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'QuestTest.Main',
      }
    });

  }
}

export default new App();