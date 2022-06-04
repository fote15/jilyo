<template>

<div class="d-md-block d-block d-lg-none">
<nav class="nav">
  <router-link class="nav__link nav__link"
  to="/">
    <i class="material-icons nav__icon">home</i>
    <span class="nav__text">Главная</span>
   </router-link>

<router-link class="nav__link nav__link"
  to="/ad-post">
    <i class="material-icons nav__icon">add_circle</i>
    <span class="nav__text">Подать</span>
  </router-link>
  
  <router-link class="nav__link nav__link"
  to="/listing">
    <i class="material-icons nav__icon">policy</i>
    <span class="nav__text">Поиск</span>
   </router-link>
 
   <router-link class="nav__link nav__link"
  to="/favorite">
    <i class="material-icons nav__icon">favorite</i>
    <span class="nav__text">Нравится</span>
 </router-link>

  <router-link class="nav__link nav__link"
  to="/cabinet/me">
    <i class="material-icons nav__icon">person
</i>
    <span class="nav__text">Кабинет</span>
  </router-link>
</nav>
</div>
</template>

<script>
import Modal1 from '@/components/Modal'
import Modal2 from '@/components/ModalAbout1'

import axios from 'axios'

export default {
  name: "Header",
  components:{
     'Modale': Modal1,
     'Modale2': Modal2
  },
  data: function() 
    {
      return{
      ShoModal: false  

    }
    }
  ,
  beforeCreate() {
 
  },
  methods:{
    toCabinet(){
      this.$router.push('cabinet');
    },
    toSearch(){
      this.$router.push('listing');
    },
    toFav(){
      this.$router.push('favorite');
    },
    toHome(){
      this.$router.push('/');
    }

  },
  mounted() {
  },
  computed: {
  
  }
}
</script>

<style scoped>
.router-link-exact-active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    font-weight: 700;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 12px;
    color: #a8b71e;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
}
.router-link-exact-active i{
font-size: 25px;
}

@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
.nav {
    position: fixed;
    bottom: 0px;
    width: 100vw;
    height: 55px;
    box-shadow: 0 0 22px rgb(0 0 0 / 13%);
    background-color: #ffffff;
    display: flex;
    overflow-x: auto;
    z-index: 1000;
}






</style>