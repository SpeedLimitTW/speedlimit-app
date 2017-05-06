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
                    <div class="nine wide column">
                        <div class="ts active centered inline loader" v-if="loading"></div>
                        <div class="ts feed" v-if="!loading">
                            <div class="event" v-for="request in requests" v-if="request.done">
                                <div class="label">
                                    <i class="circular heart icon"></i>
                                </div>
                                <div class="content">
                                    <div class="date">
                                        剛才
                                    </div>
                                    <div class="summary">
                                        你幫助了 {{ request.realname}} 抵達了他自己的住所。
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="seven wide column">
                        <div class="ts header">
                            你曾去過最遠的地方⋯⋯
                        </div>
                        <div id="map-canvas" style="width: 100%; height: 300px"></div>
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
            loading : true,
            requests: null
        }
    },
    mounted() {
        var that = this

        setTimeout(() => {
            var requests = JSON.parse(localStorage.getItem('requests'))

            if (requests === null)
                requests = []

            that.requests = requests
            that.loading = false
        }, Math.floor(Math.random() * 1200) + 500)

        var pos        = {lat: 22.7478292, lng: 120.3436056},
            mapOptions = {
            center: pos,
            zoom: 16
        }

        var map    = new google.maps.Map(document.getElementById("map-canvas"), mapOptions),
            marker = new google.maps.Marker({
          position: pos,
          map     : map
        })

    }
}
</script>