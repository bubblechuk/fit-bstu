import {createSlice} from '@reduxjs/toolkit'
interface formInformation {
    name: string,
    email: string,
    phone: string,
    theme: string,
    message: string
}
const initialState = {
    formInfo: {
        name: "",
        email: "",
        phone: "",
        theme: "",
        message: ""
    }
}
const formSlice = createSlice(
    {
        name: "form",
        initialState,
        reducers: {
            setForm: () => {

            }
        }
    }
);
export const {setForm} = formSlice.actions;
export const formReducer = formSlice.reducer;