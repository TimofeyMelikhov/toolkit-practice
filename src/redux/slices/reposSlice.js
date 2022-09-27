import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: 'reposSlice',
  initialState: {
    items: [],
    isFetching: true
  },
  reducers: {
    addRepos(state, action) {
      state.items = action.payload.items
    },
    fetching(state, action) {
      state.isFetching = action.payload
    }
  }
})

export default reposSlice.reducer
export const { addRepos, fetching } = reposSlice.actions