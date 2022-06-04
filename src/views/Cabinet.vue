<template>
  <div class="about">
    <div class="container pt-4">
      <div class="row">
        <div class="col-lg-3 mt-2">
          <div class="sidebarich">
            <div class="slidee__title">Моя недвижимость</div>
            <router-link to="/cabinet/me">
              <div class="slidee">
                <span class="iconify" data-icon="akar-icons:grid"></span> Личный кабинет
              </div>
            </router-link>
            <router-link to="/cabinet/my-posts-me">
              <div class="slidee">
                <span class="iconify" data-icon="ant-design:user-outlined"></span> Профиль
              </div>
            </router-link>

            <router-link to="/cabinet/tariffs">
              <div class="slidee">
                <span class="iconify" data-icon="bx:bx-gift"></span> Тарифы
              </div>
            </router-link>

            <div class="slidee__title">Мои объявления</div>
            <div class="slidee">
              <router-link to="/cabinet/my-posts">
                <span class="iconify" data-icon="feather:briefcase"></span> Мои объявления
              </router-link>
            </div>
            <div class="slidee">
              <span class="iconify" data-icon="bx:bx-heart"></span> Мои сохраненные
            </div>
            <div class="slidee">
              <router-link to="/cabinet/my-posts-await">
                <span class="iconify" data-icon="ant-design:clock-circle-outlined"></span> Ожидающие
              </router-link>
            </div>
            <div class="slidee">
              <router-link to="/cabinet/my-posts-hidden">
                <span class="iconify" data-icon="bx:bx-hide"></span> Скрытые
              </router-link>
            </div>
            <div class="slidee">
              <router-link to="/cabinet/my-posts-expired">
                <span class="iconify" data-icon="feather:alert-octagon"></span> Истекшие
              </router-link>
            </div>
            <!-- <div class="slidee">
              <span class="iconify" data-icon="feather:rotate-cw"></span> Повторно отправленные
            </div>-->
            
              <div class="slidee__title">Мой аккаунт</div>
           
            <div class="slidee">
              <router-link to="/cabinet/settings">
              <span class="iconify" data-icon="feather:settings"></span> Настройка аккаунта
               </router-link>
            </div>
            <div class="slidee">
              <span class="iconify" data-icon="feather:log-out"></span>
              <a href="#" style="color:#000" @click="logout">Выйти</a>
              <router-link ref="redirect" to="/login"></router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-9 mt-2">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<script>
import { VueTelInput } from "vue-tel-input";

export default {
  name: "Cabinet",
  components: {
    VueTelInput
  },
  data: () => ({
    myInputModel: "+7",
    mask: "+7(###) ##-##-###"
  }),
  methods: {
    input(ev) {
      console.log(this.mask);
    },
    logout() {
      localStorage.clear();
      this.$store.state.token = null;
      this.$store.state.name = null;
      this.$refs.redirect.$el.click()

      this.$router.push("/login");
    }
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://code.iconify.design/2/2.1.0/iconify.min.js"
    );
    document.head.appendChild(recaptchaScript);

    if (!this.$store.state.token) {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.router-link-active {
  color: #acce12;
}
a {
  text-decoration: none;
  color: #707070;
}
.iconify {
  font-size: 18px;
  margin-top: -5px;
  margin-right: 5px;
}
.sidebarich {
  font-size: 14px;
  color: #707070;
  border-radius: 8px;
  padding: 10px 0;
  background-color: white;
}
.slidee {
  padding: 8px 30px;
}
.slidee__title {
  color: rgb(172 206 18);
  padding: 8px 30px;
}

.about {
  background-color: rgb(248 248 248);
}
</style>