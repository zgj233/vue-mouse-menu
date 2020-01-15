<template>
  <div class="main">
    <h4>MouseClick Example</h4>
    <table v-xixi="option">
      <thead>
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>hobby</td>
        <td>Phone</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(person, p) in table">
        <td>{{person.name}}</td>
        <td>{{person.age}}</td>
        <td>{{person.hobby}}</td>
        <td>{{person.phone}}</td>
      </tr>
      </tbody>
    </table>

    <vue-mouse-menu :visible.sync="visible" source="three" :option="mouseOption">
      <ul>
        <li @click="clickLi(item)" v-for="item in menuList">
          {{item.txt}}
        </li>
      </ul>
    </vue-mouse-menu>
  </div>
</template>

<script>
  export default {
    name: "mouseClick",
    data(){
      return{
        table: [
          {
            name: 'Jack',
            age: 24,
            hobby: "play computer game",
            phone: 5432142
          },
          {
            name: 'Bob',
            age: 47,
            hobby: "beer",
            phone: 78-45545
          },
          {
            name: 'Green',
            age: 41,
            hobby: "play football",
            phone: 843135
          },
          {
            name: 'Lilly',
            age: 39,
            hobby: "sing",
            phone: "—"
          },
        ],
        menuList: [
          {
            txt: "Copy to notebook",
            val: 1
          },
          {
            txt: "Cut Down",
            val: 2
          },
          {
            txt: "Refresh",
            val: 3
          },
          {
            txt: "Go to Other website",
            val: 4
          }
        ],
        option:{
          target: "three",
          eventType: "mouseClick",
          //preventNativePOP: true,       //默认阻止原生鼠标事件
        },

        visible: false,
        mouseOption: {
          className: "usr-menu",
          pointx: 0,
          pointy: 0
        },
      }
    },
    methods:{
      clickLi(item){
        alert(JSON.stringify(item));
        this.visible = false;
      },
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "asset/color";
  .main{
    background: $white-smoke;
    padding: 1rem;
  }
  .usr-menu{
    border-radius: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    ul{
      margin: auto;
      li{
        cursor: pointer;
        padding: 4px 10px;
        +li{
          border-top: 1px solid $light-gray;
        }
        &:hover{
          font-weight: 600;
          background: $white-smoke;
        }
      }
    }

  }
</style>