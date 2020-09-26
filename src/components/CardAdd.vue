<template>
  <form class="addcard" @submit.prevent="addCardToList">
    <input v-model="body"
      type="text"
      class="text-input"
      placeholder="Add new Card"
    />
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    }
  },
  data: function() {
    return {
      body: '',
    }
  },
  methods: {
    addCardToLost: function() {
      this.$store.dispatch('addCardToList', {body: this.body, listIndex: this.listIndex})
      this.body = ''
    }
  }
}
</script>