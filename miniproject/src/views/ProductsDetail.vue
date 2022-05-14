<template>
  <div class="Product-detail">
    <NavBar />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/products" class="text-dark"
                  >Products</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Product Details
              </li>
            </ol>
          </nav>
        </div>
      </div>

  <div class="row mt-3">
        <div class="col-md-6">
          <img :src=" '../assets/images/' + product.gambar " class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h3>
            <strong>{{ product.nama }}</strong>
          </h3>
          <hr />
          <h4>
            Harga :
            <strong>Rp. {{ product.harga }}</strong>
            </h4>
            <form class="mt-4" v-on:submit.prevent >
                <div class="form-group">
                    <label for="jumlah_pemesanan">Jumlah Pesan</label>
                    <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
                </div>

                <button type="submit" class="btn btn-success" @click="pemesanan" ><b-icon-cart></b-icon-cart> Pesan</button>
            </form>
          </div>
          </div>

    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "ProductsDetail",
  components: {
    NavBar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      this.pesan.product = this.product;
      axios
      .post("http://localhost:3000/keranjangs", this.pesan)
      .then(() => {
        this.$router.push({path: "/keranjang"})  
      })
      .catch((err) => console.log(err))
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>