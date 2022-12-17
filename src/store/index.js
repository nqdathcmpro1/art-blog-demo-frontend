import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { artSlice } from "../slices/artSlice";
import { userSlice } from "../slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
 
};

const reducers = combineReducers({
  artList: artSlice.reducer,
  userList: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
/*   devTools: false,
 */});

export const persistor = persistStore(store);

export default store;
