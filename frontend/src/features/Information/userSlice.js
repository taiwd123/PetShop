import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from '../../api/userApi';
import { setMessage } from "../../app/messageSlice";

export const getInfo = createAsyncThunk(
   "user/getInfo",
   async (thunkAPI) => {
      try {
         const response = await userApi.getInfo();
         return response.data.data.userInfo;
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         thunkAPI.dispatch(setMessage(message));
         console.log(">>> Error: ", message);
         return thunkAPI.rejectWithValue(message);
      }
   }
);

export const updateInfo = createAsyncThunk(
   "user/updateInfo",
   async (params, thunkAPI) => {
      try {
         const response = await userApi.updateInfo(params);
         return response.data.data.userInfo;
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         thunkAPI.dispatch(setMessage(message));
         console.log(">>> Error: ", message);
         return thunkAPI.rejectWithValue(message);
      }
   }
);

export const updateAvatar = createAsyncThunk(
   "user/updateAvater",
   async (param, thunkAPI) => {
      try {
         const response = await userApi.updateAvatar(param);
         return response.data.data.userInfo;
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         thunkAPI.dispatch(setMessage(message));
         console.log(">>> Error: ", message);
         return thunkAPI.rejectWithValue(message);
      }
   }
);

const initialState = {
   userInfo: {},
   isLoading: false,
};
const userSlice = createSlice({
   name: "user",
   initialState,
   extraReducers: {
      [getInfo.rejected]: (state, action) => {
         // state.userInfo = {};
         state.isLoading = false;
      },
      [getInfo.pending]: (state, action) => {
         state.isLoading = true;
      },
      [getInfo.fulfilled]: (state, action) => {
         state.userInfo = action.payload;
         state.isLoading = false;
      },
      [updateInfo.rejected]: (state, action) => {
         // state.userInfo = {};
         state.isLoading = false;
      },
      [updateInfo.pending]: (state, action) => {
         state.isLoading = true;
      },
      [updateInfo.fulfilled]: (state, action) => {
         state.userInfo = action.payload;
         state.isLoading = false;
      },
      [updateAvatar.rejected]: (state, action) => {
         // state.userInfo = {};
         state.isLoading = false;
      },
      [updateAvatar.pending]: (state, action) => {
         state.isLoading = true;
      },
      [updateAvatar.fulfilled]: (state, action) => {
         state.userInfo = action.payload;
         state.isLoading = false;
      },
   },
});

const { reducer } = userSlice;
export default reducer;