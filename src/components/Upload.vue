<template>
  <div>
    <div>拍照</div>
    <input
      type="file"
      accept="image/*"
      capture="camera"
      multiple
      @change="handleClick"
    />
  </div>
  <br />
  <div>
    <div>相册选取图片</div>
    <input type="file" accept="image/*" multiple @change="handleClick" />
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const state = reactive({
  images: [],
})
const handleClick = (element) => {
  const files = element.target.files
  window.files = files
  for (const file of files) {
    state.images.push(file)
  }
  console.log('state.images  :>> ', state.images)
}
</script>

<style lang="stylus" scoped></style>
