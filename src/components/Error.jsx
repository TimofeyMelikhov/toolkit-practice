import { Link } from "react-router-dom";

const Error = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <div>При загрузке данных произошла ошибка, обновите страницу!</div>
      <Link to='/'>Вернуться на главну страницу</Link>
    </div>
  )
}

export default Error;