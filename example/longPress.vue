<template>
  <div class="container">
    <h4>LongPress Example</h4>
    <h4 style="color:#d63200">You can only see it works on your phone</h4>
    <div v-xixi="tapOption" class="my-ul">
      <ul>
        <li v-for="(item, it) in list">{{item.txt + it}}</li>
      </ul>
    </div>

    <p>1.In the developer mode of the browser</p>
    <p>2.View the effect on the phone</p>

    <vue-mouse-menu :visible.sync="visible" source="one" :option="option">
      <div class="pop-box">
        <textarea v-model="textarea" rows="5"></textarea>
        <button type="button" @click="submit">Submit</button>
      </div>
    </vue-mouse-menu>
  </div>
</template>

<script>
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
          eventType: 'longPress',
          target: "one",
          timekeep: 1000,               //默认长按时间不小于1000ms弹出菜单，该参数只有longPress的时候有效,
          preventSelectTxt: true,       //默认阻止手机端长按选中文字的css样式
        },
        option: {
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