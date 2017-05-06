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
                    <div class="description">從這裡快速檢視 <strong>Yami Odymel</strong> 的狀況。</div>
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
                                            42,689
                                            <div class="increment">32</div>
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
                                            8,652
                                        </div>
                                        <div class="left aligned label">上線時數</div>
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
                                            移動中
                                        </div>
                                        <div class="left aligned label">目前狀態</div>
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
                        <table data-v-796f1e9a="" class="ts padded stripped selectable table"><thead data-v-796f1e9a=""><tr data-v-796f1e9a=""><th data-v-796f1e9a="">距離</th> <th data-v-796f1e9a="">費時</th> <th data-v-796f1e9a="">前往方向</th></tr></thead> <tbody data-v-796f1e9a=""><tr data-v-796f1e9a=""><td data-v-796f1e9a="">80 公尺</td> <td data-v-796f1e9a="">1 分</td> <td data-v-796f1e9a="">往<b>東北</b>朝<b>萬金路</b>前進</td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">0.2 公里</td> <td data-v-796f1e9a="">1 分</td> <td data-v-796f1e9a="">於<b>萬金路</b>向<b>右</b>轉</td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">1.4 公里</td> <td data-v-796f1e9a="">3 分</td> <td data-v-796f1e9a="">於<b>旗楠公路</b>/<b>旗楠路</b>/<b>台22線</b>向<b>右</b>轉</td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">12.2 公里</td> <td data-v-796f1e9a="">8 分</td> <td data-v-796f1e9a="">向<b>右</b>轉，走<b>國道1號</b><div style="font-size:0.9em">部分收費路段</div></td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">1.6 公里</td> <td data-v-796f1e9a="">1 分</td> <td data-v-796f1e9a="">在<b>342-高科</b>出口下交流道，朝<b>高雄科學園區</b>前進<div style="font-size:0.9em">部分收費路段</div></td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">3.6 公里</td> <td data-v-796f1e9a="">3 分</td> <td data-v-796f1e9a="">接著走<b>南科高雄園區中山高聯絡道</b></td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">1.1 公里</td> <td data-v-796f1e9a="">2 分</td> <td data-v-796f1e9a="">接著走<b>路科二路</b></td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">0.2 公里</td> <td data-v-796f1e9a="">1 分</td> <td data-v-796f1e9a="">於<b>路科九路</b>向<b>左</b>轉</td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">1.4 公里</td> <td data-v-796f1e9a="">2 分</td> <td data-v-796f1e9a="">於<b>保興二路</b>向<b>右</b>轉</td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">2.5 公里</td> <td data-v-796f1e9a="">4 分</td> <td data-v-796f1e9a="">於<b>保安路</b>/<b>西部濱海公路</b>/<b>台17線</b>向<b>左</b>轉</td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">1.2 公里</td> <td data-v-796f1e9a="">2 分</td> <td data-v-796f1e9a="">於<b>復興路</b>/<b>高22鄉道</b>向<b>右</b>轉<div style="font-size:0.9em">繼續開在復興路上</div></td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">0.1 公里</td> <td data-v-796f1e9a="">1 分</td> <td data-v-796f1e9a="">接著走<b>舊港路</b>/<b>高21鄉道</b></td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">1.5 公里</td> <td data-v-796f1e9a="">3 分</td> <td data-v-796f1e9a="">於<b>文安北路</b>口向<b>右</b>轉</td></tr><tr data-v-796f1e9a=""><td data-v-796f1e9a="">78 公尺</td> <td data-v-796f1e9a="">1 分</td> <td data-v-796f1e9a="">靠<b>右</b>行駛<div style="font-size:0.9em">目的地在右邊</div></td></tr></tbody></table>

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