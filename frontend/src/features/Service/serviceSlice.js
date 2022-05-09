import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../../app/messageSlice";
import serviceApi from "../../api/serviceApi";

export const getServices = createAsyncThunk(
   "service/getServices",
   async (params, thunkAPI) => {
      try {
         const response = await serviceApi.getServices(params);
         console.log(">>> Check service/getServices: ", response);
         return {
            services: response.data.data.services,
            pagination: response.data.pagination,
         }
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
   services: [],
   pagination: {
      _currentItem: 0,
      _limit: 0,
      _page: 0,
      _totalItem: 0,
      _totalPage: 0,
   },
   isLoading: false,
};

const serviceSlice = createSlice({
   name: "service",
   initialState,
   extraReducers: {
      [getServices.rejected]: (state, action) => {
         state.isLoading = false;
      },
      [getServices.pending]: (state, action) => {
         state.isLoading = true;
      },
      [getServices.fulfilled]: (state, action) => {
         state.isLoading = false;
         var ids = new Set(state.services.map(s => s.id));
         state.services = [...state.services, ...action.payload.services.filter(s => !ids.has(s.id))];
         state.pagination = action.payload.pagination;
      }
   },
});

const { reducer } = serviceSlice;
export default reducer;