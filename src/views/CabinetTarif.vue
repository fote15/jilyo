<template>
	<div>
		<div class="realtorsContainer">
			<div class="realtorsTitle">Для риэлтора</div>
			<div class="price">
				4500.00т
				<span class="thin">/Ежемесячно</span>
			</div>
			<div class="conditions">
				<div class="condition">
					Лимит размещений:
					<span class="bold">60 шт</span>
				</div>
				<div class="condition">
					Срок объявлений:
					<span class="bold">30 дней</span>
				</div>
				<div class="condition">Топ в поиске и категории</div>
				<div class="condition">Публикация на главной странице разделе VIP</div>
				<div class="condition">Рекламировать в поиске и категориях</div>
			</div>
			<button class="realtorsUpdate">Обновить</button>
		</div>
	</div>
</template>

<style scoped>
.realtorsContainer {
	font-size: 1em !important;
	text-align: center;
	background: #fff;
	border-radius: 10px;
	padding: 20px 13px;
}

.realtorsTitle {
	color: #aecb21;
	font-size: 17px;
	margin: 0 0 15px;
}

.price {
	color: #ffffff;
	background: #aecb21;
	padding: 12px 0;
	font-size: 19px;
	border-radius: 7px;
	margin: 0 0 15px;
}

.thin {
	font-size: 10x;
}

.conditions {
	text-align: left;
}

.condition {
	font-size: 15px;
	margin: 0 0 20px 0;
	color: #636363;
}

.bold {
	font-weight: 800;
}

.realtorsUpdate {
	width: 100%;
	padding: 12px 0;
	background: #ffffff;
	border: 3px solid #aecb21;
	color: #aecb21;
	border-radius: 7px;
	font-size: 15px;
}
</style>