import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import TodoSliceReducer from "../features/Todo/TodoSlice";

const store = configureStore({
  reducer: {
    todo: TodoSliceReducer,
  },
});

export default store;
