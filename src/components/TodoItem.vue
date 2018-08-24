<template>
  <div class="todo-item">
    <span class="item-index">{{ index }}</span>
    <p class="content">{{ todo.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'index']
}
</script>

<style scoped>
.todo-item {
}
.item-index {
}
.content {
  background-color: lightgrey;
}
</style>
