<template>
  <div id="vue-frontend-app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style>
body {
  /*background: url("./assets/background.jpg");*/
  background: url("http://wp-vue-starter.local/wp-content/uploads/2022/06/background.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>