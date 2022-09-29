import classes from './card.module.css'
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCurrentRepos } from "../../redux/actions/reposActions";

const Card = (props) => {

  const {username, reponame} = useParams()
  const [repo, setRepo] = useState({owner: {}})

  useEffect(() => {
    getCurrentRepos(username, reponame, setRepo)
  }, [username, reponame])

  return (
    <div>
      <NavLink to='/'> На главную </NavLink>
      <div className={classes.card}>
        <img src={repo.owner.avatar_url} alt="avatar" />
        <div className={classes.name}>{repo.name}</div>
        <div className={classes.stars}>Количество звезд: {repo.stargazers_count}</div>
      </div>
    </div>
  )
}

export default Card;