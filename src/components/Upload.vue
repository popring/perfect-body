<template>
  <div>
    <div>拍照</div>
    <input
      type="file"
      accept="image/*"
      capture="environment"
      multiple
      @change="handleClick"
    />
  </div>
  <br />
  <div>
    <div>相册选取图片</div>
    <input type="file" accept="image/*" multiple @change="handleClick" />
  </div>
  <img class="picture" v-for="img of state.images" :src="img" :key="img" />
</template>
<script setup>
import { reactive } from 'vue'

const state = reactive({
  files: [],
  images: [],
})

const fileToBase64 = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  //监听文件读取结束后事件
  reader.onloadend = function (e) {
    // 图片base64
    // console.log(e.target.result)
    state.images.push(e.target.result)
  }
}

const handleClick = (element) => {
  const files = element.target.files
  window.files = files
  for (const file of files) {
    state.files.push(file)
    fileToBase64(file)
  }
  console.log('state.images  :>> ', state.images)
}
</script>

<style lang="stylus" scoped>
.picture
  width 100%
</style>
