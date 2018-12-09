import { api } from './api'

const loadTodoList = () => {
  return api.get('/todos')
}

export { loadTodoList }
