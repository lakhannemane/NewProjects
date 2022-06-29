import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import axios from "axios";

export const fetPost = createAsyncThunk("post/getpost", async () => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    //    console.log(res)
    let data = res.data;
    return data;
  } catch (error) {
    console.log("error mil gaya");
  }
});

export const fetProducts = createAsyncThunk("post/getproducts", async () => {
  try {
    let res = await axios.get("https://fakestoreapi.com/products");
       console.log(res.data)
    let data = res.data;
    return data;
  } catch (error) {
    console.log("error mil gaya");
  }
});

const cartslice = createSlice({
  name: "post",
  initialState: {
    post: [],
  },
  reducers: {},
  extraReducers: {
    [fetPost.pending]: (state, action) => {
      state.data = action.payload;
    },
    [fetPost.fulfilled]: (state, action) => {
      state.data = action.payload;
      // console.log(action.payload)
    },
    [fetPost.rejected]: (state, action) => {
      state.data = action.payload;
    },
    [fetProducts.pending]: (state, action) => {
      state.data = action.payload;
    },
    [fetProducts.fulfilled]: (state, action) => {
      state.data = action.payload;
      // console.log(action.payload)
    },
    [fetProducts.rejected]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default cartslice.reducer;
