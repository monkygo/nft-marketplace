import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./features/Collections/CollectionsSlice";
import collectionReducer from "./features/Collection/CollectionSlice";

export default configureStore({
  reducer: { collections: collectionsReducer, collection: collectionReducer },
});
