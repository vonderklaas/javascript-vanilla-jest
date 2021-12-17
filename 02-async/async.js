const axios = require('axios');

const fetchData = async (id) => {
  const todosUrl = 'http://jsonplaceholder.typicode.com/todos/'
  const results = await axios.get(`${todosUrl}${id}`)
  return results.data;
}

module.exports = fetchData;