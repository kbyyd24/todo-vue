import * as mutationTypes from './todo-mutation-types'
import * as actionTypes from './todo-action-types'
import Axios from 'axios'

export const todoStore = {
  state: {
    content: []
  },
  mutations: {
    [mutationTypes.CREATE_TODO](state, todo) {
      state.content.push(todo)
    },
    [mutationTypes.REMOVE_TODO](state, targetTodo) {
      state.content = state.content.filter(todo => todo !== targetTodo)
    },
    [mutationTypes.LOAD_TODO_LIST](state, todoList) {
      state.content = todoList
    }
  },
  actions: {
    [actionTypes.LOAD_TODO_LIST](context) {
      Axios.get('/todos')
        .then(response => {
          context.commit(mutationTypes.LOAD_TODO_LIST, response.data)
        })
        .catch(() => context.commit(mutationTypes.LOAD_TODO_LIST, []))
    }
  }
}
