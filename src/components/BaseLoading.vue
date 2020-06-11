<template>
  <v-card flat>
    <v-card-title class="justify-center">{{titulo}}</v-card-title>
    <v-card-text>
      <v-progress-linear
          color="deep-purple accent-4"
          indeterminate
          rounded
          height="6"
      ></v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'BaseLoading',

  props: ['titulo']

}
</script>
