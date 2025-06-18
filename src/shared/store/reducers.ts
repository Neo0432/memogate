import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import userReducer from '@entities/user/model/slice';
import {bookmarksApi} from '@entities/bookmark/api';
import {tagsApi} from '@entities/tag/model/api';

const combineReducer = combineReducers({
  user: userReducer,
  [bookmarksApi.reducerPath]: bookmarksApi.reducer,
  [tagsApi.reducerPath]: tagsApi.reducer,
});

const persistConfig = {key: 'root', storage: AsyncStorage, whitelist: ['user']};
export const persistedReducer = persistReducer(persistConfig, combineReducer);
