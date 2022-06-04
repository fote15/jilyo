<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="cardd hd__ov">
                    <div class="mb-3">
                        <swiper>
                            <swiper-slide v-bind:key="index" v-for="(x, index) in postData.images">
                                <div
                                    v-on:click="opana(index)"
                                    class="img__sl"
                                    v-bind:style="{ backgroundImage: 'url(' + 'https://xn--e1abgm9f.kz/api/' + x.image + ')' }"
                                ></div>
                            </swiper-slide>
                        </swiper>
                    </div>

                    <div>
                      <!--  <FsLightbox
                            :slide="productIndex"
                            :toggler="toggler"
                            :sources="images_clear"
                        />-->


                        <CoolLightBox 
      :items="images_clear" 
      :index="productIndex"
     @close="productIndex = null">

    </CoolLightBox>
    

     <div class="images-wrapper">
    
    </div>
                    </div>

                    <div class="title">{{ postData.title }}</div>
                    <div class="title__price">
                        Цена:
                        <span class="title__price__exact">{{ postData.price }} ₸</span>
                    </div>
                    <hr />
                    <div class="title__bread">{{ categoryLabel }}</div>
                </div>

                <div class="cardd">
                    <div class="desc_heading">Описание</div>
                    <div class="desc_desc">{{ postData.description }}</div>
                </div>

                <div class="cardd">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="cil:location-pin" />Местоположение
                                </span>
                                <h5 class="desc_desc little__padding">{{ postData.city_id_label }}</h5>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="job-property bvi-tts">
                                <i class="la la-clock-o"></i>
                                <span class="desc_heading">
                                    <Icon icon="carbon:time" />Опубликовано
                                </span>
                                <h5 class="desc_desc little__padding">Меньше месяца назад</h5>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="job-property">
                                <i class="la la-phone"></i>
                                <span class="desc_heading">
                                    <Icon icon="clarity:phone-handset-line" />Номер телефона
                                </span>
                                <h5 class="desc_desc little__padding">8{{ postData.phone }}</h5>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="job-property bvi-tts">
                                <i class="icon-feather-eye"></i>
                                <span class="desc_heading">
                                    <Icon icon="ant-design:eye-outlined" />Просмотры
                                </span>
                                <h5 class="desc_desc little__padding">1</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cardd">
                    <div class="row">
                    

                     
                        <div class="col-lg-6 mb-1" v-bind:class="{ 'col-lg-6 mb-1': x.type!==3,'col-lg-12 mb-1': x.type==3 }" v-for="x in postData.allData">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />{{x.title}}
                                </span>


                                <div v-if="x.type==3" class="row little__padding2 mt-1 mb-2">
                                    <h5
                                        v-for="y in x.data"
                                        class="col-lg-3 desc_desc little__padding"
                                    >
                                        <Icon icon="akar-icons:check-box-fill" />
                                        {{y }}
                                    </h5>
                                </div>


                                <h5 v-if="x.type!==3" class="desc_desc little__padding">{{x.data}}</h5>
                            </div>
                        </div>
                        
<!--
                        <div class="col-lg-6 mb-1">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Бронирование
                                </span>
                                <h5
                                    class="desc_desc little__padding"
                                >{{ postData.booking_phone == 1 ? 'Можно забронировать по телефону' : 'Бронирование по телефону невозможно' }}</h5>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-1">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Мебелировано
                                </span>
                                <h5
                                    class="desc_desc little__padding"
                                >{{ postData.furniture == 1 ? 'Да' : 'Нет' }}</h5>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-1">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Этажность дома
                                </span>
                                <h5 class="desc_desc little__padding">{{ postData.floor_count }}</h5>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-1">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Этаж
                                </span>
                                <h5 class="desc_desc little__padding">{{ postData.floor }}</h5>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-1">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Площадь
                                </span>
                                <h5 class="desc_desc little__padding">{{ postData.square }}</h5>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-1">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Ремонт
                                </span>
                                <h5 class="desc_desc little__padding">{{ postData.remont_label }}</h5>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-1">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Комиссионные
                                </span>
                                <h5
                                    class="desc_desc little__padding"
                                >{{ postData.comissions == 1 ? 'Да' : 'Нет' }}</h5>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-1">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Номер дома
                                </span>
                                <h5 class="desc_desc little__padding">{{ postData.house_number }}</h5>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-1">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Улица или микрорайон
                                </span>
                                <h5 class="desc_desc little__padding">{{ postData.adress }}</h5>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Дополнительно есть
                                </span>
                                <div class="row little__padding2 mt-1 mb-2">
                                    <h5
                                        v-for="x in postData.additions"
                                        class="col-lg-3 desc_desc little__padding"
                                    >
                                        <Icon icon="akar-icons:check-box-fill" />
                                        {{ x }}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="job-property bvi-tts">
                                <i class="la la-map-marker"></i>
                                <span class="desc_heading">
                                    <Icon icon="bx:bx-chevron-right" />Рядом есть
                                </span>
                                <div class="row little__padding2 mt-1 mb-2">
                                    <h5
                                        v-for="x in postData.closely"
                                        class="col-lg-3 desc_desc little__padding"
                                    >
                                        <Icon icon="akar-icons:check-box-fill" />
                                        {{ x }}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        -->

                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-5">
                <div class="cardd cardd_author">
                    <h5 class="author__title">Связаться с автором</h5>
                    <div class="mt-3 mb-2">
                        <div class="image__avatar" alt></div>
                    </div>
                    <h3>Пользователь</h3>
                    <h6 class="desc_heading">
                        <Icon icon="carbon:time" />Меньше месяца назад
                    </h6>
                    <h6 class="desc_heading">
                        <Icon icon="clarity:phone-handset-line" />
                        8{{ postData.phone }}
                    </h6>
                    <div class="p-3">
                        <a :href="`tel:8${postData.phone}`" class="button__call">Позвонить</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>

