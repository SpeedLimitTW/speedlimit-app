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
                                <label>誰需要幫助？</label>
                                <div class="ts fluid dropdown">
                                    <select>
                                        <option>游崇祐</option>
                                        <option>吳俊維</option>
                                    </select>
                                </div>
                            </div>
                            <!-- / 單個欄位 -->

                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>什麼時候結束，或是就不需要了？</label>
                                <div class="ts fluid dropdown">
                                    <select>
                                        <option>3 分鐘後</option>
                                        <option>5 分鐘後</option>
                                        <option>8 分鐘後</option>
                                        <option>10 分鐘後</option>
                                        <option>15 分鐘後</option>
                                        <option>20 分鐘後</option>
                                        <option>30 分鐘後</option>
                                        <option>40 分鐘後</option>
                                        <option>50 分鐘後</option>
                                        <option>一小時後</option>
                                        <option>永遠</option>
                                    </select>
                                </div>
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
                                <button class="ts fluid button" type="button">取消</button>
                                <button class="ts fluid inverted button" type="button">送出幫助請求</button>
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