import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reposSlice from './slices/reposSlice'

const rootReducer = combineReducers({
  repos: reposSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}