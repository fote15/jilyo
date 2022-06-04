<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <form
            @submit.prevent
            class="fomr__form cont__card cardic__ pt-4"
            autocomplete="off"
            enctype="multipart/form-data"
          >
            <div class="row">
              <!--<div class="input-group input-group-icon">
            <label for="">Ваше имя </label>
            <input type="text" @input="input2" v-model="name" placeholder="Ербол" />
            <span class="text-danger">{{nameError}}</span>
              </div>-->

              <div class="input-group input-group-icon">
                <label for>Заголовок*</label>
                <input v-model="main_title" />
                <span class="text-danger">{{ passwordError }}</span>
              </div>
              <div class="input-group input-group-icon">
                <div
                  @click="
                    $store.state.postAllData = [];
                    $store.state.chosenRub = false;
                    $store.state.chosenRubOpt = false;
                    $store.state.chosenRubOptLabel = '';
                    $store.state.ShowModalRub = !$store.state.ShowModalRub;
                  "
                  class="button__banner text-center choose__button"
                  for
                >
                  <Icon icon="feather:check-circle" />
                  {{ $store.state.chosenRubOpt ? " Изменить" : " Выберите" }}
                  категорию
                </div>

                <div class="text-danger" style="width: 100%">
                  {{ errorLabel }}
                </div>
                <span v-if="$store.state.chosenRub"
                  >{{ $store.state.chosenRub === 1 ? "Снять >" : ""
                  }}{{ $store.state.chosenRub === 2 ? "Сдать >" : "" }}
                  {{ $store.state.chosenRub === 3 ? "Купить >" : "" }}
                  {{ $store.state.chosenRub === 4 ? "Продать >" : "" }}</span
                >

                <span v-if="$store.state.chosenRubOpt && $store.state.chosenRub"
                  >&nbsp;{{ $store.state.chosenRubOptLabel }}</span
                >
              </div>
              <hr />

              <div
                v-for="x in fields"
                v-if="x.id === $store.state.chosenRubOpt"
              >
                <Field :data="x" />
              </div>

              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />

              <div>
                <div class="row" v-if="$store.state.chosenRubOpt">
                  <div class="col-lg-3">
                    <span>Фотографии</span>
                  </div>
                  <div class="col-lg-9">
                    <FilePreviewfrom ref="imageComp" />
                  </div>
                </div>
              </div>

              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />

              <div></div>

              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />
              <br v-if="$store.state.chosenRubOpt" />

              <div class="input-group input-group-icon">
                <label for>Город/Район *</label>
                <!-- string value -->
                <model-select
                  :options="options2"
                  v-model="item2"
                  placeholder="Город/Район"
                ></model-select>
              </div>

              <div class="input-group input-group-icon">
                <label for>Описание *</label>

                <textarea
                  placeholder="дополнительное описание"
                  v-model="SelecteDescription"
                />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>

              <div class="input-group input-group-icon">
                <label for>Цена *</label>

                <input
                  type="number"
                  placeholder="цена"
                  v-model="SelectePrice"
                />
              </div>

              <div class="input-group input-group-icon">
                <label for>Номер*</label>
                <the-mask
                  v-model="rowVal"
                  @input="input2(true)"
                  :mask="['+7(###) ###-##-##']"
                />
                <span class="text-danger">{{ usernameError }}</span>
              </div>
            </div>
          </form>
          <p></p>
          <div class="row">
            <div class="col-md-12">
              <h5 style="color: #acce12">Тарифы на рекламу</h5>
            </div>
            <div class="col-md-4">
              <div
                class="pay__box"
                v-bind:class="{ pay_active: pay_1 == 1 }"
                @click="pay_1 = 1"
              >
                <div class="pay__icon__wrap">
                  <Icon class="pay_icon" v-if="pay_1 == 1" icon="bi:check-lg" />
                </div>
                <h5>Бесплатное размещение</h5>
                <p>
                  Ваше объявление будет полностью опубликовано после проверки и
                  будет храниться до 30 дней
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div
                class="pay__box"
                v-bind:class="{ pay_active: pay_1 == 2 }"
                @click="pay_1 = 2"
              >
                <span class="pay__price">250.00 ₸</span>
                <div class="pay__icon__wrap">
                  <Icon class="pay_icon" v-if="pay_1 == 2" icon="bi:check-lg" />
                </div>
                <h5>Рывок</h5>
                <p>
                  <Icon class="pay_icon" icon="bi:check-lg" /> Топ объявление на
                  5 дней
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div
                class="pay__box"
                v-bind:class="{ pay_active: pay_1 == 3 }"
                @click="pay_1 = 3"
              >
                <span class="pay__price">450.00 ₸</span>

                <div class="pay__icon__wrap">
                  <Icon class="pay_icon" v-if="pay_1 == 3" icon="bi:check-lg" />
                </div>
                <h5>Крейсерский ход</h5>
                <p>
                  <Icon class="pay_icon" icon="bi:check-lg" /> Топ объявление на
                  8 дней <br />
                  <Icon class="pay_icon" icon="bi:check-lg" /> 5 поднятий вверх
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div
                class="pay__box"
                v-bind:class="{ pay_active: pay_1 == 4 }"
                @click="pay_1 = 4"
              >
                <span class="pay__price">1500.00 ₸</span>

                <div class="pay__icon__wrap">
                  <Icon class="pay_icon" v-if="pay_1 == 4" icon="bi:check-lg" />
                </div>
                <h5>Форсаж</h5>
                <p>
                  <Icon class="pay_icon" icon="bi:check-lg" /> Топ объявление на
                  30 дней <br />
                  <Icon class="pay_icon" icon="bi:check-lg" /> 10 поднятий
                  вверх<br />
                  <Icon class="pay_icon" icon="bi:check-lg" /> Выделенное
                  объявление
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <h5 style="color: #acce12">Дополнительные услуги</h5>
            </div>

            <div class="col-md-4">
              <div
                class="pay__box"
                v-bind:class="{ pay_active: pay_2.includes(1) }"
                @click="pay_2_toggle(1)"
              >
                <span class="pay__price">300.00 ₸</span>
                <div class="pay__icon__wrap">
                  <Icon
                    class="pay_icon"
                    v-if="pay_2.includes(1)"
                    icon="bi:check-lg"
                  />
                </div>
                <h5>Выделить срочным</h5>
                <p></p>
              </div>
            </div>

            <div class="col-md-4">
              <div
                class="pay__box"
                v-bind:class="{ pay_active: pay_2.includes(2) }"
                @click="pay_2_toggle(2)"
              >
                <span class="pay__price">500 ₸</span>
                <div class="pay__icon__wrap">
                  <Icon
                    class="pay_icon"
                    v-if="pay_2.includes(2)"
                    icon="bi:check-lg"
                  />
                </div>
                <h5>Выделить цветом</h5>
                <p></p>
              </div>
            </div>


            <div class="col-md-4">
              <div
                class="pay__box"
                v-bind:class="{ pay_active: pay_2.includes(3) }"
                @click="pay_2_toggle(3)"
              >
                <span class="pay__price">1500 ₸</span>
                <div class="pay__icon__wrap">
                  <Icon
                    class="pay_icon"
                    v-if="pay_2.includes(3)"
                    icon="bi:check-lg"
                  />
                </div>
                <h5>VIP на главной</h5>
                <p></p>
              </div>
            </div>


          </div>

          <div
          v-if="!(pay_1>1 ||pay_2.length>0)"
            class="button__banner text-center choose__button"
            @click="Register"
            v-bind:class="{ active__button__allow: buttonEnabled }"
          >
            <Icon class="icon__add_post" icon="akar-icons:plus" />Подать
            объявление
          </div>

          <div
          v-if="pay_1>1 || pay_2.length>0"
            class="button__banner text-center choose__button"
            @click="pay"
            v-bind:class="{ active__button__allow: buttonEnabled }"
          >
            <Icon class="icon__add_post" icon="akar-icons:plus" />Оплатить 
            
          </div>
           


        </div>

        <div class="col-lg-4 col-md-12">
          <div class="dashboard-box margin-top-0 cont__card">
            <!-- Headline -->
            <div class="headline">
              <h5 class="pod__line">
                <Icon
                  icon="feather:alert-circle"
                  class="theme__color"
                />Подсказки!
              </h5>
              <hr />
            </div>
            <div class="content with-padding padding-bottom-10">
              <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-1"></div>
              </div>
              <ul class="list-2">
                <li>
                  <span class="icon__check__pod">
                    <Icon class="theme__color" icon="bi:check-lg" />
                  </span>
                  Введите краткое описание
                  <br />собственности.
                </li>
                <li>
                  <span class="icon__check__pod">
                    <Icon class="theme__color" icon="bi:check-lg" />
                  </span>
                  Добавьте фото вашей собственности чтобы привлечь больше
                  внимания.
                </li>
                <li>
                  <span class="icon__check__pod">
                    <Icon class="theme__color" icon="bi:check-lg" />
                  </span>
                  Выберите правильную категорию и подкатегорию объекта
                  недвижимости.
                </li>
                <li>
                  <span class="icon__check__pod">
                    <Icon class="theme__color" icon="bi:check-lg" />
                  </span>
                  Проверьте еще раз, прежде чем отправлять недвижимость.
                </li>
              </ul>
            </div>
          </div>
           <span   class="mobile"><router-link  to="/payments">Информация об оплате на Жилье.kz  </router-link></span>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import "vue-select/dist/vue-select.css";

