import { createSlice } from "@reduxjs/toolkit";
import { getTop15ListingRewardsCollections } from "../../api/looksrare";
import { fetchCollectionDetails } from "../Collection/CollectionSlice";
import { getCollectionDetails } from "../../api/opensea";

const initialState = {
  collections: [],
  error: false,
  isLoading: false,
  collectionsImages: {
    isReady: false,
  },
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

    startGetCollectionsImages(state) {
      state.isLoading = true;
      state.error = false;
    },
    getCollectionsSuccessImages(state, action) {
      state.isLoading = false;
      state.error = false;
      state.collectionsImages = {
        isReady: true,
        ...action.payload,
      };
    },
    getCollectionsFailedImages(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  startGetCollections,
  getCollectionsSuccess,
  getCollectionsFailed,
  startGetCollectionsImages,
  getCollectionsSuccessImages,
  getCollectionsFailedImages,
} = collectionsSlice.actions;

export const fetchCollections = () => async (dispatch) => {
  try {
    dispatch(startGetCollections());
    const collections = await getTop15ListingRewardsCollections();
    dispatch(getCollectionsSuccess(collections));
  } catch (error) {
    dispatch(getCollectionsFailed());
  }
};

export const fetchCollectionsImages = () => async (dispatch, getState) => {
  try {
    dispatch(startGetCollectionsImages());
    const state = getState();
    Promise.all(
      state.collections.collections.map(async (collection) => {
        const details = await getCollectionDetails(
          collection.collection.address
        );
        return {
          [details.address]: details.image_url,
        };
      })
    ).then((details) => {
      const detailsObj = Object.assign({}, ...details);
      dispatch(getCollectionsSuccessImages(detailsObj));
    });
  } catch (error) {
    dispatch(getCollectionsFailedImages());
  }
};

export const selectCollections = (state) => state.collections.collections;
export const selectCollectionsImages = (state) =>
  state.collections.collectionsImages;

export default collectionsSlice.reducer;
