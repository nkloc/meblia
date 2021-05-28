<template>
  <div class="card" :style="cssProps">
    <slot name="header"></slot>
    <slot name="content"></slot>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../css/variables'

.card
  width 18vw
  height 27vw
  background-repeat no-repeat
  background-size cover
  background-position center center
  display flex
  align-items center
  justify-content flex-end
  flex-direction column
  text-align center
  padding 30px
  font-size 22px
  line-height 33px
  letter-spacing 95%
  font-family $font-content
  &:hover
    cursor pointer
  .header
    font-weight 600
    color $gray-color
  .content
    font-weight 300
    color #637B76
</style>

<script>
export default {
  props: ["bg"],
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/meuble/" + this.$props.bg)})`,
      },
    };
  },
};
</script>
