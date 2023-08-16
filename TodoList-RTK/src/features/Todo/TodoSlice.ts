import { createSlice, nanoid } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Todo } from "../../Types/Todo";

interface EditPayload {
  id: string;
  newTitle: string;
}

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: Todo[], action) => {
      state.push({ id: nanoid(), title: action.payload, isCompleted: false });
    },
    removeTodo: (state: Todo[], action: PayloadAction<string>) =>
      state.filter((todo: Todo) => todo.id !== action.payload),

    editTodo: (state: Todo[], action: PayloadAction<EditPayload>) => {
      state.find((todo: Todo) => todo.id === action.payload.id);
      state.map((todo: Todo) =>
        todo.id === action.payload.id
          ? (todo.title = action.payload.newTitle)
          : null
      );
    },
    setIsCompleted: (state: Todo[], action: PayloadAction<string>) => {
      state.filter((todo: Todo) =>
        todo.id === action.payload
          ? (todo.isCompleted = !todo.isCompleted)
          : null
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, editTodo, removeTodo, setIsCompleted } =
  todoSlice.actions;
