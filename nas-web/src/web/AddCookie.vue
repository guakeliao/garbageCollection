<template>
  <el-form label-position="right" label-width="90px" :model="model" style="width: 100%">
    <br/>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="环境添加">
          <el-button @click="addConfigure" disabled>环境添加</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-divider border-style="dashed"/>
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
      <el-divider border-style="dashed"/>
    </div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="cookie提交">
          <el-input v-model="model.cookie" @input="searchClick" :rows="10" type="textarea" placeholder="Please input" style="width: 100%"/>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="备注">
          <el-input v-model="model.env.remarks" placeholder="Please input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item label="cookie">
          <el-input v-model="model.env.value" placeholder="Please input" disabled></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="操作">
          <el-button @click="submitClick">提交</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {getConfigures, searchEnv, updateEnv} from "@/config/QL"
import _ from "lodash"
import {ElMessage} from "element-plus";

const model = reactive({cookie: null, env: {value: null as string | null, remarks: null as string | null, id: null as string | null}, configures: [] as any[]})
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

const submitClick = async () => {
  if (model.cookie) {
    const ck: String = model.cookie as unknown as string
    const cks = ck.match(/(pt_key|pt_pin)=.+?;/g) ?? [];
    if (cks.length === 2) {
      await updateEnv(model.env.value as string, model.env.remarks, model.env.id);
      ElMessage.success('更新成功')
    } else {
      ElMessage.error('提供的CK错误')
    }
  }
}

const searchClick = _.debounce(async () => {
  if (model.cookie) {
    const ck: String = model.cookie as unknown as string
    const cks = ck.match(/(pt_key|pt_pin)=.+?;/g) ?? [];
    if (cks.length === 2) {
      const [first] = await searchEnv(cks.join(''));
      if (first) {
        model.env.value = cks.join('')
        model.env.remarks = first.remarks
        model.env.id = first.id
      } else {
        model.env.value = cks.join('')
        model.env.remarks = "新增账号"
      }
    }
  }
}, 500)

getConfigures().then(res => {
  model.configures.push(...res);
})
</script>

<style scoped>
/deep/ .el-divider--horizontal {
  margin: 12px 0;
}
</style>