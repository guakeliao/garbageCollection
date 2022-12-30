<script setup lang="ts">

import AddCookieWeb from "./web/AddCookie.vue";
import AddCookiePhone from "./phone/AddCookie.vue";</script>

<template>
  <div class="container">
    <BrowserView style="width: 90%;">
      <AddCookieWeb></AddCookieWeb>
    </BrowserView>
    <MobileView style="width: 90%;">
      <AddCookiePhone></AddCookiePhone>
    </MobileView>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 100%;
}

</style>
