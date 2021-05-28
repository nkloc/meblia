<template>
  <section>
    <div class="slider">
      <p>En raison de très nombreuses sollicitations, les délais de réponse du service<br /> 
      client peuvent être allongés. Nous vous prions de bien vouloir nous en excuser.</p>
    </div>

    <div class="page_contact">
      <div class="contact">
        <h1>Contactez-nous</h1>
        <form>
          <p class="civil">Civilité*</p>
          <div class="civilite">
            <input type="radio"><label for="male">M.</label>
            <input type="radio"><label for="female">Mme</label>
          </div>
          <div class="formulaire">
            <p>Nom*</p>
            <input type="text">
            <p>Prénom*</p>
            <input type="text">
            <p>E-mail*</p>
            <input type="text">
            <p>Objet*</p>
            <input type="text">
            <p>Numéro de commande*</p>
            <input type="text">
          </div>
        </form>
        <div class="part2">
          <p class="message">Votre message*</p>
          <p>Veillez à ne communiquer ici que les informations nécessaires au traitement de votre demande, à l’exclusion notamment de toute donnée pouvant être considérée comme sensible au regard de la réglementation (données de santé, révélant votre origine ethnique, vos opinions politiques, philosophiques ou religieuses, etc.)</p>
          <input type="text">
          <button>Envoyer ma demande</button>
        </div>
        
      </div>
      <div class="service">
      <h1>Service client</h1>
      <p class="align">Pour toute question, contactez-nous :</p>
      <div>
        <div class="icones">
          <i class="fas fa-phone"></i>
          <p>06 45 65 87 34</p>
        </div>
        <div class="icones">
          <i class="fas fa-envelope"></i>
          <p>meblia@contact.com</p>
        </div>
        <div class="icones">
          <i class="fas fa-deaf"></i>
          <p>09 53 65 23 84</p>
        </div>
      </div>
    </div>

    </div>
  </section>
</template>

<style lang="stylus" scoped>
@import '../css/variables'

.slider
  display flex
  justify-content center
  width 100vw
  height 30vh
  background-image url('../assets/meuble/contacter/image-principale.png')
  background-size 100vw 30vh
  p
    font-size 20px
    font-weight 500
    line-height 45px
    color white
    padding-top 5%

.page_contact
  display flex
  margin 5%
  h1 
    color $green-color
    font-size 36px
    line-weight 54px
    font-weight 600
  .contact
    width 70%
    h1 
      padding-bottom 30px
    form
      font-size 18px
      font-weight 500
      .civilite
        display flex
        align-items center
        padding-bottom 20px
      .formulaire input 
        width 60%
        padding-bottom 5px
        margin-bottom 20px
        margin-top 10px
    .civilite label 
      padding-right 50px
    .part2
      width 90%
    .part2 p 
      padding-bottom 15px
    .part2 input
      height 150px
      width 100%
    .message
      font-size 18px
      font-weight 500 
    button
      display block
      background-color $green-color
      padding 20px 70px
      color white
      font-weight 600
      font-size 24px
      line-height 36px
      outline none
      border none
      margin-top 20px
      margin-left auto
      margin-right auto
      &:hover
        cursor pointer
  .service
    display flex
    flex-wrap wrap
    flex-flow row wrap
    justify-content center
    padding 30px
    width 30%
    height 100%
    box-shadow : 0px 0px 12px #E6EAEE
    .align
      padding-top 20px
      font-size 14px
    .icones
      display flex
      align-items center
      padding-top 20px
      i 
        color $green-color
        font-size 26px
        padding-right 20px
      p 
        font-size 18px
</style>