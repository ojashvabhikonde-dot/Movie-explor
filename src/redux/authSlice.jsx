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
    }

  }
})

export const {login,logout}=authSlice.actions
export default authSlice.reducer