import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    page:1,
    followList:  []
}
const dataSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers:{
        addPage(state, _){
            state.page += 1
        },
        resetPage(state, _){
            state.page = 1
        },
        addFollow(state, {payload}){
            const {id} = payload;
            state.followList.push(id);
        },
        removeFollow(state, {payload}){
            const {id} = payload;
            const index = state.followList.findIndex(item => item === id);
            state.followList.splice(index, 1);
        }
    }
})
export const {addPage, resetPage, addFollow, removeFollow} = dataSlice.actions;
export default dataSlice.reducer