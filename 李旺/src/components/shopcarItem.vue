<template>
  <ul>
    <li v-for="(product,index) in products">
      <div style="float:right;">
        <button @click="minus(index)">-</button>
        <input type="text" v-model="product.count" style="width:50px;">
        <button @click="plus(index)">+</button>
      </div>
      <h4>
          <input type="checkbox" v-model="product.isCheck" @click="checkItem(index)">
          {{product.name}}
        </h4>
      <p>{{product.infomation}}</p>
      <p>{{product.price}}元/个</p>
      <hr>
    </li>
  </ul>
</template>
<script>
export default {
  name: "",
  props: ["products"],
  data() {
    return {}
  },
  methods: {
    plus($index) {

      ++this.products[$index].count;
      this.$emit("update");
    },
    minus($index) {
      if (this.products[$index].count < 1) return;
      --this.products[$index].count;
      this.$emit("update");
    },
    checkItem($index) {
      this.products[$index].isCheck = !this.products[$index].isCheck;
      this.$emit("update")
    }
  }
}

</script>
<style>


</style>
