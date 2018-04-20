<template>
    <div>
       <div v-for="index in data" :key="index">
          <div class="shop">
            <div class="shopName">
              <div>
                <input type="checkbox" class="shopAll">
                <span class="shopTit">{{index.ctitle}}</span>
              </div>
              <div>
                <span>{{index.csentence1}}</span>
                <span>{{index.csentence2}}</span>
              </div>
            </div>
            <div class="shoplist">
              <input type="checkbox">
            </div>
          </div>
       </div>
    </div>
</template>
<style src="../static/style.css"></style>

<script src="../components/module.js"></script>