<style lang="sass" scoped>
.sidebar
    height: 100vh !important
.slate
    margin-bottom: 1.8em
table
    box-shadow: 0px 1px 2px 0 #f1f0f0

    td
        vertical-align: top
strong
    color: #404040
    display: block

    &:not(:first-child)
        margin-top: 1em
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
                        前往協助 吳駿維
                    </div>
                    <div class="description">你已經決定前往協助此人回家，這裡是相關資訊。</div>
                    <!-- / 標題 -->
                </div>
            </div>
            <!-- / 聚焦看板 -->

            <!-- 主要容器 -->
            <div class="ts narrow container">
                <div class="ts relaxed grid">
                    <!-- 標題欄位 -->
                    <div class="sixteen wide column">
                        <div class="ts segment" v-if="loading">
                            <p>&nbsp;</p>
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

                        <div v-show="!loading">
                            <div class="ts two cards">
                                <!-- 本月拜訪次數 -->
                                <div class="ts card">
                                    <div class="content">
                                        <!-- 統計數據 -->
                                        <div class="ts small statistic">
                                            <div class="value">
                                                {{ distance / 1000 }}
                                            </div>
                                            <div class="left aligned label">總公里數</div>
                                        </div>
                                        <!-- / 統計數據 -->
                                    </div>
                                    <div class="symbol">
                                        <i class="map sign icon"></i>
                                    </div>
                                </div>
                                <!-- / 本月拜訪次數 -->

                                <!-- 總會員數 -->
                                <div class="ts card">
                                    <div class="content">
                                        <!-- 統計數據 -->
                                        <div class="ts small statistic">
                                            <div class="value">
                                                {{ waste / 60 }}
                                            </div>
                                            <div class="left aligned label">預期分鐘數</div>
                                        </div>
                                        <!-- / 統計數據 -->
                                    </div>
                                    <div class="symbol">
                                        <i class="time icon"></i>
                                    </div>
                                </div>
                                <!-- / 總會員數 -->
                            </div>

                            <div class="ts top attached fitted segment">
                                <div id="map-canvas" style="width: 100%; height: 400px"></div>
                            </div>
                            <div class="ts attached segment">
                                <div class="ts large header">地址資訊</div>
                            </div>
                            <div class="ts bottom attached segment">
                                <strong>你將從這裡開始：</strong>
                                <div>{{ start }}</div>
                                <strong>並抵達這裡：</strong>
                                <div>{{ end }}</div>
                            </div>

                            <table class="ts padded stripped selectable table">
                                <thead>
                                    <tr>
                                        <th>距離</th>
                                        <th>費時</th>
                                        <th>指引</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="step in steps">
                                        <td>{{ step.distance.text }}</td>
                                        <td>{{ step.duration.text }}</td>
                                        <td v-html="step.instructions"></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="ts separated fluid buttons">
                                <button class="ts button">取消協助</button>
                                <button class="ts positive button">我已協助完成</button>
                            </div>
                        </div>
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
import MainSidebar from 'components/Sidebar'

export default {
    components: {
        MainSidebar
    },
    data() {
        return {
            end     : '',
            start   : '',
            waste   : '',
            distance: '',
            steps   : [],
            loading : true
        }
    },
    mounted() {
        var pos        = { lat: 22.8033658, lng: 120.2215212 },
            mapOptions = {
            center: pos,
            zoom: 20
        },
            that              = this,
            directionsService = new google.maps.DirectionsService,
            directionsDisplay = new google.maps.DirectionsRenderer,
            map               = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        directionsDisplay.setMap(map)
        directionsService.route({
            origin     : { lat: 22.7478292, lng: 120.3436056 },
            destination: { lat: 22.8033658, lng: 120.2215212 },
            travelMode : 'DRIVING'
        }, function(response, status) {
            if (status !== 'OK')
                return

            that.end      = response.routes[0].legs[0].end_address
            that.start    = response.routes[0].legs[0].start_address
            that.waste    = response.routes[0].legs[0].duration.value
            that.distance = response.routes[0].legs[0].distance.value
            that.steps    = response.routes[0].legs[0].steps

            directionsDisplay.setDirections(response)
            that.loading = false
        })
    }
}
</script>