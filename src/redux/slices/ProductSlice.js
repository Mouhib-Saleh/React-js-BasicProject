import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {  
    addProdcut: (state, action ) => {
       
        return {
            ...state,
            products: [...state.products, action.payload]
          };
          
      },
      removeProduct: (state, action) => {
        const updatedProduct = state.products.filter(product => product.id !== action.payload);
        return {
          ...state,
          products: updatedProduct
        };
      },
      Increment: (state, action) => {
        state.products[0].map((product) => {
          if (product.id === action.payload) {
            product.count = product.count + 1;
          }
        });
      },
      Decrement: (state, action) => {
        state.products.map((product) => {
          if (product.id === action.payload) {
            product.count = product.count - 1;
          }
        });
      },
      
  }
});

export const { addProdcut, removeProduct ,Increment} = ProductSlice.actions;
export default ProductSlice.reducer;