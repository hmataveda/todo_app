import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",

  initialState: [
    {
      id: 1,
      content: "My birthday",
      completed: true,
      todoType: "",
    },
    {
      id: 2,
      content: "Shopping list",
      completed: false,
      todoType: "",
    },
    {
      id: 3,
      content: "things to do",
      completed: false,
      todoType: "",
    },
    ,
    {
      id: 4,
      content: "My anniversary",
      completed: true,
      todoType: "",
    },
    {
      id: 1,
      content: "Daily Routines",
      completed: true,
      todoType: "",
    },
  ],

  reducers: {
    addTodo(state, action) {
      let todo = {
        id: state.length + 1,
        content: action.payload,
        completed: false,
      };
      state.push(todo);
    },
    deleteSingleTodo(state, action) {
      return state.filter((todo) => todo.id != action.payload);
    },

    toggleComplete(state, action) {
      const existingState = state.find((todo) => todo.id == action.payload);
      if (existingState) {
        existingState.completed = !existingState.completed;
      }
    },

    markAllCompleted(state, action) {
      if (action.payload) {
        state.forEach((todo) => (todo.completed = true));
      } else {
        state.forEach((todo) => (todo.completed = false));
      }
    },
    deleteAllCompleted(state) {
      return state.filter((todo) => todo.completed == false);
    },
    todoTypeSelection(state, action) {
      const { id, value } = action.payload;
      const todostate = state.find((todo) => todo.id == id);
      if (todostate) {
        todostate.todoType = value;
      }
    },
  },
});

export const { addTodo, deleteSingleTodo, toggleComplete, todoTypeSelection } =
  todoSlice.actions;
export const { markAllCompleted, deleteAllCompleted } = todoSlice.actions;

export default todoSlice.reducer;
