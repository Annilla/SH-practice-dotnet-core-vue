<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
        <v-btn color="primary" class="ml-2 mr-2" to="/">Go to Home</v-btn>
        <v-btn color="primary" class="ml-2 mr-2" to="/foo">Go to Foo</v-btn>
        <v-btn color="primary" class="ml-2 mr-2" to="/bar">Go to Bar</v-btn>
        <v-btn color="primary" class="ml-2 mr-2" to="/bar/1">Go to Bar:id</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>