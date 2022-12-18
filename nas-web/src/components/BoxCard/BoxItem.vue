<template>
  <el-card class="item" @dblclick="click">
    <div>
      <span>应用名:{{ media.name }}</span>
    </div>
    <div>
      <span>地 址:{{ media.url }}</span>
    </div>
    <div>
      <span>描 述:{{ media.description }}</span>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {Media} from "@/config/Media";

const props = defineProps({
  index: {type: [Number, String], default: 0},
  media: {
    type: Object as PropType<Media>,
    default: null
  }
})
const emits = defineEmits(['itemClick'])

const click = (e: any) => {
  emits('itemClick', props.media, props.index)
}
</script>

<style scoped>
</style>