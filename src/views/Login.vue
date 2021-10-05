<template>
  <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100 p-t-190 p-b-30">
                <form class="login100-form validate-form">
                    <div class="login100-form-avatar">
                        <img src="~assets/img/avatar.jpg" alt="AVATAR">
                    </div>

                    <span class="login100-form-title p-t-20 p-b-45">Hello</span>

                    <div class="wrap-input100 validate-input m-b-10" data-validate="请输入用户名">
                        <input
                        v-model="phone"
                          class="input100"
                          type="text"
                          name="username"
                          placeholder="用户名"
                          autocomplete="off"
                        >
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yonghu"></use>
                            </svg>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input m-b-10" data-validate="请输入密码">
                        <input
                          v-model="password"
                          class="input100"
                          type="password"
                          name="pass"
                          placeholder="密码"
                        >
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-suoding"></use>
                            </svg>
                        </span>
                    </div>

                    <div class="container-login100-form-btn p-t-10">
                        <button class="login100-form-btn" @click="login">登 录</button>
                    </div>

                    <div class="text-center w-full p-t-25 p-b-230">
                        <a href="#" class="txt1">忘记密码？</a>
                    </div>

                    <div class="text-center w-full">
                        <a class="txt1" href="#">
                            立即注册
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-goahead"></use>
                            </svg>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const state = reactive({
      phone: '',
      password: '',
    });

    const store = useStore();

    const login = () => {
      store.dispatch('user/login', { ...state });
    };

    return {
      ...toRefs(state),
      login,
    };
  },
};
</script>

<style lang="css" scoped>
@import '@/style/main.css';
@import '@/style/util.css';
/* @import '@/style/font-awesome.min.css'; */

.container-login100 {
  background-image: url('../assets/img/backimg.jpg');
}
</style>
