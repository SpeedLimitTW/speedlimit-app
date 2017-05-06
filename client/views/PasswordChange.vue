<style lang="sass" scoped>
.sidebar
    height: 100vh !important
.slate
    margin-bottom: 1.8em
table
    box-shadow: 0px 1px 2px 0 #f1f0f0
</style>

<template>
    <div>
        <!-- 左側邊欄 -->
        <main-sidebar></main-sidebar>
        <!-- / 左側邊欄 -->

        <!-- 可擠壓式的推動容器 -->
        <div class="squeezable pusher">

            <!-- 聚焦看板 -->
            <div class="ts large horizontally fitted fluid slate">
                <div class="ts narrow container">
                    <!-- 標題 -->
                    <div class="header">
                        變更密碼
                    </div>
                    <div class="description">更改登入時的密碼。</div>
                    <!-- / 標題 -->
                </div>
            </div>
            <!-- / 聚焦看板 -->

            <!-- 主要容器 -->
            <div class="ts narrow container">
                <div class="ts relaxed grid">
                    <!-- 標題欄位 -->
                    <div class="sixteen wide column">
                        <!-- 表單 -->
                        <form class="ts relaxed form">
                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>目前密碼</label>
                                <input type="password">
                                <small>請輸入您目前所使用的密碼，這是為了確定更改密碼的是登入者本人。</small>
                            </div>
                            <!-- / 單個欄位 -->

                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>新密碼</label>
                                <input type="password">
                                <small>密碼為 8 到 64 個字。</small>
                            </div>
                            <!-- / 單個欄位 -->

                            <!-- 按鈕 -->
                            <div class="ts fluid separated buttons">
                                <button class="ts fluid button" type="button">取消</button>
                                <button class="ts fluid inverted button" type="button">儲存變更</button>
                            </div>
                            <!-- / 按鈕 -->
                        </form>
                        <!-- / 表單 -->
                    </div>
                </div>
            </div>
            <!-- / 主要容器 -->
            <br>
        </div>
        <!-- / 可擠壓式的推動容器 -->
    </div>
</template>

<script>
import MainSidebar from 'components/Sidebar'

export default {
    components: {
        MainSidebar
    },
}
</script>