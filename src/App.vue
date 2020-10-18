<template>
  <div id="app">
    <div class="title-container">
      <div class="title p-3">What's on TV?</div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $black;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}

.title {
  font-family: "Lobster";
  font-size: 36px;
}

.title-container {
  background-color: $white;
}
</style>
