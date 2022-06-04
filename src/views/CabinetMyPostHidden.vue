<template>
	<div>
		<div class="posts">
			<div class="postsTitle">Скрытые</div>
			<div class="line"></div>
			<table class="postsTable">
				<tr class="tableHead">
					<th style="width:63%">Объявления</th>
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
					<td>{{x.status==1 ? 'На рассмотрении':"" }}{{x.status==2 ? 'Опубликован':"" }}{{x.status==3 ? 'Скрыт':"" }}</td>
					<td> <span @click="$router.push('/edit-post/'+x.id)" class="bg-warning ward">Редактировать</span>	</td>
				</tr>
			</table>
			<span v-if="emptrylabel" >тут пусто</span>
		</div>
	</div>
</template>

<script>
import postCardVue from '../components/PostCardListing.vue';
import axios from 'axios';
export default {
	components: {
		'PostCard': postCardVue,
		

	},
	data: () => ({
		postsData: [],
		emptrylabel: false
	}),
	mounted() {
		if (!this.$store.state.token) {
			this.$router.push('login')
		}
		axios.post('https://xn--e1abgm9f.kz/api/api/post-list-my-hidden',{}, { headers: { 'Authorization': `Token ${this.$store.state.token}` }})
			.then((e) => {
				this.postsData = e.data
				if(e.data.length<1){
					this.emptrylabel = true
				}

			})
	}
}

</script>

<style scoped>
.ward{
	padding: 5px;
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
table{
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