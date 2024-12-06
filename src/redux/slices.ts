import { createSlice } from '@reduxjs/toolkit';
import news from './news.json'; 

export interface newsData {
  image: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  title: string;
  content: {
    big: string;
    small: string;
  };
  extra: {
    urls: string[];
    others: string[];
  };
}

export interface State {
  form: {
    formInfo: {
      name: string;
      email: string;
      phone: string;
      theme: string;
      message: string;
    };
    news: newsData[]; 
  };
}

const initialState: State['form'] = {
  formInfo: {
    name: '',
    email: '',
    phone: '',
    theme: '',
    message: '',
  },
  news: news, 
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm: () => {

    },
  },
});

export const { setForm } = formSlice.actions;
export const formReducer = formSlice.reducer;
