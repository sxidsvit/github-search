import React, { Fragment } from 'react'

export const Repos = ({ repos }) => (
  <Fragment>
    {repos.map(repo => (
      <div className="card mb-3" key={repo.id}>
        <h5 className="p-3">
          <a href={repo.html_url}
            rel="noopener noreferrer"
            target="_blank"
            className="col-3"
          >
            {repo.name}
          </a>
        </h5>
      </div>
    ))
    }
  </Fragment>
)