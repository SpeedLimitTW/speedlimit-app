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
                                        你幫助了 Yami Odymel 抵達 30 公里以外的地方。
                                    </div>
                                    <div class="meta">
                                        <a href="#">清除</a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <i class="inverted negative circular heart icon"></i>
                                </div>
                                <div class="content">
                                    <div class="date">
                                        3 小時前
                                    </div>
                                    <div class="summary">
                                        你幫助了 Yami Odymel 抵達 30 公里以外的地方。
                                    </div>
                                    <div class="meta">
                                        <a href="#">清除</a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <i class="inverted negative circular heart icon"></i>
                                </div>
                                <div class="content">
                                    <div class="date">
                                        3 小時前
                                    </div>
                                    <div class="summary">
                                        你幫助了 Yami Odymel 抵達 30 公里以外的地方。
                                    </div>
                                    <div class="meta">
                                        <a href="#">清除</a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <i class="inverted negative circular heart icon"></i>
                                </div>
                                <div class="content">
                                    <div class="date">
                                        3 小時前
                                    </div>
                                    <div class="summary">
                                        你幫助了 Yami Odymel 抵達 30 公里以外的地方。
                                    </div>
                                    <div class="meta">
                                        <a href="#">清除</a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <i class="inverted negative circular heart icon"></i>
                                </div>
                                <div class="content">
                                    <div class="date">
                                        3 小時前
                                    </div>
                                    <div class="summary">
                                        你幫助了 Yami Odymel 抵達 30 公里以外的地方。
                                    </div>
                                    <div class="meta">
                                        <a href="#">清除</a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <i class="inverted negative circular heart icon"></i>
                                </div>
                                <div class="content">
                                    <div class="date">
                                        3 小時前
                                    </div>
                                    <div class="summary">
                                        你幫助了 Yami Odymel 抵達 30 公里以外的地方。
                                    </div>
                                    <div class="meta">
                                        <a href="#">清除</a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <i class="inverted negative circular heart icon"></i>
                                </div>
                                <div class="content">
                                    <div class="date">
                                        3 小時前
                                    </div>
                                    <div class="summary">
                                        你幫助了 Yami Odymel 抵達 30 公里以外的地方。
                                    </div>
                                    <div class="meta">
                                        <a href="#">清除</a>
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