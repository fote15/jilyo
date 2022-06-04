<template>
  <div>
    
<div class="PersonalArea">
	<div class="container advertising"></div>
	<div class="container Personal">
		<div class="PersonalIconContainer">
			<div class="userIcon"></div>
			<div class="userText">
				<div class="userName">Пользователь</div>
				<div class="tariffs">Тарифы: Бесплатно</div>
				<div class="userDate">Дата присоединения: 01.01</div>
			</div>
		</div>
	</div>

	<div class="survey">
		<div class="question">
			<div class="questionTitleContainer">
				<div class="questionTitle">Откуда вы узнали про наш сайт?</div>
				<div class="questionIcon"></div>
			</div>
			<div class="answers">
			   	<p><input type="checkbox" name="" value="">Под телевидению</p>
			   	<p><input type="checkbox" name="" value="">По радио</p>
			   	<p><input type="checkbox" name="" value="">В интернете</p>
			   	<p><input type="checkbox" name="" value="">У знакомых</p>
			   	<p><input type="checkbox" name="" value="">Пригласили друзья</p>

				<button class="answer">Ответить</button>
			</div>
		</div>
		<div class="question">
			<div class="questionTitleContainer">
				<div class="questionTitle">Как Вам дизайн сайта?</div>
				<div class="questionIcon"></div>
			</div>
			<div class="answers">
				<p><input type="radio" name="rateDesign" value="">Отлично</p>
			   	<p><input type="radio" name="rateDesign" value="">Хорошо</p>
			   	<p><input type="radio" name="rateDesign" value="">Среднее</p>
			   	<p><input type="radio" name="rateDesign" value="">Нужны доработки</p>

			<button class="answer">Ответить</button>
			</div>
		</div>
	</div>

	<div class="card mt-4 mb-4">
		<h3 class="title__white"> Вы участвуете в конкурсе!</h3>
	</div>

</div>
  </div>
</template>

<style scoped>
.title__white{
	color: #fff;
	font-size: 18px;
}
.card{
	padding: 10px;
	background-color: #ACCE12;
}
.card__cabinet{
  background-color: white;
}


.Personal{
	display: flex;
	background: #ffffff;
	border-radius: 10px;
	padding: 20px;
	margin: 0 0 20px;
}

.PersonalIconContainer{
	display: flex;
	align-items: center;
}

.userIcon{
	min-width: 100px;
	min-height: 100px;
	background: url(userIco.png) center/contain no-repeat;
	border: 3px solid #A7BC41;
	border-radius: 50%;
}
.userText{
	margin: 0 0 0 20px;
}
.userName{
	font-size: 30px;
	margin: 0 0 5px;
}

.tariffs{
	color: #858585;
	font-size: 18px;
	margin: 0 0 10px;
}

.userDate{
	color: #858585;
}

.survey{
	display: flex;
}

@media only screen and (max-width:900px) {
	.survey{
	display: block!important;
}
.question{
	width:100%!important;
	margin: 0!important;
	margin-top: 10px!important;
}
}

.question:nth-child(odd){
	margin: 0 10px 0 0;
}

.question:nth-child(even){
	margin: 0 0 0 10px;
}

.question{
	width: 50%;
}
.questionTitleContainer{
	padding: 10px;
	background: #ffffff;
	border-radius: 10px;
	margin: 0 0 10px;
}

.questionTitle{
	font-size: 17px;
	font-weight: 800;
}

.answers{
	padding: 30px 15px;
	background: #ffffff;
	border-radius: 10px;
}

.answers p{
	font-size: 17px;
	margin: 0 0 15px;
}

.answers p input{
	margin: 0 10px 0 0;
}

.answer{
	font-size: 17px;
	padding: 5px 40px;
}


</style>