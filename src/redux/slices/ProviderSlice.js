import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  providers: [{"name":"test","address":"test","phone":"test","email":"test"}]
};

const providersSlice = createSlice({
  name: 'providers',
  initialState,
  reducers: {  
    addProvider: (state, action ) => {
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

export const { addProvider, removeProvider } = providersSlice.actions;
export default providersSlice.reducer;