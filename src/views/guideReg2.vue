<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
         <p>
           Как подать объявление?
Объявление можно подать;

 Регистрацию запрашивают при нажатии функции: «Снять», «Сдать», «Продать», «купить» и нажатии кнопки «Подать».

 Зарегистрироваться необходимо, если Вы первый раз вошли и хотите подать объявление.

 Без регистрации на сайте не все функции и кнопки будут активны.

 Для просмотра объявлений регистрация не нужна.


1. Заходите на главную(первую) страницу.

2. Заходите в «Кабинет» (находится внизу на первой странице) и вводите свой действующий номер телефона.

3. Вводите любой пароль из 6 –ти цифр. Пароль необходимо запомнить, создать пароль можно из любых цифров. Через это пароль в дальнейшем можно сразу заходить на сайт без регистрации, нажав на кнопку «Войти» и набрав свой пароль.

4. Пройти через «Я не робот». Вы должны ответить на вопрос, т.е. поставить галочки на картинки, которые Вам прислали, например, отметить несколько картинок, где есть Мотоцикл. Здесь идет проверка на подлинность пользователя.

5. Нажимаете на кнопку «Зарегистрироваться». При регистрации на сайте Вы автоматическии соглашаетесь с нашими условиями использования и пользовательским соглашением.

6. Подаете объявление, выбирая из 4-х функции: «Снять», «Сдать», «Продать», «Купить» или кнопку «Подать» нужную вам.


         </p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import 'vue-select/dist/vue-select.css';


import 'vue-search-select/dist/VueSearchSelect.css'




import VueUploadMultipleImage from 'vue-upload-multiple-image'


import { Icon } from '@iconify/vue2';



import { VueTelInput } from "vue-tel-input";

import { TheMask } from "vue-the-mask";



import 'vue-search-select/dist/VueSearchSelect.css'


import { ModelSelect } from 'vue-search-select'

import Modal1 from '@/components/ModalRub'
import Field from '@/components/Field'







import FilePreviewfrom from './imgeUp';

export default {
  components: {
    Field,
    ModelSelect,
    'Modale': Modal1,
    TheMask,
    VueTelInput,
    ModelSelect,
    Icon,
    VueUploadMultipleImage,
    FilePreviewfrom,

  },
  computed: {
    count() {
      return this.$store.state.chosenRubOpt
    }
  },
  watch: {
    count(newCount, oldCount) {
      // Our fancy notification (2).
      this.errorLabel = ''
    }
  },
  data: () => ({
  
  }),


  mounted() {

    
  },

  methods: {

  },
};
</script>
<style>
label::before {
  border-color: #acce12 !important;
}
div .pretty input:checked ~ .state.p-success label:after,
.pretty.p-toggle .state.p-success label:after {
  background-color: #acce12 !important;
}
div .pretty.p-default input:checked ~ .state label:after {
  background-color: #acce12 !important;
}
</style>

<style scoped>
.red {
  color: red;
}
.cardic__ {
  background-color: white;
}
.about {
  background-color: #f8f8f8;
}
.search {
  background-color: #f9f9f9 !important;
  border-radius: 0 !important;
  padding: 12px !important;
}
.icon__add_post {
  transform: translateY(-2px);
}
.pod__line {
  padding: 10px;
  padding-left: 15px;
}
@import "https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css";

.theme__color {
  color: #acce12;
}
ul {
  padding-left: 0;
}
.list-2 li {
  padding-left: 30px;
  position: relative;
}
.list-2 span {
  position: absolute;
  top: 0;
  transform: translateX(-30px);
}

ul {
  list-style-type: none;
}

.selecct__reserv {
  width: unset !important;
}
.choose__city {
  width: 100%;
}
.choose__button {
  background-color: rgb(172 206 18) !important;
  color: white !important;
  box-shadow: none !important;
}
.poll {
  color: #a8b71e;
  text-decoration: none;
}
.active__button__allow {
  background-color: rgb(172, 206, 18) !important;
  color: white !important;
}
.button__banner {
  transition: all ease 0.4s;
  background: #fff;
  font-weight: 500;
  color: #000;
  font-size: 23px;
  display: block;
  height: 52px;
  padding-right: 15px;
  padding-left: 15px;
  padding: 8px 0px;
  border-radius: 7px !important;
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
  padding: 10px 0;
  min-height: calc(30vw);
}
h4 {
  color: #000;
}
input,
select option,
textarea,
select {
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  transition: all 0.35s ease-in-out;
}
input:focus,
textarea {
  outline: 0;
  border-color: #cccccc;
}
input:focus + .input-icon i {
  color: #cccccc;
}
input:focus + .input-icon:after {
  border-right-color: #cccccc;
}
input[type="radio"] {
}
input[type="radio"] + label,
select {
}
input[type="radio"] + label:first-of-type {
}
input[type="radio"] + label:last-of-type {
}
input[type="radio"] + label i {
  padding-right: 0.4em;
}
input[type="radio"]:checked + label,
input:checked + label:before,
select:focus,
select:active {
  background-color: #f3f3f3;
  border-color: #cccccc;
}

input:checked + label:after {
  opacity: 1;
}
select {
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
@media screen and (max-width: 900px) {
  .container {
    padding: 7px !important;
  }
}
.container {
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  border-radius: 4.2px;
}
.cont__card {
  background-color: white;
  padding: 16px;
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
