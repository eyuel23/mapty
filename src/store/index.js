import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialWorkoutState = {
  form: false,
  workouts: [],
};
const workoutSlice = createSlice({
  name: "workout",
  initialState: initialWorkoutState,

  reducers: {
    showForm(state) {
      state.form = !state.form;
    },
    addWorkouts(state, action) {
      const work = action.payload;
      state.workouts.push(work);
    },
  },
});

const store = configureStore({ reducer: { workout: workoutSlice.reducer } });
export const workoutactions = workoutSlice.actions;
export default store;
