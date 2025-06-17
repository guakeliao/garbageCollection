<template>
  <div>
    <AmisSelect
      :value="lang"
      :options="[
        { label: '简体中文', value: 'zh-CN' },
        { label: 'English', value: 'en-US' }
      ]"
      placeholder="切换语言"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { applyReactInVue } from 'veaury'
import { Select } from 'amis'

import 'amis/lib/themes/default.css'
import 'amis-editor-core/lib/style.css'

const AmisSelect = applyReactInVue(Select)
const lang = ref('zh-CN')

const onChange = (val: any) => {
  lang.value = val
  console.log('选择语言:', val)
}
</script>