import { Swiper, SwiperSlide, directive, Zoom } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

// import style (<= Swiper 5.x)


// Import Swiper styles

import FsLightbox from "fslightbox-vue";
import { Icon } from '@iconify/vue2';

import axios from "axios";

export default {
    components: {
        FsLightbox,
        Icon,
        'swiper': Swiper,
        SwiperSlide,
        CoolLightBox
    },
    data() {
        return {
            
            productIndex: null,
            images_clear: [],
            toggler: false,
            postData: []

        };
    },
    computed:{
      categoryLabel(){
          if(this.postData.category==1){
              return 'Снять'
          }
          if(this.postData.category==2){
              return 'Сдать'
          }
          if(this.postData.category==3){
              return 'Купить'
          }
          if(this.postData.category==4){
              return 'Продать'
          }

      }  
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
    methods: {
        opana(x) {
            this.productIndex = x ;
            this.toggler = !this.toggler
            console.log(this.toggler)
        }
    },
    mounted() {
        axios.post('https://xn--e1abgm9f.kz/api/api/post-get', { 'id': this.$route.params.id }).then(response => {

            this.postData = response.data.data
            this.postData.remont_label = response.data.remont_label
            this.postData.additions = response.data.additions
            this.postData.closely = response.data.closely
            this.postData.images = response.data.images

            this.postData.allData = response.data.dataall


            console.log(this.postData.allData)

            for (let x in this.postData.images) {
                this.images_clear.push('https://xn--e1abgm9f.kz/api/' + this.postData.images[x].image)
            }

            switch (response.data.data.book_long) {
                case 1:
                    this.postData.book_long_label = 'Почасово'
                    break;
                case 2:
                    this.postData.book_long_label = 'Посуточно'
                    break;
                default:
                    this.postData.book_long_label = 'Долгосрочная'
            }
            switch (response.data.data.city_id) {
                case '1':
                    this.postData.city_id_label = 'Нур-Султан(Астана) - Алматинский район'
                    break;
                case '2':
                    this.postData.city_id_label = 'Нур-Султан(Астана) - Сарыаркинский район'
                    break;
                case '3':
                    this.postData.city_id_label = 'Нур-Султан(Астана) - Есильский район'
                    break;
                default:
                    this.postData.city_id_label = 'Нур-Султан(Астана) - Байконурский район'
            }

            console.log(this.postData)
        })
    },
}
</script>
 
<style scoped >
.cardd_author {
    text-align: center;
    padding: 0 !important;
}
.author__title {
    border-bottom: 1px solid #e9e9e9;
    padding: 15px;
    background-color: #f9f9f9;
}
.button__call {
    text-decoration: none;
    text-align: center;
    font-size: 19px !important;
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
.image__avatar {
    height: 150px;
    background-size: cover;
    background-position: center;
    width: 150px;
    margin: 0 auto;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-image: url(data:image/jpeg;base64,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);
}

.swiper-container {
    overflow: hidden;
}
.hd__ov {
    overflow: hidden;
}
@media screen and (max-width: 900px) {
    .img__sl {
        height: 400px !important;
    }
}
.img__sl {
    height: 600px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
@import "swiper.min.css";

.little__padding2 {
    padding-left: 11px;
}
.little__padding {
    padding-left: 17px;
}
.iconify {
    margin-top: -4px;
    transform: translateX(-3px);
    color: #acce12;
}
.cardd:first-child {
    margin-top: 19px;
}
.cardd {
    /*box-shadow: 0 0 14px rgb(0 0 0 / 3%)*/
    box-shadow: 0px 3px 10px -2px rgb(0 0 0 / 20%);

    margin-bottom: 19px;
    padding: 18px;
    background: #fff;
    border-radius: 10px;
}
.title {
    font-size: 19px;
    color: #acce12;
    font-weight: 600;
    margin-bottom: 15px;
}
.title__price {
    font-size: 19px;
}
.desc_heading {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 20px;
}

.desc_desc {
    font-size: 15px;
}

.title__price__exact {
    font-weight: 700;
}
.title__bread {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    color: #555;
    background: #f7f7f7;
    padding: 5px;
    padding-left: 12px;
    padding-right: 13px;
    border-radius: 5px;
    margin-bottom: 9px;
}
</style>