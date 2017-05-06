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
                    </div>
                    <!-- / 大略卡片欄位 -->

                    <!-- 左側雜項欄位 -->
                    <div class="ten wide column">
                        <div class="ts top attached info segment">
                            <div class="ts large header">目前位置</div>
                        </div>
                        <div class="ts attached fitted segment">
                            <div id="map-canvas" style="width: 100%; height: 300px"></div>
                        </div>

                    </div>
                    <!-- / 左側雜項欄位 -->

                    <!-- 右側雜項欄位 -->
                    <div class="six wide column">
                        <!-- 系統佇列 -->
                        <div class="ts top attached info segment">
                            <div class="ts large header">已連結裝置</div>
                        </div>
                        <div class="ts bottom attached center aligned segment">
                            <div class="ts bulleted list">
                                <div class="item">橙希</div>
                                <div class="item">卡莉絲</div>
                                <div class="item">依可諾爾</div>
                            </div>
                        </div>
                        <!-- / 系統佇列 -->

                        <!-- 系統佇列 -->
                        <div class="ts top attached info segment">
                            <div class="ts large header">動態時軸</div>
                        </div>
                        <div class="ts bottom attached center aligned segment">
                            <div class="ts feed">
                                <div class="event">
                                    <div class="label">
                                        <img src="https://tocas-ui.com/assets/img/0c20de3.png">
                                    </div>
                                    <div class="content">
                                        <div class="date">
                                            3 小時前
                                        </div>
                                        <div class="summary">
                                            <a>Yami Odymel</a> 經過了「中正紀念堂」。
                                        </div>
                                        <div class="extra images">
                                            <a><img src="https://tocas-ui.com/assets/img/15d7510.png"></a>
                                            <a><img src="https://tocas-ui.com/assets/img/15d7510.png"></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="event">
                                    <div class="label">
                                        <img src="https://tocas-ui.com/assets/img/5e5e3a6.png">
                                    </div>
                                    <div class="content">
                                        <div class="date">
                                            1 天前
                                        </div>
                                        <div class="summary">
                                            <a>Yami Odymel</a> 在「全家便利商店」停留了 30 分鐘。
                                        </div>
                                        <div class="extra images">
                                            <a><img src="https://tocas-ui.com/assets/img/15d7510.png"></a>
                                            <a><img src="https://tocas-ui.com/assets/img/15d7510.png"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- / 系統佇列 -->

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