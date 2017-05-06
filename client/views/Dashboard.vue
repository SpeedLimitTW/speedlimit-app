<style lang="sass" scoped>
.sidebar
    height: 100vh !important
.slate
    margin-bottom: 1.8em
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
                        儀表板
                    </div>
                    <div class="description">從這裡檢視 <strong>{{ $route.params.name }}</strong> 的狀況。</div>
                    <!-- / 標題 -->
                </div>
            </div>
            <!-- / 聚焦看板 -->

            <!-- 主要容器 -->
            <div class="ts narrow container">
                <div class="ts relaxed grid">
                    <!-- 大略卡片欄位 -->
                    <div class="sixteen wide column">
                        <div class="ts three cards">
                            <!-- 本月拜訪次數 -->
                            <div class="ts card">
                                <div class="content">
                                    <!-- 統計數據 -->
                                    <div class="ts small statistic">
                                        <div class="value">
                                            20
                                            <div class="increment">4</div>
                                        </div>
                                        <div class="left aligned label">總移動公尺數</div>
                                    </div>
                                    <!-- / 統計數據 -->
                                </div>
                                <div class="symbol">
                                    <i class="location arrow icon"></i>
                                </div>
                            </div>
                            <!-- / 本月拜訪次數 -->

                            <!-- 總會員數 -->
                            <div class="ts card">
                                <div class="content">
                                    <!-- 統計數據 -->
                                    <div class="ts small statistic">
                                        <div class="value">
                                            2
                                        </div>
                                        <div class="left aligned label">上線分鐘數</div>
                                    </div>
                                    <!-- / 統計數據 -->
                                </div>
                                <div class="symbol">
                                    <i class="time icon"></i>
                                </div>
                            </div>
                            <!-- / 總會員數 -->

                            <!-- 平均在線分鐘數 -->
                            <div class="ts card">
                                <div class="content">
                                    <!-- 統計數據 -->
                                    <div class="ts small statistic">
                                        <div class="value">
                                            已停止
                                        </div>
                                        <div class="left aligned label">目前活動</div>
                                    </div>
                                    <!-- / 統計數據 -->
                                </div>
                                <div class="symbol">
                                    <i class="child icon"></i>
                                </div>
                            </div>
                            <!-- / 平均在線分鐘數 -->
                        </div>

                        <!-- 區隔線 -->
                        <div class="ts section divider"></div>
                        <!-- / 區隔線 -->

                        <div class="ts top attached info segment">
                            <div class="ts large header">目前位置</div>
                        </div>
                        <div class="ts attached fitted segment">
                            <div id="map-canvas" style="width: 100%; height: 300px"></div>
                        </div>

                        <br>
                        <table class="ts padded stripped selectable table">
                            <thead>
                                <tr>
                                    <th>時間</th>
                                    <th>地址</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>剛才</td>
                                    <td>815台灣高雄市大社區萬金路9號</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- / 右側雜項欄位 -->
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
    mounted() {
        var pos = {lat: 22.7478292, lng: 120.3436056}
        var mapOptions = {
            center: pos,
            zoom: 16
        }

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Hello World!'
        });

    }
}
</script>