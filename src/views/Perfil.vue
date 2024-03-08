<template>
  <!-- Contenedor principal -->
  <v-container>
    <!-- Títulos -->
    <br>
    <br>
    <br>
    <!-- Mostrar el nombre del usuario -->
    <p>Nombre: {{ usuario.nombre }}</p>
    <!-- Mostrar la edad del usuario -->
    <p>Edad: {{ calcularEdad }}</p>
    <!-- Mostrar la fecha de nacimiento del usuario -->
    <p>Fecha de Nacimiento: {{ usuario.fechaNacimiento }}</p>
    <!-- Mostrar el correo electrónico del usuario -->
    <p>Correo: {{ usuario.correo }}</p>
    <!-- Mostrar el número de teléfono del usuario -->
    <p>Teléfono: {{ usuario.telefono }}</p>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

// Obtener el ID del usuario de la ruta actual
const router = useRouter()
const usuarioId = router.currentRoute.value.params.id

// Definir una lista de usuarios con sus detalles
const usuarios = [
  { 
    id: 1, 
    nombre: 'Lola', 
    edad: 25, 
    fechaNacimiento: '1996-03-15', 
    correo: 'lolausuario1@example.com', 
    telefono: '123456789' 
  },
  { 
    id: 2, 
    nombre: 'Maria', 
    edad: 30, 
    fechaNacimiento: '1992-08-20', 
    correo: 'mariausuario2@example.com', 
    telefono: '987654321' 
  },
  { 
    id: 3, 
    nombre: 'Luis', 
    edad: 28, 
    fechaNacimiento: '1994-05-10', 
    correo: 'luisusuario3@example.com', 
    telefono: '456789123' 
  }
]

// Encuentra el usuario correspondiente basado en el ID de la ruta
const usuario = computed(() => {
  return usuarios.find(usuario => usuario.id === Number(usuarioId))
})

// Calcular la edad del usuario a partir de la fecha de nacimiento
const calcularEdad = computed(() => {
  const hoy = new Date()
  const fechaNac = new Date(usuario.value.fechaNacimiento)
  let edad = hoy.getFullYear() - fechaNac.getFullYear()
  const mes = hoy.getMonth() - fechaNac.getMonth()
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--
  }
  return edad
})
</script>
