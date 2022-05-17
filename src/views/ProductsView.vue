<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>List <strong>Products</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-10" max-width="auto">
          <div class="input-group mb-4">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Alat Kebutuhan Praktikum Anda.."
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchProduct"
            />
          </div>
        </div>
        <div class="col-2">
          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1" aria-setsize="20px">
              <b-icon-search></b-icon-search>
            </span>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-3 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "ProductsView",
  components: {
    NavBar,
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
    searchProduct() {
      axios
        .get("https://stormy-shelf-20253.herokuapp.com/products?q="+this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("https://stormy-shelf-20253.herokuapp.com/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
