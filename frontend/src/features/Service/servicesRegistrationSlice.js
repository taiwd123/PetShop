import {
   createSlice
} from "@reduxjs/toolkit";

const initialState = [];

const servicesRegistrationSlice = createSlice({
   name: 'servicesRegistration',
   initialState: initialState,
   reducers: {
      register: (state, action) => {
         state.push(action.payload);
      },
      remove: (state, action) => {
         const removeItemId = action.payload;
         return state.filter(item => item.id !== removeItemId);
      }
   }
});

const { reducer, actions } = servicesRegistrationSlice;
export const { register, remove } = actions;
export default reducer;