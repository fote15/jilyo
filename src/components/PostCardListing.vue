<template>
  <div class="job-listing highlight">
    <div class="cl__row">
      <div class="cl-2 job-listing-company-logo">
        <div
          class="image__wrapper"
          v-bind:style="{ backgroundImage: 'url(https://xn--e1abgm9f.kz/api/media/' + image + ')' }"
        ></div>
      </div>
      <div class="cl-10">
        <div class="px-0">
          
          <router-link  :to="'/post/'+id">
            <h5 class="card-title pt-2" >
              {{ title }} 
              <span style="color:#8dab0f;">— {{price}} ₸</span>
            </h5>
          </router-link>

          <p class="card-text">
            
            {{ description.split(' ').slice(0, 8).join(' ') }}
           <router-link  :to="'/post/'+id"> <span  class="card-title__show__more">Читать далее...</span> </router-link>
          </p>
        </div>
      </div>
    </div>

    <div class="job-listing-footer with-icon">
      <ul>
        <li>
          <a >
            <Icon class="theme__color" icon="clarity:map-marker-solid" />
            {{ city_label }}  {{cityId}}
          </a>
        </li>
        <br />
        <li>
          <Icon class="theme__color" icon="carbon:time" /> Меньше месяца назад
        </li>
      </ul>
      <span class="fav-icon set-item-fav" data-item-id="70" data-userid data-action="setFavAd"></span>
    </div>
  </div>
</template>    
</footer>
</div>
</template>

<script>
import Modal1 from '@/components/Modal'
import axios from 'axios'
import { Icon } from '@iconify/vue2';

export default {
  name: "PostCard",
  components: {
    'Modale': Modal1,
    Icon
  },
  data: function () {
    return {
      ShoModal: false,
      city_label: ''

    }
  }
  ,
  beforeCreate() {

  },

  computed: {

  },
  props: {
    title: '',
    image: '',
    price: '',
    description: '',
    cityId: '',
    id: '',
  },
  mounted() {
    if(this.cityId ==='1'){
this.city_label = 'Нур-Султан(Астана) - Алматинский район';
    }
     if(this.cityId ==='2'){
this.city_label = 'Нур-Султан(Астана) - Сарыаркинский район';
    }

     if(this.cityId ==='3'){
this.city_label = 'Нур-Султан(Астана) - Есильский район';
    }

     if(this.cityId ==='4'){
this.city_label = 'Нур-Султан(Астана) - Байконурский район';
    }

  },
  methods: {
    goToPost() {
    }
  },
}
</script>

<style scoped>
@media (max-width: 979px) {
  .job-listing-footer {
    padding: 8px !important;
  }
  .image__wrapper {
    border-radius: 6px;
  }
  .job-listing-company-logo {
    display: block;
    padding-bottom: 20px;
    flex: 0 0 100% !important;
    height: 200px;
    width: 100% !important;
    object-fit: cover;
  }

  .cl__row {
    padding: 8px !important;
  }
}

.theme__color {
  color: #acce12;
  margin-top: -4px;
}
a {
  text-decoration: none;
}

.grid-layout .job-listing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px 30px 0;
  width: calc(100% * (1 / 2) - 30px);
}
.job-listing.highlight {
  background: rgb(246 248 222);
  border-color: rgb(183 206 100 / 61%);
  box-shadow: 0px 0px 15px -2px rgb(207 222 147);
}
.job-listing {
  display: block;
  border-radius: 6px;
  border: 1px solid #eee;
  margin-bottom: 30px;
  background-color: #fff;
  transition: 0.3s;
  position: relative;
  box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 3%);
}

.job-listing .job-listing-footer.with-icon {
  padding-right: 74px;
}

.job-listing-footer {
  flex-grow: 0;
  padding: 20px 30px;
}
.job-listing-footer {
  background-color: #ffffff;
  padding: 20px 35px;
  border-radius: 5px;
  position: relative;
  border-top: 1px dashed #d7d7d7;
}

.job-listing-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.job-listing-footer ul li {
  display: inline-block;
  font-size: 16px;
  margin-right: 14px;
  color: #777;
}

li {
  list-style-type: none;
}

.job-listing-company a,
.job-listing-footer a {
  color: #777;
}

.image__wrapper {
  height: 150px;
  background-position: center;
  background-size: cover;
}
.cl-2 {
  max-width: 100%;
  margin-right: 24px;
  top: 0;
  flex: 0 0 150px;
  width: 150px;
  height: 150px;
}
.cl-10 {
  flex: 1;
  padding-right: 20px;
}
.cl__row {
  background: rgb(246 248 222);
  border-color: rgb(183 206 100 / 61%);
  box-shadow: 0px 0px 15px -2px rgb(207 222 147);
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
.card2 {
  color: rgb(172 206 18);
  background: rgb(245 248 217 / 79%) !important;
  border-color: rgb(197 205 129) !important;
  box-shadow: 0px 0px 15px -2px rgb(0 0 0 / 14%);
}
.card-mini,
.card-text {
  color: #000;
  font-size: 15px;
  font-weight: 100;
}
img {
  vertical-align: top;
}
.icon__card__1 {
  font-size: 12px;
  transform: translateY(1px);
  color: #666;
}

.card-title {
  color: rgb(172 206 18);
  font-size: 20px;
  font-weight: 600;
}
.card-title__show__more {
  color: rgb(172 206 18);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}
.card-text {
  color: #000;
  font-size: 16px;
  line-height: 27px;
  font-weight: 100;
}
.rent__status {
  display: block;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: dashed 2px #c5cd81;
  color: #666;
}
</style>