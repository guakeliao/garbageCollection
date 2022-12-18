<template>
  <template v-for="(media,idx) in mediaList">
    <BoxItem class="item" :style="itemWidth" :index="idx" :media="media" @itemClick="itemClick"></BoxItem>
  </template>
</template>

<script setup lang="ts">
import BoxItem from './BoxItem.vue'
import type {PropType} from "vue";
import type {Media} from "@/config/Media";
import {SYS_CODE} from "@/config/Media";
import {computed, onMounted, ref} from "vue";

const emits = defineEmits(['itemClick'])
const props = defineProps({
  mediaList: {
    type: Array as PropType<Media[]>,
    default: []
  }
})
const col = ref(3)
const itemWidth = computed(() => {
  return `--itemWidth:calc(100% / ${col.value} - 10px)`
})
onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      col.value = 3
    } else if (window.innerWidth > 600 && window.innerWidth < 900) {
      col.value = 2
    } else {
      col.value = 1
    }
  })
})
const itemClick = (media: Media, index: number) => {
  emits('itemClick', media, index);
  // console.log(index)
  // console.log(media)
  // switch (media.code) {
  //   case SYS_CODE.dsm:
  //   case SYS_CODE.emby:
  //   case SYS_CODE.ql_1:
  //   case SYS_CODE.ql_2:
  //   case SYS_CODE.ql_9:
  //   case SYS_CODE.tr:
  //     window.open(`${window.location.protocol}//${window.location.hostname}:${media.port}`)
  //     break;
  //   case SYS_CODE.update_jd:
  //     break;
  //   case SYS_CODE.update_jd:
  //     break;
  //   default: {
  //   }
  // }
}
</script>

<style scoped>
.item {
  margin: 5px;
  width: var(--itemWidth);
  display: flex;
  align-items: center;
}
</style>