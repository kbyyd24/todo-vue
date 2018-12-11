import { loadTodoList } from './todo'
import { Matchers } from '@pact-foundation/pact';

describe('Todo API contract test', () => {
  describe('Load todo list API', () => {
    const responseBody = [
      { 
        id: Matchers.uuid(), 
        content: Matchers.term({
          generate: 'todo content',
          matcher: '.*'
        }),
      }
    ]
    
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
        expect(response.data.id).not.toBeNull()
        expect(response.data.content).not.toBeNull()
        done()
      })
      .then(() => {
        provider.verify()
      })
    })
  })
})
