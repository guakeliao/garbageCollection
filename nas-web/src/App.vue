<script setup lang="ts">

import AddCookieWeb from "./web/AddCookie.vue";
import AddCookiePhone from "./phone/AddCookie.vue";
import {reactive, ref} from "vue";
import {getConfigures, searchEnvs, updateEnv} from "@/config/QL";
import {ElMessage} from "element-plus";
import _ from "lodash";

console.log(window.location.protocol) //http
console.log(window.location.hostname)
console.log(window.location.port)
console.log(process.env.NODE_ENV)

const configures = reactive([] as any[])
const envs = reactive([] as any[])

const submitClick = _.debounce(async (env: any, callBack: Function) => {
  if (env.value) {
    await updateEnv(env);
    callBack(true)
    ElMessage.success('更新成功')
  } else {
    callBack(false)
    ElMessage.error('提供的CK错误')
  }
}, 500)
const searchClick = _.debounce(async (value: string) => {
  if (value) {
    envs.splice(0, envs.length);
    const cks = (value.match(/(pt_key)=.+?;(\s)?(pt_pin)=.+?;/g) ?? []) as [string];
    envs.push(...await searchEnvs(cks))
  }
}, 500)

getConfigures().then(res => configures.push(...res));

</script>

<template>
  <div class="container">
    <BrowserView style="width: 90%;">
      <AddCookieWeb :configures="configures" :envs="envs" @submitClick="submitClick" @searchClick="searchClick"></AddCookieWeb>
    </BrowserView>
    <MobileView style="width: 90%;">
      <AddCookiePhone :configures="configures" :envs="envs" @submitClick="submitClick" @searchClick="searchClick"></AddCookiePhone>
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
