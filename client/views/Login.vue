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
                        <input type="text" placeholder="">
                    </div>
                    <!-- / 帳號欄位 -->

                    <!-- 密碼欄位 -->
                    <div class="field">
                        <label>密碼</label>
                        <input type="password" placeholder="">
                    </div>
                    <!-- / 密碼欄位 -->

                    <!-- 登入按鈕 -->
                    <button type="button" class="ts positive fluid button">登入</button>
                    <!-- / 登入按鈕 -->
                </form>
                <!-- / 表單 -->
            </div>
            <!-- / 主要登入片段 -->
            <div class="ts faded basic center aligned message">
                <p>沒有帳號嗎？<a href="#!">點擊此註冊並追蹤且保護您的家人！</a></p>
            </div>
        </div>
    <!-- / 主要容器 -->
    </div>
</template>

<script>
export default
{
    name: ''
}
</script>