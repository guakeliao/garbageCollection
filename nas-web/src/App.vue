<script setup lang="ts">
import {reactive} from "vue";
import {updateEnv, getConfigures} from "@/config/QL"
import {ElMessage} from "element-plus";

const model = reactive({cookie: null, configures: [] as any[]})
const addConfigure = () => {
  model.configures.push({
    "baseUrl": "",
    "client_id": "",
    "client_secret": ""
  })
}
const delConfigure = (index: number) => {

}
const saveConfigure = (index: number) => {

}
const clicked = async () => {
  if (model.cookie) {
    const ck: String = model.cookie as unknown as string
    const cks = ck.match(/(pt_key|pt_pin)=.+?;/g) ?? [];
    if (cks.length === 2) {
      await updateEnv(cks.join(''));
      ElMessage.success('更新成功')
    } else {
      ElMessage.error('提供的CK错误')
    }
  }
}
getConfigures().then(res => {
  model.configures.push(...res);
})
</script>

<template>
  <div class="container">
    <el-form label-position="right" label-width="90px" :model="model" style="width: 90%">
      <br/>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="环境添加">
            <el-button @click="addConfigure" disabled>环境添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <div v-for="(configure,index) in model.configures" inert>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="baseUrl">
              <el-input v-model="configure.baseUrl" placeholder="Please input"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="client_id">
              <el-input v-model="configure.client_id" placeholder="Please input"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="client_secret">
              <el-input v-model="configure.client_secret" placeholder="Please input"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button @click="saveConfigure(index)">保存</el-button>
            <el-button @click="delConfigure(index)">删除</el-button>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="cookie提交">
            <el-input v-model="model.cookie" :rows="10" type="textarea" placeholder="Please input" style="width: 100%"/>
            <el-button @click="clicked">提交</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
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
