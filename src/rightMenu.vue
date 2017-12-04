<template>
  <div>
    <div v-if="showPop" class="menu-box" :style="freeStyle" ref="menu">
      <slot name="above"></slot>
      <ul class="list-unstyled">
        <li v-for="(item,it) in items" @click="listItemClick(it)">
          <span>
            <i :class="item.class"></i>
          </span>
          <span v-html="item.txt" :class="classItemName"></span>
        </li>
      </ul>
      <slot name="below"></slot>
    </div>
  </div>
</template>

<script>
  export default{
    props: [
      'popItems', 'mouse', 'classItemName', 'zIndex', 'width', 'height', 'border','padding',
      'boxShadow','background','borderRadius','color'
    ],
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
          
          self.freeStyle = `left:${x}px; top:${y}px;` +                  //计算鼠标位置
                           `z-index:${self.zIndex};
                            width:${self.width}; height:${self.height};
                            border:${self.border}; padding: ${self.padding};
                            box-shadow:${self.boxShadow}; background: ${self.background};
                            border-radius:${self.borderRadius}; color: ${self.color}
                           `;
          self.showPop = true;

          if (!this.$refs.menu) {
            this.$nextTick(() => {
                const {menu} = this.$refs;

                this.menu = menu;
                document.body.appendChild(menu);
            });
          };
        }

      },
      showPop(showPop) {
        const {overrideOncontextmenu, resetOncontextmenu} = this;

        if (showPop) {
          overrideOncontextmenu();
          this.$emit("open");
        } else {
          resetOncontextmenu();
          this.$emit("close");
        };
      }
    },
    computed:{
      items(){
        return this.popItems
      }
    },

    methods: {
      listItemClick(it){
        let self = this;
        self.$emit('ListItemClick',it);
      },

      overrideOncontextmenu() {
         document.body.oncontextmenu = preventExplorerMenu;
      },

      resetOncontextmenu() {
        document.body.oncontextmenu = null;
      }
    },

    destroyed() {
      this.resetOncontextmenu();
      this.menu && this.menu.parentNode == document.body && document.body.removeChild(this.menu);
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
    border-top: 1px solid;
  }
  .menu-box ul li:hover{
    background: rgba(255,255,255,0.2);
  }
  .menu-box ul li span{
    display: inline-block;
  }
  .menu-box ul li span:first-child{
    margin-right: 5px;
  }
</style>
