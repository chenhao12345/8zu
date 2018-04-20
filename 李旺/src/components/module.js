export default {
    name:"app",
    data(){
        return {
          data:[]
        }
    },
    beforeCreate(){
        
        this.$ajax({
          url:"/api",
          type:"get"
        }).then((data)=>{
          console.log(data.list)
          this.data=data.list
        })
    }

  }