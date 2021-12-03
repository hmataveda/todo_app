
import { createSlice } from "@reduxjs/toolkit"

export const statusObj = {
    all : 'Show_all',
    completed : "Completed",
    incompleted : 'Incompleted'
}


const filterSlice = createSlice({
    name : 'filter',

    initialState : {
        filterStatus : statusObj.all,
        filterTodoType: ''
    },

    reducers:{
        changeStatus(state, action){
            state.filterStatus = action.payload;
        },
        changeType(state,action){
            state.filterTodoType = action.payload;
        }

    }
    
})

export const {changeStatus, changeType} = filterSlice.actions
export default filterSlice.reducer;