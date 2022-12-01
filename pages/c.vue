<template>
  <div>
    <van-image
      class='user-poster'
      :src='online_image'
    />
    <van-row class='user-links'>
      <van-col span='6'>
        <van-icon name='pending-payment' />
        待付款
      </van-col>
      <van-col span='6'>
        <van-icon name='records' />
        待接单
      </van-col>
      <van-col span='6'>
        <van-icon name='tosend' />
        待发货
      </van-col>
      <van-col span='6'>
        <van-icon name='logistics' />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class='user-group'>
      <van-cell icon='records' title='全部订单' is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon='points' title='我的积分' is-link />
      <van-cell icon='gold-coin-o' title='我的优惠券' is-link />
      <van-cell icon='gift-o' title='我收到的礼物' is-link />
    </van-cell-group>
    <van-tabbar v-model='active'>
      <van-tabbar-item icon='home-o' to='/'>标签{{ active }}</van-tabbar-item>
      <van-tabbar-item icon='search' to='/a'>标签</van-tabbar-item>
      <van-tabbar-item icon='friends-o' to='/b'>标签</van-tabbar-item>
      <van-tabbar-item icon='setting-o' to='/c'>标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang='ts' setup>
const active = ref(3);
const online_image = onlineImage();
console.log(online_image.value);
</script>
<style lang='less'>
body {
  margin: 0;
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
