import { loadTodoList } from './todo'

describe('Todo API contract test', () => {
  describe('Load todo list API', () => {
    const responseBody = [{ id: 'string', content: 'string' }]
    
    beforeEach(() => {
      const interaction = {
        uponReceiving: 'load todo list request',
        withRequest: {
          method: 'GET',
          path: '/todos'
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          },
          body: responseBody
        }
      }
      return provider.addInteraction(interaction)
    })

    it('load todo list success', done => {
      loadTodoList()
      .then(response => {
        expect(response.data).toEqual(responseBody)
        done()
      })
      .then(() => {
        provider.verify()
      })
    })
  })
})
