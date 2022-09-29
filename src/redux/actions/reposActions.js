import axios from "axios";
import { addRepos, fetching } from "../slices/reposSlice";

export const getRepos = (searchQuery = 'stars:%3E1', currentPage, perPage) => {
  if (searchQuery === '') {
    searchQuery = 'stars:%3E1'
  }
  return async dispatch => {
    try {
      dispatch(fetching(true))
      const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
      dispatch(addRepos(response.data))
      dispatch(fetching(false))
    } catch (e) {
      console.log(e)
    }
  }
}
export const getCurrentRepos = async (username, repoName,setRepo) => {
  const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
  setRepo(response.data)
}