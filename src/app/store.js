import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";
import axios from "axios";
import ReducerGetAll from "../app/getAll";

export const store = configureStore({
    reducer:{
        tasks: tasksReducer,
        getAll: ReducerGetAll 
    }
})
