import classes from './main.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../redux/actions/reposActions'
import { setCurrentPage } from '../redux/slices/reposSlice'
import { createPages } from '../utils/pagesCreator'
import Repos from './Repos/Repos'

const Main = () => {

  const dispatch = useDispatch()
  const fetching = useSelector(state => state.repos.isFetching)
  const repos = useSelector(state => state.repos.items)
  const currentPage = useSelector(state => state.repos.currentPage)
  const totalCount = useSelector(state => state.repos.totalCount)
  const perPage = useSelector(state => state.repos.perPage)

  const pagesCount = Math.ceil(totalCount / perPage)

  const [searchValue, setSearchValue] = useState('')

  const pages = []

  createPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage))
  }, [currentPage, dispatch, perPage, searchValue])

  const searchHandler = () => {
    dispatch(currentPage(1))
    dispatch(getRepos(searchValue, currentPage, perPage))
    setSearchValue('')
  }

  return (
    <div className={classes.main}>
      <div className={classes.search}>
        <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type="text" placeholder='Введите название репозитория' className={classes.searchInput}/>
        <button onClick={searchHandler} className={classes.searchBtn}>Поиск</button>
      </div>

      { !fetching ? 
        repos.map(({id, name, stargazers_count, updated_at, html_url}) => {
          return <Repos key={id} name={name} stargazers_count={stargazers_count} updated_at={updated_at} html_url={html_url}/>
        }) 
        : <div className={classes.loading} />
      }

      <div className={classes.pages}>
        {pages.map((page, index) => <span 
          key={index} 
          className={currentPage === page ? classes.currentPage : classes.page}
          onClick={() => dispatch(setCurrentPage(page))}
        >
          {page}
        </span>)}
      </div>
    </div>
  )
}

export default Main;