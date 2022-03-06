<script setup>
import { inject } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

/* const store = inject('store')
const props = defineProps({
  foo: String
}) */

// const emit = defineEmits(['change', 'delete'])

</script>

<template>
  <!-- <pre>{{ JSON.stringify($store, null, 2) }}</pre> -->
  <HelloWorld msg="hello vue" />
</template>


<!-- 

<script>
import { inject } from 'vue'
import HelloWorld from './components/HelloWorld.vue'


export defult {
  components: {
    HelloWorld,
  },
  setup(props, context) {
    const store = inject('store')
    
  }
}

</script>
<template>
  <pre>{{ JSON.stringify(store, null, 2) }}</pre>
  <HelloWorld msg="hello vue" />
</template> -->