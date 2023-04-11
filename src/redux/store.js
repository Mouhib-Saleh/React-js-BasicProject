import { configureStore } from '@reduxjs/toolkit';
import providersReducer from './slices/ProviderSlice';

const store = configureStore({
  reducer: {
    providers: providersReducer
  }
});

export default store;