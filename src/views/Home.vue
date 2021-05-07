<template>
  <section>
    <h2 style="margin-top: 3vh">
      Hello ! <br />
      I'm Thomas.
    </h2>
    <img class="image-scroll" src="../assets/effet-scroll.png" alt="" />
    <h4>
      Digital management student <br />
      & <br />
      UI Designer Free-lance
    </h4>
    <div class="links">
      <img src="../assets/linkedin.svg" alt="Logo Linkedin" />
      <img src="../assets/Dribble.svg" alt="Logo Dribble" />
      <img src="../assets/Behance.svg" alt="Logo Behance" />
    </div>
    <p>chheangthomas@gmail.com</p>
    <h4>
      Specialized in <br />
      UI Design
    </h4>
    <div class="container-double">
      <h5 class="title">Hover over the cards</h5>

      <div class="container">
        <Card
          data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
        >
          <h5 slot="header">Canyons</h5>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Card>
        <Card
          data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
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
    <h4>Latest Project</h4>
    <div class="last-project">
      <router-link to="/projects/cuure"
        ><img src="../assets/Cuure.svg" alt="Projet Cuure"
      /></router-link>
      <router-link to="/projects">All Projects</router-link>
    </div>
    <h4>
      Soft Skills & <br />
      Experiences
    </h4>
    <div class="container-exp">
      <Exp exp="Cuure" poste="Graphic Designer" alt="Logo Cuure"></Exp>
      <Exp
        exp="Reachmaker"
        poste="Graphic Designer"
        alt="Logo Reachmaker"
      ></Exp>
      <Exp
        exp="Web School Factory"
        poste="Graphic Designer"
        alt="Logo Web School Factory"
      ></Exp>
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
    padding 0 5vh
    @media tablet
      padding 0 2vh
    .image-scroll
      margin-top 3vh
      @media tablet-up
        margin-top 5vh
    h2,h3,h4
      text-align center
      font-weight bold
      margin-top 5vh
      @media tablet-up
        margin-top 10vh
    h2,h3
      font-size 90px
      line-height 99px
      @media tablet
        font-size 35px
        line-height 45px
    h4
      font-size 70px
      line-height 77px
      @media tablet
        font-size 24px
        line-height 32px
    .links
      display flex
      align-items center
      width 100vw
      justify-content center
      margin 10vh 0 3vh 0
      @media tablet
        justify-content space-around
        margin 5vh 0 2vh
        width 90vw
      img
        height 150px
        margin 0 5vh
        @media tablet
          height 100px
          margin 0
    .last-project
      display flex
      flex-direction column
      align-items center
      justify-content center
      text-align center
      margin 10vh 0 3vh 0
      @media tablet
        margin 5vh 0 2vh 0
      img
        width 30vw
      a
        text-decoration none
        color $lightgray-color
        margin-top 2vh
        font-weight 500
        font-size 14px
    .container-double
      display flex
      align-items center
      width 100vw
      justify-content center
      margin 10vh 0 3vh 0
      @media tablet
        justify-content space-around
        margin 5vh 0 2vh 0
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
import Double from "../components/templates/Card.vue";
import Exp from "../components/templates/Exp.vue";

export default {
  components: {
    Card: Card,
    Exp: Exp,
  },
};
</script>
