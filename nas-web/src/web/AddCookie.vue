<template>
  <el-form label-position="right" label-width="90px" :model="model" style="width: 100%">
    <br/>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="环境添加">
          <el-button @click="addConfigureClick" disabled>环境添加</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-divider border-style="dashed"/>
    <div v-for="(configure,index) in model.configures">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="baseUrl">
            <el-input v-model="configure.baseUrl" placeholder="Please input" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="client_id">
            <el-input v-model="configure.client_id" placeholder="Please input" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="client_secret">
            <el-input v-model="configure.client_secret" placeholder="Please input" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button @click="saveConfigureClick(index)" disabled>保存</el-button>
          <el-button @click="delConfigureClick(index)" disabled>删除</el-button>
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
import {reactive, watch} from "vue";

const props = defineProps({"configures": {type: Array, default: [] as any[]}, "env": {type: Object, default: {value: null as string | null, remarks: null as string | null, id: null as string | null}}})
const emits = defineEmits(["submitClick", "searchClick", "addConfigureClick"])
const model = reactive({cookie: null, env: {value: null as string | null, remarks: null as string | null, id: null as string | null}, configures: [] as any[]})

watch(() => props.configures, (nowValue, oldValue) => {
  if (nowValue) {
    model.configures.splice(0, model.configures.length);
  }
  model.configures.push(...nowValue)
}, {immediate: true, deep: true})
watch(props.env, (nowValue, oldValue) => {
  model.env.value = nowValue?.value
  model.env.remarks = nowValue?.remarks
  model.env.id = nowValue?.id
}, {immediate: true, deep: true})

const addConfigureClick = () => {
  emits("addConfigureClick")
}
const delConfigureClick = (index: number) => {
}
const saveConfigureClick = (index: number) => {

}

const submitClick = () => {
  emits("submitClick", model.cookie, model.env.remarks, model.env.id)
}
const searchClick = () => {
  emits("searchClick", model.cookie)
}

</script>

<style scoped>
/deep/ .el-divider--horizontal {
  margin: 12px 0;
}
</style>