<template>
  <div class="todoList">
    <TodoCreator v-on:add-todo="addTodo($event)"/>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index + 1"
      v-on:remove-todo="removeTodo($event)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TodoItem from './TodoItem'
import TodoCreator from './TodoCreator'
import Todo from './todo.js'

export default {
  name: 'TodoList',
  computed: mapState({
    todos: state => state.todoList
  }),
  methods: {
    addTodo(newTodo) {
      // const trimmedNewTodo = newTodo
      // if (trimmedNewTodo) {
      //   this.todos.push(new Todo(parseInt(Math.random() * 100), trimmedNewTodo))
      // }
      console.log('should create it')
    },
    removeTodo(targetTodo) {
      // this.todos = this.todos.filter(todo => todo.id !== targetTodo.id)
      console.log('should remove it')
    }
  },
  components: {
    TodoCreator,
    TodoItem
  }
}
</script>

<style scoped>
.todoList {
  font-family: 'Monaco';
  width: 40%;
  margin: auto;
}
</style>
