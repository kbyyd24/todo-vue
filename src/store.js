import Vuex, { Store } from "vuex";
import Vue from 'vue';
import { CREATE_TODO } from "./mutation-types";

Vue.use(Vuex)

export default new Store({
    state: {
        todoList: [{content: 'ha'}]
    },
    mutations: {
        [CREATE_TODO] (state, todo) {
            state.todoList.push(todo);
        }
    }
})