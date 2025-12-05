import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
//   whitelist: ["resume"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: false,
//       serializableCheck: false,
//     }).concat(sagaMiddleware),
//     devTools: process.env.NODE_ENV !== "production", // ✅ DevTools enable/disable
//     enhancers: (defaultEnhancers) =>
//         process.env.NODE_ENV !== "production"
//         ? [composeWithDevTools(...defaultEnhancers)]
//         : defaultEnhancers,
// });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Redux Saga use kar rahe hain
      serializableCheck: false,
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
