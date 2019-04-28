<template lang="html">
  <div class="footer_guide">
    <a href="javascript:;" class="guide_item"  @click="goTo('/msite')">
      <span class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-waimai" :class="{on: '/msite'===$route.path}"></i>
        </span>
        <span :class="{on: '/msite'===$route.path}">外卖</span>
      </span>
    </a>
    <a href="javascript:;" class="guide_item"  @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search" :class="{on: '/search'===$route.path}"></i>
      </span>
      <span :class="{on: '/search'===$route.path}">搜索</span>
    </a>
    <a href="javascript:;" class="guide_item"  @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan" :class="{on: '/order'===$route.path}"></i>
      </span>
      <span :class="{on: '/order'===$route.path}">订单</span>
    </a>
    <a href="javascript:;" class="guide_item"  @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren" :class="{on: '/profile'===$route.path}"></i>
      </span>
      <span :class="{on: '/profile'===$route.path}">我的</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path){
      this.$router.replace(path)
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.footer_guide { // footer
  top-border-1px(#e4e4e4);
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;

  .on {
    color: red;
  }

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;

      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>