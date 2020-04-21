'use strict';

// func to get the chart method from db

// funct to map the chart object into whatever new shape it needs to be

// create handler function that takes as parameters (request,h) and returns
// the HTTP response

// export the handler func

async function handleGet(request, h) {
  const db = request.server.methods.db();
  const queries = request.server.methods.queries();
  const userList = await db
    .any(queries.users.getAll)
    .then((rows) => {
      console.warn(rows);
      return rows;
    })
    .catch((err) => console.error(err));
  return userList;
}

module.exports = {
  handleGet,
};
