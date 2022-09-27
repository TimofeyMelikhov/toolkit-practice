import axios from "axios";
import { addRepos, fetching } from "../slices/reposSlice";

export const getRepos = (searchQuery = 'stars:%3E1') => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
      dispatch(addRepos(response.data))
      dispatch(fetching(false))
    } catch (e) {
      console.log(e)
    }
  }
}