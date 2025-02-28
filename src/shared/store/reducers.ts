import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import userReducer from '@entities/user/model/slice';
// import {deskReducer, myDeskReducer} from '@entities/desk/model/slice';
// import columnReducer from '@entities/column/model/slice';
// import prayerReducer from '@entities/prayer/model/slice';
// import networkReducer from '@shared/network/model/slice.ts';

const combineReducer = combineReducers({
  user: userReducer,
  // usersDesks: deskReducer,
  // myDesk: myDeskReducer,
  // columns: columnReducer,
  // prayers: prayerReducer,
  // network: networkReducer,
});

const persistConfig = {key: 'root', storage: AsyncStorage, whitelist: ['user']};
export const persistedReducer = persistReducer(persistConfig, combineReducer);
