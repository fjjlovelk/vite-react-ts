import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSlice from './features/appSlice';
import userSlice from './features/userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

// 使用 combineReducers 连接多个reducer
const rootReducer = combineReducers({ app: appSlice, user: userSlice });

// persist配置
const persistConfig = {
  key: 'root',
  version: 1,
  storage: storageSession
};

// 建立persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 创建store
const store = configureStore({
  reducer: persistedReducer,
  // 此处需要特殊忽略redux-persist的dispatch
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

// 创建persist store
const persistor = persistStore(store);

export { store, persistor };

// 根据state返回类型获取状态类型
export type RootState = ReturnType<typeof store.getState>;
// 从store中获取dispatch类型
export type RootDispatch = typeof store.dispatch;

/**
 * redux-toolkit结合redux-persist配置，详见https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
 */
