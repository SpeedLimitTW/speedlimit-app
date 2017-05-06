<style lang="sass" scoped>
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
                註冊會員
                <div class="sub header">初次見面，加入後你就能保護家中的年老長輩！</div>
            </h1>
            <!-- / 標題 -->
        </div>
    </div>
    <!-- / 聚焦看板 -->

    <!-- 主要容器 -->
    <div class="ts very narrow container">
        <br>
        <!-- 表單 -->
        <form class="ts relaxed form">
            <!-- 欄位群組 -->
            <div class="fields">
                <!-- 單個欄位 -->
                <div class="basic field">
                    <label>使用者帳號</label>
                    <input type="text" v-model="username">
                    <small>必須是英文字母或混搭數字，且最少 6 字，最多 24 字。</small>
                </div>
                <!-- / 單個欄位 -->

                <!-- 單個欄位 -->
                <div class="basic field">
                    <label>暱稱</label>
                    <input type="text" v-model="nickname">
                    <small>替自己取一個獨一無二的暱稱，你可以在事後更改。</small>
                </div>
                <!-- / 單個欄位 -->
            </div>
            <!-- / 欄位群組 -->

            <!-- 單個欄位 -->
            <div class="field">
                <label>電子郵件地址</label>
                <input type="email" v-model="email">
            </div>
            <!-- / 單個欄位 -->

            <!-- 單個欄位 -->
            <div class="field">
                <label>密碼</label>
                <input type="password" v-model="password">
                <small>僅能是英文字母和數字，且最少 8 字，最多 80 字。</small>
            </div>
            <!-- /單個欄位 -->

            <!-- 欄位群組 -->
            <div class="fields">
                <!-- 單個欄位 -->
                <div class="field">
                    <label>生日</label>
                    <!-- 下拉式選單群組 -->
                    <div class="ts relaxed fluid separated dropdowns">
                        <select v-model="birthYear">
                            <option v-for="year in date.years">{{ year }}</option>
                        </select>
                        <select v-model="birthMonth">
                            <option v-for="month in date.months">{{ month }}</option>
                        </select>
                        <select v-model="birthDay">
                            <option v-for="day in date.days">{{ day }}</option>
                        </select>
                    </div>
                    <!-- / 下拉式選單群組 -->
                </div>
                <!-- / 單個欄位 -->

                <!-- 單個欄位 -->
                <div class="field">
                    <label>性別</label>

                    <!-- 單選方塊群組 -->
                    <div class="ts center aligned compact horizontal checkboxes">
                        <div class="ts radio checkbox">
                            <input type="radio" name="gender" id="genderMale" value="male" v-model="gender">
                            <label for="genderMale">男性</label>
                        </div>
                        <div class="ts radio checkbox">
                            <input type="radio" name="gender" id="genderFemale" value="female" v-model="gender">
                            <label for="genderFemale">女性</label>
                        </div>
                    </div>
                    <!-- / 單選方塊群組 -->
                </div>
                <!-- / 單個欄位 -->
            </div>
            <!-- / 欄位群組 -->

            <!-- 按鈕 -->
            <button class="ts fluid primary button" type="button" @click="submit()" :class="{'loading': loading}">下一步</button>
            <!-- / 按鈕 -->

            <!-- 提示 -->
            <div class="ts center aligned mini basic fitted message">
                按下「下一步」表示您也接受「個人隱私政策」、「使用者規範」。
            </div>
            <!-- / 提示 -->
        </form>
        <!-- / 表單 -->
    </div>
    <!-- / 主要容器 -->
    </div>
</template>

<script>
import { generate } from 'scripts/january'
import "scripts/localstoragedb.min.js"

export default {
    name: 'Registration',
    data() {
        return {
            username  : '',
            nickname  : '',
            email     : '',
            password  : '',
            birthYear : '2017',
            birthMonth: '05',
            birthDay  : '07',
            gender    : 'male',
            date      : generate(false, false, {leadingZero: true}),
            registered: false,
            loading   : false
        }
    },
    methods: {
        submit() {
            this.loading = true

            var users = JSON.parse(localStorage.getItem('users'))

            if (users === null)
                users = []

            var existed       = false,
                that          = this,
                checkUsername = this.username

            users.forEach((obj) => {
                if(obj.username !== checkUsername)
                    return

                existed = true
            })

            setTimeout(() => {
                if(existed) {
                    alert("此帳號已被註冊！請嘗試另外一個。")
                    that.loading = false
                    return
                }

                users.push({
                    username: this.username,
                    nickname: this.nickname,
                    email   : this.email,
                    password: this.password,
                    birthday: this.birthYear + '-' + this.birthMonth + '-' + this.birthDay,
                    gender  : this.gender
                })
                localStorage.setItem('users', JSON.stringify(users))

                that.loading = false
            }, Math.floor(Math.random() * 1200) + 500)
        }
    }
}
</script>