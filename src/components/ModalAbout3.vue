<template>
  <div>
    <vue-final-modal v-model="$store.state.ShowModalAb1" @closed="closed">
      <div class="cont">
        <p > <p class="centered"><b >Направление сайта</b> </p>
          <br> 
         &nbsp;&nbsp;&nbsp;&nbsp; Новый сайт <b> Жильё.kz</b> - это платформа, где владельцы гостиниц, общежитий и хостелов могут сдать номера гостиниц и комнаты. <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp; <b>Жильё.kz</b> – предназначен, как для руководителей коммерческих помещений (гостиниц, общежитий, хостелов и т.д.) и владельцев квартир, так и для населения, которое пользуется услугами этих заведений. На сайте можно:  <b>сдать, снять,  забронировать, продать и купить. </b>
       &nbsp;&nbsp;&nbsp;&nbsp;Цель сайта Жильё.kz – это поднять ваш ДОХОД.  <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp; В честь запуска сайта для пользователей проводится розыгрыш призов: бытовая техника, аксессуары, депозиты на посещение ресторанов, бонусы и сотовый телефон  «Samsung». Мы рады дать шанс нашим пользователям выиграть один из этих призов просто так! Условия розыгрыша в разделе справочника. 
<br><br>
Наш девиз  <b>«Простое использование, Доступная услуга и Быстрый результат».</b> <br><br>
<p class="centered">
По всем вопросам обращаться: 8-778-161-55-10, 8-777-585-16-97 <br>
Желаем успехов вашей компании и плодотворного сотрудничества!!!
</p>
        </p>
      </div>
    </vue-final-modal>
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
  data: () => ({
    rowVal: "+7 (",
    myInputModel: "+7",
    mask: "+7(###) ###-##-##",
    name: "",
    number: "",
    password: "",
    buttonEnabled: false,
    errorText: '',
    errorUser: '',
    maskedd: false
  }),
  methods: {
    showModal1() {
      this.$store.state.showModal = !this.showModal;
    },
    closed() {
      this.$store.state.showModal = false;
    },
  },
};
</script>
<style scoped>
.cont{
  padding: 20px;
  
  
}
.centered{
  text-align: center;
}
div::v-deep .vfm__content {
  max-width: 600px !important;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mmm {
}
.syka {
  background-color: red;
  transition: all ease 5s;
}

.welcome__text__login {
  margin-top: 30px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: rgb(172, 206, 18);
}

input,
button {
  border: none;
  outline: none;
  background: none;
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.cont {
  overflow: hidden;
  min-height: 450px;
  margin: 0 auto 100px;
  background: #fff;
}

.form {
  position: relative;
  height: 100%;
  transition: transform 1.2s ease-in-out;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  background: #fff;
  transition: transform 1.2s ease-in-out;
}
.cont.s--signup .sub-cont {
  transform: translate3d(-640px, 0, 0);
}

button {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
}
.img:before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg");
  background-size: cover;
  transition: transform 1.2s ease-in-out;
}
.img:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.cont.s--signup .img:before {
  transform: translate3d(640px, 0, 0);
}
.img__text {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  text-align: center;
  color: #fff;
  transition: transform 1.2s ease-in-out;
}
.img__text h2 {
  margin-bottom: 10px;
  font-weight: normal;
}
.img__text p {
  font-size: 14px;
  line-height: 1.5;
}
.cont.s--signup .img__text.m--up {
  transform: translateX(520px);
}
.img__text.m--in {
  transform: translateX(-520px);
}
.cont.s--signup .img__text.m--in {
  transform: translateX(0);
}
.img__btn {
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
}
.img__btn:after {
  content: "";
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 30px;
}
.img__btn span {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 1.2s;
}
.img__btn span.m--in {
  transform: translateY(-72px);
}
.cont.s--signup .img__btn span.m--in {
  transform: translateY(0);
}
.cont.s--signup .img__btn span.m--up {
  transform: translateY(72px);
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}
label span {
  font-size: 12px;
  color: #cfcfcf;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #cfcfcf;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #bbce5d;
  text-transform: uppercase;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: #8fa1c7;
}
.fb-btn span {
  font-weight: bold;
  color: #455a81;
}

.sign-in {
  transition-timing-function: ease-out;
}
.cont.s--signup .sign-in {
  transition-timing-function: ease-in-out;
  transition-duration: 1.2s;
  transform: translate3d(640px, 0, 0);
}

.sign-up {
  transform: translate3d(-900px, 0, 0);
}
.cont.s--signup .sign-up {
  transform: translate3d(0, 0, 0);
}

.icon-link {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 32px;
}
.icon-link img {
  width: 100%;
  vertical-align: top;
}
.icon-link--twitter {
  left: auto;
  right: 5px;
}
</style>
