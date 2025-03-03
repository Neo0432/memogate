/**
 * @format
 */

import './gesture-handler';
import {AppRegistry} from 'react-native';
import {App} from '@app/entrypoint/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
