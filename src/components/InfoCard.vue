<template>
  <div class="risk-card-wrap">
    <div class="risk-card">
      <div class="left">
        <van-image
          width="80"
          height="80"
          v-for="img of info.pic"
          :key="img"
          :src="img"
        ></van-image>
      </div>
      <div class="right">
        <div class="title">{{ info.title }}</div>
        <div class="score">风险指数：{{ info.score }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="stylus" scoped>
.risk-card-wrap
  padding 5px
.risk-card
  display flex
  padding 5px
  margin 5px
  box-shadow: 0 2px 7px 0 rgba(0,0,0,.15);
  :deep(.van-image)
    margin 0 2px

  .right
    padding 10px
    .title
      font-weight 500
      color #000
    .score
      margin-top 5px
</style>
