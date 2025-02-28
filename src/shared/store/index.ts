import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import {useDispatch, useSelector} from 'react-redux';
import {persistedReducer} from './reducers';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type AppStore = typeof store;
