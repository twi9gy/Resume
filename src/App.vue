<template>
  <div id="app">
    <header>
      <slot name="header">
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
          <b-navbar-brand :to="{name: 'home', params: {method: 'add'}}">Рузюме.ru</b-navbar-brand>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'home', params: {method: 'add'}}">Главная страница</b-nav-item>
              <b-nav-item :to="{name: 'add'}" v-if="this.$route.name !== 'edit'">Новое резюме</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <router-view />
      </slot>
    </header>
    <footer>
      <slot name="footer">
        <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
          <div class="container text-center">
            <small>Copyright &copy; 2021</small>
          </div>
        </footer>
      </slot>
    </footer>
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route.name);
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  a{
    color: black;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .content {
    min-height: calc(100vh - 80px);
  }
</style>
