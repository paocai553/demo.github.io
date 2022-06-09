<template>
  <div class="layout">
    <!-- zuoce -->
    <listslider class="slider" />
    <!-- top -->
    <top class="top" />
  </div>
</template>
<script>
import listslider from "./listslider";
import top from "./top";
export default {
  components: {
    listslider,
    top,
  },
};
</script>
<style scoped>
/* .layout { */
/* justify-content: space-between; */
/* } */
/* .slider { */
/* width: 15%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  min-height: 500px;
  background: pink; */
/* } */
.top {
  margin-left: 200px;
  /* background-color: plum; */
  /* width: 100%;
  height: 5vh;
  background: plum; */
}
* {
  box-sizing: border-box;
}
</style>
