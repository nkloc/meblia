<template>
  <section>
    <div class="slider">
      <div>
        <h2>Les produits que vous allez aimer.</h2>
        <button>Découvrir</button>
      </div>
    </div>
    <div class="container-double">
      <h5 class="title">Produits</h5>
      <div class="container">
        <Card
          data-image="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
        >
          <h5 slot="header">Chaise de cuisine</h5>
          <p slot="content">
            Une chaise classique, parce qu'il en faut pour tous les goûts.
          </p>
        </Card>
        <Card
          data-image="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1143&q=80"
        >
          <h5 slot="header">Beaches</h5>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Card>
        <Card
          data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
        >
          <h5 slot="header">Trees</h5>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Card>
        <Card
          data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
        >
          <h5 slot="header">Lakes</h5>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../css/variables'

section
    display flex
    flex-direction column
    justify-content center
    align-items center
    background white
    color $gray-color
    @media tablet
      padding 0 2vh
    .slider
      width 100vw
      height 35vw
      background-image url('..//assets/meubles/slider_image.png')
      background-repeat no-repeat
      background-size cover
      background-position bottom center
      padding-left 10%
      h2
        color white
        font-weight 600
        font-size 40px
        line-height 48px
        max-width 25%
        margin-bottom 5vh
        letter-spacing 110%
      button
        display block
        background-color #D57674
        padding 16px 50px
        color white
        font-weight 600
        font-size 24px
        line-height 36px
        outline none
        border none

    .container-double
      display flex
      flex-direction column
      align-items center
      width 100vw
      justify-content center
      margin 10vh 0 3vh 0
      @media tablet
        justify-content space-around
        margin 5vh 0 2vh 0
        width 90vw
      .title
        margin 3vh 0
      .container
        display flex
        flex-wrap wrap
        flex-flow row wrap
        align-items flex-start
        width 90vw
    p
      font-weight regular
      font-size 20px
      line-height 28px
      @media tablet
        font-size 16px
        line-height 24px
</style>

<script>
import Card from "../components/templates/Card.vue";

export default {
  components: {
    Card: Card,
  },
};
</script>
