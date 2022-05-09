import {
   createSlice,
   createAsyncThunk
} from "@reduxjs/toolkit";
import {
   setMessage
} from "../../app/messageSlice";
import authApi from '../../api/authApi';
import Cookies from "universal-cookie";
import jwt_decode from 'jwt-decode';

const cookies = new Cookies();
const authToken = cookies.get("authToken");
console.log(">>> Check authSlice", authToken);

// login
export const login = createAsyncThunk(
   "auth/login",
   async (params, thunkAPI) => {
      try {
         const response = await authApi.login(params);
         console.log(response);
         // Include accessToken and refreshToken
         return {
            authToken: response.data.data,
            role: jwt_decode(response.data.data.accessToken).roleNames
         };
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         thunkAPI.dispatch(setMessage(message));
         return thunkAPI.rejectWithValue(message);
      }
   }
);

// register
export const register = createAsyncThunk(
   "auth/register",
   async (params, thunkAPI) => {
      try {
         const response = await authApi.register(params);
         thunkAPI.dispatch(setMessage(response.data.message));
         return response;
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         thunkAPI.dispatch(setMessage(message));
         return thunkAPI.rejectWithValue(message);
      }
   }
);

// logout
export const logout = createAsyncThunk("auth/logout", async () => {
   await authApi.logout();
});

// refresh token
export const refreshToken = createAsyncThunk("auth/refreshToken", async (param, thunkAPI) => {
   try {
      const response = await authApi.refreshToken(param);
      console.log(response);
      return {
         authToken: response.data.data
      };
   } catch (error) {
      const message =
         (error.response &&
            error.response.data &&
            error.response.data.message) ||
         error.message ||
         error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error.response.data.status);
   }
});

const decoded_accessToken = authToken ? jwt_decode(authToken.accessToken) : null;
const initialState = authToken ? {
   isLoggedIn: true,
   userName: decoded_accessToken.sub,
   role: decoded_accessToken.roleNames,
   authToken,
   isLoading: false,
} : {
   isLoggedIn: false,
   userName: null,
   role: null,
   authToken: null,
   isLoading: false,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   extraReducers: {
      [register.fulfilled]: (state, action) => {
         state.isLoggedIn = false;
         state.isLoading = false;
      },
      [register.rejected]: (state, action) => {
         state.isLoggedIn = false;
         state.isLoading = false;
      },
      [register.pending]: (state) => {
         state.isLoading = true;
      },
      [login.fulfilled]: (state, action) => {
         var decoded = jwt_decode(action.payload.authToken.accessToken);
         state.isLoggedIn = true;
         state.userName = decoded.sub;
         state.role = decoded.roleNames;
         state.authToken = action.payload.authToken;
         state.isLoading = false;
      },
      [login.rejected]: (state, action) => {
         state.isLoggedIn = false;
         state.userName = null;
         state.role = null;
         state.authToken = null;
         state.isLoading = false;
      },
      [login.pending]: (state) => {
         state.isLoading = true;
      },
      [logout.fulfilled]: (state, action) => {
         state.isLoggedIn = false;
         state.userName = null;
         state.role = null;
         state.authToken = null;
         state.isLoading = false;
      },
      [refreshToken.fulfilled]: (state, action) => {
         var decoded = jwt_decode(action.payload.authToken.accessToken);
         state.isLoggedIn = true;
         state.userName = decoded.sub;
         state.role = decoded.roleNames;
         state.authToken = action.payload.authToken;
         state.isLoading = false;
      },
      [refreshToken.rejected]: (state, action) => {
         state.isLoggedIn = false;
         state.userName = null;
         state.role = null;
         state.authToken = null;
         state.isLoading = false;
      },
   },
});

const {
   reducer
} = authSlice;
export default reducer;