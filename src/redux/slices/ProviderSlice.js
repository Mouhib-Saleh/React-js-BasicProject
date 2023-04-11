import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialState = {
  providers: [{"name":"test","address":"test","phone":"test","email":"test"}]
};
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['providers']
  };
const providersSlice = createSlice({
  name: 'providers',
  initialState,
  reducers: {
    addProvider: (state, action) => {
        console.log("payload is "  ,action.payload);
        console.log("state is " , state.providers);
        
        return {
            ...state,
            providers: [...state.providers, action.payload]
          };
      },
      removeProvider: (state, action) => {
        const updatedProviders = state.providers.filter(provider => provider.id !== action.payload);
        return {
          ...state,
          providers: updatedProviders
        };
      }
  }
});
const persistedReducer = persistReducer(persistConfig, providersSlice.reducer);
export const { addProvider, removeProvider } = providersSlice.actions;
export default persistedReducer;