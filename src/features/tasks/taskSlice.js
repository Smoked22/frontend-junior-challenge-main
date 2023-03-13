import {createSlice} from "@reduxjs/toolkit";

//Datos de prueba
const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.push(action.payload);
        },
    }
})

export default taskSlice.reducer