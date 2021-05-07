<template>
    <div>
        <img :src="require(`@/assets/exp-${exp}.svg`)" :alt={alt}>
        <div class="text">
            <b>{{ poste }}</b>
            <p>{{ exp }}</p>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
@import '../../css/variables'
    div
        display flex 
        justfiy-content center
        align-items center
        margin 5vh 0
        @media tablet 
            margin 3vh
        img 
            height 150px
            margin 0 7vh
            @media tablet
                height 100px
                margin 0
        .text 
            display flex 
            flex-direction column
            align-items flex-start

        b
            font-size 14px
            margin-top 2vh
            font-weight 600
            line-height 16px
            @media tablet-up
                font-size 24px
                line-height 28px
        p
            font-size 14px
            margin-top 2vh
            font-weight 400
            line-height 16px
            @media tablet-up
                font-size 24px
                line-height 28px
            
</style>
<script>
export default {
    props:['exp','alt','poste'],

}

</script>