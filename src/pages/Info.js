import React from 'react'

export const Info = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container ">
        <p className=" display-5 text-center }"><strong>REACT SPA для поиска пользователей и репозиториев на GitHub</strong> </p>
        <ul className="text-center }">

          Какие задачи решает это приложение:
 </ul>

        <li>SPA на основе только функциональных компонетов React</li>
        <li>Передачу контекста между компонетами: createContext() и хук useContext()</li>
        <li>Работа со state: хуки useReducer() и useState()</li>
        <li>Работа хуком useEffect()</li>
        <li>Работа API Github</li>
      </div>
    </div>
  )
}
