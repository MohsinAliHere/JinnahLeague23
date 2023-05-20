import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isadminLogin: false,
  isUserLogin: false,
  Loading: true,
  profileData: [],
  HotelList:null,
  status:"IDLE"
};
const HotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    checkAdminLogin: (state, action) => {
      state.isadminLogin = action.payload
    },
    checkUserLogin: (state, action) => {
      state.isUserLogin = action.payload
    },
    setProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    setLoading: (state,action) => {
      state.Loading = action.payload
    },
    setStatus: (state,action) => {
      state.status = action.payload
    },
    setHotelList: (state,action) => {
      state.HotelList = [{... action.payload}]
    },


  },
});
export const { checkAdminLogin,setProfileData,checkUserLogin,setHotelList,setLoading,setAuth,setStatus} = HotelSlice.actions;
export default HotelSlice.reducer;
