import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    startValue: 0,
    endValue: Infinity,
  },
  reducers: {
    increment: (state) => {
      if (state.endValue === Infinity || state.value < state.endValue) {
        state.value++;
      }
    },
    decrement: (state) => {
      if (state.value > 0 || state.value > state.startValue) {
        state.value--;
      }
    },
    reset: (state) => {
      state.value = 0;
      state.startValue = 0;
      state.endValue = Infinity;
    },

    setStartValue: (state, action) => {
      state.value = action.payload;
      state.startValue = action.payload;
    },

    setEndValue: (state, action) => {
      state.endValue = action.payload;
    },
  },
});

export const { increment, decrement, reset, setStartValue, setEndValue } =
  counterSlice.actions;

export default counterSlice.reducer;
