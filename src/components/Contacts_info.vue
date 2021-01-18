<template>
    <div class="col-6 bg-white rounded-lg m-2">
        <!-- Начало блока с контактной информацией -->
        <h1>Контактная информация</h1>
        <div class="container">
            <!-- Блок с информацией о имени пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Имя</label>
                </div>
                <div class="col-6">
                    <input class="form-control"
                           v-model="resume.firstname_resume" placeholder="Имя"
                    >
                </div>
            </div>
            <!-- Конец блока с информацией о имени пользователя -->
            <!-- Блок с информацией о фамилии пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Фамилия</label>
                </div>
                <div class="col-6">
                    <input class="form-control" v-model="resume.secondname_resume" placeholder="Фамилия">
                </div>
            </div>
            <!-- Конец блока с информацией о фамилии пользователя -->
            <!-- Блок с информацией о номере телефона пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Телефон</label>
                </div>
                <div class="col-6">
                    <input class="form-control" v-model="resume.phone_resume" placeholder="890231...">
                </div>
            </div>
            <!-- Конец блока с информацией о номере телефона пользователя -->
            <!-- Блок с информацией о Email пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Email</label>
                </div>
                <div class="col-6">
                    <input class="form-control" v-model="resume.email_resume" placeholder="@mail.ru">
                </div>
            </div>
            <!-- Конец блока с информацией о Email пользователя -->
            <!-- Блок с информацией о городе проживания пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Город проживания</label>
                </div>
                <div class="col-6">
                    <input type="text" class="form-control" v-model="resume.city_resume" v-on:input="getCityFromVk"
                           list="cities" placeholder="Город">
                    <datalist id="cities">
                        <option v-for="city in citiesVK" v-bind:key="city.title">{{city.title}}</option>
                    </datalist>
                </div>
            </div>
            <!-- Конец блока с информацией о городе проживания пользователя -->
        </div>
        <!-- Конец блока с контактной информацией -->
    </div>
</template>

<script>
    const jsonp = require('jsonp');
    export default {
        name: "Contacts_info",
        props:['resume', 'selected_citiId'],
        data(){
          return{
              citiesVK: null
          }
        },
        methods:{
            getCityFromVk: function(){
                // Для выпадающего списка ищем города
                jsonp('https://api.vk.com/method/database.getCities?country_id=1&offset=0&need_all=0&count=7&v=5.126&client_id=2628b5e12628b5e12628b5e1452643d6bb226282628b5e17b3ffd9518ad43020387ad38&q=' + this.getCity(), null, (err, data) => {
                    if (err) {
                        console.error(err.message);
                    } else {
                        this.citiesVK = data.response.items;
                    }
                });
            },
            getCity:function () {
                return this.resume.city_resume;
            }
        }
    }
</script>

<style scoped>

</style>
