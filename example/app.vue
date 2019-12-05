<template>
  <div>
    <double-tap></double-tap>
    <long-press></long-press>
    <mouse-click></mouse-click>
  </div>
</template>

<script>
  import MouseClick from './mouseClick.vue'
  import DoubleTap from './doubleTap.vue'
  import LongPress from './longPress.vue'
  export default {
    name: "app",
    components:{
      MouseClick,
      DoubleTap,
      LongPress
    }
  }
</script>