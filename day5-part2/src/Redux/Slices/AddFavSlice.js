import { createSlice } from '@reduxjs/toolkit';

const AddFavSlice = createSlice({
  name: 'cFav',
  initialState: {
    AddedFav: 0,
    cart:[]
  },
  reducers: {
    upCount: function (state, action) {
      // state.c+=action.payload
      state.AddedFav += 1;
    },
    downCount: function (state, action) {
      // state.c+=action.payload
      state.AddedFav -= 1;
      console.log(state.AddedFav);
    },
    
    addToFav: function (state, action) {
      
      // state.cart.push(action.payload)
      const indx = state.cart.findIndex((item) => item.id === action.payload.id)
      if (indx === -1) {
        action.payload.quantityFav = 1;
        state.cart.push(action.payload)
      } else {
        
        state.cart[indx].quantityFav++;
      }
      // downCount: function (state, action) {
      //   state.c -= action.payload;
      // },

    },
    removeFromFav: function (state, action) {
      
      // state.cart.push(action.payload)
      const indx = state.cart.findIndex((item) => item.id === action.payload.id)
      if (indx !== -1) {
      
        state.cart[indx].quantityFav--;
        if (state.cart[indx].quantityFav == 0) {
          state.cart.splice(indx,1)
        }
      }
      // downCount: function (state, action) {
      //   state.c -= action.payload;
      // },

    }
  }
});

export const { upCount,addToFav,removeFromFav,downCount } = AddFavSlice.actions;
export default AddFavSlice.reducer;
