# Project Management

[![Docker CI](https://github.com/mdarif/project-management/actions/workflows/docker.yml/badge.svg?branch=master)](https://github.com/mdarif/project-management/actions/workflows/docker.yml) [![Node.js CI](https://github.com/mdarif/project-management/actions/workflows/node.js.yml/badge.svg)](https://github.com/mdarif/project-management/actions/workflows/node.js.yml)



<p>
  <a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/arif_iq" target="_blank">
    <img alt="Twitter: arif_iq" src="https://img.shields.io/twitter/follow/arif_iq.svg?style=social" />
  </a>
</p>

> A MERN app about Project Management System to add/manage clients & Projects using GraphGL Server/Client.

# Architecture
A Full Stack MERN app with GraphQL Server/Client.

![MERN Architecture](./client/src/images/architecture-mern-graphql.png)

### How REST API works?

![REST API](./client/src/images/rest-api.png)

### How GraphQL API works?

![GraphQL API](./client/src/images/graph-ql.png)



## Stacks Used
- [Apollo GraphQL Client](https://www.apollographql.com/)
- [Bootstrap](https://getbootstrap.com/)
- [GraphQL](https://graphql.org/)
- [GraphiQL Client](https://github.com/graphql/graphiql/tree/main/packages/graphiql)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Express GraphQL](https://graphql.org/graphql-js/express-graphql/)
- [Express](https://expressjs.com/)
- [ReactJS](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/)


## Folder Structure

```
├── README.md
├── client
│   ├── Dockerfile
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── ...
│   └── src
│       ├── App.js
│       ├── App.test.js
│       ├── components
│       │   ├── AddClientModal.jsx
│       │   ├── AddProjectModal.jsx
│       │   ├── ClientInfo.jsx
│       │   ├── ClientRow.jsx
│       │   ├── Clients.jsx
│       │   ├── DeleteProjectButton.jsx
│       │   ├── EditProjectForm.jsx
│       │   ├── Header.jsx
│       │   ├── ProjectCard.jsx
│       │   ├── Projects.jsx
│       │   ├── Spinner.jsx
│       │   └── assets
│       │       └── logo.png
│       ├── images
│       │   ├── ...
│       ├── index.css
│       ├── index.js
│       ├── mutations
│       │   ├── clientMutations.js
│       │   └── projectMutations.js
│       ├── pages
│       │   ├── Home.jsx
│       │   ├── NotFound.jsx
│       │   └── Project.jsx
│       ├── queries
│       │   ├── clientQueries.js
│       │   └── projectQueries.js
│       ├── reportWebVitals.js
│       └── setupTests.js
├── docker-compose.yml
└── server
    ├── Dockerfile
    ├── config
    │   └── db.js
    ├── index.js
    ├── models
    │   ├── Client.js
    │   └── Project.js
    ├── package-lock.json
    ├── package.json
    ├── sampleData.js
    └── schema
        └── schema.js
```

## Heroku Deployment

- https://github-finder-ts.vercel.app/