<template>
  <div>
    <van-nav-bar title="首页" />
    <div class="upload">
      <van-radio-group
        v-model="state.type"
        direction="horizontal"
        style="margin: 10px"
      >
        <van-radio :name="true">拍照</van-radio>
        <van-radio :name="false">相册选取</van-radio>
      </van-radio-group>
      <div v-if="state.type">
        <!-- <div>拍照</div> -->
        <van-uploader
          v-model="state.fileList"
          multiple
          :max-count="2"
          capture="environment"
        />
      </div>
      <div v-else>
        <!-- <div>相册选取图片</div> -->
        <van-uploader
          v-model="state.fileList"
          multiple
          :max-count="2"
          capture="environment"
        />
      </div>
    </div>
    <van-action-bar>
      <van-button
        type="primary"
        @click="$router.push({ name: 'Info' })"
        size="large"
        round
      >
        开始检测
      </van-button>
    </van-action-bar>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      type: true,
      fileList: [],
    })
    return {
      state,
    }
  },
}
</script>

<style lang="stylus" scoped>
.picture
  width 100%
.upload
  padding 0 10px
</style>
