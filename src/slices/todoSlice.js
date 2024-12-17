import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: Date.now(), task: "Learn fron-end" }],
  },
  reducers: {
    addTodo: (state, action) => {
      const givenTodo = action.payload;
      state.todos.push(givenTodo);
    },
    deleteTodo: (state, action) => {
      const filteredArray = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });

      state.todos = filteredArray;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
