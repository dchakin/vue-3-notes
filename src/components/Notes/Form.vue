<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea
          required
          v-model="value"
          placeholder="Type ur note"
      />
      <TagList @onItemClick="handleTagClick" :items="item" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagList from "@/components/UI/TagList";

export default {
  name: "Form",
  components: {TagList},
  data() {
    return {
      value: '',
      item: ['home', 'work', 'travel']
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value)
      // console.log(this.value)
      this.value = ''
    },
    handleTagClick(tag) {
      console.log(tag)
    }
  }
}
</script>

<style scoped>
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin-bottom: 30px;
}

.note-form textarea {
  margin-bottom: 0;
}
</style>
