<script setup lang="ts">

import AddCookieWeb from "./web/AddCookie.vue";
import AddCookiePhone from "./phone/AddCookie.vue";
import {reactive, ref} from "vue";
import {getConfigures, searchEnv, updateEnv} from "@/config/QL";
import {ElMessage} from "element-plus";
import _ from "lodash";

console.log(window.location.protocol) //http
console.log(window.location.hostname)
console.log(window.location.port)
console.log(process.env.NODE_ENV)

const configures = reactive([] as any[])
const env = ref({value: null as any, remarks: null as any, id: null as any})

const submitClick = async (cookie: string, remarks: string | null, id: string | null) => {
  if (cookie) {
    const ck: String = cookie as unknown as string
    const cks = ck.match(/(pt_key|pt_pin)=.+?;/g) ?? [];
    if (cks.length === 2) {
      await updateEnv(env.value.value, remarks, id);
      ElMessage.success('更新成功')
    } else {
      ElMessage.error('提供的CK错误')
    }
  }
}
const searchClick = _.debounce(async (cookie: string) => {
  if (cookie) {
    const cks = cookie.match(/(pt_key|pt_pin)=.+?;/g) ?? [];
    if (cks.length === 2) {
      const [first] = await searchEnv(cks.join(''));
      if (first) {
        env.value.value = cks.join('')
        env.value.remarks = first.remarks
        env.value.id = first.id
      } else {
        env.value.value = cks.join('')
        env.value.remarks = "新增账号"
      }
    }
  }
}, 500)

getConfigures().then(res => configures.push(...res));

</script>

<template>
  <div class="container">
    <BrowserView style="width: 90%;">
      <AddCookieWeb :configures="configures" :env="env" @submitClick="submitClick" @searchClick="searchClick"></AddCookieWeb>
    </BrowserView>
    <MobileView style="width: 90%;">
      <AddCookiePhone :configures="configures" :env="env" @submitClick="submitClick" @searchClick="searchClick"></AddCookiePhone>
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
