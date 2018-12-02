<template>
  <div class="add-todo">
    <textarea
      class="add-todo-textarea"
      placeholder="add new todo"
      v-model="value"
      @keypress.alt.enter="createTodo"
    />

    <div class="add-todo-button">
      <button @click="createTodo">Create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoCreator',
  data: function() {
    return {
      value: ''
    }
  },
  methods: {
    createTodo() {
      this.$emit('create-todo', this.value.trim())
      this.value = ''
    }
  }
}
</script>

<style scoped>
.add-todo-textarea {
  font-family: 'Monaco';
  width: 80%;
  height: 120px;
  border-style: none;
  border-bottom-style: solid;
  border-bottom-color: cadetblue;
}

.add-todo-button {
  display: block;
}
</style>
