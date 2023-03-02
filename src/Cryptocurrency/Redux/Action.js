import { createAsyncThunk } from "@reduxjs/toolkit";
import { CRYPTOURL, CRYPTOHOST, KEY } from "./Api";
export const Getdata = createAsyncThunk("crypto", async (arg) => {
  return await fetch(`${CRYPTOURL}?limit=${arg}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": CRYPTOHOST,
      "x-rapidapi-key": KEY,
    },
  }).then((res) => res.json());
});
