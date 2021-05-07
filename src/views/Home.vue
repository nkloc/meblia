<template>
    <section>
        <h2 style="margin-top: 3vh">Hello ! <br> I'm Thomas.</h2>
        <img class="image-scroll" src="../assets/effet-scroll.png" alt="">
        <h4>Digital management student <br> & <br> UI Designer Free-lance</h4>
        <div class="links">
          <img src="../assets/linkedin.svg" alt="Logo Linkedin">
          <img src="../assets/Dribble.svg" alt="Logo Dribble">
          <img src="../assets/Behance.svg" alt="Logo Behance">
        </div>
        <p>chheangthomas@gmail.com</p>
        <h4>Specialized in <br> UI Design</h4>
        <div class="container-double">
            <Double name="Figma" alt="Logo Figma"></Double>
            <Double name="Protopie" alt="Logo Protopie"></Double>
            <Double name="Spline" alt="Logo Spline"></Double>
        </div>
        <h4>Latest Project</h4>
        <div class="last-project">
          <router-link to="/projects/cuure"><img src="../assets/Cuure.svg" alt="Projet Cuure"></router-link>
          <router-link to="/projects">All Projects</router-link>
        </div>
        <h4>Soft Skills & <br> Experiences</h4>
        <div class="container-double">
            <Double name="Creative" alt="Logo Creative"></Double>
            <Double name="Hard-worker" alt="Logo Hard-worker"></Double>
            <Double name="Curious" alt="Logo Curious"></Double>
        </div>
        <div class="container-exp">
            <Exp exp="Cuure" poste="Graphic Designer" alt="Logo Cuure"></Exp>
            <Exp exp="Reachmaker" poste="Graphic Designer" alt="Logo Reachmaker"></Exp>
            <Exp exp="Web School Factory" poste="Graphic Designer" alt="Logo Web School Factory"></Exp>
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
import Double from '../components/templates/Double.vue'
import Exp from '../components/templates/Exp.vue'

export default {
  components: {
    Double: Double,
    Exp: Exp,
  }
}

</script>