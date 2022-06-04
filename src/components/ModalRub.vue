<template>
  <div class="modal__cont">
    <vue-final-modal v-model="$store.state.ShowModalRub" @closed="closed">
      <div class="cont">
        <h5 class="choo__text">Выберите функцию</h5>
        <hr />
        <span
        v-if="$store.state.chosenRub"
          class="link__color__j"
          @click="$store.state.postAllData = [];$store.state.chosenRub = 0; $store.state.chosenRubOpt = 0; $store.state.chosenRubOptLabel = ''"
        >{{ $store.state.chosenRub === 1 ? ('Снять >') : ('') }}{{ $store.state.chosenRub === 2 ? 'Сдать >' : '' }} {{ $store.state.chosenRub === 3 ? 'Купить >' : '' }} {{ $store.state.chosenRub === 4 ? 'Продать >' : '' }}</span>
        <div class="opt__ciont" v-if="!$store.state.chosenRub">
          <div class="option__rub" @click="$store.state.chosenRub = 1">
            Снять
            <Icon class="icony" icon="bi:arrow-right-circle" />
          </div>
          <div class="option__rub" @click="$store.state.chosenRub = 2">
            Сдать
            <Icon class="icony" icon="bi:arrow-right-circle" />
          </div>
          <div class="option__rub" @click="$store.state.chosenRub = 3">
            Купить
            <Icon class="icony" icon="bi:arrow-right-circle" />
          </div>
          <div class="option__rub" @click="$store.state.chosenRub = 4">
            Продать
            <Icon class="icony" icon="bi:arrow-right-circle" />
          </div>
        </div>

        <div class="opt__ciont" v-if="$store.state.chosenRub">
          <div
            v-for="x in $store.state.RubList"
            v-if="x.type == $store.state.chosenRub"
            class="option__rub"
            @click="$store.state.chosenRubOpt = x.id; $store.state.chosenRubOptLabel = x.title; $store.state.ShowModalRub = false"
          >{{ x.title }}</div>
        </div>
      </div>
    </vue-final-modal>
  </div>
</template>
<script>

import axios from "axios";

import { VueTelInput } from "vue-tel-input";
import { Icon } from '@iconify/vue2';
import { TheMask } from "vue-the-mask";

export default {
  components: {
    TheMask,
    VueTelInput,
    Icon
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
    asdasd(){
alert(this.$store.state.chosenRub)
    },
    showModal1() {
      this.$store.state.ShowModalRub = !this.ShowModalRub;
    },
    closed() {
      this.$store.state.ShowModalRub = false;
    },
    input(ev) {
      console.log(this.mask);
    },
    input2(ev) {
      console.log(this.rowVal);
    },
    Register() {
      if (this.rowVal.length <= 9) {
        this.nameError = ''
        this.errorUser = 'Пожалуйста введите ваш номер телефона'
        return true
      }

      if (this.password.length <= 5) {
        this.errorUser = ''
        this.errorText = 'Пожалуйста введите пароль из 6 цифр'
        return true
      }
      this.errorText = ''
      axios
        .post("https://xn--e1abgm9f.kz/api/auth/token/login/", {
          username: this.rowVal,
          password: this.password,
        })
        .then((response) => {
          this.$store.state.name = this.rowVal
          localStorage.setItem('name', this.rowVal)
          this.$store.state.token = response.data.auth_token
          localStorage.setItem('token', response.data.auth_token)
          this.$store.state.name = false
          this.$store.state.ShowModalRub = false
          this.$router.push('/cabinet/me')
        })
        .catch((error) => {
          this.errorText = 'Пользователь не найдет'
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.icony {
  margin-top: -3px;
}
.link__color__j {
  color: #acce12;
  cursor: pointer;
}
.opt__ciont {
  padding: 10px;
}
.cont {
  border-radius: 10px;
}
.choo__text {
  margin: 10px 0;
}
.option__rub {
  cursor: pointer;
  transition: all ease 0.3s;
  color: #acce12;
  margin: 10px 0;
  border-radius: 8px;
  text-align: center;
  width: 100%;
  padding: 10px;
  background-color: rgb(250, 250, 250);
}
.option__rub:hover {
  background-color: white;
  box-shadow: 1px 1px 31px -18px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 1px 31px -18px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 31px -18px rgba(0, 0, 0, 0.75);
}
.cont {
  padding: 10px;
}
div::v-deep .vfm__content {
  max-width: 500px !important;
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
