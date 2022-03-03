import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const app = createApp(App);
const moduleRoot = {
  state: {
    count: 1
  },
  mutations: {
    ADD(state, payload) {
      state.count += payload
    }
  },
  actions: {
    add(context) {
      context.commit('ADD', 1)
    }
  },
  getters: {
    countByGetter: state => state.count
  },
};

const moduleA = {
  namespaced: true,
  state: {
    ...moduleRoot.state
  },
  mutations: {
    ...moduleRoot.mutations
  },
  actions: {
    ...moduleRoot.actions
  },
  getters: {
    ...moduleRoot.getters
  }
};
const moduleB = {
  namespaced: true,
  state: {
    ...moduleRoot.state
  },
  mutations: {
    ...moduleRoot.mutations
  },
  actions: {
    ...moduleRoot.actions
  },
  getters: {
    ...moduleRoot.getters
  }
};

const store = createStore({
  ...moduleRoot,
  modules: {
    moduleA,
    moduleB
  }
})

app.use(store);
console.log(store)
app.mount('#app')