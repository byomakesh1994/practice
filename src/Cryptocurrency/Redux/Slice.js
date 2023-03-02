import { createSlice } from "@reduxjs/toolkit";
import { Getdata } from "./Action";
import { STATUS } from "./Status";
const initialState = {
  loading: STATUS.LOADING,
  list: [],
  error: STATUS.ERROR,
};
const Slice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Getdata.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Getdata.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });

    builder.addCase(Getdata.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default Slice.reducer;
