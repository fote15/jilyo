<template>
  <div class="about">
   
	<div class="container-fluid">
		<div class="container">
			<div class="row">

				<div class="col-md-5">
					<div class="dashboard-box">
						<div class="dashboardm">
							<a  @click="$router.push('/draw')" style="border: 1px solid lightgray;">
								<Icon class="icon__faq" icon="icomoon-free:gift" />

								<span>Условия розыгрыша</span>
							</a>
							<a @click="$store.state.ShowModalAb1 = true" style="border-top: 1px solid lightgray; border-right: 1px solid lightgray; border-bottom: 1px solid lightgray;">
								<Icon class="icon__faq" icon="akar-icons:info-fill" />

								<span>Направление сайта</span>
							</a>
							<a  style="border-left: 1px solid lightgray; border-right: 1px solid lightgray; border-bottom: 1px solid lightgray;">
									<Icon class="icon__faq" icon="fa-solid:fire-alt" />
								<span>Платные услуги</span>
							</a>
							<a @click="$store.state.ShowModalAb2 = true" style="border-right: 1px solid lightgray; border-bottom: 1px solid lightgray;">
									<Icon class="icon__faq" icon="fa-solid:award" />
								<span>Ценовое предложение</span>
							</a>
							<a  style="border-left: 1px solid lightgray; border-right: 1px solid lightgray; border-bottom: 1px solid lightgray;">
									<Icon class="icon__faq" icon="fa:align-left" />
								<span>Термины</span>
							</a>
							<a  style="border-right: 1px solid lightgray; border-bottom: 1px solid lightgray;">
									<Icon class="icon__faq" icon="bx:bxs-book" />
								<span>Сотрудничество</span>
							</a>
							<a  style="border-left: 1px solid lightgray; border-right: 1px solid lightgray; border-bottom: 1px solid lightgray;">
									<Icon class="icon__faq" icon="fa:sitemap" />
								<span>Карта сайта</span>
							</a>
							<a  style="border-right: 1px solid lightgray; border-bottom: 1px solid lightgray;">
									<Icon class="icon__faq" icon="fa-regular:life-ring" />
								<span>Инструкции</span>
							</a>
						</div>
					</div>
				</div>

				<div class="col-md-7">
					<div class="carusel">
          
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
              
              </div>

					<div class="dashboard-box contacts">
						<div class="title">НАШИ КОНТАКТЫ</div>
						<div class="row">
							<div class="col-md-6 contacts_col">
								<a href="tel:+77071615510"><span>Позвонить</span></a>
								<a href="/contact"><span>Написать</span></a>
							</div>
							<div class="col-md-6 contacts_col">
								<a href="tel:+77071615510"><span>WhatsApp</span></a>
								<a href="#"><span>Instagram</span></a>
							</div>
						</div>
					</div>
					<div class="dashboard-box requisites">
						<div class="title">НАШИ РЕКВИЗИТЫ</div>
						<div class="row">
							<div class="col-md-6 requisites_col">
								<p><b>БИН</b> 190540017168</p>
								<p>KZ279470398921061302</p>
								<p><b>Адрес</b>г Нур-Султан, район Алматы, улица Кенен Азирбаев, дом 6/2, кв. 26</p>
							</div>
							<div class="col-md-6 requisites_col">
								<p><b>БИК БАНКА</b> ALFAKZKA</p>
								<p><b>БИК</b> 941240000341</p>
								<img style="width:122px" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Alfa-Bank.svg">
							</div>
							<div class="col-md-12 requisites_col">
								<hr style="margin:8px 0; border-bottom: 1px solid #000000;background: #e7e7e7;height: 1px;">
								<span style="color: #7f7f7f;font-size: 13px;">2022 © http://жилье.kz</span>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
  </div>
</template>
<script>

import { Icon } from '@iconify/vue2';
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  components: {
   Swiper,
    SwiperSlide,
    Icon,
  },
  data: () => ({
    swiperOption: {
        spaceBetween: 25,
        slidesPerView: 3,
        pagination: {
          el: ".swiper-pagination",
        },

         breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    998: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }


      },
  }),
  methods: {
  },
  mounted() {
   
  }
}
</script>
<style scoped>
.slider__img {
  border-radius: 7px;
  max-width: 100%;
}
.requisites{
  margin-bottom: 40px!important;
}
  .icon__faq{
    font-size: 50px!important;
    color:#A8B71E
  }
	.container-fluid{

		background: #F8F8F8;
	}
	.container{
		/*padding-top: 25px;*/
	}
	.dashboardm{
		display: flex;
		flex-wrap: wrap;
		font-size: 13px;
	
	}

	.dashboardm a{
		padding:10px;
		text-align: center;
		display: flex;
		max-width: 50%;
		width:100%;
		height: 88px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: #4e4e4e;
		background: #ffffff;
	}

	.dashboardm a span{
		line-height: 14px;
		padding: 12px 0 0;
	}

	.dashboard-box{
		margin: 17px 0 0 0;
	}
	.title{
		font-size: 12px;
		color:#666666;
	}

	.contacts a{
		padding: 9px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		text-decoration: none;
		width:100%;
		font-size: 17px;
		color: #5a5a5a;
		background: #ffffff;
		box-shadow:0 0px 6px 0px rgb(0 0 0 / 4%);
		transition: .3s;
		margin: 0 0 9px;
		height: 42px;
		border-radius: 5px;
	}
	.contacts a span{
		padding: 0 0 0 11px;
	}

	.contacts a:hover{
		background: #A8B71E;
		color:#ffffff;
	}
	.contacts_col{
		margin: 8px 0 0 0;
		display: flex;
		flex-direction: column;

	}


	.requisites_col p{
		font-size: 16px;
		color:#666666;
		line-height: 26px;
	}


	.carusel{
    margin-top: 20px;
		text-align: center;
		font-size: 64px;
	}

</style>