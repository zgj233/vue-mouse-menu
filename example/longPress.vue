<template>
  <div class="container">
    <h4>LongPress Example</h4>
    <div v-tap="tapOption" class="my-ul">
      <ul>
        <li v-for="(item, it) in list">{{item.txt + it}}</li>
      </ul>
    </div>

    <p>1.In the developer mode of the browser</p>
    <p>2.View the effect on the phone</p>

    <vue-mouse-menu :visible.sync="visible" :option="mouseOption">
      <div class="pop-box">
        <textarea v-model="textarea" rows="5"></textarea>
        <button type="button" @click="submit">Submit</button>
      </div>
    </vue-mouse-menu>
  </div>
</template>

<script>
  //Could imported by manually
  export default {
    name: "longPress",
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
          className: 'usr-css'
        },
        visible: false,

        textarea: "Thank you for using my plugin. Could you give me a star"
      }
    },
    methods: {
      submit() {
        alert(this.textarea);
        this.visible = false;
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

  .container {
    padding: 10px;
    background: $darkGray;
    margin-bottom: 3rem;
    p{
      color: $light-smoke;
    }
  }

  .my-ul {
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

  .pop-box {
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