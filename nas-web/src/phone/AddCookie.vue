<template>
  <el-form label-position="top" label-width="90px" :model="model" style="width: 100%">
    <br/>
    <el-row :gutter="0">
      <el-col :span="24">
        <el-form-item label="环境添加">
          <el-button @click="addConfigureClick" disabled>环境添加</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(configure,index) in model.configures" :title="`环境${index+1}`" :name="`${index}`">
        <el-row :gutter="0">
          <el-col :span="24">
            <el-form-item label="baseUrl">
              <el-input v-model="configure.baseUrl" placeholder="Please input" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="client_id">
              <el-input v-model="configure.client_id" placeholder="Please input" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="client_secret">
              <el-input v-model="configure.client_secret" placeholder="Please input" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-button @click="saveConfigureClick(index)" disabled>保存</el-button>
            <el-button @click="delConfigureClick(index)" disabled>删除</el-button>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="cookie提交">
          <el-input v-model="model.cookie" @input="searchClick" :rows="10" type="textarea" placeholder="Please input" style="width: 100%"/>
        </el-form-item>
      </el-col>
    </el-row>
    <div v-for="(env,index) in model.envs">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="cookie">
            <el-input v-model="env.value" placeholder="Please input" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="备注">
            <el-input v-model="env.remarks" placeholder="Please input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-button @click="submitClick(index)" :disabled="env.needUpdate">{{ index + 1 }}提交</el-button>
        </el-col>
      </el-row>
      <el-divider border-style="dashed"/>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from "vue";

const props = defineProps({"configures": {type: Array, default: [] as any[]}, "envs": {type: Array, default: [] as any[]}})
const emits = defineEmits(["submitClick", "searchClick", "addConfigureClick"])
const model = reactive({cookie: null, envs: [] as any[], configures: [] as any[]})
const activeNames = ref([])

watch(() => props.configures, (nowValue, oldValue) => {
  model.configures.splice(0, model.configures.length);
  if (nowValue) {
    model.configures.push(...nowValue)
  }
}, {immediate: true, deep: true})
watch(() => props.envs, (nowValue, oldValue) => {
  model.envs.splice(0, model.envs.length);
  if (nowValue) {
    model.envs.push(...nowValue)
  }
}, {immediate: true, deep: true})

const addConfigureClick = () => {
  emits("addConfigureClick")
}
const delConfigureClick = (index: number) => {
}
const saveConfigureClick = (index: number) => {

}

const submitClick = (index: number) => {
  let env = model.envs[index];
  emits("submitClick", env)
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