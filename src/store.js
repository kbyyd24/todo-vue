import Vuex, { Store } from "vuex";
import Vue from 'vue';
import { todoStore } from "./components/Todo/todo-store";

Vue.use(Vuex)

export default new Store({
    modules: {
        todoList: todoStore
    }
})