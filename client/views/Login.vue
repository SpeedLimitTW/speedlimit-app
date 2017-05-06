<style lang="sass" scoped>
.segment
    max-width: 300px
.header
    justify-content: center
    text-align: center
</style>

<template>
    <div>
        <!-- 聚焦看板 -->
        <div class="ts padded horizontally fitted fluid slate">
            <div class="ts very narrow container">
                <!-- 標題 -->
                <h1 class="ts header">
                    登入帳號
                    <div class="sub header">歡迎回來，您的家人正等著。</div>
                </h1>
                <!-- / 標題 -->
            </div>
        </div>
        <!-- / 聚焦看板 -->

        <!-- 主要容器 -->
        <div class="ts narrow container">
            <br>
            <br>

            <!-- 主要登入片段 -->
            <div class="ts centered secondary segment">
                <!-- 表單 -->
                <form class="ts form">
                    <!-- 帳號欄位 -->
                    <div class="field">
                        <label>帳號</label>
                        <input type="text" v-model="username">
                    </div>
                    <!-- / 帳號欄位 -->

                    <!-- 密碼欄位 -->
                    <div class="field">
                        <label>密碼</label>
                        <input type="password" v-model="password">
                    </div>
                    <!-- / 密碼欄位 -->

                    <!-- 登入按鈕 -->
                    <button type="button" class="ts positive fluid button" :class="{'loading': loading}" @click="submit()">登入</button>
                    <!-- / 登入按鈕 -->
                </form>
                <!-- / 表單 -->
            </div>
            <!-- / 主要登入片段 -->
            <div class="ts faded basic center aligned message">
                <p>沒有帳號嗎？<router-link to="/register">點擊此註冊並追蹤且保護您的家人！</router-link></p>
            </div>
        </div>
    <!-- / 主要容器 -->
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        var latestAccount  = JSON.parse(localStorage.getItem('users')),
            latestAccount  = latestAccount[latestAccount.length - 1].username,
            latestPassword = JSON.parse(localStorage.getItem('users')),
            latestPassword = latestPassword[latestPassword.length - 1].password

        return {
            username: latestAccount,
            password: latestPassword,
            loading: false
        }
    },
    methods: {
        submit() {
            this.loading = true

            var users = JSON.parse(localStorage.getItem('users'))

            if (users === null)
                users = []

            var correct       = false,
                that          = this,
                checkUsername = this.username,
                checkPassword = this.password

            users.forEach((obj) => {
                if(obj.username === checkUsername && obj.password === checkPassword)
                    correct = true
            })

            setTimeout(() => {
                if(!correct) {
                    alert("帳號或密碼不正確，請重試另一組密碼。")
                    that.loading = false
                    return
                }

                this.$router.push({path: '/members'})
                that.loading = false
            }, Math.floor(Math.random() * 1200) + 500)
        }
    }
}
</script>