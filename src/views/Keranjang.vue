<template>
  <div class="keranjang">
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
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Keranjang <strong> Saya</strong></h2>
          <div class="table-responsive mt-2">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Produk</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + keranjang.product.gambar"
                      class="img-fluid shadow"
                      width="250"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.product.nama }}</strong>
                  </td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td>Rp. {{ keranjang.product.harga }}</td>
                  <td>
                    <strong
                      >Rp.
                      {{ keranjang.product.harga * keranjang.jumlah_pemesanan }}
                    </strong>
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash
                      @click="() => hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Subtotal:</strong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
     
    <div class="row-justify-content">
      <div class="col-md-4">
        <form class="mt-4" v-on:submit.prevent>
          <div class="form-group">
            <label for="nama"><strong>Nama Lengkap</strong></label>
            <input type="text" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="alamat"><strong>Alamat Lengkap</strong> </label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label for="noHp"><strong>Alamat Email</strong></label>
            <input type="text" class="form-control"/>
          </div>

          <div class="form-group">
            <label for="noHp"><strong>No Handphone/Whatsapp</strong></label>
            <input type="text" class="form-control"/>
          </div>
           <div class="form-group">
            <label for="noHp"><strong>Metode Pembayaran</strong></label>
            <input type="text" class="form-control"/>
          </div>
            
            <button type="submit" class="btn btn-success" @click="checkout">
              <b-icon-cart></b-icon-cart> Checkout
            </button>
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
  name: "KeranjangPesanan",
  components: {
    NavBar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: [],
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("https://stormy-shelf-20253.herokuapp.com/keranjangs/" + id)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      console.log("Pesan  ", this.pesan);
       this.keranjangs.map(function (item) {
              return axios
                .delete("https://stormy-shelf-20253.herokuapp.com/keranjangs/" + item.id)
                .catch((error) => console.log(error));
            });
      this.$router.push("/pesanan-sukses");
    },
  },
  mounted() {
    axios
      .get("https://stormy-shelf-20253.herokuapp.com/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.product.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>