<template>
  <nav>
    <ul id="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/Cine">Cine</router-link>
      </li>
      <li>
        <router-link to="/musica">Musica</router-link>
      </li>

    </ul>
  </nav>
</template>
<script>

export default {
  name: "MenuComponent",
};
</script>

<style scoped>
ul#menu li {
  display: inline;
}
</style>
