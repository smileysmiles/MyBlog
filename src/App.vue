<template>
    <v-app>
      <v-navigation-drawer app></v-navigation-drawer>
        <v-toolbar app></v-toolbar>
          <v-content>
            <v-container fluid>
              <router-view></router-view>
            </v-container>
          </v-content>
        <v-footer app><a href="https://buttercms.com"><img class="butterlink"  src="https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5"></a></v-footer>
    </v-app>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.butterlink{
  height:20%;
  width:20%;
}
</style>
