<style lang="sass" scoped>
//-------------------//
//        計數器
//-------------------//
.counter
    margin: 50px auto 20px auto
    border-radius: 3px
    width: 200px
    height: 200px
    text-align: center
    line-height: 200px
    font-size: 5rem
    background-color: #f0f0f0
    color: #7b7b7b;
    user-select: none

//-------------------//
//        按鈕
//-------------------//
button
    margin-bottom: 50px
    font-size: 18px
</style>

<template lang="pug">
    div
        .counter
            | {{ total }}
        button(@click="increment()")
            | 增加
        button(@click="set(0)")
            | 歸零
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { namespace as counter }   from 'modules/Counter'

export default
{
    name: 'CounterBlock',
    methods:
    {
        ...mapActions
        ({
            increment : counter.actions.increment,
            set       : counter.actions.set,
            fetchCount: counter.actions.fetchCount
        })
    },
    computed:
    {
        ...mapGetters
        ({
            total: counter.getters.total
        })
    },
    created()
    {
        this.fetchCount({$http: this.$http})
    }
}
</script>