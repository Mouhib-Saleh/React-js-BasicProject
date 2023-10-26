import { configureStore } from '@reduxjs/toolkit';
import providersReducer from './slices/ProviderSlice';
import productsReducer from './slices/ProductSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['providers','products']
    
  };
  const persistedReducerProvider = persistReducer(persistConfig,providersReducer );
  const persistedReducerProduct = persistReducer(persistConfig,productsReducer );
const store = configureStore({
  reducer: {
    providers: persistedReducerProvider ,
    products : persistedReducerProduct
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createSerializableStateInvariantMiddleware()),
});


export const persistor = persistStore(store);
export default store;