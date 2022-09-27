import classes from './main.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../redux/actions/reposActions'
import Repos from './Repos/Repos'

const Main = () => {

  const dispatch = useDispatch()
  const fetching = useSelector(state => state.repos.isFetching)
  const repos = useSelector(state => state.repos.items)

  useEffect(() => {
    dispatch(getRepos())
  }, [dispatch])

  return (
    <div className={classes.main}>
      { fetching && <span>Идет загрузка...</span> }
      { 
        repos.map(repo => {
          return <Repos key={repo.id} repo={repo}/>
        }) 
      }
    </div>
  )
}

export default Main;