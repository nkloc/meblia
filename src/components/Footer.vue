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
      <h3>découvrir</h3>
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
    <div class="icones">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-pinterest-p"></i>
    </div>
    <div class="newsletter">
      <h3>Aide</h3>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
@import '../css/variables'
footer
    height 800px
    margin 10vh 0
    display flex
    align-items center
    justify-content space-around
    div
        display flex
    .aide,.decouvrir,.newsletter
        flex-direction column
    .icones
        i
            color black
            margin 0 2vh
            font-size 25px
            &:hover
                cursor pointer
</style>
