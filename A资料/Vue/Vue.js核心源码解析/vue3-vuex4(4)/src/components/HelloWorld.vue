<script>
  import { inject } from 'vue'
import { mapGetters, mapActions } from 'vuex'

// const store = inject('store')


export default {
  computed: {
    total() {
      
    },
    ...mapGetters(['moduleA/countByGetter', 'moduleB/countByGetter'])
    ...mapGetters(['module'])
    ...mapGetters({
      globalCount: state => state.count
    }),
   ...mapState({
      a: (state, getters) => state.a + getters.countByGetter,
      b: state => state.module
    })
  },
  methods: {
    ...mapActions(['moduleA/add'])
  }
}
</script>

<template>
  <p>HelloWorld 使用 store</p>{{countByGetter}}
  <button @click="$store.commit('ADD', Math.random())">++ {{$store.getters.countByGetter}}</button>
</template>

function mapState(path) {
  return path.reduce((prev, key) => ({
    ...prev,
    [key]() { 
      return context.state[key]
    }
  }), {});
}

[{
  key: 'globalCount',
  val: state => state.count,
}, {
  ['moduleA/countByGetter']: 'moduleA/countByGetter'
}]