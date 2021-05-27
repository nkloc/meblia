<template>
  <section>
    <div class="slider">
      <div>
        <h2>
          Les produits que <br />
          vous allez aimer.
        </h2>
        <p>
          Avec plus de 50 ans d'expertise, nous vous <br />
          proposons une sélection d'équipements.
        </p>
        <button>Découvrir</button>
      </div>
    </div>
    <div class="container">
      <div class="selection">
        <h5>Notre sélection</h5>
        <p>
          Avec plus de 50 ans d'expertise, nous vous proposons une sélection
          d'équipements.
        </p>
        <button><i class="fas fa-arrow-right"></i></button>
      </div>
      <router-link to="/kursii">
        <Card :bg="'Kursii/image-3.png'">
          <h5 slot="header">Chaise Kursii</h5>
          <p slot="content">439 €</p>
        </Card>
      </router-link>
      <router-link to="/misbah">
      <Card :bg="'misbah/image-home.png'">
        <h5 slot="header">Lampe Misbah</h5>
        <p slot="content">407 €</p>
      </Card>
      </router-link>
      <router-link to="/tawila">
      <Card :bg="'tawila/image-home.png'">
        <h5 slot="header">Table Tawila</h5>
        <p slot="content">362 €</p>
      </Card>
      </router-link>
    </div>
    <div class="slider2">
      <div>
        <p>Collection été</p>
        <h2>Rafraîchissez votre intérieur</h2>
        <button>Acheter</button>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../css/variables'

a
  color inherit
  text-decoration none

section
    display flex
    flex-direction column
    justify-content center
    align-items center
    background white
    color $gray-color
    @media tablet
      padding 0 2vh
    .slider2
      width 90vw
      height 90vh
      background-size 90vw 90vh
      background-image url('../assets/meuble/home/image-secondaire.png')
      align-items flex-end
      p
        font-size 36px
        line-height 45px
      h2
        white-space nowrap
      p,h2,button
        position relative 
        top -75px
    .slider
      width 100vw
      height 100vh
      background-image url('../assets/meuble/home/image-principale.png')
      background-size 100vw 100vh
      align-items center
    .slider,.slider2
      background-repeat no-repeat
      background-position center center
      display flex
      h2, p
        margin-left 50px
        color white
        margin-bottom 5vh
        letter-spacing 105%
        max-width 45vw
      h2
        font-weight 600
        font-size 60px
        line-height 65px
        letter-spacing 95%
      button
        margin-left 50px
        display block
        background-color $green-color
        padding 20px 70px
        color white
        font-weight 600
        font-size 24px
        line-height 36px
        outline none
        border none
        &:hover
          cursor pointer
    .container
      display flex
      flex-wrap wrap
      flex-flow row wrap
      align-items space-around
      justify-content center
      width 95vw
      margin 10vh 0
      .selection
        width 310px
        height 470px
        background-color $green-color
        color white
        padding 30px
        letter-spacing 95%
        position relative
        h5
          font-weight 600
          font-size 28px
          line-height 36px
          margin-bottom 25px
          margin-top 15px
        p
          font-size 18px
          font-weight 400
        button
          position absolute
          bottom 30px
          right 30px
          background transparent
          outline none
          border none
          cursor pointer
          color white
          font-size 25px
      div
        margin 5px 5px
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
