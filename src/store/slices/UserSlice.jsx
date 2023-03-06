import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:[],
    reducers: {
        addUser: (state, action) => { state.push(action.payload);},
        removeUsers: (state, action) => { 
            state.splice(0, state.length);
         },
        deleteUser: (state, action) => { 
            state.splice(action.payload, 1);
        },

    }
});

export default userSlice.reducer ;
export const { addUser, removeUsers, deleteUser } = userSlice.actions;