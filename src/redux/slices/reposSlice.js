import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: 'reposSlice',
  initialState: {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    isFetchError: false
  },
  reducers: {
    addRepos(state, action) {
      state.items = action.payload.items
      state.isFetching = false
      state.totalCount = action.payload.total_count
    },
    fetching(state, action) {
      state.isFetching = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setFetchError(state,action) {
      state.isFetchError = action.payload
    }
  }
})

export default reposSlice.reducer
export const { addRepos, fetching, setCurrentPage, setFetchError } = reposSlice.actions