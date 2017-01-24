import {
  AppRegistry,
  UIManager
} from 'react-native';
import App from './src/App';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('PrestoPark', () => App);