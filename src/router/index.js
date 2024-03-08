// Importar las funciones necesarias de vue-router para crear el enrutador
import { createRouter, createWebHistory } from 'vue-router'

// Importar los componentes de las diferentes vistas
import InicioVue from '@/views/Inicio.vue'
import PerfilVue from '@/views/Perfil.vue'
import ConfiguracionVue from '@/views/Configuracion.vue'

// Crear el enrutador
const router = createRouter({
  // Usar el historial basado en la historia de navegación del navegador
  history: createWebHistory(import.meta.env.BASE_URL),
  // Definir las rutas de la aplicación
  routes: [
    {
      // Ruta para la página de inicio
      path: '/',
      name: 'inicio', // Nombre de la ruta
      component: InicioVue // Componente asociado a la ruta
    },
    {
      // Ruta para la página de perfil de usuario, con un parámetro dinámico ":id" en la URL
      path: '/perfil/:id',
      name: 'perfil', // Nombre de la ruta
      component: PerfilVue, // Componente asociado a la ruta
      props:true // Pasar props a través de la ruta
    },
    {
      // Ruta para la página de configuración
      path: '/configuracion',
      name: 'configuracion', // Nombre de la ruta
      component: ConfiguracionVue // Componente asociado a la ruta
    }   
  ]
})

// Exportar el enrutador para que pueda ser utilizado en la aplicación
export default router
