import axios from 'axios';

const apiWithoutToken = axios.create({
    baseURL: "http://localhost:8000/",
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
    },
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFTOKEN",
})

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: {},
        accessToken: '',
        isAuthorised: false
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state) => {
            state.loading = !state.loading
        },

        login: (state, action) => { 
            localStorage.setItem('accessToken', action.payload.key)
            state.accessToken = action.payload.key;
        },

        setAuthorized: (state, action) => {
            state.isAuthorised = action.payload
        }
    }
})

export const { setUser, setLoading, login, setAuthorized } = authSlice.actions;

export default authSlice.reducer;


export function LoginUser(data) {
    return async function LoginThunk(
        dispatch
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithoutToken.post(
                "/dj-rest-auth/login/",
                data
            );
            dispatch(login(res.data))
            dispatch(setAuthorized(true));
            dispatch(setLoading());
        } catch {
            dispatch(setLoading());
            dispatch(setAuthorized(false))
        }
    };
}