import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { carsApi } from "./carsSlice";
import { favoriteReducer } from "./favoritesSlice";
import { filterReducer } from "./filterSlice";

const reducers = combineReducers({
  [carsApi.reducerPath]: carsApi.reducer,
  favorites: favoriteReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["favorites", "filter"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(carsApi.middleware),
});

export const persistor = persistStore(store);
