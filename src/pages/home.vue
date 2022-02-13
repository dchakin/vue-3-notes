<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/Form'
import List from "@/components/Notes/List";

export default {
  name: "home",
  components: {
    Form,
    List
  },
  data () {
    return {
      notes: ['task 1', 'task 2', 'task 3']
    }
  },
  methods: {
    handleSubmit(note) {
      this.notes.push(note)
      console.log(note)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>

