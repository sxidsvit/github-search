import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ user }) => (
  <div className="card">
    <img src={user.avatar_url} alt={user.login} className="card-img-top" />
    <div className="card-body text-center pl-0 pr-0">
      <h5 className="card-title">{user.login}</h5>
      <Link to={'/profile/' + user.login} className="btn btn-primary pl-4 pr-4">Подробности</Link>
    </div>
  </div>
)