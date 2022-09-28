import classes from './repos.module.css'

const Repo = ({name, stargazers_count, updated_at, html_url}) => {

  return (
    <div className={classes.repo}>
      <div className={classes.repoHeader}>
        <div className={classes.repoHeaderName}> {name} </div>
        <div className={classes.repoHeaderStars}> Количество звезд: {stargazers_count} </div>
      </div>
      <div className={classes.repoLastCommit}>Дата последнего обновления: {updated_at} </div>
      <a href={html_url} className={classes.repoLink}>Ссылка на репозиторий: {html_url}</a>
    </div>
  )
}

export default Repo;