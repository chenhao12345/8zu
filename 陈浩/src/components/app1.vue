<template>
    <div>
        <div class="commodityDiv" v-for='(i,index) in data' :key='index'>
          <dl class="commodityList">
            <dt class="commodityImage">
              <img :src="i.image" alt="">
            </dt>
            <dd class="commodityMsg">
              <h3 class="commodityTit">{{i.ctitle}}</h3>
              <p class="commodityPrice">
                <span class="commodityCurrentPrice">￥{{i.price - 100}}</span>
                <em class="commodityOriginalPrice">￥{{i.price}}</em>
              </p>
              <p class="detail">
                <span class="detailhandling detailSpan">{{i.csentence}}</span>
                <span class="detailPay detailSpan">{{i.head}}人付款</span>
                <span class="detailCity detailSpan">{{i.city}}</span>
              </p>
            </dd>
          </dl>
        </div>
    </div>
</template>
<style src="../static/style.css"></style>

<script src="../components/module.js"></script>