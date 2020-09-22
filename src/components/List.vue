<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
  </div>
</template>

<script>
export default {
  // 親コンポーネントから受け取るデータ
  props: {
    title: {
      // Stringで受け取る
      type: String,
      // 必ず受け取る
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeList: function() {
      if(confirm('消します？')){
        this.$store.dispatch('removelist', { listIndex: this.listIndex })
      }
    },
  }
}
</script>