const axios = require('axios');

const fetchData = async (id) => {
  const todosUrl = 'http://jsonplaceholder.typicode.com/todos/'
  const results = await axios.get(`${todosUrl}${id}`)
  return results.data;
}

it('mock axios', async () => {
  jest.spyOn(axios, 'get').mockReturnValueOnce({
    data: {
      id: 1,
      todo: 'Get 1M Subs'
    }
  })
  const results = await fetchData(1);

  expect(results.todo).toBe('Get 1M Subs');

})
