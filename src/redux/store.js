import HotelSlice from "./slices/HotelSlice";
const { configureStore } = require("@reduxjs/toolkit");
const store = configureStore({
  reducer: {
    hotel: HotelSlice,
  },
});

export default store;
