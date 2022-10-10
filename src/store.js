import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./features/Collections/CollectionsSlice";

export default configureStore({
  reducer: { collections: collectionsReducer },
});
