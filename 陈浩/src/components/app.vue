<template>
    <div id="app">
        <ul>
            <li v-for='(item,index) in msg' :key='index'>
                <h3><input type="checkbox"> {{item.title}}</h3>
                <div class="list">
                    <div><input type="checkbox"></div>
                    <div><img :src= "item.src" alt=""></div>
                    <div>
                        <p>{{item.discribe}}</p>
                        <div>
                            <p>{{item.price}}</p>
                            <p>
                                <span>-</span>
                                <span class="border">{{item.count}}</span>
                                <span>+</span>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </li>
        </ul>
        <div class="tootle">
            <label for=""><input type="checkbox">全选</label> <span>合计：<em>0</em></span>  
        </div>
    </div>
</template>

<script>
const datas = [
    {
        title:'米店',
        src: './static/image/1.jpg',
        discribe: '发布苏高富帅烦死㧭 hi峰会上个is',
        price: 200,
        count: 1
    },
    {
        title:'米不够',
        src: './static/image/2.jpg',
        discribe: '发布苏高富帅烦死㧭 hi峰会上个is',
        price: 100,
        count: 1
    },
    {
        title:'米hihi嘿嘿店',
        src: './static/image/3.jpg',
        discribe: '发布苏高富帅烦死㧭 hi峰会上个is',
        price: 300,
        count: 1
    },
    {
        title:'米hihgigohi个i店',
        src: './static/image/4.jpg',
        discribe: '发布苏高富帅烦死㧭 hi峰会上个is',
        price: 300,
        count: 1
    },
]
    export default {
        name: 'App',
        data(){
            return {
               msg: datas
            }
        },
        methods: {
          
        }
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
html,body,#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.list{
    display: flex;
    align-items: center;
}
.border{
    border:solid 1px #ccc;
}
img{
    width: 60px;
    height: auto;
}
</style>