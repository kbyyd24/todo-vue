<template>
    <div class="todoList">
        <ol>
            <li v-for="todo in todos" :key="todo.id">{{ todo.content }}</li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'TodoList',
  data: function() {
    return {
      todos: [
        {
          id: 1,
          content: 'First Todo'
        },
        {
          id: 2,
          content: 'Can you see me'
        }
      ]
    }
  }
}
</script>

<style scoped>
.todoList {
    width: 40%;
    margin: auto;
}
</style>
