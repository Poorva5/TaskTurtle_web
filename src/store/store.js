import { configureStore} from "@reduxjs/toolkit";
import authReducer from './auth';
import boardReducer from './board';

const store = configureStore(
    {
        reducer: {

            auth: authReducer,

            board: boardReducer,

        }
    }   
)

export default store;