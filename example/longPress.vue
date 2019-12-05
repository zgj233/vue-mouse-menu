<template>
  <div class="main">
    <h4>LongPress Example</h4>
    <div v-tap="tapOption" class="list">
      <ul>
        <li v-for="(item, it) in list">{{item.txt + it}}</li>
      </ul>
    </div>

    <p>1.In the developer mode of the browser</p>
    <p>2.View the effect on the phone</p>

    <mouse-menu :option="mouseOption">
      <div class="panel">
        <textarea v-model="textarea" rows="5"></textarea>
        <button type="button" @click="submit">Submit</button>
      </div>
    </mouse-menu>
  </div>
</template>

<script>
  //Could imported by manually
  import {Menu} from '@/development/index'
  export default {
    name: "doubleTap",
    data() {
      return {
        list: [
          {txt: "LongPress item view - "},
          {txt: "LongPress item view - "},
          {txt: "LongPress item view - "},
          {txt: "LongPress item view - "},
          {txt: "LongPress item view - "},
          {txt: "LongPress item view - "},
        ],
        tapOption: {
          tap: 'longPress',
        },
        mouseOption: {
          visible: false,
          className: 'usr-css'
        },

        textarea: "Thank you for using my plugin. Could you give me a star"
      }
    },
    components:{
      "mouse-menu": Menu
    },
    methods: {
      submit() {
        alert(this.textarea);
        this.mouseOption.visible = false;
      }
    },
    created() {
      //TODO I can't solve This bug
      // I don't know why, the content in <mouse-menu>'s <slot> will be overwritten by the content in doubleTap.vue <slot> .
      // This is a bug, but I can't solve it
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "asset/color";

  .main {
    padding: 10px;
    background: $darkGray;
    margin-bottom: 3rem;
    p{
      color: $light-smoke;
    }
  }

  .list {
    background: $white-smoke;
    margin-bottom: 20px;
    width: 80%;
    border-radius: 5px;

    li {
      font-size: 1.2rem;
      + li {
        border-top: 1px solid $darkGray;
      }
    }
  }

  .panel {
    textarea {
      width: 100%;
      margin-bottom: 10px;
      border: 2px solid $green;
      padding: 5px;
      border-radius: 5px;
      box-sizing: border-box;
    }

    button {
      border: 1px solid $light-blue;
      color: $white;
      background: $light-blue;
      border-radius: 5px;
      padding: 4px 8px;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-user-modify: read-write-plaintext-only;
      float: right;
    }
  }

  .usr-css {
    width: 60%;
    padding: 10px;
  }
</style>