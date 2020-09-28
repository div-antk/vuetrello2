<template>
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <!-- listコンポーネントを呼び出し、必要なデータを渡す（propsで定義したデータ） -->
        <!-- v-vindを : として省略できる -->
        <draggable :list="lists"
          @end="movingList"
          class="list-index"
        >
          <list v-for="(item, index) in lists"
            :key="item.id"
            :title="item.title"
            :cards="item.cards"
            :listIndex="index"
            @change="movingCard"
          />
          <list-add />
        </draggable>
      </div>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ListAdd from './ListAdd.vue'
import List from './List'
import { mapState } from 'vuex'

export default {
  components: {
    draggable,
    ListAdd,
    List,
  },
  computed: {
    // mapStateヘルパー
    // stateで定義されたデータの名前を同じ名前の文字列でstateを呼び出すことができる
    ...mapState([
      'lists'
    ]),
    totalCardCount() {
      return this.$store.getters.totalCardCount;
    },
  },
  methods: {
    movingCard: function() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
    movingList: function() {
      this.$store.dispatch('updateList', { lists: this.lists })
    } 
  },
}

</script>
