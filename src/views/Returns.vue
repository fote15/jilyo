<template>
  <div class="about">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <h1 class="text-center">Возврат денежных средств
</h1>
					<h6 class="text-center">Для возврата средств на счет, должно быть основание. <br>

Если объявление было удалено за нарушение, средства автоматически возвращаются на счет. Проверяйте информацию в разделе Платежи и счет Жилье.<br>

Также мы вернем средства, если в оплаченном объявлении, выбрано не верное местоположение. Для этого напишите нам.<br>

Если был приобретен пакет в неверной рубрике или не верная услуга, обратившись к нам в самые короткие сроки, можно рассчитывать на возврат средств.<br>

За грубые нарушения Правил сервиса, мы можем отказать в взврате средств, об этом говорят Правила веб-сайта Жилье.kz, с которыми соглашается пользователь в момент регистрации на сервисе Жилье.<br>
</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Icon,
  },
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>
<style scoped>
h4 {
  margin-bottom: 0px;
  padding-left: 0;
  margin-top: 30px;
}
.container-fluid {
  background: #f8f8f8;
}

.container {
  padding-top: 25px;
}

.sliders {
  height: 340px;
  background: url(slider-draw.png) center no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 12%);
  margin: 0 0 16px;
}

.videobutton {
  height: 46px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #df0909;
  font-size: 18px;
  color: #ffffff;
  border-radius: 7px;
  box-shadow: 0 0px 2px 0 rgb(223 9 9);
  margin: 0 0 14px;
  transition: 0.3s;
}
.videobutton:hover {
  background: #5b5b5b;
  box-shadow: 0 7px 14px 0 rgb(0 0 0 / 30%);
  color: #ffffff;
}

.drawblock1 {
  padding: 19px;
  margin: 0 0 20px;
  font-size: 16px;
  background: #adcb22;
  color: #ffffff;
  border-radius: 7px;
}

.drawblock1 .drawTitle {
  font-size: 20px;
  margin: 0 0 12px;
  font-weight: 600;
}

.drawblock2 {
  color: #616161;
  font-size: 15px;
  border-radius: 7px;
  padding: 25px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 12%);
  margin: 5px 5px 20px;
  background: #ffffff;
}

.drawblock2 .drawTitle {
  color: #adcb22;
  font-size: 20px;
  margin: 0 0 12px;
  font-weight: 600;
}

.drawlow {
  margin: 0 0 13px;
}

.drawlow h5 {
  font-size: 17px;
  color: #666;
  line-height: 27px;
  border-bottom: dashed 2px #e0e4ce;
  font-weight: 400;
}

.drawblock {
  background: #ffffff;
  border-radius: 7px;
  padding: 25px;
  margin: 5px 5px 20px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 12%);
  text-align: center;
}

li {
  list-style-type: none;
}

button {
  background: #adcb22;
  box-shadow: 0 7px 14px 0 rgb(173 203 34 / 69%);
  border-radius: 6px;
  font-size: 18px;
  margin: 0 0 22px;
  padding: 11px;
  color: #ffffff;
  border: none;
  width: 100%;
}

button:hover {
  box-shadow: 0 7px 14px 0 rgb(173 203 34 / 50%);
}

.content {
  padding: 5px;
}

.prizes3 {
  color: #737373;
  font-size: 15px;
  padding: 7px;
  border: dashed 2px #adcb22;
  border-radius: 7px;
  font-weight: 700;
  background: #ffffff;
  box-shadow: 0 0px 16px 0 rgb(173 203 34 / 59%);
  margin: 0 0 9px;
}
.prizes3:hover {
  background: #b4cb220d;
}

.glprize {
  padding: 3px 7px 4px 11px;
  background: #adcb22;
  width: 77px;
  font-size: 14px;
  float: right;
  margin-bottom: -6px;
  margin-right: auto;
  position: relative;
  z-index: 116;
  border-radius: 0px 6px 0px 9px;
  color: #fff;
}

.prizes {
  border-radius: 5px;
  box-shadow: 0 0px 14px 0 rgb(222 222 222 / 69%);
  margin: 0 0 9px;
}
.prizes:hover {
  color: #adcb22;
}

.prizes2 {
  padding: 7px;
  margin: 0 0 9px;
  background: #ffffff;
  border-radius: 7px;
  border: dashed 2px #eaf8dd;
  font-size: 15px;
  font-weight: 700;
  color: #737373;
}

.prizes2:hover {
  background: #f8fde0;
}

.drawbutton2 {
  cursor: default;
  margin: 0 0 25px;
  background: #8022cb;
  box-shadow: 0 7px 14px 0 rgb(128 34 203 / 57%);
}

.drawblock3 {
  background: #ffffff;
  border-radius: 7px;
  padding: 7px;
  margin: 5px 5px 20px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 12%);
}

.number {
  border-radius: 5px;
  color: #404040;
  margin: 0 0 6px;
  border: solid 1px #000;
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 7px;
  font-size: 18px;
}

.number:hover {
  color: #a8b71e;
}

.share-buttons-icons {
  display: flex;
  justify-content: center;
}
.share-buttons-icons a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #333333;
  margin: 0 2px;
  border-radius: 3px;
}
</style>