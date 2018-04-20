<template>
    <div>
        <div>
            <input type="checkbox" id="check-all" v-model="checkall" @click='checkallItem'/>
            <label for="checkall">全选/反选</label>
        </div>
        <shopItem :product="data"></shopItem>
        <div>
          合计金额:{{totols}}
          合计数量:{{counts}}
        </div>
    </div>
</template>

<script>
  import shopItem from "./shopitem.vue"
  export default {
    name:"app",
    data(){
        return {
          data:[],
          totols:0,
          counts:0,
          checkall:false
        }
    },
    components:{
    shopItem
    },
    beforeCreate(){
        this.$ajax({
          url:"/api",
          type:"get"
        }).then((data)=>{
          this.data=data.list
        })
    },
    methods:{
      checkallItem(){
        this.data.map((items,index)=>{
          if(!this.checkall){
            items.ischeck=true;
          }else{
          items.ischeck=false;
          }
        })
      }
    }

  }
</script>