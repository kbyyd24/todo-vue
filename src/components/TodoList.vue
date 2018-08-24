<template>
    <div class="todoList">
        <input type="text" class="add-todo" placeholder="add new todo" v-model="newTodo">
        <button class="add-todo-button" @click="addTodo">Add</button>
        <TodoItem v-for="(todo, index) in todos"
              :key="todo.id"
              :todo="todo"
              :index="index + 1"
        ></TodoItem>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  data: function() {
    return {
      newTodo: '',
      todos: [new Todo(1, 'First of todo'), new Todo(2, 'Can you see me')]
    }
  },
  methods: {
    addTodo() {
      this.todos.push(new Todo(parseInt(Math.random() * 100), this.newTodo))
      this.newTodo = ''
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
