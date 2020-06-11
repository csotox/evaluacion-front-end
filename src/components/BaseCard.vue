<style>
    iframe { display:block; width:100%; height:100vh; }
</style>
<template>
  <v-card
    elevation="10"
    @click="mostrarJuego()"
  >
    <figure>
      <v-img :src="juego.image.url_image" :alt="juego.image.alt" />
      <figcaption class="d-none">
        {{juego.image.title}}
      </figcaption>
    </figure>

    <v-dialog v-model="dialog" fullscreen>
      <v-card>
        <iframe :src="url"></iframe>
      </v-card>
    </v-dialog>

</v-card>
</template>

<script>

export default {
  props: ['juego'],

  data () {
    return {
      dialog: false,
      url: ''
    }
  },

  methods: {
    mostrarJuego () {
      this.url = this.juego.url
      this.dialog = true
    }
    // leerDatos
  }
  // methods

}
</script>
