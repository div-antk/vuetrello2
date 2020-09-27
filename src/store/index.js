import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// localStorageに保存したデータを取得（キーと値のセット。カッコ内は設定したキー）
const savedLists = localStorage.getItem('trello-lists')

// ストアインスタンスを取得①
const store = new Vuex.Store({
  state: {
    // ここから↓localStorageに保存されたリストがあれば取得、なければデフォルトのリスト配列を設置
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body:'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
    // ここまで↑
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    // 受け取ったリストのインデックスを使ってspliceで削除する
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
    removeCardFromList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
      state.lists = payload.lists
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addCardToList(context, payload) {
      context.commit('addCardToList', payload)
    },
    removeCardFromList(context, payload) {
      context.commit('removeCardFromList', payload)
    },
    updateList(context, payload) {
      context.commit('updateList', payload)
    },
  },
  getters: {
    totalCardCount(state) {
      let count = 0
      state.lists.map(content => count += content.cards.length)
      return count
    },
  },
})

store.subscribe((mutation, state) => {
  // データの状態を更新後にlocalStorageへのデータ状態を保存
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

// ストアインスタンスを取得②。main.jsでインポートできるようにexport default
export default store