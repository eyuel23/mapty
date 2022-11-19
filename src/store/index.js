import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialWorkoutState = {
  form: false,
};
const workoutSlice = createSlice({
  name: "workout",
  initialState: initialWorkoutState,

  reducers: {
    showForm(state) {
      state.form = !state.form;
    },
  },
});

const store = configureStore({ reducer: { workout: workoutSlice.reducer } });
export const workoutactions = workoutSlice.actions;
export default store;
