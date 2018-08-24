<template>
    <div class="todoList">
        <TodoItem v-for="todo of todos"
              :key="todo.id"
              :todo="todo"
              :index="todo.id"
        ></TodoItem>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  data: function() {
    return {
      todos: [new Todo(1, 'First of todo'), new Todo(2, 'Can you see me')]
    }
  },
  components: {
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
