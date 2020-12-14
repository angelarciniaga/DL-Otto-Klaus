<template>
  <div>
    <HelloWorld />
    <ListaJuguetes />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ListaJuguetes from '@/components/ListaJuguetes.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListaJuguetes
  }
}
</script>
