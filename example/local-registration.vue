<template>
  <div class="container">
    <h4>local registration Example</h4>
    <div v-xixi="tapOption" class="my-ul">
      <ul>
        <li v-for="(item, it) in list">{{item.txt + it}}</li>
      </ul>
    </div>

    <p>1.In the developer mode of the browser</p>
    <p>2.View the effect on the phone</p>

    <just-do-it :visible.sync="visible" source="four" :option="option">
      <div class="pop-box">
        <textarea v-model="textarea" rows="5"></textarea>
        <button type="button" @click="submit">got it</button>
      </div>
    </just-do-it>
  </div>
</template>

<script>
  //Could imported by manually
  import {Menu} from '@/development/index'
  export default {
    name: "local-registration",
    data() {
      return {
        list: [
          {txt: "local registration item view - "},
          {txt: "local registration item view - "},
          {txt: "local registration item view - "},
          {txt: "local registration item view - "},
          {txt: "local registration item view - "},
          {txt: "local registration item view - "},
        ],
        tapOption: {
          eventType: 'single',
          target: "four",
        },
        option: {
          className: 'usr-css'
        },
        visible: false,

        textarea: "component's source is component's id"
      }
    },
    components:{
      "just-do-it": Menu
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

  .container {
    padding: 10px;
    background: $darkGray;
    margin-top: 3rem;
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