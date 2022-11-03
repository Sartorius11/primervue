import { createApp } from 'vue';
import App from './App.vue';

//IMPORTAMOS LA CONSTANTE DE ROUTER.JS
import router from './Router';

//vamos a poner use(router)
createApp(App).use(router).mount('#app')
