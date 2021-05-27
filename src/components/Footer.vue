<template>
  <footer>
    <div class="aide">
      <h3>Aide</h3>
      <div class="sous-liste">
        <ul>
          <li>Nous rejoindre</li>
          <li>Contactez nous</li>
          <li>FAQ</li>
          <li>Politique du site</li>
          <li>Retours, remboursements et réclamations</li>
        </ul>
      </div>
    </div>
    <div class="decouvrir">
      <h3>Découvrir</h3>
      <div class="sous-liste">
        <ul>
          <li>Vue AR et 3D</li>
          <li>Membres</li>
          <li>Commerce</li>
          <li>Notre histoire</li>
          <li>Recrutement</li>
        </ul>
      </div>
    </div>
    <div class="icones">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-pinterest-p"></i>
    </div>
    <div class="newsletter">
      <h2>
        Rejoignez notre newsletter
      </h2>
      <p>
        Recevez des promotions et des nouvelles en vous inscrivant.
      </p>
      <div class="input">
        <input type="email" id="email" name="email" placeholder="Your email..">
        <button>S'inscrire</button>
      </div>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
@import '../css/variables'

.input
  display flex 
  justify-content flex-start
  width 100%
  input
    width 50%
    border-radius 7px
    border-bottom-left-radius 0px
    border-bottom-right-radius 0px
    border-top transparent
    border-left transparent 
    border-right transparent  
    margin-right 8px
    border-bottom 1px solid #858585
    background-color transparent
    min-height 50px
    font-size 14px
    font-weight 500
    padding-left 8px
    &:focus
      outline none
  button 
    padding 16px 32px
    background-color $lightgrey-color
    color black
    border none
    outline none
    cursor pointer
  
footer
    min-height 280px
    margin-top 10vh
    display flex
    padding 30px
    justify-content space-around
    border-top 1px solid rgba(0,0,0,0.1)
    border-bottom 1px solid rgba(0,0,0,0.1)
    div
      display flex
      height 240px
      align-self center
      align-items center
      h3,h2
        width 100%
        align-self left
      ul 
        li 
          list-style none
          color $lightgray-color
          margin-bottom 4px
    .aide,.decouvrir,.newsletter
      flex-direction column
    .icones
      i
        color black
        margin 0 2vh
        font-size 25px
        &:hover
          cursor pointer
    .newsletter
      h2
        font-size 24px
        font-weight normal
        margin-bottom 5px
      p
        color $lightgray-color
        font-size 14px
</style>
