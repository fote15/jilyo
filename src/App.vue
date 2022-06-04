<template>
  <div id="app">
  
    <Header />
   
      <router-view />
    
    <Footer />
<br>
    <HeaderPhone />

  </div>
</template>
<script>



import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderPhone from "@/components/HeaderPhone";


export default {
  components: {
    Header,
   Footer,
   HeaderPhone
  },
      title: 'Жилье.kz',
      // all titles will be injected into this template
  beforeCreate(){
    if(localStorage.getItem('token')){
      this.$store.state.token = localStorage.getItem('token')
    }
    if(localStorage.getItem('name')){
      this.$store.state.name = localStorage.getItem('name')
    }

  }
};
</script>

<style>

tspan{
  display: none!important;
}


html, body {
    max-width: 100%;
    overflow-x: hidden;
}
body{
  padding-right: 0px!important;
}
html { overflow-y: scroll; }
.v--modal-overlay { background-color: rgba(0, 0, 0, 0.7) !important; }

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

.nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 13px;
    color: #181818;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
}
#app {
  font-family: 'Nunito', sans-serif;
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
</style>
