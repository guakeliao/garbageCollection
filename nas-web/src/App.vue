<script setup lang="ts">
import BoxCard from '@/components/BoxCard/index.vue'
import FormatCk from '@/components/FormatCk/index.vue'
import medias, {Media, SYS_CODE} from "@/config/Media";
import {ref} from "vue";

const model = ref(SYS_CODE.zerotier)
const allMediaList = ref(new Array<Media>())
const currentMediaList = ref(new Array<Media>())
const modelChange = (val: Event) => {
  let currentModel: string = val.target.value
  currentMediaList.value = allMediaList.value.filter(item => {
    if (currentModel === SYS_CODE.all) {
      return true
    } else {
      return item.code === currentModel
    }
  })
}
const itemClick = (media: Media, index: number) => {
  console.log(index)
  console.log(media)
  window.open(`${window.location.protocol}//${media.url}`)
}
medias().then(res => {
  allMediaList.value = res;
  currentMediaList.value = allMediaList.value.filter(item => item.code === model.value)
})
</script>

<template>
  <div class="body">
    <div class="header">
      <el-radio-group v-model="model" @input="modelChange">
        <el-radio-button :label="SYS_CODE.all"></el-radio-button>
        <el-radio-button :label="SYS_CODE.local"></el-radio-button>
        <el-radio-button :label="SYS_CODE.zerotier"></el-radio-button>
        <el-radio-button :label="SYS_CODE.network"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="container">
      <BoxCard class="card" :mediaList="currentMediaList" @itemClick="itemClick"></BoxCard>
      <FormatCk></FormatCk>
    </div>
  </div>
</template>

<style scoped>
.body {
  position: absolute;
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
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
}

.card {
  height: 100%;
  width: 100%;
}
</style>
