<template>
<div>
  <Modale v-bind:showModal3="ShoModal"/>
  <Modale2 />
 <Modale3 />
 <Modale4 />
<ModaleRub />
<div class="d-md-none d-none d-lg-block">



<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light ">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
    <a class="navbar-brand me-2" @click="$router.push('/')">
      <img
        class="logo__img"
        src="@/assets/classic-theme_logo.png"
        />
    </a>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" style="display:flex">
         <router-link class="nav__link nav__link " style="display:flex"
  to="/listing">
          <a style="color:#666" class="nav-link search__label" ><img src="@/assets/search.svg" alt="поиск"> Начать поиск </a>
           </router-link>

           <router-link  style="display:flex" class="nav__link nav__link "
  to="/faq">
          <a  class="nav-link shnik" > СПРАВОЧНИК </a>
           </router-link >


        </li>
      </ul>
      <!-- Left links -->

      <div class="d-flex align-items-center">
      
        <div v-if="!$store.state.token" class="btn login__button  " @click="$store.state.ShowModal=!$store.state.ShowModal">
         <i  class="material-icons nav__icon login__icon">login</i>Войти 
        </div>

        <div @click="$router.push('/cabinet/me')" v-if="$store.state.name" class="btn  name__field">
        <span class="name__user">{{$store.state.name}} </span>  <i  class="material-icons nav__icon arrow__down__icon">expand_more</i>
        </div>

        <button v-if="!$store.state.token" class="btn  px-3 me-2" @click="$router.push('/signup')">
          Регистрация
        </button>

<router-link class="nav__link nav__link"
  to="/ad-post">
          <div   class="button__banner text-center">
         <i  class="material-icons nav__icon add__icon">add</i> подать объявление
        </div>
           </router-link >


        
       
      </div>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</div>

</div>
</template>

<script>
import Modal1 from '@/components/Modal'
import Modal2 from '@/components/ModalAbout1'
import Modal3 from '@/components/ModalAbout2'
import Modal4 from '@/components/ModalAbout3'
import ModalRub from '@/components/ModalRub'
import axios from 'axios'

export default {
  name: "Header",
  components:{
     'Modale': Modal1,
     'Modale2': Modal2,
     'Modale3': Modal3,
     'Modale4': Modal4,
     'ModaleRub':ModalRub
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
  mounted() {
  },
  computed: {
  
  }
}
</script>

<style scoped>
.search__label{
  font-size: 17px;
  font-family: "Nunito", sans-serif;
}
.search__label img{
  transform: translateY(-2px);
}

.shnik{
  padding: 4px;
    background: #adcb22;
    color: #fff;
    font-size: 15px;
    margin-left: 2px;
    top: 13px;
    border-radius: 5px;
    font-weight: 700;
      color: #fff!important;
    font-size: 15px;
    padding: 5px;
    border-radius: 5px;
    display: block;
}

.shnik a{
  
}
.arrow__down__icon{
    transform: translateY(5px);
}
.name__field{
  min-width: 200px;
}
.name__user{
  padding-bottom: 10px;
  display: inline-block;
}
.add__icon{
  font-size: 20px;
  transform: translateY(5px);
}
.login__button{
  min-width: 100px;
}
.button__banner {
  font-size: 19px!important;
  transition: all ease 0.11s;
  background: #fff;
  font-weight: 500;
  color: #fff;
  font-size: 23px;
  display: block;
  padding: 5px 20px;
  border-radius: 4px;
  width: 100%;
  background-color: rgb(172 206 18);
  cursor: pointer;
}


.login__icon{
  transform: translateY(2px);
  font-size: 15px;
  margin-right: 5px;
}
@font-face {
  font-family: "helv";
  src: local("helv"),
   url(/@/assets/fonts/HelveticaLight.ttf) format("truetype");
}
button,div{
  font-family: "Nunito", sans-serif;
}

.header__nav{
    height: 60px;
    background-color: white;
}
.logo__img{
        height: 59px;
    width: auto;
}

.navbar {
    font-family: helv;
    padding-top: 0!important; 
    padding-bottom: 0!important;
}











</style>