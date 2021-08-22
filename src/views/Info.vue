<template>
  <van-nav-bar
    title="体态信息"
    left-text="返回"
    left-arrow
    @click-left="() => $router.back()"
  />
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <van-tabs v-model:active="state.active" swipeable color="#0265ff">
      <van-tab title="体态数据">
        <van-image
          v-for="item of state.bodyPic"
          :src="item"
          :key="item"
        ></van-image>
      </van-tab>
      <van-tab title="风险评估">
        <InfoCard
          v-for="(item, index) of state.assess"
          :key="index"
          :info="item"
        ></InfoCard>
      </van-tab>
      <van-tab title="结论"> 结论 </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import InfoCard from '../components/InfoCard.vue'

export default defineComponent({
  components: {
    InfoCard,
  },
  setup() {
    const state = reactive({
      active: 1,
      bodyPic: [
        'https://pic3.zhimg.com/80/v2-fa9f647a80908f962a60d595c25add52_1440w.jpg',
        'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
      ],
      assess: [
        {
          title: '头部前倾',
          pic: [
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
          ],
          score: 78,
        },
        {
          title: '头部前倾',
          pic: [
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
          ],
          score: 78,
        },
        {
          title: '头部前倾',
          pic: [
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
          ],
          score: 78,
        },
        {
          title: '头部前倾',
          pic: [
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
          ],
          score: 78,
        },
        {
          title: '头部前倾',
          pic: [
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
          ],
          score: 78,
        },
        {
          title: '头部前倾',
          pic: [
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
            'https://pic2.zhimg.com/80/v2-11e5eefef742580b72bf1136dd0458f1_1440w.jpg',
          ],
          score: 78,
        },
      ],
    })

    return {
      state,
    }
  },
})
</script>

<style lang="stylus" scoped>
:deep(.van-tab__pane)
  padding-top 5px
</style>
