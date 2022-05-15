<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3>
                <strong>KS.LAb Scientific, </strong> <br />
                Solusi Paling Tepat Untuk Kebutuhan Praktikum Anda
              </h3>
              <p>Ayo segera pilih dan pesan, jangan sampai kehabisan.</p>
             <router-link class="btn btn-lg btn-success" to="/products">
                <b-icon-arrow-right></b-icon-arrow-right> Order Now
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="80%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="80%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3>
                <strong>KS.LAb Scientific, </strong> <br />
                Paling Tepat Untuk Kebutuhan Praktikum Anda
              </h3>
              <p>Ayo segera pilih dan pesan kebutuhan praktikum Anda</p>
              <router-link class="btn btn-lg btn-success" to="/product">
                <b-icon-arrow-right></b-icon-arrow-right> Order Now
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroVue",
};
</script>

<style>
</style>