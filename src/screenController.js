import { Navigation } from 'react-native-navigation';

import ContainerMain from '@containers/main/ContainerMain';
import ContainerGallery from '@containers/gallery/ContainerGallery';

export function registerScreens() {

    Navigation.registerComponent('QuestTest.Main', () => ContainerMain);
    Navigation.registerComponent('QuestTest.Gallery', () => ContainerGallery);
    
}