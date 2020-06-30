import React, { useContext, useEffect, Fragment } from 'react'
import { GithubContext } from '../context/GitHub/githubContext'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'

export const Profile = ({ match }) => {

  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <p className="text-center">Загрузка</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos,
    public_gists
  } = user

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-sm-5 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{ width: '100%' }}
              />
              <h2>{name}</h2>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col-12 col-sm-7">
              {
                bio && <Fragment>
                  <h4>BIO</h4>
                  <p>{bio}</p>
                </Fragment>
              }
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mb-2 pt-2 pb-2 pl-5 pr-5"
              >Открыть профиль</a>
              <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                {login && <li>
                  <strong>Юзер-нэйм: </strong> {login}
                </li>}

                {company && <li>
                  <strong>Компания: </strong> {company}
                </li>}

                {blog && <li>
                  <strong>Веб-сайт: </strong> {blog}
                </li>}
              </ul>

              <div className="row justify-content-around">
                <div className="badge badge-primary  col-5 mb-2 pt-2 pb-2">Подписчики: {followers}</div>
                <div className="badge badge-success  col-5 mb-2 pt-2 pb-2">Подписан: {following}</div>
                <div className="badge badge-info  col-5 mb-2 pt-2 pb-2">Репозитории: {public_repos}</div>
                <div className="badge badge-dark col-5 mb-2 pt-2 pb-2">Gists: {public_gists}</div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h4 className="text-center mb-4 mt-5"> Репозитории</h4>
        <div className="row justify-content-around">
          <Repos repos={repos} />
        </div>
      </div>
    </Fragment>
  )
}
