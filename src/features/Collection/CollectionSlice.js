import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCollectionDetails } from "../../api/opensea";

export const fetchCollectionDetails = createAsyncThunk(
  "collection/fetchCollectionDetails",
  async (address) => {
    const response = await getCollectionDetails(address);
    return response;
  }
);

const initialState = {
  details: {},
  isLoading: false,
  error: false,
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCollectionDetails.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchCollectionDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.details = action.payload;
    },
    [fetchCollectionDetails.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const selectCollectionDetails = (state) => state.collection.details;

export default collectionSlice.reducer;
