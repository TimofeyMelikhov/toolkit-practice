import classes from './repos.module.css'

const Repo = (props) => {
  
  const repo = props.repo

  return (
    <div className={classes.repo}>
      <div className={classes.repoHeader}>
        <div className={classes.repoHeaderName}> {repo.name} </div>
        <div className={classes.repoHeaderStars}> Количество звезд: {repo.stargazers_count} </div>
      </div>
      <div className={classes.repoLastCommit}>Дата последнего обновления: {repo.updated_at} </div>
      <a href={repo.html_url} className={classes.repoLink}>Ссылка на репозиторий: {repo.html_url}</a>
    </div>
  )
}

export default Repo;