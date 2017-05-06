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
                        編輯成員
                    </div>
                    <div class="description">這裡會列出你所新增的家人資料。</div>
                    <!-- / 標題 -->
                </div>
            </div>
            <!-- / 聚焦看板 -->

            <!-- 主要容器 -->
            <div class="ts narrow container">
                <div class="ts relaxed grid">
                    <!-- 標題欄位 -->
                    <div class="sixteen wide column">
                        <!-- 表單 -->
                        <form class="ts relaxed form">
                            <!-- 欄位群組 -->
                            <div class="fields">
                                <!-- 單個欄位 -->
                                <div class="basic field">
                                    <label>家人姓名</label>
                                    <input type="text">
                                </div>
                                <!-- / 單個欄位 -->

                                <!-- 單個欄位 -->
                                <div class="basic field">
                                    <label>稱位</label>
                                    <select class="ts basic dropdown">
                                        <option>爺爺</option>
                                        <option>奶奶</option>
                                        <option>舅舅</option>
                                        <option>叔公</option>
                                    </select>
                                </div>
                                <!-- / 單個欄位 -->
                            </div>
                            <!-- / 欄位群組 -->

                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>住址</label>
                                <input type="text">
                                <small>請輸入這位家人的住址，我們會以此作為安全區域。</small>
                            </div>
                            <!-- /單個欄位 -->

                            <!-- 欄位群組 -->
                            <div class="fields">
                                <!-- 單個欄位 -->
                                <div class="field">
                                    <label>生日</label>
                                    <!-- 下拉式選單群組 -->
                                    <div class="ts relaxed fluid separated dropdowns">
                                        <select>
                                            <option v-for="year in date.years">{{ year }}</option>
                                        </select>
                                        <select>
                                            <option v-for="month in date.months">{{ month }}</option>
                                        </select>
                                        <select>
                                            <option v-for="day in date.days">{{ day }}</option>
                                        </select>
                                    </div>
                                    <!-- / 下拉式選單群組 -->
                                </div>
                                <!-- / 單個欄位 -->

                                <!-- 單個欄位 -->
                                <div class="field">
                                    <label>性別</label>

                                    <!-- 單選方塊群組 -->
                                    <div class="ts center aligned compact horizontal checkboxes">
                                        <div class="ts radio checkbox">
                                            <input type="radio" name="gender" id="genderMale" checked="checked">
                                            <label for="genderMale">男性</label>
                                        </div>
                                        <div class="ts radio checkbox">
                                            <input type="radio" name="gender" id="genderFemale">
                                            <label for="genderFemale">女性</label>
                                        </div>
                                    </div>
                                    <!-- / 單選方塊群組 -->
                                </div>
                                <!-- / 單個欄位 -->
                            </div>
                            <!-- / 欄位群組 -->

                            <!-- 單個欄位 -->
                            <div class="field">
                                <label>裝置清單</label>
                                <div class="ts flatted secondary segment" v-for="(device, index) in devices">
                                    <div class="fields">
                                        <div class="field">
                                            <label>稱呼</label>
                                            <input type="text" placeholder="如：綠色球鞋、藍白拖" v-model="device.name">
                                        </div>
                                        <div class="field">
                                            <label>編號</label>
                                            <div class="ts action fluid input">
                                                <input type="text" v-model="device.id">
                                                <button type="button" class="ts inverted icon button" @click="scan(index)">
                                                    <i class="qrcode icon"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ts basic clickable dashed slate" @click="addDevice()">
                                    <i class="plus icon"></i>
                                    <span class="header">新增裝置</span>
                                    <span class="description">按此以將新裝置連結至此家人。</span>
                                </div>
                            </div>
                            <!-- / 單個欄位 -->

                            <!-- 按鈕 -->
                            <div class="ts fluid separated buttons">
                                <button class="ts fluid button" type="button">取消</button>
                                <button class="ts fluid inverted button" type="button">儲存變更</button>
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
        <div class="ts modals active dimmer" v-if="scanner">
            <dialog id="scan" class="ts modal" open>
                <div class="header">
                    連結裝置
                </div>
                <div class="image content">
                    <div class="ts large image">
                        <video autoplay style="width: 450px; height: auto; font-size: 1rem;"></video>
                    </div>
                    <div class="description">
                        <div class="ts header">請將攝影機對準裝置上的 QR Code。</div>
                        <p>當掃描完成時此視窗將會自動關閉，並自動於編號欄位上填寫裝置編號以進行連結。</p>
                    </div>
                </div>
                <div class="actions">
                    <button class="ts deny button" @click="closeScanner()">
                        取消掃描
                    </button>
                </div>
            </dialog>
        </div>
    </div>
</template>

<script>
import MainSidebar from 'components/Sidebar'
import { generate } from 'scripts/january'
//import 'scripts/tocas.dev.js'

export default {
    components: {
        MainSidebar
    },
    methods:{
        addDevice(){
            this.devices.push({name: '', id: ''})
        },
        closeScanner(){
            this.scanner = false
            this.qr.stream.getTracks()[0].stop()
        },
        scan(i){
            this.scanner = true
            var that = this
            this.qr = new QCodeDecoder()
            setTimeout(() => {
                var video = document.querySelector('video')
                function resultHandler (err, result) {
                    if (err)
                        return console.log(err.message)

                    that.devices[i].id = result
                    that.closeScanner()
                    that.qr.stream.getTracks()[0].stop()
                }
                that.qr.decodeFromCamera(video, resultHandler)
            }, 100)
        }
    },
    data(){
        return {
            devices: [],
            scanner: false,
            qr: new QCodeDecoder(),
            date: generate()
        }
    },
    mounted(){



    }
}
</script>