import "vue-search-select/dist/VueSearchSelect.css";

import VueUploadMultipleImage from "vue-upload-multiple-image";

import { Icon } from "@iconify/vue2";

import { VueTelInput } from "vue-tel-input";

import { TheMask } from "vue-the-mask";

import "vue-search-select/dist/VueSearchSelect.css";

import { ModelSelect } from "vue-search-select";

import Modal1 from "@/components/ModalRub";
import Field from "@/components/Field";

import FilePreviewfrom from "./imgeUp";

export default {
  components: {
    Field,
    ModelSelect,
    Modale: Modal1,
    TheMask,
    VueTelInput,
    ModelSelect,
    Icon,
    VueUploadMultipleImage,
    FilePreviewfrom,
  },
  
  watch: {
    count(newCount, oldCount) {
      // Our fancy notification (2).
      this.errorLabel = "";
    },
  },
  data: () => ({
    options2: [
      { value: "1", text: "Нур-Султан(Астана) - Алматинский район" },
      { value: "2", text: "Нур-Султан(Астана) - Сарыаркинский район" },
      { value: "3", text: "Нур-Султан(Астана) - Есильский район" },
      { value: "4", text: "Нур-Султан(Астана) - Байконурский район" },
    ],
    item2: "",
    square: "",
    floor: "",
    floor_count: "",
    book_long: "",
    SelecteDescription: "",
    SelectePrice: "",
    SelectedAdress: "",
    Selected_komis: 0,
    SelectedHouseNumber: "",
    SelectedRemont: 0,
    furniture: 0,
    formClosely: [],
    formAdditions: [],
    phoneBook: 0,
    checkedNames: [],
    pickedReserv: 0,
    images: [],
    options: [
      { label: "Алматинский", value: "1" },
      { label: "Th22", value: "2" },
      { label: "Th3", value: "3" },
    ],
    District: "",
    main_title: "",
    rowVal: "+7 (",
    myInputModel: "+7",
    mask: "+7(###) ###-##-##",
    name: "",
    number: "",
    password: "",
    password2: "",
    buttonEnabled: false,
    usernameError: "",
    nameError: "",
    passwordError: "",
    passwordError2: "",
    usernameExists: false,
    DistrictList: [],
    errorLabel: "",
    buttonEnabledSend: true,
    fields: [],
    pay_2: [],
    pay_1: 0,
    priceAll: 0
  }),
computed: {
    count() {
      return this.$store.state.chosenRubOpt;
    },
    // a computed getter
    total_price: function () {
      // `this` points to the vm instance
      let price = 0
      if (this.pay_1==2){
        price = price + 250;
      }
      if (this.pay_1==3){
        price = price + 450;
      }
      if (this.pay_1==4){
        price = price + 1500;
      }

      if (this.pay_2.includes(1)){
        price = price + 300;
      }

      if (this.pay_2.includes(2)){
        price = price + 500;
      }

      if (this.pay_2.includes(3)){
        price = price + 1500;
      }
      


      return price;
    }
  },
  mounted() {
    console.log(this.$store.state.token);
    this.$store.state.allowedRegister = false;
    this.$store.state.token
      ? this.$router.push("")
      : this.$router.push("/signup");

    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://code.iconify.design/2/2.1.0/iconify.min.js"
    );
    document.head.appendChild(recaptchaScript);

    if (!this.$store.state.token) {
      this.$router.push("/login");
    }

    axios
      .post(
        "https://xn--e1abgm9f.kz/api/api/selected-opt-fiedls",
        {},
        { headers: { Authorization: `Token ${this.$store.state.token}` } }
      )
      .then((e) => {
        this.fields = e.data;
        console.log("selected-opt-fiedls");
        console.log(e.data);
      });

    axios
      .get("https://xn--e1abgm9f.kz/api/api/remont-list", {
        headers: { Authorization: `Token ${this.$store.state.token}` },
      })
      .then((e) => {
        this.$store.state.remontList = e.data;
        console.log(e.data);
      });

    axios
      .get("https://xn--e1abgm9f.kz/api/api/additions-list", {
        headers: { Authorization: `Token ${this.$store.state.token}` },
      })
      .then((e) => {
        this.$store.state.additionsList = e.data;
        console.log(e.data);
      });

    axios
      .get("https://xn--e1abgm9f.kz/api/api/closely-list", {
        headers: { Authorization: `Token ${this.$store.state.token}` },
      })
      .then((e) => {
        this.$store.state.closelyList = e.data;
        console.log(e.data);
      });

    axios
      .get("https://xn--e1abgm9f.kz/api/api/opt-list", {
        headers: { Authorization: `Token ${this.$store.state.token}` },
      })
      .then((e) => {
        this.$store.state.RubList = e.data;
        console.log(e.data);
      });

    axios
      .get("https://xn--e1abgm9f.kz/api/api/district-list", {
        headers: { Authorization: `Token ${this.$store.state.token}` },
      })
      .then((e) => {
        for (let x in e.data) {
          e.data[x].label = e.data[x].title;
          this.DistrictList.push(e.data[x]);
        }
        console.log(this.DistrictList);
      });
  },

  methods: {
    pay_2_toggle(e) {
      if (this.pay_2.includes(e)) {
        var index = this.pay_2.indexOf(e);
        if (index !== -1) {
          this.pay_2.splice(index, 1);
        }
      }else{
        this.pay_2.push(e);
      }
    },
    pay() {
         if (!this.$store.state.chosenRubOpt) {
         this.errorLabel = 'Пожалуйста выберите категорию'
         window.scrollTo(0, 0);
         return true;
       } 


      if (
        !this.rowVal ||
        !this.item2 ||
        !this.SelecteDescription ||
        !this.SelectePrice ||
        !this.main_title
      ) {
        this.errorLabel = "Пожалуйста заполните все поля";
        window.scrollTo(0, 0);
        return true;
      }

      //console.log(this.$store.state.postAllData);
      let stop = false;

      let checker = this.$store.state.postAllData.filter((e) => {
        console.log(e);
        if (e.req && !e.data.length) {
          stop = true;
          this.buttonEnabledSend = true;
          this.errorLabel = "Пожалуйста заполните все поля";
          window.scrollTo(0, 0);
        }
      });
      if (stop) {
        stop = false;
        return true;
      }
      /*if () {
       
         this.errorLabel = 'Пожалуйста заполните все поля'
         window.scrollTo(0, 0);
         return true;
       }
*/

      if (!this.buttonEnabledSend) {
        return true;
      }
      this.buttonEnabledSend = false;






      
      var widget = new cp.CloudPayments();
      widget.pay(
        "auth", // или 'charge'
        {
          //options
          publicId: "pk_3a126bfd5e7deba3ac411d912e286", //id из личного кабинета
          description: "Оплата товаров в example.com", //назначение
          amount: this.total_price, //сумма
          currency: "KZT", //валюта
          accountId: "user@example.com", //идентификатор плательщика (необязательно)
          invoiceId: "1234567", //номер заказа  (необязательно)
          email: "user@example.com", //email плательщика (необязательно)
          skin: "mini", //дизайн виджета (необязательно)
          data: {
            pay_1: this.pay_1,
            pay_2: this.pay_2,
          },
        },
        {
          onSuccess: function (options) {
            // success
          //  alert("EEE");
          },
          onFail: function (reason, options) {
            // fail
         //   alert("NO");
          },
          onComplete:  (paymentResult, options)=> {
            //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
            console.log(paymentResult)
            console.log(options)
            
            if(paymentResult.success){
           /*    if (this.pay_1==2){
        price = price + 250;
      }
      if (this.pay_1==3){
        price = price + 450;
      }
      if (this.pay_1==4){
        price = price + 1500;
      }
      */
     let top = 0;
     let up_up_count = 0;
    let up_is_color = 0;

     if(options.data.pay_1 ==2){
       top = 5
     }
     if(options.data.pay_1 ==3){
       top =8
       up_up_count =5
     }
     if(options.data.pay_1 ==4){
       top = 30
       up_up_count = 10
       up_is_color = 1
     }


     let up_is_fast = 0;
    
     let up_is_vip = 0;
     /* up_is_fast: request.data['up_is_fast'],
        up_is_color: request.data['up_is_color'],
        up_is_vip: request.data['up_is_vip'],
        */
     if(options.data.pay_2.includes(1)){
       up_is_fast = 1
     }

     if(options.data.pay_2.includes(2)){
       up_is_color = 1
     }

     if(options.data.pay_2.includes(3)){
       up_is_vip = 1
     }

              axios
        .post(
          "https://xn--e1abgm9f.kz/api/api/post-upload-v7",
          {
            title: this.main_title,
            category: this.$store.state.chosenRub,
            sub_category: this.$store.state.chosenRubOpt,
            booking_phone: this.phoneBook,
            //book_long: this.book_long,

            city_id: this.item2,
            description: this.SelecteDescription,
            price: this.SelectePrice,
            phone: this.rowVal,
            status: 1,
            additions: JSON.stringify(this.$store.state.postAllData),
            up_top: top,
        up_up_count: up_up_count,
        up_is_fast: up_is_fast,
        up_is_color: up_is_color,
        up_is_vip: up_is_vip,

          },
          { headers: { Authorization: `Token ${this.$store.state.token}` } }
        )
        .then((response) => {
          this.buttonEnabledSend = true;
          this.$refs.imageComp.submitFile(response.data);
          setTimeout(() => {
            this.$router.push({ path: `/post/${response.data}` });
          }, 1000);
        })
        .catch((error) => {
          this.buttonEnabledSend = true;
          this.errorLabel = "Пожалуйста заполните все поля";
          window.scrollTo(0, 0);
        });


            }
          },
        }
      );
    },
    reset2() {
      this.item2 = "";
    },
    selectFromParentComponent2() {
      // select option from parent component
      this.item2 = this.options2[0].value;
    },

    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      axios
        .post("https://xn--e1abgm9f.kz/api/api/upload/", formData, {
          headers: { Authorization: `Token ${this.$store.state.token}` },
        })
        .then((response) => {
          console.log(response);
        });
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("Вы уверенны?");
      if (r == true) {
        console.log(fileList);
        done();
      } else {
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    EditImage(event) {
      this.selectedFile = event.target.files[0];
      console.log(event);
    },
    onSubmit(event) {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      event.preventDefault();
      axios
        .put(
          `https://xn--e1abgm9f.kz/api/blog/api/edit/${this.Postslug}`,
          this.form
        )
        .then((response) => {
          this.form.title = response.data.title;
          this.form.desc = response.data.desc;
          this.form.text = response.data.text;
          this.form.image = this.fd;
          this.form.category = response.data.category;
          this.form.author = response.data.author;
          this.form.slug = response.data.slug;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    removeExistusern() {
      this.usernameExists = false;
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        (charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46) ||
        this.password.length > 5
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    isNumber2: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        (charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46) ||
        this.password2.length > 5
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    input(ev) {
      console.log(this.mask);
    },

    input2(removeus) {
      if (removeus) {
        this.usernameExists = false;
      }
      if (
        this.password.length > 5 &&
        this.password2.length > 5 &&
        this.password2 !== this.password
      ) {
        this.passwordError = "";
        this.passwordError2 = "Пароли не совпадают";
        return true;
      }

      if (
        this.rowVal.length > 9 &&
        this.password.length > 5 &&
        this.password2.length > 5 &&
        this.password === this.password2
      ) {
        this.buttonEnabled = true;

        this.nameError = "";
        this.usernameError = "";
        this.passwordError = "";
        this.passwordError2 = "";
      } else {
        this.buttonEnabled = false;
      }
    },
    Register() {
      /* if(this.name.length<=1){
          this.nameError = 'Пожалуйста введите ваше имя'
          return true
      }
      */

      /*
      if (this.rowVal.length <= 9) {
        this.nameError = ''
        this.usernameError = 'Пожалуйста введите ваш номер телефона'
        return true
      }

      if (this.password.length <= 5) {
        this.usernameError = ''
        this.passwordError = 'Пожалуйста введите пароль из 6 цифр'
        return true
      }
      if (this.password2.length <= 5) {
        this.passwordError = ''
        this.passwordError2 = 'Пожалуйста введите пароль еще раз'
        return true
      }
      if (this.password2 !== this.password) {
        this.passwordError = ''
        this.passwordError2 = 'Пароли не совпадают'
        return true
      }


      this.passwordError = ''
*/

       if (!this.$store.state.chosenRubOpt) {
         this.errorLabel = 'Пожалуйста выберите категорию'
         window.scrollTo(0, 0);
         return true;
       } 
      if (
        !this.rowVal ||
        !this.item2 ||
        !this.SelecteDescription ||
        !this.SelectePrice ||
        !this.main_title
      ) {
        this.errorLabel = "Пожалуйста заполните все поля";
        window.scrollTo(0, 0);
        return true;
      }

      console.log(this.$store.state.postAllData);
      let stop = false;

      let checker = this.$store.state.postAllData.filter((e) => {
        console.log(e);
        if (e.req && !e.data.length) {
          stop = true;
          this.buttonEnabledSend = true;
          this.errorLabel = "Пожалуйста заполните все поля";
          window.scrollTo(0, 0);
        }
      });
      if (stop) {
        stop = false;
        return true;
      }
      /*if () {
       
         this.errorLabel = 'Пожалуйста заполните все поля'
         window.scrollTo(0, 0);
         return true;
       }
*/

      if (!this.buttonEnabledSend) {
        return true;
      }
      this.buttonEnabledSend = false;
      /*axios
        .post("https://xn--e1abgm9f.kz/api/api/post-upload", {
          title: this.main_title,
          category: this.$store.state.chosenRub,
          sub_category: this.$store.state.chosenRub,
          booking_phone: this.phoneBook,
          book_long: this.book_long,
          furniture: this.furniture,
          floor_count: this.floor_count,
          floor: this.floor,
          square: this.square,
          remont_type: this.SelectedRemont,
          comissions: this.Selected_komis,
          house_number: this.SelectedHouseNumber,
          adress: this.SelectedAdress,
          city_id: this.item2,
          description: this.SelecteDescription,
          price: this.SelectePrice,
          phone: this.rowVal,
          status: 1,
          additions__options: JSON.stringify(this.formAdditions),
          additions__closely: JSON.stringify(this.formClosely),
        })
        .then((response) => {
          this.buttonEnabledSend = true;
          this.$refs.imageComp.submitFile(response.data)
          this.$router.push({ path: `/post/${response.data}` })

        })
        .catch((error) => {
          this.buttonEnabledSend = true;  
          this.errorLabel = 'Пожалуйста заполните все поля'
          window.scrollTo(0, 0);
        });*/

      axios
        .post(
          "https://xn--e1abgm9f.kz/api/api/post-upload-v2",
          {
            title: this.main_title,
            category: this.$store.state.chosenRub,
            sub_category: this.$store.state.chosenRubOpt,
            booking_phone: this.phoneBook,
            //book_long: this.book_long,

            city_id: this.item2,
            description: this.SelecteDescription,
            price: this.SelectePrice,
            phone: this.rowVal,
            status: 1,
            additions: JSON.stringify(this.$store.state.postAllData),
          },
          { headers: { Authorization: `Token ${this.$store.state.token}` } }
        )
        .then((response) => {
          this.buttonEnabledSend = true;
          this.$refs.imageComp.submitFile(response.data);
          setTimeout(() => {
            this.$router.push({ path: `/post/${response.data}` });
          }, 3000);
        })
        .catch((error) => {
          this.buttonEnabledSend = true;
          this.errorLabel = "Пожалуйста заполните все поля";
          window.scrollTo(0, 0);
        });
    },
  },
};
</script>
<style>

@media only screen and (max-width: 998px) {
  .mobile {
    display: block!important;
  }
}
.mobile {
  margin-bottom:80px ;
  text-align: center;
    display: none;
  }
  .mobile a {
    color:rgb(22, 22, 22);
  }

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
.pay_active {
  background-color: #acce12 !important;
  color: white !important;
}

.pay_active .pay__icon__wrap {
  border: 1px solid white !important;
}

.pay__icon__wrap {
  width: 21px;
  height: 21px;
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 100%;
  border: 1px solid grey;
}

.pay_icon {
  transform: translate(1px, -4px);
}

.pay__box {
  margin-top: 20px;
  cursor: pointer;
  position: relative;
  padding: 8px;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);

  border-radius: 5px;
  background-color: white;
  height: 150px;
}

.pay__box h5 {
  font-size: 14px;
  font-weight: bold;
}
.pay__price {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 16px;
  font-weight: 600;
}

.pay__box p {
  font-size: 14px;
  font-weight: normal;
}

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
