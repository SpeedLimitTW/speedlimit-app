<style lang="sass" scoped>
//-------------------//
//        計數器
//-------------------//
.counter
    cursor: pointer
    margin: 100px auto
    border-radius: 3px
    width: 200px
    height: 200px
    text-align: center
    line-height: 200px
    font-size: 5rem
    background-color: #f0f0f0
    box-shadow: inset 0 0 10px #ccc
    user-select: none
</style>

<template lang="pug">
    .counter
        | {{ total }}
    button(@click="increment")
        | 增加
    button(@click="set(0)")
        | 歸零
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import counter                    from 'modules/counter'

var {ns: {actions, getters}} = counter

export default
{
    name: 'CounterBlock',
    methods:
    {
        ...mapActions
        ({
            increment: actions.increment
            set      : actions.set
        })
    }
    computed:
    {
        ...mapGetters
        ({
            total: getters.total
        })
    }
}
</script>