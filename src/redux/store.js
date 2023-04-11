import { configureStore } from '@reduxjs/toolkit';
import providersReducer from './slices/ProviderSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['providers']
  };
  const persistedReducer = persistReducer(persistConfig, providersReducer);
const store = configureStore({
  reducer: {
    providers: persistedReducer
  }
});


export const persistor = persistStore(store);
export default store;