<template>
  <div class="add-todo">
    <input type="text"
           class="add-todo-input"
           placeholder="add new todo"
           v-model="value"
           @keypress.enter="addTodo"
    />
    <button class="add-todo-button" @click="addTodo">Add</button>
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
</style>
