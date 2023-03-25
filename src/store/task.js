import axios from "axios";
import { set } from "react-hook-form";

const apiWithToken = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
        "Authorization": `Token ${localStorage.getItem('accessToken')}`
    }
})

const { createSlice } = require('@reduxjs/toolkit')

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: {},
        taskList: [],
        isLoading: false.valueOf,
        fetchingList: []
    },
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        setTask: (state, action) => {
            state.isLoading = action.payload
        },
        setTasks: (state, action) => {
            state.isLoading = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = !state.isLoading
        }
    }
})

export const { addTask, setTask, setTasks, setLoading } = taskSlice.actions;

export default taskSlice.reducer;

export function fetchTaskList(data) {
    return async function fetchTaskListThunk(
        dispatch
    ) {
        try {
            const res = await apiWithToken.get(
                "api/task"
            );
            dispatch(setTasks(res.data))
            dispatch(setLoading())
        } catch (err) {
            dispatch(setLoading())
        }
    }
}
