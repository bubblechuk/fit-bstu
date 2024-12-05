import { combineReducers } from "@reduxjs/toolkit";
import { formReducer } from "./slices";

const rootReducer = combineReducers({
    form: formReducer
});

export default rootReducer;