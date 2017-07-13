<template>
  <div v-if="showPop" class="menu-box" :style="freeStyle">
    <ul class="list-unstyled">
      <li v-for="(item,it) in items" @click="listItemClick(it)">
        <span>
          <i :class="item.class"></i>
        </span>
        <span>{{item.txt}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props:['popItems','mouse', 'slotArr'],
    data(){
      return {
        freeStyle:'',
        showPop:false
      }
    },
    watch:{
      mouse(){
        let self = this;
        let x= self.mouse[0];
        let y= self.mouse[1];
        if(x === 'close'){
          self.showPop = false
        }
        else {
          self.freeStyle = `left:${x}px; top:${y}px;`;    //计算鼠标位置
          self.showPop = true
        }

      }
    },
    computed:{
      items(){
        return this.popItems
      }
    },
    created(){
      document.oncontextmenu = preventExplorerMenu;
    },

    methods: {
      listItemClick(it){
        let self = this;
        self.$emit('ListItemClick',it);
      }
    },
    mounted(){

    }
  }

  function preventExplorerMenu(){
    return false
  }
</script>

<style scoped>
  .menu-box{
  border: 1px solid #ddd;
  width: 150px;
  padding: 5px 10px;
  box-shadow: 2px 2px 2px #aaa;
  position: absolute;
  z-index: 10;
  background-color: #eee
}
  .menu-box >ul{
    margin: auto;
  }
  .menu-box ul li{
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
  }
  .menu-box ul li+li{
    border-top: 1px solid #bebebe;
  }
  .menu-box ul li:hover{
    background-color: #ddd;
  }
  .menu-box ul li span{
    display: inline-block;
  }
  .menu-box ul li span:first-child{
    margin-right: 5px;
  }
</style>
