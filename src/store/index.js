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
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
  },
  getters: {
  // modules: {
  }
})

store.subscribe((mutation, state) => {
  // データの状態を更新後にlocalStorageへのデータ状態を保存
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

// ストアインスタンスを取得②。main.jsでインポートできるようにexport default
export default store