import { createStore, combineReducers } from "redux";
import { boardReducer } from "../features/board/boardSlice";

const rootReducer = combineReducers({
    board: boardReducer
})

const store = createStore(rootReducer);

export default store;
