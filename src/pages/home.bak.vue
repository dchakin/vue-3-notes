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
      notes: [
        {
          title: 'Learn Vue 3',
          tags: ['work']
        },
        {
          title: 'Finish course',
          tags: ['work', 'home']
        }
      ]
    }
  },
  mounted() {
    this.getNotes()
  },
  methods: {
    handleSubmit(title) {
      const note = {
        title: title,
        tags: []
      }
      this.notes.push(note)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    },
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    }
  },
  watch: {
    notes: {
      handler(updateList) {
        localStorage.setItem('notes', JSON.stringify(updateList))
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>

