import { configureStore } from '@reduxjs/toolkit';
import {charactersApi} from "../features/characterList/model";
import {characterDetailsApi} from "../features/characterDetails/model";

const store = configureStore({
  reducer: {
    // Додаємо редюсер для characterDetailsApi
    [charactersApi.reducerPath]: charactersApi.reducer,
    [characterDetailsApi.reducerPath]: characterDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(charactersApi.middleware, characterDetailsApi.middleware),
});

export default store;
