<style lang="sass" scoped>
.sidebar
    height: 100vh !important
.slate
    margin-bottom: 1.8em
table
    box-shadow: 0px 1px 2px 0 #f1f0f0

    td
        vertical-align: top
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
                        成員清單
                    </div>
                    <div class="description">這裡會列出你所新增的家人資料。</div>
                    <!-- / 標題 -->
                </div>
            </div>
            <!-- / 聚焦看板 -->

            <!-- 主要容器 -->
            <div class="ts narrow container">
                <div class="ts relaxed grid">
                    <!-- 標題欄位 -->
                    <div class="sixteen wide column">
                        <div class="ts segment" v-if="!members">
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>

                            <!-- 讀取指示器 -->
                            <div class="ts active inverted dimmer">
                                <div class="ts loader"></div>
                            </div>
                            <!-- / 讀取指示器 -->
                        </div>
                        <table class="ts padded stripped table" v-if="members">
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>新增日期</th>
                                    <th>配給裝置</th>
                                    <th class="right aligned">動作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="member in members" :key="member.realname">
                                    <td><router-link to="/dashboard">{{ member.realname }}</router-link></td>
                                    <td>{{ member.birthday }}</td>
                                    <td>
                                        <div class="ts list" v-if="member.devices">
                                            <div class="item" v-for="device in member.devices" :key="device">{{ device }}</div>
                                        </div>
                                        <span v-if="!member.devices">（無）</span>
                                    </td>
                                    <td class="right aligned collapsing">
                                        <button @click="edit(member.realname)" class="ts small icon labeled button">
                                            <i class="edit icon"></i>
                                            編輯
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- 分頁按鈕 -->
                        <div class="ts small buttons">
                            <button class="ts disabled icon button">
                                <i class="left arrow icon"></i>
                            </button>
                            <button class="ts disabled button">
                                1
                            </button>
                            <button class="ts disabled icon button">
                                <i class="right arrow icon"></i>
                            </button>
                        </div>
                        <!-- / 分頁按鈕 -->
                    </div>
                    <!-- / 標題欄位 -->
                </div>
            </div>
            <!-- / 主要容器 -->
            <br>
        </div>
        <!-- / 可擠壓式的推動容器 -->
    </div>
</template>

<script>
import MainSidebar                from 'components/Sidebar'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        MainSidebar
    },
    methods: {
        ...mapActions('main', ['fetchMembers'])
    },
    computed: {
        ...mapGetters('main', ['members'])
    },
    mounted() {
        this.fetchMembers({$http: this.$http})
    }
}
</script>