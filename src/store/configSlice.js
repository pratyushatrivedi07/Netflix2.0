import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "appConfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    setPreferredLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setPreferredLanguage } = configSlice.actions;

export default configSlice.reducer;
