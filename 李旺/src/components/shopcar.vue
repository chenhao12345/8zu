<template>
  <div>
    <div>
      <input type="checkbox" id="checkall" v-model="checkall" @click="checkAllItem">
      <label for="checkall">全选/反选</label>
    </div>
    <shopcarItem :products="products" @update="onUpdate"></shopcarItem>
    <div>
      合计金额:{{totols}} 合计数量:{{counts}}
    </div>
  </div>
</template>
<script>
import axios from "axios"
import shopcarItem from "./shopcarItem.vue"

export default {
  name: "",
  data() {
    return {
      totols: 0,
      counts: 0,
      checkall: false,
      products: {}
    }
  },
  components: {
    shopcarItem
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    onUpdate() {
      let temp = [];
      this.products.find((item, index) => {
        if (item.isCheck == true) {
          temp.push(item);
        }
      });
      if (temp.length == this.products.length) {
        this.checkall = true;
      } else {
        this.checkall = false;
      }
      this.compute();
    },
    checkAllItem() {
      if (this.checkall) {
        this.products.map((item, index) => {
          item.isCheck = false;
        });
      } else {
        this.products.map((item, index) => {
          item.isCheck = true;
        });
      }
      this.compute();
    },
    getProducts() {
      axios.get("/products").then((result) => {

        this.products = result.data;
        this.compute();
      });
    },
    compute() {
      this.totols = 0;
      this.counts = 0;
      this.products.map((item, index) => {
        if (item.isCheck == true) {
          this.totols += item.price * item.count;
          this.counts += item.count;
        }
      });
    }
  }
}

</script>
<style>


</style>
