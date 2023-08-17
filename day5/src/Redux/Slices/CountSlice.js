import {createSlice} from '@reduxjs/toolkit'

const CountSlice = createSlice({
    name:'CCount',
    initialState: {
        c:0
    },
    reducers: {
        upCount: function (state,action) {
            // state.c+=action.payload
            state.c+=1
        },
       downCount: function (state,action) {
        state.c-=action.payload
            
        }
    }
})
export const { upCount,downCount } = CountSlice.actions;
export default CountSlice.reducer;