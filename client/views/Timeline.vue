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
                        我的愛心
                    </div>
                    <div class="description">在此查看你曾幫助了誰、多少人，並將其分享吧！</div>
                    <!-- / 標題 -->
                </div>
            </div>
            <!-- / 聚焦看板 -->

            <!-- 主要容器 -->
            <div class="ts narrow container">
                <div class="ts relaxed grid">
                    <!-- 標題欄位 -->
                    <div class="sixteen wide column">
                        <div class="ts feed">
                            <div class="event">
                                <div class="label">
                                    <i class="inverted negative circular heart icon"></i>
                                </div>
                                <div class="content">
                                    <div class="date">
                                        3 小時前
                                    </div>
                                    <div class="summary">
                                        <a>Yami Odymel</a> 戳了你一下
                                    </div>
                                    <div class="meta">
                                        <a><i class="like icon"></i> 4 個讚</a>
                                        <a><i class="comment icon"></i> 32 個回應</a>
                                        <a>清除</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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