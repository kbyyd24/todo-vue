<template>
  <div class="todoList">
    <AddTodo v-on:add-todo="addTodo($event)"/>
    <TodoItem v-for="(todo, index) in todos"
              :key="todo.id"
              :todo="todo"
              :index="index + 1"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import AddTodo from './AddTodo'

export default {
  name: 'TodoList',
  data: function() {
    return {
      todos: [new Todo(1, 'First of todo'), new Todo(2, 'Can you see me')]
    }
  },
  methods: {
    addTodo(newTodo) {
      const trimmedNewTodo = newTodo
      if (trimmedNewTodo) {
        this.todos.push(new Todo(parseInt(Math.random() * 100), trimmedNewTodo))
      }
    }
  },
  components: {
    AddTodo,
    TodoItem
  }
}

export class Todo {
  constructor(id, content) {
    this.id = id
    this.content = content
  }
}
</script>

<style scoped>
.todoList {
  width: 40%;
  margin: auto;
}
</style>
