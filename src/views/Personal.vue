<template>
  <div class="personal">
    <div id="_centent">
      <header>
        <div class="rt-bk" @click="$router.push('/')">
          <i class="bk"></i>
          <p>返回</p>
        </div>
        <div class="top-name"><p>个人中心</p></div>
      </header>

      <div class="head">
        <div class="head-img">
            <img src="~assets/img/head-img.png">
          </div>
          <div class="head-dsb">
            <p class="dsb-name">{{account.userName}}</p>
              <p class="dsb-id">ID: {{account.id}}</p>
          </div>
      </div>

      <div class="nav">
        <ul>
            <li>
                <i class="idt"></i>
                  <p>关于</p>
              </li>
            <li class="pt-line">
                <i class="clt"></i>
                  <p>收藏</p>
              </li>
            <li>
                <i class="rcm"></i>
                  <p>推荐</p>
              </li>
          </ul>
      </div>

      <section class="mt-1">
          <div class="ps-lt">
              <div class="lt-dsb">
                  <p>修改个人资料</p>
                  <i class="arr-right"></i>
              </div>
              <div class="lt-dsb cl-bb">
                  <p>修改密码</p>
                  <i class="arr-right"></i>
              </div>
          </div>
      </section>

      <section class="mt-2">
          <div class="ps-lt">
              <div class="lt-dsb cl-bb">
                  <p>声音推送通知</p>
                  <i class="check-on"></i>
              </div>
          </div>
      </section>

      <section class="mt-3">
          <div class="ps-lt">
              <div class="lt-dsb">
                  <p>猜你喜欢</p>
                  <i class="arr-right"></i>
              </div>
          </div>
          <div class="ps-lt">
              <div class="lt-dsb">
                  <p>附近热门</p>
                  <i class="arr-right"></i>
              </div>
          </div>
          <div class="ps-lt">
              <div class="lt-dsb cl-bb">
                  <p>设置</p>
                  <i class="arr-right"></i>
              </div>
          </div>
      </section>

      <div class="jg"></div>
    </div>

    <!-- <footer>
      <div class="mune">
          <img src="img/1.png">
            <p>首页</p>
        </div>
      <div class="mune">
          <img src="img/2.png">
            <p>商家</p>
        </div>
      <div class="mune">
          <img src="img/3.png">
            <p>申请加盟</p>
        </div>
      <div class="mune">
          <img src="img/4.png">
            <p>个人中心</p>
        </div>
    </footer> -->
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const { account, userInfo } = store.state.user.userData;

    return {
      account,
      userInfo,
    };
  },
};
</script>

<style lang="css" scoped>
@import '@/style/personal.css';

</style>
