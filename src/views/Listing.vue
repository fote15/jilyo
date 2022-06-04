<template>
  <div class="about">


   



    <div v-bind:class="{ filter__active: isActiveMenu }" class="filter__menu">
        <div class="seacrh__block">
          <div class="exit__button__menu" @click="isActiveMenu = !isActiveMenu"><Icon icon="emojione-monotone:heavy-multiplication-x" />

</div>
           <span>Цена</span>
          <div class="row">
              <div class="col-md-6"><input placeholder="от" type="number">  </div>
              <div class="col-md-6"><input placeholder="до" type="number">  </div>
          </div>
         
        </div>
    </div>


    <div class="filterButton" @click="isActiveMenu = !isActiveMenu">
      <Icon icon="system-uicons:filtering" /> ДОБАВИТЬ ФИЛЬТР
    </div>
    <div class="container">
      <form @submit.prevent="formSubmit">
        <div class="cl__row mb-2">
          <div class="cl-5">
            <input
              type="text"
              v-model="search_word"
              class="search__item__1 "
              placeholder="Поиск по словам: например хостел"
            />
          </div>
          <div class="cl-5">
            <model-select
              class="search__item "
              :options="options2"
              v-model="item2"
              placeholder="Город/Район"
            ></model-select>
          </div>

          <div class="">
              <button class="cl-1" type="submit">Поиск</button>
          </div>
        
        </div>

     
      </form>

      <div class="row mt-4">

<div  v-if="!postsLoaded" class="col-lg-6">
  <facebook-loader 
      :speed="1.5"
      :animate="true"
    ></facebook-loader>

</div>
<div  v-if="!postsLoaded" class="col-lg-6">
  <facebook-loader 
      :speed="1.5"
      :animate="true"
    ></facebook-loader>

</div>
         


   


        <div class="col-lg-6" v-for="x in postsData" v-bind:key='x.id'>

         

          <PostCard
            :title="x.title"
            :price="x.price"
            :image="x.image_thumb"
            :description="x.description"
            :cityId="x.city_id"
            :id="x.id"
          />
        </div>
      </div>

        <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>



    </div>

    

  </div>
</template>
<script>

