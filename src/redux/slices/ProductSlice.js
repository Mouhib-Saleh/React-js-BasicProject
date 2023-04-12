import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Wishlist: []
};

const WishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {  
    addMovieToWishlist: (state, action ) => {
       
        return {
            ...state,
            Wishlist: [...state.Wishlist, action.payload]
          };
          
      },
      removefromWishlist: (state, action) => {
        const updatedWishlist = state.Wishlist.filter(wishlist => wishlist.id !== action.payload);
        return {
          ...state,
          Wishlist: updatedWishlist
        };
      },
      
    
      
  }
});

export const { addMovieToWishlist, removeMovieFromWishList } = WishlistSlice.actions;
export default WishlistSlice.reducer;