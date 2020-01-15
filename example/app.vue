<template>
  <div>
    <double-tap></double-tap>
    <long-press></long-press>
    <mouse-click></mouse-click>
    <local-registration></local-registration>
  </div>
</template>

<script>
  import MouseClick from './mouseClick.vue'
  import DoubleTap from './doubleTap.vue'
  import LongPress from './longPress.vue'
  import LocalRegistration from './local-registration.vue'
  export default {
    name: "app",
    components:{
      MouseClick,
      DoubleTap,
      LongPress,
      LocalRegistration
    }
  }
</script>

<style lang="scss" type="text/scss">
  h4{
    margin: 10px 0;
  }
</style>