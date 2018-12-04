import * as mutationTypes from "./todo-mutation-types";

export const todoStore = {
    state: {
        content: []
    },
    mutations: {
        [mutationTypes.CREATE_TODO] (state, todo) {
            state.content.push(todo);
        },
        [mutationTypes.REMOVE_TODO] (state, targetTodo) {
            state.content = state.content.filter(todo => todo !== targetTodo)
        }
    }
}