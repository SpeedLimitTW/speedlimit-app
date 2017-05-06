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
                        <div class="ts padded slate" v-if="typeof members !== 'undefined' && members !== null && members.length === 0">
                            <span class="header">尚無家庭成員</span>
                            <span class="description">欲管理家庭成員的蹤跡，安全和健康，請建立一個新的成員。</span>
                            <div class="action">
                                <router-link to="/member/edit">
                                    <button class="ts right labeled icon positive button">
                                        現在開始
                                        <i class="right arrow icon"></i>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                        <table class="ts padded stripped table" v-if="members && members.length !== 0">
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>新增日期</th>
                                    <th>配給裝置</th>
                                    <th class="right aligned">動作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="member in members">
                                    <td><router-link :to="'/dashboard/'+member.realname">{{ member.realname }}</router-link></td>
                                    <td>{{ member.birthday }}</td>
                                    <td>
                                        <div class="ts bulleted list" v-if="member.devices.length > 0">
                                            <div class="item" v-for="device in member.devices" v-if="device.name !== ''">
                                                {{ device.name }}
                                            </div>
                                        </div>
                                    </td>
                                    <td class="right aligned collapsing">
                                        <!--<button @click="edit(member.realname)" class="ts small icon labeled button">
                                            <i class="edit icon"></i>
                                            編輯
                                        </button>-->
                                        <button @click="remove(member.realname)" class="ts negative small icon button">
                                            <i class="trash icon"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- 分頁按鈕 -->
                        <div class="ts small buttons" v-if="members && members.length !== 0">
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
    data() {
        return {
            members: null
        }
    },
    methods: {
        edit() {

        },
        remove(realname) {
            var oldMembers = this.members
            this.members = null

            setTimeout(() => {
                this.members = oldMembers
                this.members.forEach((obj, i) => {
                    if(obj.realname === realname)
                        this.members.splice(i, 1)
                })

                localStorage.setItem('members', JSON.stringify(this.members))

            }, Math.floor(Math.random() * 1200) + 500)
        }
    },
    mounted() {
        setTimeout(() => {
            this.members = JSON.parse(localStorage.getItem('members'))

            if(this.members === null)
                this.members = []

        }, Math.floor(Math.random() * 1200) + 500)
    }
}
</script>