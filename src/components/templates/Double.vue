<template>
    <div>
        <img :src="require(`@/assets/${name}.svg`)" :alt={alt}>
        <p>{{ name }}</p>
    </div>
</template>

<style lang="stylus" scoped>
@import '../../css/variables'
    div
        display flex 
        flex-direction column
        justfiy-content center
        align-items center 
        img 
            height 150px
            margin 0 5vh
            @media tablet
                height 100px
                margin 0
        p
            font-size 14px
            margin-top 2vh
            font-weight 600
            line-height 16px
            @media tablet-up
                font-size 24px
                line-height 28px
            
</style>
<script>
export default {
    props:['name','alt'],

}

</script>