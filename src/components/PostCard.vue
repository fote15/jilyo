<template>
  <div>
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
</template>    
</footer>
</div>
</template>

<script>
import Modal1 from '@/components/Modal'
import axios from 'axios'

export default {
  name: "PostCard",
  components: {
    'Modale': Modal1
  },
  data: function () {
    return {
      ShoModal: false

    }
  }
  ,
  beforeCreate() {

  },
  mounted() {
  },
  computed: {

  }
}
</script>

<style scoped>
.card {
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
.icon__card__1 {
  font-size: 12px;
  transform: translateY(1px);
  color: #666;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
}

.card-text {
  color: #000;
  font-size: 15px;
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