import { VueTelInput } from 'vue-tel-input';
import axios from 'axios';
import postCardVue from '../components/PostCardListing.vue';
import { ModelSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'

import { FacebookLoader  } from 'vue-content-loader';

import { BPagination } from 'bootstrap-vue'


import { Icon } from '@iconify/vue2';


export default {
  components: {
    BPagination,
    FacebookLoader,

    VueTelInput,
    'PostCard': postCardVue,
    ModelSelect,
    Icon,
  },
  
  data: () => ({
    rows:0,
    perPage:6,
        currentPage: 1,
    options2: [
      { value: '1', text: 'Нур-Султан(Астана) - Алматинский район' },
      { value: '2', text: 'Нур-Султан(Астана) - Сарыаркинский район' },
      { value: '3', text: 'Нур-Султан(Астана) - Есильский район' },
      { value: '4', text: 'Нур-Султан(Астана) - Байконурский район' },
    ],
    item2: '',


 isActiveMenu:false,

    search_word: '',
    myInputModel: '+7',
    mask: '+7(###) ##-##-###',
    postsData: [],
    postsLoaded: false,
    postCount: 0,
  }),

  watch: {
    // whenever question changes, this function will run
    currentPage: function (newQuestion, oldQuestion) {
       this.postsLoaded = false;
       this.postsData = [];
           let data_s = this.item2 ?{ 'word': this.search_word, 'city_id': this.item2,'have_city':true,page:this.currentPage  } : { 'word': this.search_word,'have_city':false,'page':this.currentPage}


       axios.post('https://xn--e1abgm9f.kz/api/api/post-search', data_s)
      .then((e) => {
         this.postsLoaded = true;
        this.postsData = e.data.data
        this.rows = e.data.count
      })
    }
  },


  methods: {
  
    formSubmit() {
      this.postsData = [];
      this.postsLoaded = false;
      let data_s = this.item2 ?{ 'word': this.search_word, 'city_id': this.item2,'have_city':true,page:this.currentPage  } : { 'word': this.search_word,'have_city':false,'page':this.currentPage}

    

      axios.post('https://xn--e1abgm9f.kz/api/api/post-search', data_s)
        .then((e) => {
          this.postsLoaded = true;

          this.postsData = e.data.data
          this.rows = e.data.count
        })
    },
    input(ev) {
      console.log(this.mask)
    }
  },
  mounted() {
 
    let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://widget.cloudpayments.ru/bundles/cloudpayments.js')
      document.head.appendChild(recaptchaScript)








    /*if (!this.$store.state.token) {
      this.$router.push('login')
    }*/



/*    axios.get('https://xn--e1abgm9f.kz/api/api/post-list', {
      params: {
        page: 1
      }
    })
      .then((e) => {
        this.postsLoaded = true
        this.rows = e.data.count
        this.postsData = e.data.data
      })

*/


      this.postsData = [];
      this.postsLoaded = false;
      let data_s = this.item2 ?{ 'word': this.search_word, 'city_id': this.item2,'have_city':true,page:this.currentPage  } : { 'word': this.search_word,'have_city':false,'page':this.currentPage}

    

      axios.post('https://xn--e1abgm9f.kz/api/api/post-search', data_s)
        .then((e) => {
          this.postsLoaded = true;

          this.postsData = e.data.data
          this.rows = e.data.count
        })
  }
}
</script>
<style >
.ui.dropdown>.text{
  color:#777!important;
  font-weight: 600;
  }
   .search{
    caret-color: transparent;
  }
</style>
<style scoped>
.exit__button__menu{
  padding: 7px;
  position: absolute;
  top: 5px;
  right: 10px;
  color:#ADCB22;
  font-size: 20px;
  font-weight: 900;
}
.filter__active{
height: 100vh;
  right: 0px!important;
  background-color: #fff;
 
}
.filter__menu{
  padding: 10px;
  padding-top: 30px;
  z-index: 1000;
height: 100vh;
  background-color: #fff;
  
  position: fixed;
  width: 300px;
  top: 0;
  right: -300px;
  transition: ease all 0.5s;

  box-shadow: 0 4px 10px rgb(0 0 0 / 18%), 0 16px 15px rgb(0 0 0 / 5%);


}
.filterButton{
  z-index: 9999;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 19px;
  position: fixed;
  bottom: 100px;
  left: 200px;
  background-color:#ADCB22;
}

@media only screen and (max-width: 1000px) {
  .filterButton{
  bottom: 90px!important;
  left: 20px!important;
}
}

@media only screen and (max-width: 1000px) {
  .filterButton{
  bottom: 90px!important;
  left: 20px!important;
}
}


@media only screen and (min-width: 1000px) and (max-width: 1400px)  {
  .filterButton{
  bottom: 90px!important;
  left: 100px!important;
}

}


.search__item__1 {
     color:#777!important;
}
 
.ui.selection.dropdown{
 border-top-right-radius: 0px!important;
 border-bottom-right-radius: 0px!important;
 border-left: none!important;
}
.cl-1{
  height: 50px;
  background-color: white;
  border:none;
  outline: none;
  background-color: #ACCE12;
  color: white;
  padding: 8px 16px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.cl-5 {
  max-width: 50%;
  top: 0;
  flex: 0 0 150px;
  width: 50%;
  border-color: rgb(183 206 100 / 61%);

}
.cl-5 {
  flex: 1;
}
.cl__row {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.search__item {
  background-color: #fff;
  padding: 14px;
}
.search__item__1 {
  padding: 13px !important;
  background-color: #fff;
}
.ui.selection.dropdown {
  padding: 1em;
  line-height: 1.4;
  background-color: #fff;
  border-radius: 3px;
  transition: all 0.35s ease-in-out;
}

h4 {
  margin: 10px auto;
  margin-bottom: 20px;
}
p {
  margin: 20px 3px;
}
.about {
  background-color: #f8f8f8;
}
.about {
  padding: 20px 0;
}
h4 {
  color: #7ed321;
}
input,
input[type="radio"] + label,
input[type="checkbox"] + label:before,
select option,
select {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  transition: all 0.35s ease-in-out;
}
input:focus {
  outline: 0;
  border-color: #64ac15;
}
input:focus + .input-icon i {
  color: #7ed321;
}
input:focus + .input-icon:after {
  border-right-color: #7ed321;
}
input[type="radio"] {
  display: none;
}
input[type="radio"] + label,
select {
  display: inline-block;
  width: 50%;
  text-align: center;
  float: left;
  border-radius: 0;
}
input[type="radio"] + label:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
input[type="radio"] + label:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
input[type="radio"] + label i {
  padding-right: 0.4em;
}
input[type="radio"]:checked + label,
input:checked + label:before,
select:focus,
select:active {
  background-color: #7ed321;
  color: #fff;
  border-color: #64ac15;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  position: relative;
  display: block;
}
input[type="checkbox"] + label:before {
  position: absolute;
  top: 0.2em;
  left: 0;
  display: block;
  width: 1em;
  height: 1em;
  padding: 0;
  content: "";
}
input[type="checkbox"] + label:after {
  position: absolute;
  top: 0.45em;
  left: 0.2em;
  font-size: 0.8em;
  color: #fff;
  opacity: 0;
  font-family: FontAwesome;
  content: "\f00c";
}
input:checked + label:after {
  opacity: 1;
}
select {
  height: 3.4em;
  line-height: 2;
}
select:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
select:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
select:focus,
select:active {
  outline: 0;
}
select option {
  background-color: #7ed321;
  color: #fff;
}
.input-group {
  margin-bottom: 1em;
  zoom: 1;
}
.input-group:before,
.input-group:after {
  content: "";
  display: table;
}
.input-group:after {
  clear: both;
}
.input-group-icon {
  position: relative;
}
.input-group-icon input {
}
.input-group-icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.input-group-icon .input-icon:after {
  position: absolute;
  top: 0.6em;
  bottom: 0.6em;
  left: 3.4em;
  display: block;
  border-right: 1px solid #e5e5e5;
  content: "";
  transition: all 0.35s ease-in-out;
}
.input-group-icon .input-icon i {
  transition: all 0.35s ease-in-out;
}
.container {
}
.row {
  zoom: 1;
}
.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}
.col-half {
  padding-right: 10px;
  float: left;
  width: 50%;
}
.col-half:last-of-type {
  padding-right: 0;
}
.col-third {
  padding-right: 10px;
  float: left;
  width: 33.33333333%;
}
.col-third:last-of-type {
  padding-right: 0;
}
@media only screen and (max-width: 540px) {
  .col-half {
    width: 100%;
    padding-right: 0;
  }
}
</style>