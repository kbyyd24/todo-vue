<template>
  <div class="todo-item">
    <span class="item-index">{{ index }}. </span>
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
  background-color: azure;
  border-radius: 5px;
  text-align: left;
  margin-top: 10px;
}
.content {
  font-family: 'Monaco';
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: inline;
}
</style>
