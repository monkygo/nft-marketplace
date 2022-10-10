import { createSlice } from "@reduxjs/toolkit";
import { getTop15ListingRewardsCollections } from "../../api/looksrare";

const initialState = {
  collections: [],
  error: false,
  isLoading: false,
};

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    startGetCollections(state) {
      state.isLoading = true;
      state.error = false;
    },
    getCollectionsSuccess(state, action) {
      state.isLoading = false;
      state.error = false;
      state.collections = action.payload;
    },
    getCollectionsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  startGetCollections,
  getCollectionsSuccess,
  getCollectionsFailed,
} = collectionsSlice.actions;

export const fetchCollections = () => async (dispatch) => {
  try {
    dispatch(startGetCollections());
    const collections = await getTop15ListingRewardsCollections();
    console.log("fetchcollections", collections);
    dispatch(getCollectionsSuccess(collections));
  } catch (error) {
    dispatch(getCollectionsFailed());
  }
};

export const selectCollections = (state) => state.collections.collections;

export default collectionsSlice.reducer;
