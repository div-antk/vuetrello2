<template>
  <div id="app">
    <!-- コンポーネント呼び出し -->
    <board />
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    // コンポーネントに登録
    Board
  }
}
</script>
