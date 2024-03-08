<template>
  <!-- Contenedor principal con margen superior -->
  <v-container class="mt-8"> 
    <!-- Lista de usuarios -->
    <v-list>
      <!-- Iterar sobre la lista de usuarios -->
      <RouterLink v-for="usuario in usuarios" :key="usuario.id" :to="`/perfil/${usuario.id}`">
        <!-- Enlace de enrutamiento -->
        <v-list-item>
          <!-- Título del elemento de la lista con el nombre del usuario -->
          <v-list-item-title>{{ usuario.nombre }}</v-list-item-title>
        </v-list-item>
      </RouterLink>
    </v-list>
  </v-container>
</template>

<script setup>
// Lista de usuarios con información 
const usuarios = [
  { 
    id: 1, 
    nombre: 'USUARIO 1', 
    edad: 25, 
    correo: 'usuario1@example.com', 
    telefono: '123456789' 
  },
  { 
    id: 2, 
    nombre: 'USUARIO 2', 
    edad: 30, 
    correo: 'usuario2@example.com', 
    telefono: '987654321' 
  },
  { 
    id: 3, 
    nombre: 'USUARIO 3', 
    edad: 28, 
    correo: 'usuario3@example.com', 
    telefono: '456789123' 
  }
];
</script>
