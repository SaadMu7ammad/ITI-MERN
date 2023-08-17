import { createSlice } from '@reduxjs/toolkit';

const AddFavSlice = createSlice({
  name: 'cFav',
  initialState: {
    AddedFav: 0,
  },
  reducers: {
    upCount: function (state, action) {
      // state.c+=action.payload
      state.AddedFav += 1;
    },
    // downCount: function (state, action) {
    //   state.c -= action.payload;
    // },
  },
});
export const { upCount } = AddFavSlice.actions;
export default AddFavSlice.reducer;
