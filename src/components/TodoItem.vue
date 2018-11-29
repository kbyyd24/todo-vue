<template>
  <div class="todo-item">
    <span class="item-index">{{ index }}.</span>
    <p class="content">{{ todo.content }}</p>

    <div class="remove-button">
      <button @click="removeTodo">
        <span>Remove</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'index'],
  methods: {
    removeTodo() {
      this.$emit('remove-todo', this.todo)
    }
  }
}
</script>

<style scoped>
.todo-item {
  background-color: azure;
  border-radius: 5px;
  text-align: left;
  margin-top: 10px;
  position: relative;
}
.content {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: inline;
}
.remove-button {
  display: inline;
  right: 0;
  position: absolute;
}
</style>
