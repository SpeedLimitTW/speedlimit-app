<style lang="sass" scoped>
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
                        請求協助
                    </div>
                    <div class="description">要求他人協助您的家人。</div>
                    <!-- / 標題 -->
                </div>
            </div>
            <!-- / 聚焦看板 -->

            <!-- 主要容器 -->
            <div class="ts narrow container">
                <div class="ts relaxed grid">
                    <div class="sixteen wide column">
                        <!-- 表單 -->
                        <form class="ts relaxed form">
                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>需協助者</label>
                                <div class="ts fluid dropdown">
                                    <select v-model="realname">
                                        <option :value="member.realname" v-for="member in members">{{ member.realname }}</option>
                                    </select>
                                </div>
                            </div>
                            <!-- / 單個欄位 -->

                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>截止時間</label>
                                <div class="ts fluid dropdown">
                                    <select v-model="timeout">
                                        <option value="3">3 分鐘後</option>
                                        <option value="5">5 分鐘後</option>
                                        <option value="8">8 分鐘後</option>
                                        <option value="10">10 分鐘後</option>
                                        <option value="15">15 分鐘後</option>
                                        <option value="20">20 分鐘後</option>
                                        <option value="30">30 分鐘後</option>
                                        <option value="40">40 分鐘後</option>
                                        <option value="50">50 分鐘後</option>
                                    </select>
                                </div>
                            </div>
                            <!-- / 單個欄位 -->

                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>事件說明</label>
                                <textarea rows="4" placeholder="用簡短的說明敘述發生了什麼，以便善心人士能夠更方便地應對問題。" v-model="description"></textarea>
                            </div>
                            <!-- / 單個欄位 -->

                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>相關回饋</label>
                                <textarea rows="4" placeholder="（如：免費五十元折價餐卷、一起自拍）" v-model="reward"></textarea>
                            </div>
                            <!-- / 單個欄位 -->

                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>目前位置</label>
                                <div id="map-canvas" style="width: 100%; height: 300px"></div>
                            </div>
                            <!-- / 單個欄位 -->

                            <!-- 按鈕 -->
                            <div class="ts fluid separated buttons">
                                <button class="ts fluid button" type="button" @click="cancel()">取消</button>
                                <button class="ts fluid inverted button" type="button" :class="{'loading': loading}" @click="submit()">送出幫助請求</button>
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
    data() {
        return {
            members    : null,
            realname   : '',
            timeout    : 3,
            loading    : false,
            description: '',
            reward     : '',
        }
    },
    methods: {
        cancel() {
            this.$router.push({path: '/members'})
        },
        submit() {
            var that = this
            this.loading = true

            setTimeout(() => {
                var requests = JSON.parse(localStorage.getItem('requests'))

                if (requests === null)
                    requests = []

                requests.push({
                    realname   : this.realname,
                    reward     : this.reward,
                    description: this.description,
                    devices    : this.devices,
                    done       : false
                })

                localStorage.setItem('requests', JSON.stringify(requests))

                that.loading = false
                this.$router.push({path: '/looking'})
            }, Math.floor(Math.random() * 1200) + 500)
        }
    },
    mounted() {
        this.members = JSON.parse(localStorage.getItem('members'))

        if(this.members === null)
            this.members = []

        var pos        = {lat: 22.7478292, lng: 120.3436056},
            mapOptions = {
            center: pos,
            zoom  : 16
        }
        var map    = new google.maps.Map(document.getElementById("map-canvas"), mapOptions),
            marker = new google.maps.Marker({
            position: pos,
            map     : map,
            title   : 'Hello World!'
        })
    }
}
</script>