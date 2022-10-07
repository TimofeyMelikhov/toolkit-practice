import classes from './card.module.css'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCurrentRepos } from "../../redux/actions/reposActions";

const Card = () => {

  const {username, reponame} = useParams()
  const [repo, setRepo] = useState({owner: {}})
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    getCurrentRepos(username, reponame, setRepo, setFetching)
  }, [username, reponame])

  return (
    <>
      {!fetching ? 
        <div className={classes.wrap}>
          <Link to='/'> На главную </Link>
          <div className={classes.card}>
            <img src={repo.owner.avatar_url} alt="avatar" />
            <div className={classes.name}>{repo.name}</div>
            <div className={classes.stars}>Количество звезд: {repo.stargazers_count}</div>
          </div>
        </div> : <div className={classes.loading}/>
      }
    </>
  )
}

export default Card;