<template>
  <div class="about">
    <div class="container">
      <form class="fomr__form">
        <div class="row">
          <h4>Регистрация</h4>
          <!--<div class="input-group input-group-icon">
            <label for="">Ваше имя </label>
            <input type="text" @input="input2" v-model="name" placeholder="Ербол" />
            <span class="text-danger">{{nameError}}</span>
          </div>-->
          <div class="input-group input-group-icon">
            <label for="">Ваш номер </label>
            <the-mask
              v-model="rowVal"
              
              @input="input2(true)"
              :mask="['+7(###) ###-##-##']"
            />
            <span class="text-danger">{{usernameError}}</span>
            <div v-if="usernameExists"> <span  class="text-danger">  Этот номер уже зарегистирован.</span> <br> <div> Уже есть аккаунт? <router-link to="/login">Войти</router-link></div></div> 
          </div>
          <div class="input-group input-group-icon">
            <label for="">Придумайте пароль из 6 цифр </label>
            <input type="password" pattern="[0-9]*" inputmode="numeric" v-model="password" @keypress="isNumber($event)" @input="input2" />
            <span class="text-danger">{{passwordError}}</span>
          </div>

          <div class="input-group input-group-icon">
            <label for="">Пожалуйста повторите пароль </label>
            <input type="password" pattern="[0-9]*" inputmode="numeric" v-model="password2" @keypress="isNumber2($event)" @input="input2" />
            <span class="text-danger">{{passwordError2}}</span>
          </div>

        </div>

      </form>
      <p>
        Нажимая на кнопку «Зарегистрироваться», вы соглашаетесь с
        <router-link class="poll" to="/policy"
          >условиями пользовательского соглашения</router-link
        >
      </p>
      <div class="button__banner text-center" @click="Register" v-bind:class="{active__button__allow: buttonEnabled}">
        Зарегистрироваться
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import { VueTelInput } from "vue-tel-input";

import { TheMask } from "vue-the-mask";

export default {
  components: {
    TheMask,
    VueTelInput,
  },
  mounted() {
    
  },
  data: () => ({
    rowVal: "+7 (",
    myInputModel: "+7",
    mask: "+7(###) ###-##-##",
    name: "",
    number: "",
    password: "",
    password2: "",
    buttonEnabled: false,
    usernameError: '',
    nameError: '',
    passwordError: '',
    passwordError2: '',
    usernameExists: false
  }),
  methods: {
    removeExistusern(){
      this.usernameExists = false
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 || this.password.length>5) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    isNumber2: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 || this.password2.length>5) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },

    input(ev) {
      console.log(this.mask);
    },
 
    input2(removeus) {
      if(removeus){
        this.usernameExists = false
      }
      if( this.password.length>5 && this.password2.length>5 && this.password2!==this.password){
         this.passwordError = ''
          this.passwordError2 = 'Пароли не совпадают'
          return true
      }


      if(this.rowVal.length>9 && this.password.length>5 && this.password2.length>5 && this.password ===this.password2 ){
          this.buttonEnabled = true

          this.nameError = ''
          this.usernameError = ''
          this.passwordError = ''
          this.passwordError2 = ''
      }else{
          this.buttonEnabled = false
      }
    },
    Register() {
      /* if(this.name.length<=1){
          this.nameError = 'Пожалуйста введите ваше имя'
          return true
      }
      */
       if(this.rowVal.length<=9 ){
          this.nameError = ''
          this.usernameError = 'Пожалуйста введите ваш номер телефона'
          return true
      }

      if( this.password.length<=5){
         this.usernameError = ''
          this.passwordError = 'Пожалуйста введите пароль из 6 цифр'
          return true
      }
      if( this.password2.length<=5){
         this.passwordError = ''
          this.passwordError2 = 'Пожалуйста введите пароль еще раз'
          return true
      }
      if( this.password2!==this.password){
         this.passwordError = ''
          this.passwordError2 = 'Пароли не совпадают'
          return true
      }


      this.passwordError = ''

     


      axios
        .post("https://xn--e1abgm9f.kz/api/auth/users/", {
          username: this.rowVal,
          password: this.password,
        })
        .then( (response)=> {
          this.$router.push('/login')
        })
        .catch( (error) =>{
          console.log(error.response.data.username)
          if(error.response.data.username){
              this.usernameExists = true
          }
        });
    },
  },
};
</script>
<style scoped>
.poll {
  color: #a8b71e;
  text-decoration: none;
}
.active__button__allow{
background-color: rgb(172, 206, 18)!important;
color:white!important
}
.button__banner {
  transition:all ease 0.4s ;
  background: #fff;
  font-weight: 500;
  color: #000;
  font-size: 23px;
  display: block;
  height: 52px;
  padding-right: 15px;
  padding-left: 15px;
  padding: 8px 0px;
  border-radius: 7px;
  margin-bottom: 9px;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 35%);
  -webkit-box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 35%);
  background-color: #f9f9f9;
  cursor: pointer;
  margin-top: 10px;
}
h4 {
  margin: 10px auto;
  margin-bottom: 20px;
}
p {
  margin: 20px 3px;
}
body {
  background-color: #181818 !important;
}
.about {
  padding: 40px 0;
  min-height: calc(30vw);
}
h4 {
  color: #000;
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
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
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
