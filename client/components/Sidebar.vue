<style lang="sass" scoped>
.sidebar
    height: 100vh !important

    .item.active
        color: #FFF !important
</style>

<template>
    <!-- 左側邊欄 -->
    <div class="ts vertical fluid inverted visible menu sidebar">
        <!-- 個人資料項目 -->
        <div class="center aligned item">
            <img class="ts tiny circular image" src="https://tocas-ui.com/assets/img/5e5e3a6.png">
            <br>
            <br>
            <div>Yami Odymel</div>
        </div>
        <!-- / 個人資料項目 -->

        <!-- 家人管理 -->
        <div class="item">
            <i class="users icon"></i>
            家人管理
            <div class="menu">
                <router-link to="/members"     class="item" :class="{active: $route.fullPath === '/members'}">成員清單</router-link>
                <router-link to="/member/edit" class="item" :class="{active: $route.fullPath === '/member/edit'}">建立家人</router-link>
            </div>
        </div>
        <!-- / 家人管理 -->

        <!-- 帳號設定 -->
        <div class="item">
            <i class="setting icon"></i>
            帳號設定
            <div class="menu">
                <router-link to="/password" class="item" :class="{active: $route.fullPath === '/password'}">密碼變更</router-link>
            </div>
        </div>
        <!-- / 帳號設定 -->

        <!-- 群眾互助 -->
        <div class="item">
            <i class="talk icon"></i>
            群眾互助
            <div class="menu">
                <router-link to="/request"  class="item" :class="{active: $route.fullPath === '/request'}">請求協助</router-link>
                <router-link to="/looking"  class="item" :class="{active: $route.fullPath === '/looking'}">幫助他人</router-link>
                <router-link to="/timeline" class="item" :class="{active: $route.fullPath === '/timeline'}">我的愛心</router-link>
            </div>
        </div>
        <!-- / 群眾互助 -->

        <!-- 底部選單 -->
        <div class="bottom menu">
            <!-- 登出 -->
            <a href="#!" class="item" @click="reset()">
                <i class="sign out icon"></i>
                登出
            </a>
            <!-- / 登出 -->
        </div>
        <!-- / 底部選單 -->
    </div>
    <!-- / 左側邊欄 -->
</template>

<script>
export default {
    name: 'Sidebar',
    methods: {
        reset() {
            localStorage.removeItem('users')
            localStorage.removeItem('members')
            localStorage.removeItem('requests')
            this.$router.push({path: '/login'})
        }
    }
}
</script>