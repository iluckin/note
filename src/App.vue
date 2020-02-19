<template>
  <div id="app" class="animated fadeIn delay-0.3s">
    <Header />
    <Jumbotron />
    <router-view class="animated fadeIn delay-0.5s"/>
    <Subscribe class="shadow-sm" />
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/layouts/Header";
  import Jumbotron from "./components/home/Jumbotron";
  import Subscribe from "./components/Subscribe";
  import Footer from "./components/layouts/Footer";

  export default {
    components: {
      Header,
      Footer,
      Subscribe,
      Jumbotron
    }
  }
</script>