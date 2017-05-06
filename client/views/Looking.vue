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
                        <div class="ts three waterfall cards">
                            <div class="ts card" v-for="user in lookings">
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
                                    <button class="ts button">前往幫助</button>
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
        ...mapActions('main', ['fetchLookings'])
    },
    computed: {
        ...mapGetters('main', ['lookings'])
    },
    mounted() {
        this.fetchLookings({$http: this.$http})

        var pos        = { lat: 22.7478292, lng: 120.3436056 },
            mapOptions = {
            center: pos,
            zoom  : 16
        }
        document.querySelectorAll('.map').forEach((el) => {
            var map    = new google.maps.Map(el, mapOptions),
                marker = new google.maps.Marker({
                position: pos,
                map     : map,
                title   : 'Hello World!'
            })
        })


    }
}
</script>