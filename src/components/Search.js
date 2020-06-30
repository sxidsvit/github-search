import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/Alert/AlertContext'
import { GithubContext } from '../context/GitHub/githubContext'

export const Search = () => {

  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const { search, clearUsers } = useContext(GithubContext)

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }
    clearUsers()

    if (value.trim()) {
      alert.hide()
      search(value.trim())
    } else {
      alert.show('Введите данные пользователя!')
    }

  }

  return (
    <div className="input-group flex-nowrap mb-5">
      <div className="input-group-prepend">
        <span className="input-group-text" id="addon-wrapping">@</span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Имя пользователя для поиска по Github ..."
        aria-label="Username" aria-describedby="addon-wrapping"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}