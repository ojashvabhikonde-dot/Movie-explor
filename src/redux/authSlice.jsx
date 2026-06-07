import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isAuth: !!user,
  user:user || null
}

const authSlice = createSlice({
  name:"auth",
  initialState,

  reducers:{

    login:(state,action)=>{
      state.isAuth=true
      state.user=action.payload
    },

    logout:(state)=>{
      state.isAuth=false
      state.user=null
      localStorage.removeItem("user")
    },
 addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  }
})

export const {login,logout,removeUser,addUser}=authSlice.actions
export default authSlice.reducer