<template>
  <v-row align="center" justify="center">

    <v-col cols="6" v-if="loading">
      <baseloading
        :titulo="'Preparando listado de juegos'" />
    </v-col>
    <v-col cols="12" sm="6" md="4" xl="3"
      v-for="(item, i) in listadoJuegos"
      :key="i"
      v-else
      >
        <basecard
            :juego="item"/>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data: function () {
    return {
      loading: true,
      listadoJuegos: []
    }
  },
  // data

  mounted () {
    this.leerDatos()
  },
  // mounted

  methods: {
    leerDatos () {
      const url = 'https://promarketingchile.com/games.json'
      this.loading = true

      axios.get(url)
        .then((response) => {
          this.listadoJuegos = response.data.games[0]
        }).catch(error => {
          // -- - ---------------------------------------------------------------------------------
          // La API enviada para la evaluación no soporta CORS
          // Por lo tanto se lee el contenido de la api desde un archivo json
          // Nota: Esto es un parche mientras se corrige la API
          if (error.request.status === 0) {
            const url = 'games.json'
            axios.get(url)
              .then((response) => {
                this.listadoJuegos = response.data.games[0]
              }).catch(error => {
                this.mostrarError(error)
              }).finally(() => (this.loading = false))
          } else {
            this.mostrarError(error)
          }
        })
    },
    // leerDatos

    mostrarError (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
      // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
    }
    // mostrarError

  }
  // methods

}
</script>
