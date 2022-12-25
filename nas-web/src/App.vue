<script setup lang="ts">
import {ref} from "vue";
import {getEnvs} from "@/config/ql.js"
import clipboard from "clipboard";
import {ElMessage} from "element-plus";

const formModel = ref({cookie: null})
const tips = ref('')
const clicked = async () => {
  let ss = await getEnvs;
  console.log(ss)
  // if (formModel.value.cookie) {
  //   const ck: String = formModel.value.cookie as unknown as string
  //   const cks = ck.match(/(pt_key|pt_pin)=.+?;/g) ?? [];
  //   if (cks.length === 2) {
  //     clipboard.copy(cks.join(''));
  //     tips.value = cks.join('')
  //     ElMessage.success('已经复制到剪切板')
  //   } else {
  //     ElMessage.error('提供的CK错误')
  //   }
  // }
}
</script>

<template>
  <div class="container">
    <el-form label-position="top" label-width="200px" :model="formModel" style="width: 90%">
      <el-form-item label="cookie提交">
        <span>{{ tips }}</span>
        <el-input v-model="formModel.cookie" :rows="10" type="textarea" placeholder="Please input" style="width: 100%"/>
        <el-button @click="clicked">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.body {
  position: absolute;
  width: 100%;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow: scroll;
}

.header {
  margin: auto;
}

.container {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 100%;
}

.card {
  height: 100%;
  width: 100%;
}
</style>
