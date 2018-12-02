import Vuex, { Store } from "vuex";
import Vue from 'vue';
import * as mutationTypes from "./mutation-types";

Vue.use(Vuex)

export default new Store({
    state: {
        todoList: []
    },
    mutations: {
        [mutationTypes.CREATE_TODO] (state, todo) {
            state.todoList.push(todo);
        },
        [mutationTypes.REMOVE_TODO] (state, targetTodo) {
            state.todoList = state.todoList.filter(todo => todo !== targetTodo)
        }
    }
})