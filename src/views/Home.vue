<template>
  <div>
    <section>
      <div class="home" :style="{ backgroundImage: 'url(' + require('@/assets/bg.jpg') + ')' }">
        <div class="container">
          <div class="row py-4">
            <div class="col-md-8 d-none d-lg-block">
              <h1 class="white__text banner__main__text">Мы работаем по всему Казахстану!</h1>
              <div id="map"></div>

              <h1 style="font-size:16px" class="white__text">
                Наш сайт создан для увеличения вашего дохода. Мы поможем Вам
                быстро сдать, снять, купить или продать любое коммерческое и
                жилое помещение. Наш девиз:
                <br />«Простое использование, Доступная услуга и Быстрый результат».
              </h1>
            </div>
            <div class="col-md-4">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                  <img src="@/assets/partners/slider/1.png" class="slider__img" alt />
                </swiper-slide>
                <swiper-slide>
                  <img src="@/assets/partners/slider/2.png" class="slider__img" alt />
                </swiper-slide>
                <swiper-slide>
                  <img src="@/assets/partners/slider/3.png" class="slider__img" alt />
                </swiper-slide>
                <swiper-slide>
                  <img src="@/assets/partners/slider/4.png" class="slider__img" alt />
                </swiper-slide>
                <swiper-slide>
                  <img src="@/assets/partners/slider/5.png" class="slider__img" alt />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>

              <div @click="$router.push('/listing')" class="button__banner text-center">Снять</div>
              <div @click="$router.push('/listing')" class="button__banner text-center">Купить</div>
              <div @click="$router.push('/cabinet/me')" class="button__banner text-center">Сдать</div>
              <div @click="$router.push('/cabinet/me')" class="button__banner text-center">Продать</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="special__div white__text">
        <div class="container">
          Спецпредложения
          <div class="count__spec">22</div>
        </div>
      </div>
    </section>

    <section
      :style="{
        backgroundImage: 'url(' + require('@/assets/background1.png') + ')',
      }"
      class="pb-5"
    >
      <div class="vips__section py-5">
        <div class="container">
          <div class="vip__loz">
            <img src="@/assets/prime-time.svg" class="vip__svg" alt /> VIP
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card p-3" style="width: 18rem">
              <img src="@/assets/placeholder/default.png" class="card-img-top" alt="asd" />
              <div class="card-body px-0">
                <h5 class="card-mini">
                  <span class="material-icons icon__card__1">local_offer</span> Квартира
                </h5>

                <h5 class="card-title">Сдается квартира посуточно</h5>
                <p class="card-text">Нур-Султан (Есильский район)</p>
                <span class="rent__status">Срок аренды: почасово</span>
              </div>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </section>


      <section
      :style="{
        backgroundImage: 'url(' + require('@/assets/background1.png') + ')',
      }"
      class="pb-5"
    >
      <div class="vips__section py-5">
        <div class="container">
          <div class="vip__loz">
            <img src="@/assets/time.png" class="vip__svg" alt /> Новые
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card p-3" style="width: 18rem">
              <img src="@/assets/placeholder/default.png" class="card-img-top" alt="asd" />
              <div class="card-body px-0">
                <h5 class="card-mini">
                  <span class="material-icons icon__card__1">local_offer</span> Квартира
                </h5>

                <h5 class="card-title">Сдается квартира посуточно</h5>
                <p class="card-text">Нур-Султан (Есильский район)</p>
                <span class="rent__status">Срок аренды: почасово</span>
              </div>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </section>



    <section></section>
  </div>
</template>

<script>

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import 'swiper/css/swiper.css'

export default {
  name: "MyComponent",


  title: "Pagination",
  components: {
    Swiper,
    SwiperSlide,
  },
  beforeCreate() {


    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://dkmedia.kz/mapdata2.js')
    document.head.appendChild(recaptchaScript)

    let recaptchaScript2 = document.createElement('script')
    recaptchaScript2.setAttribute('src', 'https://dkmedia.kz/countrymap.js')
    document.head.appendChild(recaptchaScript2)

  },
  data() {
    return {
      swiperOption: {
        
        spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style scoped>

.icon__card__1 {
  font-size: 12px;
  transform: translateY(1px);
  color: #666;
}
.rent__status {
  display: block;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: dashed 2px #c5cd81;
  color: #666;
}
.card-mini,
.card-text {
  color: #000;
  font-size: 15px;
  font-weight: 100;
}
.card-title {
  font-size: 20px;
  font-weight: 600;
}

.card {
  color: rgb(172 206 18);
  background: rgb(245 248 217 / 79%) !important;
  border-color: rgb(197 205 129) !important;
  box-shadow: 0px 0px 15px -2px rgb(0 0 0 / 14%);
}

.vip__svg {
  width: 40px;
}
.vip__loz {
  -webkit-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);

  font-weight: 700;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  font-size: 25px;
}
.vips__section {
}
.count__spec {
  transform: translateY(-2px);
  width: 36px;
  height: 35px;
  padding: 6px;
  padding-top: 5px;
  padding-left: 7px;
  font-weight: 600;
  background-color: #636363;
  display: inline-block;
  border-radius: 100%;
  font-size: 17px;
}
.banner__main__text {
  font-size: 25px;
}
.white__text {
  font-family: "Nunito", sans-serif;
  color: white;
}
.special__div {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 25px;
  padding: 20px;
  padding-bottom: 30px;
  background-color: #1b1b1b;
}
.slider__img {
  max-width: 100%;
}
.home {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
.slider__img {
  border-radius: 8px;
}
.banner__main {
  background-image: url("/assets/bg.jpg");
}
.button__banner {
  transition: all ease 0.11s;
  background: #fff;
  font-weight: 500;
  color: #1b1b1b;
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

  margin-top: 10px;
}
.button__banner:hover {
  cursor: pointer;
  color: white;
  background-color: rgb(172 206 18);
}
</style>
