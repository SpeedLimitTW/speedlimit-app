<style lang="sass" scoped>
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
                        幫助他人
                    </div>
                    <div class="description">你可以在這裡發揮愛心，協助他人到達目的地並獲取獎勵。</div>
                    <!-- / 標題 -->
                </div>
            </div>
            <!-- / 聚焦看板 -->

            <!-- 主要容器 -->
            <div class="ts narrow container">
                <div class="ts relaxed grid">
                    <!-- 標題欄位 -->
                    <div class="sixteen wide column">
                        <template v-if="loading">
                            <div class="ts three cards">
                                <div class="ts card" style="opacity: 0.6">
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
                                <div class="ts card" style="opacity: 0.5">
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
                                <div class="ts card" style="opacity: 0.4">
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
                                <div class="ts card" style="opacity: 0.3">
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
                                <div class="ts card" style="opacity: 0.2">
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
                                <div class="ts card" style="opacity: 0.1">
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
                            </div>
                        </template>
                        <div class="ts three cards" v-if="!loading">
                            <div class="ts card" v-for="user in requests" v-if="!user.done">
                                <div class="map" style="width: 100%; height: 200px"></div>
                                <div class="content">
                                    <div class="header">
                                        {{ user.realname }}
                                        <div class="sub header">回饋：{{ user.reward }}</div>
                                    </div>
                                    <div class="description">
                                        {{ user.description }}
                                    </div>
                                </div>
                                <div class="ts bottom attached fluid buttons">
                                    <router-link :to="'/trace/'+user.realname" class="ts button">前往幫助</router-link>
                                </div>
                            </div>
                        </div>
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
import { mapActions, mapGetters } from 'vuex'
import MainSidebar                from 'components/Sidebar'

export default {
    components: {
        MainSidebar
    },
    methods: {

    },
    data() {
        return {
            requests: null,
            loading : true
        }
    },
    mounted() {
        var that = this

        setTimeout(() => {
            var requests = JSON.parse(localStorage.getItem('requests'))

            if (requests === null)
                requests = []

            that.requests = requests
            that.loading  = false

            setTimeout(() => {
                var pos        = { lat: 22.7478292, lng: 120.3436056 },
                    mapOptions = {
                    center: pos,
                    zoom  : 16
                }
                document.querySelectorAll('.map').forEach((el) => {
                    var map    = new google.maps.Map(el, mapOptions),
                        marker = new google.maps.Marker({
                        position: pos,
                        map     : map
                    })
                })
            }, 100)
        }, Math.floor(Math.random() * 1200) + 500)
    }
}
</script>