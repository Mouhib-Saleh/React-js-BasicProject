import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  providers: [{"name":"test","address":"test","phone":"test","email":"test"}]
};

const providersSlice = createSlice({
  name: 'providers',
  initialState,
  reducers: {
    addProvider: (state, action) => {
        console.log("payload is "  ,action.payload);
        console.log("state is " , state.providers);
        //state.providers.push(action.payload)
        /* return {
          ...state,
          providers: [...state.providers , action.payload]
        }; */
      },
    removeProvider: (state, action) => {
      state.providers = state.providers.filter(provider => provider.id !== action.payload);
    }
  }
});

export const { addProvider, removeProvider } = providersSlice.actions;
export default providersSlice.reducer;