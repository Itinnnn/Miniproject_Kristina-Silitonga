<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">KS.Lab Scientific</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/products">Products</router-link>
        </b-navbar-nav>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/keranjang">
              Keranjang
              <b-icon-cart></b-icon-cart>
              <span class="badge badge-success ml-2">{{
                jumlah_pesanans.length
              }}</span>
            </router-link>
          </li>
        </ul>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NavBar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3200/keranjangs")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
