<style lang="sass" scoped>
body
    margin: 0;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', Ubuntu, 'segoe ui', arial, sans-serif;

//-------------------//
//      主要區塊
//-------------------//
.page
    text-align: center

//-------------------//
//     程式碼標籤
//-------------------//

code
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
</style>

<template lang="pug">
    //- 主要區塊與計數器
    .page
        main-counter

        //- 註釋
        p
            | 欲要開始，請編輯
            code ./client
            | 內的檔案並儲存。
</template>

<script>
import MainCounter from 'components/Counter'

export default
{
    components:
    {
        MainCounter
    }
}
</script>