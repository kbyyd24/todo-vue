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
import TodoItem from './TodoItem'
import TodoCreator from './TodoCreator'
import Todo from './todo.js'

export default {
  name: 'TodoList',
  data: function() {
    return {
    todos: []
    }
  },
  methods: {
    addTodo(newTodo) {
      const trimmedNewTodo = newTodo
      if (trimmedNewTodo) {
        this.todos.push(new Todo(parseInt(Math.random() * 100), trimmedNewTodo))
      }
    },
    removeTodo(targetTodo) {
      this.todos = this.todos.filter(todo => todo.id !== targetTodo.id)
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
