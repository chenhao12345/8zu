<template>
	<ul>
        <li v-for="(pro,ind) in product">
             <div style = "float:right;">
               <button>-</button>
               <input type="text"  style="width:50px;" v-model="pro.count">
               <button >+</button>
            </div>
            <h4>
               <input type="checkbox" name="" v-model = "pro.ischeck" @click="checkItem(index)"/>
               {{pro.name}}
            </h4>
            <p>{{pro.info}}</p>
            <p>{{pro.price}}</p>
            <hr>
          </li>
     </ul>
</template>
<script>
	export default{
		props:["product"],
		data(){
		return {}
		},
		methods:{
			
		}
	}
</script>
<style></style>