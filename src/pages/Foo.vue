<template>
  <div>
    <h1>Test Vuex</h1>
    <v-btn @click="getGithubUser('Annilla')">
      Get Github User: Annilla
    </v-btn>
    <p>Result: {{ $store.state.userData }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    getGithubUser(name) {
      this.$store.dispatch('getUserData', name);
    }
  },
}
</script>