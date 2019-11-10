/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/index';
// import App from './src/pages/ImPage'
import {name as appName} from './app.json';
import AppNavigators from './src/navigator/AppNavigators';

AppRegistry.registerComponent(appName, () => AppNavigators);
