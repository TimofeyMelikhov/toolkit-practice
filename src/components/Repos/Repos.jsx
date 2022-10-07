import classes from './repos.module.css'
import { Link } from 'react-router-dom';

const Repo = ({
  name, 
  description, 
  stargazers_count, 
  updated_at, 
  html_url, 
  owner
}) => {

  return (
    <div className={classes.repo}>
      <div className={classes.repoHeader}>
        <div className={classes.repoHeaderName}> <Link to={`/card/${owner.login}/${name}`}> {name} </Link> </div>
        <div className={classes.repoHeaderStars}> Количество звезд: {stargazers_count} </div>
      </div>
      <div className={classes.repoDescription}> {description} </div>
      <div className={classes.repoLastCommit}>Дата последнего обновления: {updated_at} </div>
      <a href={html_url} target='blanck' className={classes.repoLink}>Ссылка на репозиторий: {html_url}</a>
    </div>
  )
}

export default Repo;