<template>
  <section class="section infozahyst-main">
  </section>
</template>

<script>
export default {
  name: "InfozahystMain",

  mounted() {
    console.log("here?");
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/var.scss";

.infozahyst-main {
  border: 2px solid blue;
  height: 1500px;
  width: 100%;
  background: $black;
  color: #fff;
}
</style>
