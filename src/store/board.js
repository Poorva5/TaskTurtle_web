import axios from "axios";

const apiWithToken = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
        "Authorization": `Token ${localStorage.getItem('accessToken')}`
    }
})

const { createSlice } = require('@reduxjs/toolkit')

const boardSlice = createSlice({
    name: 'board',
    initialState: {
        board: {},
        boardList: [],
        isLoading: false,
        fetchingList: []
    },
    reducers: {
        addBoard: (state, action) => {
            state.push(action.payload)
        },
        setBoards: (state, action) => {
            state.boardList = action.payload
        },
        setBoard: (state, action) => {
            state.isLoading = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = !state.isLoading
        }
    }
})

export const { addBoard, setBoards, setBoard, setLoading } = boardSlice.actions;

export default boardSlice.reducer;

export function fetchBoardList(data) {
    return async function fetchBoardListThunk(
        dispatch
    ) {
        try {
            const res = await apiWithToken.get(
                `/api/task/board/`, 
            );
            dispatch(setBoards(res.data))
            dispatch(setLoading());
        } catch (err) {
            dispatch(setLoading());
        }
    };
}


export function createBoard(data) {
    return async function createBoardThunk(
        dispatch
    ) {
        try {
            const res = await apiWithToken.post(
                `api/task/board/`,
                data
            );
            dispatch(fetchBoardList())
            dispatch(setLoading())
        } catch (err) {
            dispatch(setLoading())
        }
    }
}
