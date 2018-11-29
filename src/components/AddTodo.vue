<template>
  <div class="add-todo">
    <textarea
      type="text"
      class="add-todo-input"
      placeholder="add new todo"
      v-model="value"
      @keypress.enter="addTodo"
    />

    <div class="add-todo-button">
      <button @click="addTodo">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data: function() {
    return {
      value: ''
    }
  },
  methods: {
    addTodo() {
      this.$emit('add-todo', this.value.trim())
      this.value = ''
    }
  }
}
</script>

<style scoped>
.add-todo-button {
  display: block;
}
</style>
