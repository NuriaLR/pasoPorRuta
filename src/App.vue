<script setup>
// Importar los componentes necesarios de vue-router
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-app>
    <!-- BARRA  DE NAVEGACIÓN  -->
    <v-app-bar app color="primary">
      <v-spacer></v-spacer>
      <!-- Enlaces a las diferentes rutas -->
      <v-btn text to="/">Inicio</v-btn>
      <v-btn text to="/perfil">Perfil</v-btn>
      <v-btn text to="/configuracion">Configuración</v-btn>
    </v-app-bar>
  </v-app>
  <!-- Visualización de las rutas -->
  <RouterView />
</template>
