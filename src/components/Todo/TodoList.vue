<template>
  <div class="todoList">
    <TodoCreator v-on:create-todo="createTodo($event)"/>
    <TodoItem
      v-for="(todo, index) in todos.content"
      :key="todo.id"
      :todo="todo"
      :index="index + 1"
      v-on:remove-todo="removeTodo($event)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { CREATE_TODO, REMOVE_TODO } from './todo-mutation-types.js'
import TodoItem from './TodoItem'
import TodoCreator from './TodoCreator'
import Todo from './todo.js'

export default {
  name: 'TodoList',
  computed: mapState({
    todos: state => state.todoList
  }),
  methods: {
    createTodo(newTodo) {
      if (newTodo) {
        this.$store.commit(
          CREATE_TODO,
          new Todo(parseInt(Math.random() * 100), newTodo)
        )
      }
    },
    removeTodo(targetTodo) {
      this.$store.commit(REMOVE_TODO, targetTodo)
    }
  },
  components: {
    TodoCreator,
    TodoItem
  },
  beforeMount: function() {
    this.$store.dispatch('loadTodoList')
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
