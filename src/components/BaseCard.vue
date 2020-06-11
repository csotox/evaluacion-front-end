<template>
  <v-card class="mx-auto"
    @click="mostrarJuego()"
  >
    <figure>
      <v-img :src="juego.image.url_image" :alt="juego.image.alt" />
      <figcaption class="d-none">
        {{juego.image.title}}
      </figcaption>
    </figure>

</v-card>
</template>

<script>

export default {
  props: ['juego'],

  methods: {
    mostrarJuego () {
      alert(this.juego.url)
    }
    // leerDatos
  }
  // methods

}
</script>
