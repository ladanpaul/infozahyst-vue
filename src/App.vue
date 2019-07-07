<template>
  <main class="main">
    <Header />
    <section class="content">
      <router-view></router-view>
    </section>
    <Footer />
  </main>
</template>

<script>
import { Header, Footer } from "./lib";

export default {
  name: "app",

  components: {
    Header,
    Footer
  }
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .content {
    flex: 1 1;
  }
}
</style>
