<template>
    <!-- Блок образования -->
    <div class="container education_block">
        <!-- Блок уровень образования -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Уровень</label>
            </div>
            <div class="col-6">
                <b-form-select v-model="education.level" :options="educationMain_options"></b-form-select>
            </div>
        </div>
        <!-- Конец блока уровень образования -->
        <!-- Блок учебное заведение -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Учебное заведение</label>
            </div>
            <div class="col-6">
                <input v-model="education.institution" class="form-control" list="institutions"
                       v-on:input="getUniversitiesFromVk" placeholder="Учебное заведение"/>
                <datalist id="institutions">
                    <option v-for="institution in institutionsVk" v-bind:key="institution.title">{{institution.title}}</option>
                </datalist>
            </div>
        </div>
        <!-- Конец блока учебное заведение -->
        <!-- Блок факультет -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Факультет</label>
            </div>
            <div class="col-6">
                <input v-model="education.faculty" class="form-control" placeholder="Факультет"/>
            </div>
        </div>
        <!-- Конец блока факультет -->
        <!-- Блок специализация -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Специализация</label>
            </div>
            <div class="col-6">
                <input v-model="education.specialization" class="form-control" placeholder="Специализация"/>
            </div>
        </div>
        <!-- Конец блока специализация -->
        <!-- Блок год окончания -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Год окончания</label>
            </div>
            <div class="col-6">
                <input v-model="education.yearEnd" class="form-control" placeholder="Год окончания" />
            </div>
        </div>
        <!-- Конец блока год окончания -->

        <!-- Кнопка для удаления образования, которая посылает родителю объект, который надо удалить -->
        <div class="row mt-2 mb-2">
            <div class="col">
                <button class="btn btn-danger" v-on:click="$emit('deleteEducation', education)">Удалить специальность</button>
            </div>
        </div>
    </div>
    <!-- Конец блока образования -->
</template>

<script>
    const jsonp = require('jsonp');
    export default {
        name: "Education",
        props:['education', 'selected_city'],
        data(){
            return{
                institutionsVk: null,
                selected_cityId: null,
                educationMain_options:[
                    { value: 'Среднее специальное', text: 'Среднее специальное' },
                    { value: 'Неоконченное высшее', text: 'Неоконченное высшее'},
                    { value: 'Высшее', text: 'Высшее'},
                    { value: 'Бакалавр', text: 'Бакалавр'},
                    { value: 'Магистр', text: 'Магистр'},
                    { value: 'Кандидат наук', text: 'Кандидат наук'},
                    { value: 'Доктор наук', text: 'Доктор наук'},
                ]
            }
        },
        methods:{
            getUniversitiesFromVk: function(){
                this.getCityId();
                // Для выпадающего списка ищем учереждения
                jsonp('https://api.vk.com/method/database.getUniversities?city_id='+ this.selected_cityId +
                    '&q=' + this.getInstitution() +
                    '&country_id=1&count=7&v=5.126&access_token=b573f51999b94a6ba2a0528df825c1f181e06b81b11881aa437ccbafed617102e265cf28851d48af7ac20', null, (err, data) => {
                    if (err) {
                        console.error(err.message);
                    } else {
                        this.institutionsVk = data.response.items;
                        console.log(this.institutionsVk);
                    }
                });
            },
            getCityId: function () {
                // Ищем id для выбранного города
                jsonp('https://api.vk.com/method/database.getCities?country_id=1&offset=0&need_all=0&count=1&v=5.126&client_id=2628b5e12628b5e12628b5e1452643d6bb226282628b5e17b3ffd9518ad43020387ad38&q=' + this.selected_city, null, (err, data) => {
                    if (err) {
                        console.error(err.message);
                    } else {
                        this.selected_cityId = data.response.items[0].id;
                    }
                });
            },
            getInstitution: function () {
                return this.education.institution;
            }
        }
    }
</script>

<style scoped>
    .education_block{
        border-bottom: 1px solid black;
    }
</style>
