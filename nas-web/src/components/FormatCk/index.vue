<template>
  <el-dialog v-model="show" :visible.sync="show" title="格式化CK" width="50%">
    <el-form :model="model" label-position="top">
      <el-form-item label="格式化ck">
        <el-input v-model="model.ck" type="textarea" rows="5"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="sureClick">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import clipboard from 'clipboard'
import {ref} from "vue";
import {ElMessage} from "element-plus";

const show = ref(false)
const model = ref({ck: null})

const sureClick = () => {
  if (model.value.ck) {
    const ck: String = model.value.ck as unknown as string
    const cks = ck.match(/(pt_key|pt_pin)=.+?;/g) ?? [];
    if (cks.length === 2) {
      console.log(cks.join(''))
      clipboard.copy(cks.join(''));
      ElMessage.success('已经复制到剪切板')
    } else {
      ElMessage.error('提供的CK错误')
    }
  }
}
</script>

<style scoped>

</style>