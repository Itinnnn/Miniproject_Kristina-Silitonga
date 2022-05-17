<template>
  <div class="home">
    <NavBar />
    <div class="container">
      <HeroVue />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong> Products</strong></h2>
        </div>

      <div class="row mb-3">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
      <div class="col mt-2" align="center">
          <router-link to="/products" class="btn btn-success float"
            ><b-icon-eye></b-icon-eye> Show More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroVue from "@/components/HeroVue.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HeroVue,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://stormy-shelf-20253.herokuapp.com/Sale")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
