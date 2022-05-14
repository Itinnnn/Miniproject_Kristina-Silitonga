<template>
  <div class="card shadow card-product" max-width="100" max-height="100">
  <img :src=" 'assets/images/' + product.gambar" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{{ product.nama}}</h5>
    <p class="card-text">Harga: Rp.{{ product.harga }}</p>
    <router-link class="btn btn-success" :to="'/products/'+product.id"><b-icon-cart></b-icon-cart> Pesan</router-link >
  </div>
</div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['product']
};
</script>

<style>
</style>