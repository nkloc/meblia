<template>
  <article class="product">
    <div class="product__buy">
      <img
        class="image-principale"
        :src="require(`@/assets/meuble/${path}/image-principale.png`)"
        alt=""
      />
      <div class="product__info">
        <div class="product__info__tp">
          <h1>{{ $route.meta.title }}</h1>
          <p>{{ $route.meta.price }}</p>
        </div>
        <div class="product__info__specific">
          <div class="product__info__choice">
            <p
              @click.prevent="choice = 'Description'"
              :class="{ active: choice == 'Description' }"
            >
              Description
            </p>
            <p
              @click.prevent="choice = 'Détails'"
              :class="{ active: choice == 'Détails' }"
            >
              Détails
            </p>
            <p
              @click.prevent="choice = 'Dimensions'"
              :class="{ active: choice == 'Dimensions' }"
            >
              Dimensions
            </p>
          </div>
          <p v-if="choice == 'Description'" class="product__info__display">
            {{ $route.meta.desc }}
          </p>
          <p v-if="choice == 'Détails'" class="product__info__display">
            {{ $route.meta.details }}
          </p>
          <p v-if="choice == 'Dimensions'" class="product__info__display">
            {{ $route.meta.dimensions }}
          </p>

          <a href="/panier"><button>Acheter</button></a>
        </div>
      </div>
    </div>

    <div class="product__images">
      <div class="product__images__left">
        <img
          class="image1"
          :src="require(`@/assets/meuble/${path}/image-1.png`)"
          alt=""
        />
        <div>
          <img
            class="image2-3"
            :src="require(`@/assets/meuble/${path}/image-2.png`)"
            alt=""
          />
          <img
            class="image2-3"
            :src="require(`@/assets/meuble/${path}/image-3.png`)"
            alt=""
          />
        </div>
      </div>
      <img
        class="image4"
        :src="require(`@/assets/meuble/${path}/image-4.png`)"
        alt=""
      />
    </div>

    <div class="product__others">
      <h2>D’autres personnes ont également acheté :</h2>
      <div class="product__similar">
        <a v-if="path != 'Kursii'" href="/kursii">
          <Card :bg="'Kursii/image-3.png'">
            <h5 slot="header">Chaise Kursii</h5>
            <p slot="content">439 €</p>
          </Card>
        </a>
        <a v-if="path != 'tawila'" href="/tawila">
          <Card :bg="'tawila/image-home.png'">
            <h5 slot="header">Table Tawila</h5>
            <p slot="content">362 €</p>
          </Card>
        </a>
        <a v-if="path != 'misbah'" href="/misbah">
          <Card :bg="'misbah/image-home.png'">
            <h5 slot="header">Lampe Misbah</h5>
            <p slot="content">407 €</p>
          </Card>
        </a>
        <a v-if="path != 'Musanad'" href="/Musanad">
          <Card :bg="'Musanad/image-home.png'">
            <h5 slot="header">Pouf Musanad</h5>
            <p slot="content">199 €</p>
          </Card>
        </a>
        <a v-if="path != 'Karsa'" href="/Karsa">
          <Card :bg="'Karsa/image-home.png'">
            <h5 slot="header">Chaise Karsa</h5>
            <p slot="content">357 €</p>
          </Card>
        </a>
      </div>
    </div>
  </article>
</template>

<style lang="stylus" scoped>
@import '../css/variables'


img
  max-width 100vw


.product
  display flex
  flex-direction column
  align-items center
  justify-content center
  margin 5vh 0
  padding 0 50px

.product__buy
  display flex
  align-items center
  .image-principale
    width 50%
  .product__info
    display flex
    flex-direction column
    width 50%
    margin-top 32px
    padding-left 30px
    .product__info__specific
      margin-top 32px
      button
        background $green-color
        outline none
        border none
        cursor pointer
        color white
        padding 16px 50px
        font-size 25px
      .product__info__display
        margin 32px 0
        font-size 18px
        font-weight 300
        @media tablet
          font-size 14px
          line-height 18px
      .product__info__choice
        display flex
        width 80%
        justify-content space-between
        &:hover
          cursor pointer
        .active
          font-weight bold
          text-decoration underline
    .product__info__tp
      border-bottom 1px solid rgba(0,0,0,0.1)
      padding 32px 0
      h1
        font-weight 600
        font-size 36px
        color $gray-color
      p
        color $green-color
        font-weight 500
        font-size 36px
        margin-top 32px

.product__images
  margin 5vh 0
  width 100%
  overflow hidden
  display flex
  .image4
    width calc(50% - 15px)
  .product__images__left
    display flex
    flex-direction column
    margin-right 15px
    width 50%
    div
      display flex
      justify-content space-between
      width 100%
      img
        width calc(50% - 7.5px)
        margin-top 15px

.product__others
  display flex
  flex-direction column
  width 100%
  h2
    margin-bottom 25px

.product__similar
  display flex
  flex-wrap wrap
  flex-flow row wrap
  width 100%
  div
    margin-right 15px
    margin-bottom 15px
  a
    color inherit
    text-decoration none
</style>

<script>
import Card from "../components/templates/Card.vue";

export default {
  data() {
    return {
      number: this.$route.meta.imgNumber,
      path: this.$route.meta.product,
      choice: "Description",
    };
  },
  components: {
    Card: Card,
  },
};
</script>
