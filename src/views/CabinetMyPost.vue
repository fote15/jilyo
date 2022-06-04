<template>
  <div>
    <div class="posts">
      <div class="postsTitle">Мои объявление</div>
      <div class="line"></div>
      <table class="postsTable">
        <tr class="tableHead" style="margin-bottom:30px">
          <th style="width:435px">Объявления</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
        <tr v-for="x in postsData">
          <td>
            <div>
              <PostCard
                :title="x.title"
                :price="x.price"
                :image="x.image_thumb"
                :description="x.description"
                :cityId="x.city_id"
                :id="x.id"
              />
            </div>
          </td>
          <td
            style="padding:5px; font-weight:600" 
          > <span class="  p-1" >{{x.status==1 ? 'На рассмотрении':"" }}{{x.status==2 ? 'Опубликован':"" }}{{x.status==3 ? 'Скрыт':"" }}{{x.status==4 ? 'Истекшие':"" }}</span></td>
          <td style="text-align:right;padding:5px">
            <span @click="$router.push('/edit-post/'+x.id)" class="bg-warning ward">Редактировать</span>
            <br />
            <br />
            <span v-if="x.status!=3" @click="hidePost(x.id)" class="bg-danger ward">Скрыть</span>
            <span v-if="x.status==3" @click="showPost(x.id)" class="bg-success2 ward">Опубликовать</span>
          </td>
        </tr>
      </table>
      <span v-if="emptrylabel">тут пусто</span>
    </div>
  </div>
</template>

<script>
import postCardVue from "../components/PostCardListing.vue";
import axios from "axios";
export default {
  components: {
    PostCard: postCardVue,
   
  },
  data: () => ({
    postsData: [],
	 emptrylabel: false	
  }),
  mounted() {
    
    if (!this.$store.state.token) {
      this.$router.push("login");
    }
    axios
      .post(
        "https://xn--e1abgm9f.kz/api/api/post-list-my",
        {},
        { headers: { Authorization: `Token `+this.$store.state.token } }
      )
      .then(e => {
        this.postsData = e.data;
        if (e.data.length < 1) {
          this.emptrylabel = true;
        }
      });
  },
  methods: {
    hidePost(e2) {
      axios
        .post(
          "https://xn--e1abgm9f.kz/api/api/post-hide-my",
          { postId: e2 },
          { headers: { Authorization: `Token ${this.$store.state.token}` } }
        )
        .then(e => {
          axios
            .post(
              "https://xn--e1abgm9f.kz/api/api/post-list-my",
              {},
              { headers: { Authorization: `Token ${this.$store.state.token}` } }
            )
            .then(e => {
              this.postsData = e.data;
              if (e.data.length < 1) {
                this.emptrylabel = true;
              }
            });
        });
    },
    showPost(e2) {
      axios
        .post(
          "https://xn--e1abgm9f.kz/api/api/post-show-my",
          { postId: e2 },
          { headers: { Authorization: `Token ${this.$store.state.token}` } }
        )
        .then(e => {
          axios
            .post(
              "https://xn--e1abgm9f.kz/api/api/post-list-my",
              {},
              { headers: { Authorization: `Token ${this.$store.state.token}` } }
            )
            .then(e => {
              this.postsData = e.data;
              if (e.data.length < 1) {
                this.emptrylabel = true;
              }
            });
        });
    }
  }
};
</script>

<style scoped>
.bg-success2 {
  background-color: #acce12;
}
.ward {
  padding: 5px;
  cursor: pointer;
}
.posts {
  background: #ffffff;
  padding: 20px 15px;
  border-radius: 10px;
}

.postImg {
  border-radius: 10px;
  background: #acce12;
  display: flex;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
}

.postImg img {
  width: 100px;
}
table {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
.postsTitle {
  font-size: 20px;
  margin: 0 0 20px 15px;
}

.line {
  width: 100%;
  height: 2px;
  background: #8c8c8c;
  margin: 0 0 20px;
}

.postsTable {
  width: 100%;
}

.tableHead {
  background: #acce12;
  margin: 0 0 20px;
  color: #ffffff;
}

tr {
  padding: 20px;
}

th {
  padding: 20px;
}

th:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

th:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>