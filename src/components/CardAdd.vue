<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input v-model="body"
      type="text"
      class="text-input"
      placeholder="Add new Card"
      @focusin="startEditing"
      @focusout="finishEditing"
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
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ['addcard']
      if (this.isEditing) {
        classList.push('active')
      }
      // if (this.titleExists) {
      //   classList.push('addable')
      // }
      return classList
    },
    titleExists() {
      return this.title.length > 0
    },
  },
  methods: {
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
    addCardToLost: function() {
      this.$store.dispatch('addCardToList', {body: this.body, listIndex: this.listIndex})
      this.body = ''
    },
  }
}
</script>