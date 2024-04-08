<template>
  <PrimeiroComponente />
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import SegundoComponente from './components/SegundoComponente.vue';

  export default {
    name: "App",
    components: {
      PrimeiroComponente,
        SegundoComponente
    }
  }
</script>