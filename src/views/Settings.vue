<template>
  <div class="about">
    <div class="container">
      <h2>Поменять пароль</h2>
      <div v-if="SuccessMessage" class="bg-success text-white p-2"> Пароль успешно изменен!</div>
      <div v-if="ErrMessage" class="bg-danger text-white p-2"> Старый пароль неверный</div>
      <hr />Старый пароль (6 цифр)
      <input type="password" @keypress="isNumber($event)" v-model="oldPass" />
      <br />
      <br />
      <div class>
        Новый пароль (6 цифр) &nbsp;
        <input
          type="password"
          @keypress="isNumber2($event)"
          style="margin-left:-2px"
          v-model="newPass"
        />
        <br />
        <br />
      </div>
      <button @click="changePass" class="btn btn-primary">Сохранить</button>
    </div>
  </div>
</template>
<script>
import { VueTelInput } from "vue-tel-input";
import axios from "axios";

export default {
  components: {
    VueTelInput
  },
  data: () => ({
    myInputModel: "+7",
    mask: "+7(###) ##-##-###",
    oldPass: "",
    newPass: "",
    SuccessMessage: false,
    ErrMessage: false,
  }),
  methods: {
    changePass() {
      if (this.newPass.length < 6 || this.oldPass.length < 6) {
        alert("Пожалуйста заполните все поля");
        return true;
      }
      this.SuccessMessage = false;
            this.ErrMessage = false;

      axios
        .post(
          "https://xn--e1abgm9f.kz/api/api/changepass",
          {'oldpass':this.oldPass,'newpass':this.newPass},
           { headers: { Authorization: `Token ${this.$store.state.token}` } }
        )
        .then(e => {
          if(e.data==='1'){
            this.SuccessMessage = true;
            this.ErrMessage = false;
          }else{
            this.SuccessMessage = false;
            this.ErrMessage = true;
          }
        });


    },
    input(ev) {
      console.log(this.mask);
    },
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        (charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46) ||
        this.oldPass.length > 5
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    isNumber2: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        (charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46) ||
        this.newPass.length > 5
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push("login");
    }
  }
};
</script>
<style scoped>
h4 {
  margin: 10px auto;
  margin-bottom: 20px;
}
p {
  margin: 20px 3px;
}
body {
  background-color: #f9f9f9;
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