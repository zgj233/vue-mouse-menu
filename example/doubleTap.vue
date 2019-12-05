<template>
  <div class="main">
    <h4>DoubleClick Example</h4>
    <ul v-tap class="list">
      <li v-for="(item, it) in list">{{item.txt + it}}</li>
    </ul>

    <p>1.In the developer mode of the browser</p>
    <p>2.View the effect on the phone</p>

    <vue-mouse-menu :visible.sync="visible" :option="mouseOption">
      <div class="panel">
        <img src="./asset/panda.jpg" alt="panda">

        <textarea rows="5" v-model="textarea"></textarea>

        <button @click="submit">Submit</button>
      </div>
    </vue-mouse-menu>
  </div>
</template>

<script>
  export default {
    name: "doubleTap",
    data() {
      return {
        list: [
          {txt: "List item "},
          {txt: "List item "},
          {txt: "List item "},
          {txt: "List item "},
          {txt: "List item "},
        ],
        visible: false,
        mouseOption: {
          className: 'usr-css'
        },

        textarea: "Thank you for using my plugin. Could you give me a star"
      }
    },
    methods: {
      submit() {
        alert(this.textarea);
        this.visible = false;
      }
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
    img {
      width: 80%;
      margin-bottom: 10px;
    }

    textarea {
      width: 90%;
      display: inline-block;
    }

    button {
      border: 1px solid $white-smoke;
      color: $white;
      background: $light-black;
      border-radius: 5px;
      padding: 4px 8px;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-user-modify: read-write-plaintext-only;
      float: right;
      margin-top: 5px;
    }
  }

  .usr-css {
    width: 50%;
    padding: 10px;
  }
</style>